import * as React from "react";
import { Button } from "@components/ui/buttons/button"; 
import { cn } from "@/lib/utils";

type ActionButtonProps = React.ComponentProps<typeof Button> & {
  icon?: React.ReactNode;
};

export function ActionButton({
  children,
  icon,
  className,
  size = "lg",
  variant = "brand",
  ...rest 
}: ActionButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={cn("rounded-full px-6 uppercase tracking-wide", className)}
      {...rest}
    >
      {icon ? <span className="mr-2">{icon}</span> : null}
      {children}
    </Button>
  );
}
