import { DateObject } from "react-multi-date-picker";

export interface InterfaceFormDataTicket {
    id: string;
    aeroline: string;
    from: string;
    to: string;
    date: DateObject[]; // O cualquier tipo que uses para las fechas
    price: { value: number, currency: string }[];
}