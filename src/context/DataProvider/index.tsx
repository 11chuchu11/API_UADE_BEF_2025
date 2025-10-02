import { createContext, useState } from "react";
import type { PropsWithChildren } from "react";
import type { Appointment } from "@/components/Admin/Dashboard/types";
import type { Insurance } from "@/components/Admin/Insurances/types";

export const DataContext = createContext<any>(null);


const INITIAL_INSURANCES: Insurance[] = [
  { id: "pami",   name: "PAMI",   description: "PAMI",   active: true },
];

export const DataProvider = (props: PropsWithChildren) => {
  const [data, setData] = useState<{
    login: { user: string; password: string };
    appointments: Appointment[];
    insurances: Insurance[];
  }>({
    login: { user: "doctor", password: "12345" },
    appointments: [],
    insurances: INITIAL_INSURANCES,
  });

  return (
    <DataContext.Provider value={{ data, setData }}>
      {props.children}
    </DataContext.Provider>
  );
};