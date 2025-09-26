import * as React from "react";
import type { Appointment } from "../types";
import { StatusBadge } from "../StatusBadge";

type Props = { appt: Appointment };

export const AppointmentRow: React.FC<Props> = ({ appt }) => {
    return (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto] md:items-center py-5">
            <div>
                <p className="text-[15px] text-foreground font-medium">
                    {appt.patient} <span className="text-foreground">- {appt.phone}</span>{" "}
                    <span className="text-foreground">Obra Social {appt.insurance}</span>
                </p>
                <p className="mt-1 text-sm text-primary">
                    Cita para el día <span className="font-medium">{appt.date}</span> hora:{" "}
                    <span className="font-medium">{appt.time}</span>
                </p>
            </div>

            <div className="justify-self-start md:justify-self-end">
                <StatusBadge status={appt.status} />
            </div>
        </div>
    );
};
