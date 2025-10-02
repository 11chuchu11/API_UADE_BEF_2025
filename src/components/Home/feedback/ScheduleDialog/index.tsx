import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
  } from "@components/ui/dialog";
  import { ScheduleForm } from "@/components/Home/forms/ScheduleForm";
  
  type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSuccess?: () => void;
  };
  
  export function ScheduleDialog({ open, onOpenChange, onSuccess }: Props) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent
          size="fluid" 
          className="w-[min(100vw-2rem,1040px)] max-h-[85vh] overflow-hidden rounded-3xl border-3 border-primary p-0"
        >
          <DialogHeader className="px-6 pt-6 md:px-8">
            <DialogTitle className="text-xl md:text-2xl font-extrabold text-primary">
              Agenda una cita aquí
            </DialogTitle>
            <DialogDescription className="text-base md:text-lg text-foreground">
              Ingrese sus datos y elija el día
            </DialogDescription>
          </DialogHeader>
  
          <div className="h-full overflow-y-auto px-6 pb-6 md:px-8 md:pb-8">
            <ScheduleForm
              showCancel={true}
              onCancel={() => onOpenChange(false)}
              onSuccess={() => {
                onOpenChange(false);
                onSuccess?.();
              }}
            />
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  