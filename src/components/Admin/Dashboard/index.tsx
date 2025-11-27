import * as React from "react";
import { Card } from "@components/ui/card";
import { getTextsAdmin } from "../text";
import type { Appointment, AppointmentActions} from "./types";
import { AppointmentRow } from "./AppointmentRow";
import { cn } from "@/lib/utils";

type Props = {
  items: Appointment[];
  className?: string;
} & AppointmentActions;

export const Dashboard: React.FC<Props> = ({ items, className, onConfirm, onCancel }) => {
  const t = getTextsAdmin();

  return (
    <section className={cn("mx-auto max-w-6xl px-6 lg:px-8", className)}>
      <div className="mb-6 mt-10">
        <h2 className="text-4xl font-extrabold tracking-tight text-foreground">{t.dahsboard.title}</h2>
        <p className="mt-2 text-sm text-primary font-bold">{t.dahsboard.subtitle}</p>
      </div>

      <Card className="rounded-2xl bg-background ring-1 ring-violet-200/60 shadow-sm">
        <div className="px-5 py-4">
          <p className="text-md font-semibold text-primary/100">{t.dahsboard.tableTitle}</p>
        </div>

        <div className="px-5 pb-2 divide-y divide-secondary overflow-y-scroll max-h-[400px]">
          {items.map((a) => (
            <AppointmentRow key={a.id} appt={a} onConfirm={onConfirm} onCancel={onCancel}/>
          ))}
        </div>
      </Card>
    </section>
  );
};
