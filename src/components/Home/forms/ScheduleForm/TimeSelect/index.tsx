import * as React from "react";
import { Label } from "@components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select";

type Slot = { h: number; m: number; label: string };

type Props = {
  value: string;
  onChange(v: string): void;
  options: Slot[];
  disabled?: boolean;
  error?: string;
};

export const TimeSelect: React.FC<Props> = ({ value, onChange, options, disabled, error }) => {
  return (
    <div className="mt-4">
      <Label>Hora de Reserva</Label>
      <div className="mt-2">
        <Select value={value} onValueChange={onChange} disabled={disabled}>
          <SelectTrigger className="h-10 w-full rounded-full" aria-invalid={!!error}>
            <SelectValue placeholder={disabled ? "Sin turnos ese día" : "Seleccionar"} />
          </SelectTrigger>
          <SelectContent align="start">
            {options.map((s) => (
              <SelectItem key={`${s.h}-${s.m}`} value={s.label}>
                {s.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {error && <p className="mt-1 text-xs text-rose-600">{error}</p>}
    </div>
  );
};
