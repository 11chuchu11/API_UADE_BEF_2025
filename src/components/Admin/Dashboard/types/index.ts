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
