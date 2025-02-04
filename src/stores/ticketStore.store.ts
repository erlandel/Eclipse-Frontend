import { create } from 'zustand';


interface TicketData {
  id: string;
  aeroline: string;
  from: string;
  to: string;
  date: string[]; // Múltiples fechas
  price: { value: number; currency: string }[]; // Lista de precios con valor y moneda
}

interface FlightStore {
  ticketData: TicketData;
  setTicketData: (data: Partial<TicketData>) => void;
  clearTicketData: () => void;
}

export const ticketStore = create<FlightStore>()(
    (set) => ({
      ticketData: {
        id: '',
        aeroline: '',
        from: '',
        to: '',
        date: [],
        price: [],
      },
      setTicketData: (data) =>
        set((state) => ({
          ticketData: {
            ...state.ticketData,
            ...data,
          },
        })),
      clearTicketData: () =>
        set(() => ({
          ticketData: {
            id: '',
            aeroline: '',
            from: '',
            to: '',
            date: [],
            price: [],
          },
        })),
    }),
    
  
);
