import { DateObject } from "react-multi-date-picker";

export interface InterfaceTicket {    
    selectedAirline: string;
    origin: string;
    destination: string;
    selectedDates: DateObject[]// O cualquier tipo que uses para las fechas
    prices: { value: number, currency: string }[];
}
