
export interface InterfaceFlightData {
    id: string;
    aeroline: string;
    from: string;
    to: string;
    date: string[];
    price: { value: number, currency: string }[];
}
