// src/components/layout/MobileMenu.tsx
import { Sheet, SheetContent, SheetClose } from "@components/ui/sheet";
import { Button } from "@components/ui/button";
import { HamburgerButton } from "../ui/hamburguer";
import { FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi'
import { cn } from "@/lib/utils";

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  title: string;          
  items: string[];        
  scrolled: boolean;
  mode: "public" | "admin";
  ctaLoginText: string;          
  ctaLogoutText: string;         
  settingsText?: string;        
  onLogin?: () => void;
  onLogout?: () => void;
  onSettings?: () => void;
};

export function MobileMenu({
  open,
  onOpenChange,
  title,
  items,
  scrolled,
  mode,
  ctaLoginText,
  ctaLogoutText,
  settingsText = "Configuración",
  onLogin,
  onLogout,
  onSettings,
}: Props) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className={cn(
          "[&>button]:hidden",
          "w-[101%] xs:w-[88%] sm:w-80 p-6",
          scrolled ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"
        )}
      >
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">{title}</span>
          <SheetClose asChild>
            <HamburgerButton open onClick={() => onOpenChange(false)} className="text-current" />
          </SheetClose>
        </div>

        <nav className="mt-1 flex flex-col items-center gap-15">
          {items.map((txt) => (
            <a
              key={txt}
              href="#home"
              className="text-2xl font-semibold tracking-wide hover:opacity-90"
              onClick={() => onOpenChange(false)}
            >
              {txt}
            </a>
          ))}
        </nav>

        <div className="mt-10 flex flex-col items-center gap-4">
          {mode === "admin" ? (
            <>
              <Button
                type="button"
                className="w-64 rounded-full bg-white text-primary hover:bg-white/90"
                onClick={() => {
                  onOpenChange(false);
                  onSettings?.();
                }}
              >
                {settingsText.toUpperCase()}
              </Button>
              <Button
                type="button"
                className="w-64 rounded-full bg-white text-primary hover:bg-white/90"
                onClick={() => {
                  onOpenChange(false);
                  onLogout?.();
                }}
              >
                {ctaLogoutText.toUpperCase()}
              </Button>
            </>
          ) : (
            <Button
              type="button"
              className="w-64 rounded-full bg-white text-primary hover:bg-white/90"
              onClick={() => {
                onOpenChange(false);
                onLogin?.();
              }}
            >
              {ctaLoginText.toUpperCase()}
            </Button>
          )}
        </div>

        <div className="absolute inset-x-0 bottom-10 flex items-center justify-center gap-15 text-current/90">
          <a className="hover:opacity-80" href="#" aria-label="Instagram"><FiInstagram /></a>
          <a className="hover:opacity-80" href="#" aria-label="Facebook"><FiFacebook /></a>
          <a className="hover:opacity-80" href="#" aria-label="YouTube"><FiYoutube /></a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
