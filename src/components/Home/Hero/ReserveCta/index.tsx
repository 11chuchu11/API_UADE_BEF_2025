import * as React from "react";
import { useNavigate } from "react-router";
import { ActionButton } from "@components/ui/buttons/ActionButton";
import { ScheduleDialog } from "@/components/Home/feedback/ScheduleDialog";

export function ReserveCta() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <>
      <ActionButton variant="brand" size="lg" onClick={() => setOpen(true)}>
        Reserva de citas
      </ActionButton>

      <ScheduleDialog
        open={open}
        onOpenChange={setOpen}
        onSuccess={() => navigate("/admin")} // opcional: redirigir al dashboard
      />
    </>
  );
}
