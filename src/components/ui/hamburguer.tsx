// components/ui/hamburguer.tsx
import { cn } from "@/lib/utils";

type Props = {
  open: boolean;
  onClick: () => void;
  className?: string;
  label?: string;
  scrolled?: boolean;
  barsTopClass?: string;
  barsScrolledClass?: string;
  barsOpenClass?: string;
};

export function HamburgerButton({
  open,
  onClick,
  className,
  label = "Abrir menú",
  scrolled = false,
  barsTopClass = "bg-primary",
  barsScrolledClass = "bg-background",
  barsOpenClass,
}: Props) {
  const baseColor = scrolled ? barsScrolledClass : barsTopClass;
  const barColor = open ? (barsOpenClass ?? baseColor): baseColor;
  const timing = "duration-1000 ease-in-out";

  return (
    <button
      type="button"
      aria-label={open ? "Cerrar menú" : label}
      aria-expanded={open}
      onClick={onClick}
      className={cn(
        "relative inline-flex h-10 w-10 items-center justify-center rounded-md",
        "transition-all hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
        timing,
        className
      )}
    >
      <span className={cn(
        "absolute block h-[2px] w-6 transition-transform duration-300",
        barColor,
        open ? "translate-y-0 rotate-45" : "-translate-y-2")}
      />
      <span className={cn(
        "absolute block h-[2px] w-6 transition-opacity duration-300",
        barColor,
        open ? "opacity-0" : "opacity-100")}
      />
      <span className={cn(
        "absolute block h-[2px] w-6 transition-transform duration-300",
        barColor,
        open ? "translate-y-0 -rotate-45" : "translate-y-2")}
      />
    </button>
  );
}
