import { useLocation } from "react-router";

type Variant = "public" | "admin";

export const useHeaderVariant = () => {
  const { pathname } = useLocation();
  const variant: Variant =
    pathname === "/admin" || pathname.startsWith("/admin") ? "admin" : "public";

  if (variant === "admin") {
    return {
      variant,
      headerAtTop: "bg-secondary text-white px-20 py-4",
      headerScrolled: "bg-primary text-white px-20 py-4 shadow-lg",
      titleAtTop: "text-primary",
      titleScrolled: "text-background",
      center: { kind: "title" as const},
      action: { kind: "logout" as const},
    };
  }

  return {
    variant,
    headerAtTop: "bg-secondary text-white px-20 py-4",
    headerScrolled: "bg-primary text-white px-20 py-4 shadow-lg",
    titleAtTop: "text-primary",
    titleScrolled: "text-background",
    center: { kind: "nav" as const },
    action: { kind: "login" as const, label: "Login" },
  };
}
