"use client";

// import React, { useEffect, useState } from 'react';
import { Ticket2 } from '@/components/my-components/ticket/Ticket';
import { InterfaceFlightData } from '@/interface/InterfaceFlightData';
// import ApiRequest from '@/services/ApiRequest';

const VuelosDisponibles: React.FC = () => {
  // const [tickets, setTickets] = useState<InterfaceFlightData[]>([]);

  // Datos estáticos para pruebas
  const tickets: InterfaceFlightData[] = [
    {
      id: '1',
      aeroline: 'Airline A',
      from: 'City A',
      to: 'City B',
      date: ['01-10-2025', '05-10-2025', '10-10-2025'],
      price: [
        { value: 3000, currency: 'USD' },
        { value: 2900, currency: 'Zelle' },
        { value: 2800, currency: 'MLC' },
        { value: 2700, currency: 'R$' }
      ]
    },
    {
      id: '2',
      aeroline: 'Airline B',
      from: 'City C',
      to: 'City D',
      date: ['02-10-2025', '07-10-2025', '12-10-2025'],
      price: [
        { value: 3500, currency: 'USD' },
        { value: 3400, currency: 'Zelle' },
        { value: 3300, currency: 'MLC' },
        { value: 3200, currency: 'R$' }
      ]
    },
    {
      id: '3',
      aeroline: 'Airline C',
      from: 'City E',
      to: 'City F',
      date: ['03-10-2025', '08-10-2025', '13-10-2025'],
      price: [
        { value: 4000, currency: 'USD' },
        { value: 3900, currency: 'Zelle' },
        { value: 3800, currency: 'MLC' },
        { value: 3700, currency: 'R$' }
      ]
    },
    {
      id: '4',
      aeroline: 'Airline D',
      from: 'City G',
      to: 'City H',
      date: ['04-10-2025', '09-10-2025', '14-10-2025'],
      price: [
        { value: 4500, currency: 'USD' },
        { value: 4400, currency: 'Zelle' },
        { value: 4300, currency: 'MLC' },
        { value: 4200, currency: 'R$' }
      ]
    }
  ];
  
  /*
  const getTickets = async () => {
    try {
      const response = await ApiRequest({
        method: 'GET',
        url: 'https://eclipse-production-cfda.up.railway.app/api/Tickets/GetTicket',
      });

      if (response.ok) {        
        const data = await response.json();
        setTickets(data.ticketModels );
      } else {       
        console.error('Error a obtener los boletos');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

  useEffect(() => {   
    // Llama a la función asíncrona
    getTickets();
  }, []);
  */

  return (
    <div className='bg-[url("/images/fondo/1.webp")] bg-cover bg-center bg-no-repeat min-h-screen '>
      <h1 className='text-3xl font-bold text-center bg-transparent mb-8 pt-6'>
        <span className='bg-gradient-to-t from-gray-100 via-slate-300 to-cyan-200 bg-clip-text text-transparent'>
          Vuelos Disponibles
        </span>
      </h1>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-md md:max-w-lg lg:max-w-6xl mx-auto '>
        {tickets.map((ticket: InterfaceFlightData) => (
          <div key={ticket.id} className="rounded-lg p-6 h-full flex justify-center">
            <Ticket2 
              id={ticket.id}
              aeroline={ticket.aeroline}
              from={ticket.from}
              to={ticket.to}
              date={ticket.date} // Pasamos el array como está
              price={ticket.price} // Pasamos el array de precios
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VuelosDisponibles;
