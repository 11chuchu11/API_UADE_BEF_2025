import { Button } from "@components/ui/button";
import type { Appointment, AppointmentActions } from "../types";
import { StatusBadge } from "../StatusBadge";

type Props = { appt: Appointment } & AppointmentActions;

export const AppointmentRow: React.FC<Props> = ({ appt, onConfirm, onCancel }) => {
    const canConfirm = appt.status === "requested";
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

            <div className="flex flex-col items-start md:items-end gap-2">
                <StatusBadge status={appt.status} />

                <div className="flex flex-wrap gap-2">
                    {canConfirm && (
                        <Button
                            size="sm"
                            className="h-8 rounded-full px-3 text-xs"
                            onClick={() => onConfirm?.(appt)}
                            aria-label={`Confirmar cita de ${appt.patient}`}
                        >
                            Confirmar
                        </Button>
                    )}

                    <Button
                        variant="outline"
                        size="sm"
                        className="h-8 rounded-full px-3 text-xs border-primary text-primary hover:bg-primary/10"
                        onClick={() => onCancel?.(appt)}
                        aria-label={`Cancelar cita de ${appt.patient}`}
                    >
                        Cancelar
                    </Button>
                </div>
            </div>
        </div>
    );
};
