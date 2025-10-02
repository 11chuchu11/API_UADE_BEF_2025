// components/Home/forms/BookingCalendar.tsx
import * as React from "react";
import { Calendar as RdpCalendar } from "@components/ui/calendar";
import { dFns } from "@/lib/time";

type Props = React.ComponentProps<typeof RdpCalendar> & { error?: string };

export const BookingCalendar: React.FC<Props> = ({ error, ...props }) => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-center">
        <RdpCalendar
          {...props}
          className="w-full rounded-md"
          classNames={{
            months: "w-full flex flex-col",
            month: "w-full space-y-3",
            caption: "flex flex-col items-center gap-2 pt-1",
            caption_label: "order-1 text-sm font-medium",
            nav: "order-2 mt-2 flex items-center justify-center gap-2",
            nav_button: "h-7 w-7 rounded-md hover:bg-accent",
            table: "w-full border-collapse",
            head_row: "grid grid-cols-7 w-full",
            head_cell: "text-center text-muted-foreground font-normal text-xs",
            row: "grid grid-cols-7 w-full gap-y-1",
            cell: "relative p-0 w-full",
            day: "w-full aspect-square flex items-center justify-center rounded-md aria-selected:opacity-100",
            day_selected: "bg-primary text-primary-foreground hover:bg-primary focus:bg-primary",
            day_today: "ring-1 ring-primary/40",
            day_outside: "text-muted-foreground opacity-40",
            day_disabled: "opacity-40",
          }}
          disabled={(day) =>
            dFns.isWeekend(day) || dFns.isBefore(dFns.startOfDay(day), dFns.startOfDay(new Date()))
          }
        />
      </div>
      {error && <p className="mt-2 text-xs text-rose-600">{error}</p>}
    </div>
  );
};
