import { Dashboard } from "@components/Admin/Dashboard"
import type { Appointment } from "@components/Admin/Dashboard/types";

const DEMO: Appointment[] = [
  { id: "1", patient: "Rolando Gonzales", phone: "+54922134569", insurance: "PAMI",  date: "30/09/25", time: "11:30 am", status: "requested" },
  { id: "2", patient: "Jose Reyes Lezcano", phone: "+54913456578", insurance: "Atilra", date: "01/10/25", time: "09:00 am", status: "confirmed" },
  { id: "3", patient: "Valesca Gomez",    phone: "+549 15 12345678", insurance: "Educar", date: "03/10/25", time: "10:00 am", status: "confirmed" },
];

export default function AdminPage() {
  return (
    <>
      <main className="min-h-screen bg-secondary pt-20 pb-16">
        <Dashboard items={DEMO} />
      </main>
    </>
  );
}
