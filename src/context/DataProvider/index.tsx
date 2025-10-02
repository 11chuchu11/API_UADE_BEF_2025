import { createContext, useState } from "react";
import type { PropsWithChildren } from "react";
import type { Appointment } from "@components/Admin/Dashboard/types";

export const DataContext = createContext<any>(null);

export const DataProvider = (props: PropsWithChildren) => {
  const [data, setData] = useState<{
    login: { user: string; password: string };
    appointments: Appointment[];
  }>({
    login: { user: "doctor", password: "12345" },
    appointments: [],
  });

  return (
    <DataContext.Provider value={{ data, setData }}>
      {props.children}
    </DataContext.Provider>
  );
};