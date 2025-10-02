import * as React from "react";
import { Badge } from "@components/ui/badge";
import { cn } from "@/lib/utils";

export const InsuranceBadge: React.FC<{ active: boolean }> = ({ active }) => {
  const tone = active
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
      {active ? "activa" : "desactivada"}
    </Badge>
  );
};
