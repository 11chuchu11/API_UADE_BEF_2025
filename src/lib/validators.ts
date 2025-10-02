const EMAIL_RX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const NAME_RX  = /^[A-Za-zÀ-ÿ\u00f1\u00d1 '’-]{2,}$/;
const PHONE_RX = /^\+?\d{8,}$/;

export const isValidEmail = (v?: string) =>
  !!v?.trim() && EMAIL_RX.test(v.trim());

export const isValidName = (v?: string) =>
  !!v?.trim() && NAME_RX.test(v.trim());

export const isValidPhone = (v?: string) =>
  !!v?.trim() && PHONE_RX.test(v.trim());
