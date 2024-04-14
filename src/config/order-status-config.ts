import { OrderStatus } from "@/types";

type OrderStatusInfo = {
  label: string;
  value: OrderStatus;
  progressValue: number;
};
export const ORDER_STATUS: OrderStatusInfo[] = [
  {
    label: "Zamówienie zostało opłacone",
    value: "placed",
    progressValue: 0,
  },
  {
    label: "Zamówienie czeka na zatwierdzenie przez restaurację",
    value: "paid",
    progressValue: 25,
  },
  {
    label: "Zamówienie jest trakcie przygotowywania",
    value: "inProgress",
    progressValue: 50,
  },
  {
    label: "Zamówienie jest gotowe do dostarczenia!",
    value: "outForDelivery",
    progressValue: 75,
  },
  { label: "Zamówienie dostarczone!", value: "delivered", progressValue: 100 },
];
