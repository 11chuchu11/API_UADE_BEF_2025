// src/app/admin/page.tsx (o donde tengas AdminPage)
import * as React from "react";
import { Dashboard } from "@components/Admin/Dashboard";
import type { Appointment } from "@components/Admin/Dashboard/types";
import { useData } from "@/Hooks/useData";

const INITIAL: Appointment[] = [
  { id: "1", patient: "Rolando Gonzales", phone: "+54922134569", insurance: "PAMI",  date: "30/09/25", time: "11:30 am", status: "requested" },
  { id: "2", patient: "Jose Reyes Lezcano", phone: "+54913456578", insurance: "Atilra", date: "01/10/25", time: "09:00 am", status: "confirmed" },
  { id: "3", patient: "Valesca Gomez",    phone: "+549 15 12345678", insurance: "Educar", date: "03/10/25", time: "10:00 am", status: "confirmed" },
];

export default function AdminPage() {
  const { data, updateData } = useData();
  const items = (data?.appointments as Appointment[]) ?? [];

  // Semilla inicial solo si está vacío el store
  const seededRef = React.useRef(false);
  React.useEffect(() => {
    if (!seededRef.current && items.length === 0) {
      updateData({ appointments: INITIAL });
      seededRef.current = true;
    }
  }, [items.length, updateData]);

  const handleConfirm = (appt: Appointment) => {
    updateData({
      appointments: items.map((a) =>
        a.id === appt.id ? { ...a, status: "confirmed" } : a
      ),
    });
  };

  const handleCancel = (appt: Appointment) => {
    updateData({
      appointments: items.filter((a) => a.id !== appt.id),
    });
  };

  return (
    <main className="min-h-screen bg-secondary pt-20 pb-16">
      <Dashboard items={items} onConfirm={handleConfirm} onCancel={handleCancel} />
    </main>
  );
}
