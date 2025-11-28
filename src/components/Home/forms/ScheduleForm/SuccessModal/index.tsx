import * as React from "react";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Props = {
    open: boolean;
    title?: string;
    message?: string | React.ReactNode;
    onClose: () => void;
};

export const SuccessModal: React.FC<Props> = ({
    open,
    title = "Reserva recibida",
    message = "Se envió correctamente la solicitud, nos comunicaremos en breves con usted vía mail.",
    onClose,
}) => {
    return (
        <Dialog open={open} onOpenChange={(v) => { if (!v) onClose(); }}>
            <DialogTrigger asChild><span /></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{message}</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button onClick={onClose}>Cerrar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
