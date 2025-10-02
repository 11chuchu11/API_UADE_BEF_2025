import * as React from "react";
import { useState } from "react";
import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";
import { InsuranceBadge } from "../InsuranceBadge";
import type { Insurance } from "../types";

type Props = {
  item: Insurance;
  onToggle(item: Insurance): void;
  onDelete(item: Insurance): void;
  onSave(item: Insurance): void;
};

export const InsuranceRow: React.FC<Props> = ({ item, onToggle, onDelete, onSave }) => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(item.name);
  const [desc, setDesc] = useState(item.description ?? "");

  const cancelEdit = () => {
    setEditing(false);
    setName(item.name);
    setDesc(item.description ?? "");
  };

  return (
    <div className="py-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
      <div className="min-w-0">
        {editing ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nombre (p. ej. OSDE)"
            />
            <Input
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Descripción (opcional)"
            />
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 min-w-0">
              <p className="font-semibold text-foreground truncate">{item.name}</p>
              <InsuranceBadge active={!!item.active} />
            </div>
            {item.description ? (
              <p className="text-sm text-muted-foreground mt-1 truncate">{item.description}</p>
            ) : null}
          </>
        )}
      </div>

      <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:justify-end">
        {editing ? (
          <>
            <Button
              size="sm"
              variant="brand"
              onClick={() => {
                onSave({ ...item, name: name.trim(), description: desc.trim() || undefined });
                setEditing(false);
              }}
            >
              Guardar
            </Button>
            <Button size="sm" variant="brandOutline" onClick={cancelEdit}>
              Cancelar
            </Button>
          </>
        ) : (
          <>
            <Button
              size="sm"
              variant="brandOutline"
              onClick={() => onToggle(item)}
              className="whitespace-nowrap"
            >
              {item.active ? "Desactivar" : "Activar"}
            </Button>
            <Button size="sm" variant="default" onClick={() => setEditing(true)}>
              Editar
            </Button>
            <Button size="sm" variant="destructive" onClick={() => onDelete(item)}>
              Borrar
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
