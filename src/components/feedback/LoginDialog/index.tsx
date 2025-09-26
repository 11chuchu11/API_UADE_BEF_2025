import { useNavigate } from "react-router";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@components/ui/dialog";
import { LoginForm } from "@components/forms/LoginForm";

type LoginDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
  const navigate = useNavigate();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl rounded-3xl border-3 border-primary p-0">
        <div className="px-10 pt-8 pb-4">
          <DialogHeader>
            <DialogTitle className="text-center text-xl md:text-2xl font-extrabold text-primary">
              ¡Bienvenido Dr Daniel Diaz!
            </DialogTitle>
            <DialogDescription className="text-center text-lg text-foreground">
              Ingrese su Usuario y Contraseña
            </DialogDescription>
          </DialogHeader>

          <LoginForm
            onCancel={() => onOpenChange(false)}
            onSuccess={() => {
              onOpenChange(false);
              navigate("/admin");
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
