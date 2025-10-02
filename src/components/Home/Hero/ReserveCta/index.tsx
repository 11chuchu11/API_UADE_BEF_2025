import * as React from "react";
import { ActionButton } from "@components/ui/buttons/ActionButton";
import { ScheduleDialog } from "@/components/Home/feedback/ScheduleDialog";

export function ReserveCta() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <ActionButton variant="brand" size="lg" onClick={() => setOpen(true)}>
        Reserva de citas
      </ActionButton>

      <ScheduleDialog
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}
