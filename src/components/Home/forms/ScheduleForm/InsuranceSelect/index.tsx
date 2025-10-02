import * as React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/ui/select";
import { Label } from "@components/ui/label";

type Insurance = { id: string; name: string; description?: string; active?: boolean };

type Props = {
  value: string;
  onChange(v: string): void;
  error?: string;
  items: Insurance[];
};

export const InsuranceSelect: React.FC<Props> = ({ value, onChange, error, items }) => {
  const disabled = items.length === 0;

  return (
    <div>
      <Label>Selecciona tu Obra Social</Label>
      <div className="mt-2">
        <Select value={value} onValueChange={onChange} disabled={disabled}>
          <SelectTrigger className="h-10 w-full rounded-full px-4" aria-invalid={!!error}>
            <SelectValue placeholder={disabled ? "No hay obras sociales activas" : "Seleccionar"} />
          </SelectTrigger>
          <SelectContent>
            {items.map((i) => (
              <SelectItem key={i.id} value={i.name}>
                {i.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {error && <p className="mt-1 text-xs text-rose-600">{error}</p>}
    </div>
  );
};
