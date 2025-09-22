import * as React from "react";
import { Button } from "../buttons/button";
import { cn } from "../../../lib/utils";

type Props = {
  children: React.ReactNode;   
  icon?: React.ReactNode;      
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "brand" | "default" | "outline"; 
};

export function ActionButton({
  children,
  icon,
  className,
  size = "lg",
  variant = "brand",
}: Props) {
  return (
    <Button
      variant={variant}
      size={size}
      className={cn("rounded-full px-6 uppercase tracking-wide", className)}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Button>
  );
}
