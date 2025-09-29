export type AppointmentStatus = "requested" | "confirmed";

export type Appointment = {
  id: string;
  patient: string;
  phone: string;
  insurance: string;
  date: string;
  time: string; 
  status: AppointmentStatus;
};

export type AppointmentActions = {
    onConfirm?: (appt: Appointment) => void;
    onCancel?: (appt: Appointment) => void;
  };