import { format } from "date-fns";

//uma lib que formata bonitinho a data e hora desse jeito expresso, muito útil
export function formatDate(timestamp: number) {
  const date = new Date(timestamp);
  return format(date, "dd/MM/yyyy HH:mm");
}
