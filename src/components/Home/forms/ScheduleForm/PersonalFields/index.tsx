import * as React from "react";
import { Label } from "@components/ui/label";
import { Input } from "@components/ui/input";

type Props = {
  errors: Record<string, string | undefined>;
  handleChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  setFieldError: (f: any, msg?: string) => void;
};

export const PersonalFields: React.FC<Props> = ({ errors, handleChange, setFieldError }) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="nombre">Nombre</Label>
        <Input
          id="nombre"
          name="nombre"
          placeholder="Daniel"
          onChange={(ev) => { setFieldError("nombre"); handleChange(ev); }}
          aria-invalid={!!errors.nombre}
          className="mt-2"
        />
        {errors.nombre && <p className="mt-1 text-xs text-rose-600">{errors.nombre}</p>}
      </div>

      <div>
        <Label htmlFor="apellido">Apellido</Label>
        <Input
          id="apellido"
          name="apellido"
          placeholder="Diaz"
          onChange={(ev) => { setFieldError("apellido"); handleChange(ev); }}
          aria-invalid={!!errors.apellido}
          className="mt-2"
        />
        {errors.apellido && <p className="mt-1 text-xs text-rose-600">{errors.apellido}</p>}
      </div>

      <div>
        <Label htmlFor="telefono">Teléfono</Label>
        <Input
          id="telefono"
          name="telefono"
          placeholder="+549..."
          onChange={(ev) => { setFieldError("telefono"); handleChange(ev); }}
          aria-invalid={!!errors.telefono}
          className="mt-2"
        />
        {errors.telefono && <p className="mt-1 text-xs text-rose-600">{errors.telefono}</p>}
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="tu@email.aquí"
          onChange={(ev) => { setFieldError("email"); handleChange(ev); }}
          aria-invalid={!!errors.email}
          className="mt-2"
        />
        {errors.email && <p className="mt-1 text-xs text-rose-600">{errors.email}</p>}
      </div>
    </div>
  );
};
