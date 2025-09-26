import * as React from "react";
import { Card } from "@components/ui/card";
import { getTextsAdmin } from "../text";
import type { Appointment } from "./types";
import { AppointmentRow } from "./AppointmentRow";
import { cn } from "@/lib/utils";

type Props = {
  items: Appointment[];
  className?: string;
};

export const Dashboard: React.FC<Props> = ({ items, className }) => {
  const t = getTextsAdmin();

  return (
    <section className={cn("mx-auto max-w-6xl px-6 lg:px-8", className)}>
      <div className="mb-6 mt-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">{t.dahsboard.title}</h1>
        <p className="mt-2 text-sm text-primary font-bold">{t.dahsboard.subtitle}</p>
      </div>

      <Card className="rounded-2xl bg-background ring-1 ring-violet-200/60 shadow-sm">
        <div className="px-5 py-4">
          <p className="text-md font-semibold text-primary/100">{t.dahsboard.tableTitle}</p>
        </div>

        <div className="px-5 pb-2 divide-y divide-secondary">
          {items.map((a) => (
            <AppointmentRow key={a.id} appt={a} />
          ))}
        </div>
      </Card>
    </section>
  );
};
