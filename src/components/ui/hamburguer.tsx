import { cn } from "@/lib/utils";

type Props = {
  open: boolean;
  onClick: () => void;
  className?: string;
  label?: string;
};

export function HamburgerButton({ open, onClick, className, label = "Abrir menú" }: Props) {
  return (
    <button
      type="button"
      aria-label={open ? "Cerrar menú" : label}
      aria-expanded={open}
      onClick={onClick}
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center rounded-md",
        "transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
        className
      )}
    >
      <span
        className={cn(
          "absolute block h-[2px] w-6 bg-current transition-transform duration-300",
          open ? "translate-y-0 rotate-45" : "-translate-y-2"
        )}
      />
      <span
        className={cn(
          "absolute block h-[2px] w-6 bg-current transition-opacity duration-300",
          open ? "opacity-0" : "opacity-100"
        )}
      />
      <span
        className={cn(
          "absolute block h-[2px] w-6 bg-current transition-transform duration-300",
          open ? "translate-y-0 -rotate-45" : "translate-y-2"
        )}
      />
    </button>
  );
}
