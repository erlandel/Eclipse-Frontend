"use client";

import React, { useEffect, useState } from 'react';
import { Ticket2 } from '@/components/my-components/ticket/Ticket';
import { InterfaceFlightData } from '@/interface/InterfaceFlightData';
import ApiRequest from '@/services/ApiRequest';


const VuelosDisponibles: React.FC = () => {
  const [tickets, setTickets] = useState<InterfaceFlightData[]>([]);


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
