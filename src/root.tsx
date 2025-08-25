// src/root.tsx
import * as React from "react";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { Provider as ChakraProvider} from "./components/ui/ChakraUI/provider"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ChakraProvider>{children}</ChakraProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return <Outlet />;
}
