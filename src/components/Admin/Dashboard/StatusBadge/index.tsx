import * as React from "react";
import { Badge } from "@components/ui/badge";
import { cn } from "@/lib/utils";
import type { AppointmentStatus } from "../types";
import { getTextsAdmin } from "../../text";

type Props = { status: AppointmentStatus };

export const StatusBadge: React.FC<Props> = ({ status }) => {
  const t = getTextsAdmin();
  const label = status === "confirmed" ? t.dahsboard.status.confirmed : t.dahsboard.status.requested;

  const tone =
    status === "confirmed"
      ? "border-primary text-primary bg-secondary/40"
      : "border-red-500 text-red-600 bg-red-50";

  return (
    <Badge
      variant="outline"
      className={cn(
        "rounded-full px-3 py-1 text-[11px] tracking-wide font-semibold uppercase whitespace-nowrap",
        tone
      )}
    >
      {label}
    </Badge>
  );
};
