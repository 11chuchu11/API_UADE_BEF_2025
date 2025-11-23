export type AppointmentStatus = "requested" | "confirmed";

export type Appointment = {
  id?: string;
  patient: string;
  phone: string;
  email: string;
  insurance: {id: number, name: string, description:string, active: boolean};
  date: string;
  time: string; 
  state: AppointmentStatus;
};

export type AppointmentActions = {
    onConfirm?: (appt: Appointment, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void;
    onCancel?: (appt: Appointment, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => void;
  };

