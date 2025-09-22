// src/components/layout/AppLayout.tsx
import { Outlet } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

export default function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
