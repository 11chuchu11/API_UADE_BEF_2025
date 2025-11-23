export function combineDateAndTimeToISO(date: Date, timeString: string): string {

  const timeRegex = /^(\d{1,2}):(\d{2})\s?(AM|PM)$/i;
  const match = timeString.match(timeRegex);

  if (!match) throw new Error("Formato de hora inválido. Usa algo como '10:30 AM'.");

  let [_, hourStr, minuteStr, ampm] = match;
  let hours = parseInt(hourStr, 10);
  const minutes = parseInt(minuteStr, 10);

  if (ampm.toUpperCase() === "PM" && hours !== 12) hours += 12;
  if (ampm.toUpperCase() === "AM" && hours === 12) hours = 0;

  const finalDate = new Date(date);

  // Seteamos la hora local
  finalDate.setHours(hours, minutes, 0, 0);

  const year = finalDate.getFullYear();
  const month = String(finalDate.getMonth() + 1).padStart(2, "0");
  const day = String(finalDate.getDate()).padStart(2, "0");
  const hh = String(hours).padStart(2, "0");
  const mm = String(minutes).padStart(2, "0");

  // Armamos ISO fijo con -03:00 (Argentina)
  return `${year}-${month}-${day}T${hh}:${mm}:00.000-03:00`;
}