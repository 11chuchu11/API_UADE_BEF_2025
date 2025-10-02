// src/components/layout/MobileMenu.tsx
import { Sheet, SheetContent, SheetClose } from "@components/ui/sheet";
import { Button } from "@components/ui/button";
import { HamburgerButton } from "../ui/hamburguer";
import { FiInstagram, FiFacebook, FiYoutube } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { Link } from "react-router";

type NavItem = { label: string; to: string }; 

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  title: string;
  items: NavItem[];
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
          "w-[100vw] xs:w-[88%] sm:w-80",
          "min-h-screen h-screen sm:min-h-dvh sm:h-dvh min-h-[100svh] h-[100svh]",
          "flex flex-col overflow-hidden",
          "p-4 xs:p-5 sm:p-6",
          "transition-colors duration-1000 ease-in-out",
          scrolled ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"
        )}
      >
        <div className="flex items-center justify-between">
          <span className="text-base xs:text-lg sm:text-xl font-semibold truncate">
            {title}
          </span>
          <SheetClose asChild>
            <HamburgerButton
              open
              onClick={() => onOpenChange(false)}
              scrolled={scrolled}
              barsTopClass="bg-primary"
              barsScrolledClass="bg-primary-foreground"
              className="text-current"
            />
          </SheetClose>
        </div>

        <div className="mt-3 xs:mt-4 flex-1 overflow-y-auto overscroll-contain">
          <nav className="flex flex-col items-center gap-10 xs:gap-12">
          {items.map((item) => (
              <SheetClose key={item.to} asChild>
                <Link
                  to={item.to} 
                  className="text-xl sm:text-2xl font-semibold tracking-wide hover:opacity-90"
                >
                  {item.label}
                </Link>
              </SheetClose>
            ))}
          </nav>

          <div className="mt-8 xs:mt-10 flex flex-col items-center gap-3 xs:gap-4">
            {mode === "admin" ? (
              <>
                <Button
                  type="button"
                  className="w-full max-w-[16rem] xs:max-w-[18rem] sm:max-w-[20rem] rounded-full bg-white text-primary hover:bg-white/90 text-sm xs:text-base"
                  onClick={() => {
                    onOpenChange(false);
                    onSettings?.();
                  }}
                >
                  {settingsText.toUpperCase()}
                </Button>
                <Button
                  type="button"
                  className="w-full max-w-[16rem] xs:max-w-[18rem] sm:max-w-[20rem] rounded-full bg-white text-primary hover:bg-white/90 text-sm xs:text-base"
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
                className="w-full max-w-[15rem] xs:max-w-[16rem] sm:max-w-[18rem] rounded-full bg-white text-primary hover:bg-white/90 text-sm xs:text-base"
                onClick={() => {
                  onOpenChange(false);
                  onLogin?.();
                }}
              >
                {ctaLoginText.toUpperCase()}
              </Button>
            )}
          </div>
        </div>

        <div className="mt-4 sm:mt-6 pb-6 pb-[env(safe-area-inset-bottom)] flex items-center justify-center gap-10 xs:gap-12 text-current/90">
          <a className="hover:opacity-80 text-2xl xs:text-3xl" href="#" aria-label="Instagram"><FiInstagram /></a>
          <a className="hover:opacity-80 text-2xl xs:text-3xl" href="#" aria-label="Facebook"><FiFacebook /></a>
          <a className="hover:opacity-80 text-2xl xs:text-3xl" href="#" aria-label="YouTube"><FiYoutube /></a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
