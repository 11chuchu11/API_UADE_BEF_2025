import { useEffect, useMemo, useState } from "react";
import { format, isBefore, isSameDay, isWeekend, setHours, setMinutes, startOfDay } from "date-fns";
import { useForm } from "@/Hooks/useForm";
import { useData } from "@/Hooks/useData";
import type { Appointment } from "@/components/Admin/Dashboard/types";

import {
  START_H, START_M, END_H, END_M,
  slotsBetween, roundUpToNextHalfHour, clampToBusinessStart, nextBusinessDay,
  labelToMinutes, parseTimeTo24h, toMinutes
} from "@/lib/time";

import { isValidEmail, isValidName, isValidPhone } from "@/lib/validators";

type Errors = Partial<Record<
  "nombre" | "apellido" | "telefono" | "email" | "insurance" | "date" | "time",
  string
>>;

export function useScheduleForm(onSuccess?: () => void) {
  const { handleChange, formData } = useForm({ debounceTime: 300 });
  const { data, updateData } = useData();

  const [date, setDate] = useState<Date | undefined>(nextBusinessDay());
  const [insurance, setInsurance] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  const activeInsurances = useMemo(
    () => (data?.insurances ?? []).filter((i: any) => i?.active),
    [data?.insurances]
  );

  useEffect(() => {
    if (!insurance) return;
    const names = activeInsurances.map((i: any) => i.name);
    if (!names.includes(insurance)) setInsurance("");
  }, [activeInsurances, insurance]);

  const bookedSet = useMemo(() => {
    if (!date) return new Set<number>();
    const selected = format(date, "dd/MM/yy");
    const appts: Appointment[] = (data?.appointments as Appointment[]) ?? [];
    const sameDay = appts.filter((a) => a.date === selected);
    return new Set<number>(sameDay.map((a) => labelToMinutes(a.time)));
  }, [data?.appointments, date]);

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

    return list.filter(({ h, m }) => !bookedSet.has(toMinutes(h, m)));
  }, [date, bookedSet]);

  const noSlotsForSelectedDay = !!date && availableSlots.length === 0;

  const setFieldError = (f: keyof Errors, msg?: string) =>
    setErrors((e) => ({ ...e, [f]: msg }));

  useEffect(() => {
    if (!time) return;
    const stillExists = availableSlots.some((s) => s.label === time);
    if (!stillExists) {
      setTime("");
      setFieldError("time", "Elegí un horario disponible.");
    }
  }, [date, availableSlots.length]);

  function validate(): boolean {
    const e: Errors = {};

    if (!isValidName(formData?.nombre))
      e.nombre = "Ingresá un nombre válido (solo letras, mínimo 2).";
    if (!isValidName(formData?.apellido))
      e.apellido = "Ingresá un apellido válido (solo letras, mínimo 2).";
    if (!isValidPhone(formData?.telefono))
      e.telefono = "Ingresá un teléfono válido (+ opcional y 8+ dígitos).";
    if (!isValidEmail(formData?.email))
      e.email = "Ingresá un email válido.";

    if (!insurance) e.insurance = "Seleccioná tu obra social.";

    if (!date) e.date = "Seleccioná una fecha.";
    else if (isWeekend(date) || isBefore(startOfDay(date), startOfDay(new Date())))
      e.date = "La fecha debe ser un día hábil y no puede ser pasada.";

    if (!time) e.time = "Seleccioná un horario.";
    else {
      const { h, m } = parseTimeTo24h(time);
      const withinStart = h > START_H || (h === START_H && m >= START_M);
      const withinEnd = h < END_H || (h === END_H && m <= END_M);
      if (!withinStart || !withinEnd) {
        e.time = "El horario debe estar entre 09:30 y 18:00.";
      } else if (date && bookedSet.has(toMinutes(h, m))) {
        e.time = "Ese horario ya está reservado para ese día.";
      }
    }

    if (noSlotsForSelectedDay) e.time = "No hay turnos disponibles para ese día.";

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    if (!date || !time) return;

    setSubmitting(true);

    const fullName = [formData?.nombre?.trim(), formData?.apellido?.trim()]
      .filter(Boolean)
      .join(" ");

    const appt: Appointment = {
      id: crypto.randomUUID(),
      patient: fullName || "Paciente",
      phone: (formData?.telefono || "").trim(),
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

  return {
    date, setDate,
    insurance, setInsurance,
    time, setTime,
    errors, setFieldError,
    submitting,
    activeInsurances,
    availableSlots,
    noSlotsForSelectedDay,
    handleChange,
    onSubmit,
  };
}
