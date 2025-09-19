import * as React from "react";
import { Button } from "../buttons/button";
import { cn } from '../../../lib/utils';

type Props = {
    to?: string;
    children?: React.ReactNode;
    className?: string;
    size?: "default" | "sm" | "lg" | "icon";
};

export function ReserveButton({
    //   to = "/reservas",
    children = "Reserva de citas",
    className,
    size = "lg",
}: Props) {
    return (
        <Button
            //   asChild
            variant="brand"
            size={size}
            className={cn("rounded-full px-6", className)}
        >
            {children}  {/* <Link to={to}>{children}</Link> */}
        </Button>
    );
}

