import * as React from "react";
import { useMemo, useState } from "react";
import {
    addDays,
    format,
    isBefore,
    isSameDay,
    isWeekend,
    setHours,
    setMinutes,
    startOfDay,
} from "date-fns";

// hooks propios
import { useForm } from "@/Hooks/useForm";
import { useData } from "@/Hooks/useData";

// ui
import { Label } from "@components/ui/label";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { Card } from "@components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@components/ui/select";
import { Calendar } from "@components/ui/calendar";

import type { Appointment } from "@components/Admin/Dashboard/types";

// ========= helpers/const =========
const EMAIL_RX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const NAME_RX = /^[A-Za-zÀ-ÿ\u00f1\u00d1 '’-]{2,}$/;
const PHONE_RX = /^\+?\d{8,}$/;
const START_H = 9;
const START_M = 30;
const END_H = 18;
const END_M = 0;

type Errors = Partial<Record<
    "nombre" | "apellido" | "telefono" | "email" | "insurance" | "date" | "time",
    string
>>;

function toLabel(h: number, m: number) {
    const d = setMinutes(setHours(new Date(), h), m);
    return format(d, "h:mm a");
}

function* slotsBetween(
    startH: number,
    startM: number,
    endH: number,
    endM: number,
    stepMinutes = 30
) {
    let h = startH, m = startM;
    while (h < endH || (h === endH && m <= endM)) {
        yield { h, m, label: toLabel(h, m) };
        m += stepMinutes;
        if (m >= 60) { h += Math.floor(m / 60); m = m % 60; }
    }
}

function roundUpToNextHalfHour(d: Date) {
    let mins = d.getMinutes();
    let add = 0;
    if (mins === 0) add = 30;
    else if (mins <= 30) add = 30 - mins;
    else add = 60 - mins;
    return new Date(d.getTime() + add * 60 * 1000);
}

function clampToBusinessStart(d: Date) {
    const start = setMinutes(setHours(new Date(), START_H), START_M);
    return isBefore(d, start) ? start : d;
}

function nextBusinessDay(d = new Date()) {
    let cur = startOfDay(d);
    while (isWeekend(cur) || isBefore(cur, startOfDay(new Date()))) {
        cur = addDays(cur, 1);
    }
    return cur;
}

function parseTimeTo24h(timeLabel: string) {
    const [h12, mm, ap] = timeLabel.replace(" ", ":").split(":");
    const h = (Number(h12) % 12) + (ap?.toUpperCase() === "PM" ? 12 : 0);
    const m = Number(mm);
    return { h, m };
}

// ========= componente =========
type Props = {
    onCancel?: () => void;
    onSuccess?: () => void;
    showCancel?: boolean;
};

export function ScheduleForm({ onCancel, onSuccess }: Props) {
    const { handleChange, formData } = useForm({ debounceTime: 300 });
    const { data, updateData } = useData();

    const [date, setDate] = useState<Date | undefined>(nextBusinessDay());
    const [insurance, setInsurance] = useState<string>(""); // requerido
    const [time, setTime] = useState<string>("");           // requerido
    const [errors, setErrors] = useState<Errors>({});
    const [submitting, setSubmitting] = useState(false);

    const availableSlots = useMemo(() => {
        let list = Array.from(slotsBetween(START_H, START_M, END_H, END_M, 30));

        if (date && isSameDay(date, new Date())) {
            let min = roundUpToNextHalfHour(new Date());
            min = clampToBusinessStart(min);

            list = list.filter(({ h, m }) => {
                const slotDate = setMinutes(setHours(new Date(), h), m);
                return !isBefore(slotDate, min);
            });
        }
        return list;
    }, [date]);

    const noSlotsToday = date && availableSlots.length === 0;

    const setFieldError = (f: keyof Errors, msg?: string) =>
        setErrors((e) => ({ ...e, [f]: msg }));

    function validate(): boolean {
        const e: Errors = {};

        if (!formData.nombre?.trim() || !NAME_RX.test(formData.nombre.trim()))
            e.nombre = "Ingresá un nombre válido (solo letras, mínimo 2).";
        if (!formData.apellido?.trim() || !NAME_RX.test(formData.apellido.trim()))
            e.apellido = "Ingresá un apellido válido (solo letras, mínimo 2).";

        // teléfono
        if (!formData.telefono?.trim() || !PHONE_RX.test(formData.telefono.trim()))
            e.telefono = "Ingresá un teléfono válido (+ opcional y 8+ dígitos).";

        // email
        if (!formData.email?.trim() || !EMAIL_RX.test(formData.email.trim()))
            e.email = "Ingresá un email válido.";

        // obra social
        if (!insurance) e.insurance = "Seleccioná tu obra social.";

        // fecha
        if (!date) e.date = "Seleccioná una fecha.";
        else if (isWeekend(date) || isBefore(startOfDay(date), startOfDay(new Date())))
            e.date = "La fecha debe ser un día hábil y no puede ser pasada.";

        // hora
        if (!time) e.time = "Seleccioná un horario.";
        else {
            const { h, m } = parseTimeTo24h(time);
            const withinStart = h > START_H || (h === START_H && m >= START_M);
            const withinEnd = h < END_H || (h === END_H && m <= END_M);
            if (!withinStart || !withinEnd)
                e.time = "El horario debe estar entre 09:30 y 18:00.";
        }

        if (noSlotsToday) e.time = "Hoy ya no hay turnos disponibles.";

        setErrors(e);
        return Object.keys(e).length === 0;
    }

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!validate()) return;
        if (!date || !time) return;

        setSubmitting(true);

        const fullName = [formData.nombre?.trim(), formData.apellido?.trim()]
            .filter(Boolean)
            .join(" ");

        const appt: Appointment = {
            id: crypto.randomUUID(),
            patient: fullName || "Paciente",
            phone: (formData.telefono || "").trim(),
            insurance,
            date: format(date, "dd/MM/yy"),
            time,
            status: "requested",
        };

        const prev = (data?.appointments as Appointment[]) ?? [];
        updateData({ appointments: [...prev, appt] });

        setSubmitting(false);
        onSuccess?.();
    }

    return (
        <form
            onSubmit={onSubmit}
            className="
            grid gap-6
            md:[grid-template-columns:1.5fr_1fr]
            items-stretch
            content-start
          "
        >
            {/* Columna izquierda: datos */}
            <Card className="h-full rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm">
                <div className="space-y-4">
                    <div>
                        <Label htmlFor="nombre">Nombre</Label>
                        <Input id="nombre" name="nombre" placeholder="Daniel"
                            onChange={(ev) => { setFieldError("nombre"); handleChange(ev); }}
                            aria-invalid={!!errors.nombre} className="mt-2" />
                        {errors.nombre && <p className="mt-1 text-xs text-rose-600">{errors.nombre}</p>}
                    </div>

                    <div>
                        <Label htmlFor="apellido">Apellido</Label>
                        <Input id="apellido" name="apellido" placeholder="Diaz"
                            onChange={(ev) => { setFieldError("apellido"); handleChange(ev); }}
                            aria-invalid={!!errors.apellido} className="mt-2" />
                        {errors.apellido && <p className="mt-1 text-xs text-rose-600">{errors.apellido}</p>}
                    </div>

                    <div>
                        <Label htmlFor="telefono">Teléfono</Label>
                        <Input id="telefono" name="telefono" placeholder="+549..."
                            onChange={(ev) => { setFieldError("telefono"); handleChange(ev); }}
                            aria-invalid={!!errors.telefono} className="mt-2" />
                        {errors.telefono && <p className="mt-1 text-xs text-rose-600">{errors.telefono}</p>}
                    </div>

                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" placeholder="tu@email.aquí"
                            onChange={(ev) => { setFieldError("email"); handleChange(ev); }}
                            aria-invalid={!!errors.email} className="mt-2" />
                        {errors.email && <p className="mt-1 text-xs text-rose-600">{errors.email}</p>}
                    </div>

                    <div>
                        <Label>Selecciona tu Obra Social</Label>
                        <div className="mt-2">
                            <Select value={insurance} onValueChange={(v) => { setInsurance(v); setFieldError("insurance"); }}>
                                <SelectTrigger className="h-10 w-full rounded-full px-4" aria-invalid={!!errors.insurance}>
                                    <SelectValue placeholder="Seleccionar" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="PAMI">PAMI</SelectItem>
                                    <SelectItem value="Atilra">Atilra</SelectItem>
                                    <SelectItem value="Educar">Educar</SelectItem>
                                    <SelectItem value="Particular">Particular</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        {errors.insurance && <p className="mt-1 text-xs text-rose-600">{errors.insurance}</p>}
                    </div>
                </div>
            </Card>

            {/* Columna derecha: calendario + hora */}
            <Card className="h-full rounded-2xl p-4 sm:p-5 md:p-6 shadow-sm">
                <div className="flex h-full flex-col">
                    <div className="w-full">
                        <div className="w-full flex justify-center">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={(d) => { setDate(d); setFieldError("date"); }}
                                showOutsideDays
                                fixedWeeks
                                // El wrapper ocupa todo el ancho de la card
                                className="w-full rounded-md max-w-["

                                // Sobrescribimos TODAS las clases que limitan ancho/alto
                                classNames={{
                                    // el contenedor de meses ocupa todo el ancho
                                    months: "w-full flex flex-col",
                                    month: "w-full space-y-3",

                                    // título + nav (flechas) en columna y centrados; nav debajo
                                    caption: "flex flex-col items-center gap-2 pt-1",
                                    caption_label: "order-1 text-sm font-medium",
                                    nav: "order-2 mt-2 flex items-center justify-center gap-2",
                                    nav_button: "h-7 w-7 rounded-md hover:bg-accent",

                                    // tabla full width
                                    table: "w-full border-collapse",
                                    // encabezado con 7 columnas iguales
                                    head_row: "grid grid-cols-7 w-full",
                                    // SIN w-9: que se estire
                                    head_cell: "text-center text-muted-foreground font-normal text-xs",

                                    // filas con 7 columnas que rellenan el ancho
                                    row: "grid grid-cols-7 w-full gap-y-1",

                                    // cada celda rellena su columna
                                    cell: "relative p-0 w-full",
                                    // el botón/día ocupa todo el ancho y mantiene cuadrado con aspect-square
                                    day:
                                        "w-full aspect-square flex items-center justify-center rounded-md aria-selected:opacity-100",
                                    day_selected:
                                        "bg-primary text-primary-foreground hover:bg-primary focus:bg-primary",
                                    day_today: "ring-1 ring-primary/40",
                                    day_outside: "text-muted-foreground opacity-40",
                                    day_disabled: "opacity-40",
                                }}

                                disabled={(day) =>
                                    isWeekend(day) || isBefore(startOfDay(day), startOfDay(new Date()))
                                }
                            />
                        </div>
                    </div>

                    {errors.date && <p className="mt-2 text-xs text-rose-600">{errors.date}</p>}

                    <div className="mt-4">
                        <Label>Hora de Reserva</Label>
                        <div className="mt-2">
                            <Select value={time} onValueChange={(v) => { setTime(v); setFieldError("time"); }} disabled={noSlotsToday}>
                                <SelectTrigger className="h-10 w-full rounded-full" aria-invalid={!!errors.time}>
                                    <SelectValue placeholder={noSlotsToday ? "Sin turnos hoy" : "Seleccionar"} />
                                </SelectTrigger>
                                <SelectContent align="start">
                                    {availableSlots.map((s) => (
                                        <SelectItem key={`${s.h}-${s.m}`} value={s.label}>{s.label}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        {errors.time && <p className="mt-1 text-xs text-rose-600">{errors.time}</p>}
                    </div>
                </div>
            </Card>

            {/* Acciones */}
            <div className="md:col-span-2 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                {onCancel && (
                    <Button type="button" variant="brandOutline" size="pill" className="uppercase tracking-wide w-full sm:w-auto" onClick={onCancel}>
                        Cancelar
                    </Button>
                )}
                <Button type="submit" variant="brand" size="pill" disabled={submitting || noSlotsToday} className="uppercase tracking-wide w-full sm:w-auto">
                    Solicitar Reserva
                </Button>
            </div>
        </form>
    );
}