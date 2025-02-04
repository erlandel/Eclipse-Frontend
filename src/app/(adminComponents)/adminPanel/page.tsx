"use client";

import { TicketAdmin } from "@/components/my-components/ticketAdmin/TicketAdmin";
import InputText from "@/components/Next_ui_elements/inputText/InputText";
import ModalBaner from "@/components/Next_ui_elements/Modal/ModalBaner";
import { Fa6SolidMagnifyingGlass, MaterialSymbolsLightAddNotes, MdiEditBox } from "@/icons/Icons";
import { InterfaceFlightData } from "@/interface/InterfaceFlightData";
import ApiRequest from "@/services/ApiRequest";
import { useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AdminPanel: React.FC = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
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
  
  
  





  const handleClick = () => {
    router.push("/addTicket");
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Filtrar los boletos en base al searchTerm
  const filteredTickets = tickets.filter((ticket) =>    
    ticket.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.to.toLowerCase().includes(searchTerm.toLowerCase())
  );

 

  return (
    <div className='bg-[url("/images/fondo/2.webp")] bg-cover bg-center bg-no-repeat min-h-screen '>
      <header className="relative flex items-center justify-between bg-transparent h-16 px-4">
        {/* Imagen y texto Eclipse al inicio */}
        <div className="flex items-center flex-none hover:cursor-pointer"
          onClick={() => router.push('/')}
        >
          <Image
            src="/eclipse-logo.svg"
            alt="Logo"
            width={80}
            height={80}
            className="rounded-full w-20 h-20"
            priority
          />
          <p className="hidden lg:block text-white text-3xl font-bold ml-2">Eclipse</p>
        </div>

        <div className=" sm:ml-2 md:ml-6 lg:ml-12" >
          <h1 className="text-white text-4xl font-bold">Panel <span className="hidden sm:inline-block">de Control</span></h1>
        </div>


        <div className="flex items-center space-x-1 md:space-x-4 mr-4 sm:mr-0 ">
          <button
            className="flex items-center w-10 lg:w-28 h-10 rounded-lg bg-gradient-to-tr from-blue-300 via-slate-300 to-purple-300 justify-center"
            onClick={handleClick}
          >
            <MaterialSymbolsLightAddNotes />
            <span className="hidden lg:block font-bold">Agregar</span>
          </button>

          <button
            className="flex items-center w-10 lg:w-28 h-10 rounded-lg bg-gradient-to-tr from-blue-300 via-slate-300 to-purple-300 justify-center"
            onClick={() => onOpen()}
          >
            <MdiEditBox />
            <span className="hidden lg:block font-bold">Editar</span>
          </button>
          <ModalBaner isOpen={isOpen} onClose={onClose}  />


        </div>
      </header>

      <div className="flex items-center justify-center m-2 mx-5">
        <div className="w-96">
          <InputText
            className="w-full max-w-full"
            placeholder="Buscar..."
            icon={<Fa6SolidMagnifyingGlass />}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-md md:max-w-lg lg:max-w-6xl mx-auto'>
        {filteredTickets.map((ticket) => (          
          <div  key={ticket.id}  className="rounded-lg p-6 h-full flex justify-center">
            <TicketAdmin
              id={ticket.id}
              aeroline={ticket.aeroline}
              from={ticket.from}
              to={ticket.to}
              date={ticket.date}
              price={ticket.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};



export default AdminPanel;