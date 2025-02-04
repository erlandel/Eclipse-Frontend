"use client";
import {  IcBaselineWhatsapp, NotoV1Ticket } from "@/icons/Icons";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { Plane } from "lucide-react";
import MonedaDropdown from "../../Next_ui_elements/Dropdwon/monedadrop";
import Image from "next/image";
import Link from "next/link";
import FechasDrop from "../../Next_ui_elements/Dropdwon/FechasDrop";
import { useEffect, useState } from "react";
import { InterfaceFlightData } from "@/interface/InterfaceFlightData";





export  const Ticket2: React.FC<InterfaceFlightData> = ({
  aeroline ,
  from ,
  to ,
  date ,
  price,
}: InterfaceFlightData)=> {


  const [MonedaValue, setMonedaValue] = useState(0);
  const [MonedaString, setMonedaString] = useState('');
  const [FechaValue, setFechaValue] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);

  
  useEffect(() => {
    if (MonedaValue !== 0 && FechaValue !== "Fechas Disponibles") {
     setIsEnabled(true);
    }
    
  }, [MonedaValue, FechaValue]);
  
  
 

 
  return (

    <Card className="relative sm:max-w-lg md:max-w-md w-full bg-gradient-to-t from-white to-gray-300 rounded-lg shadow-2xl">
      <div className="h-3 w-full bg-blue-500"></div>
      {/* Header */}
      <CardHeader className="flex justify-between items-center p-4">

          <div className="flex justify-center items-center ">
          <h1 className="text-2xl font-serif font-bold  mr-2">{aeroline}</h1>
          <Image
            src="/icons8-avión-80.png"
            alt="Airplane"
            width={50}
            height={50}
            className="w-8 h-8"
          />
          </div>

        <NotoV1Ticket className="w-10 h-10 " />
      </CardHeader>

      {/* Body */}
      <CardBody className="p-6 overflow-hidden">
        <div className="flex justify-between items-center">
          {/* Origen */}
          <div className="text-left">
            <p className="text-sm font-medium">Origen</p>
            <p className="text-xl font-bold">{from}</p>
          </div>

          {/* Icono avión */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-px border-t border-dashed"></div>
            <Plane className="w-6 h-6 my-1" />
            <div className="w-16 h-px border-t border-dashed"></div>
          </div>

          {/* Destino */}
          <div className="text-right">
            <p className="text-sm font-medium">Destino</p>
            <p className="text-xl font-bold">{to}</p>
            {/* Destino  */}
          </div>
        </div>
      </CardBody>

      {/* Footer */}
      <CardFooter className="p-4 flex flex-col space-y-3">
  {/* Primera fila: Fecha y precio */}
  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between sm:justify-around w-full space-y-4 sm:space-y-0 sm:space-x-1">
    
    {/* Primer dropdown: alineado en pantalla pequeña y grande */}
    <div className="flex w-full sm:w-auto justify-center sm:justify-start items-center sm:-ml-2 md:-ml-0">
      <FechasDrop 
        dateItem={date} 
        setFechaValue={setFechaValue}
      />
    </div>
    
    {/* Segundo dropdown: alineado en pantalla pequeña y grande */}
    <div className="flex w-full sm:w-auto justify-center sm:justify-start items-center text-2xl mr-2 font-bold text-gray-800">
      <MonedaDropdown 
        price={price}
        setMonedaValue={setMonedaValue}
        setMonedaString={setMonedaString}
      />
    </div>
  </div>

  {/* Segunda fila: botón */}
  <div className="flex justify-center items-center w-full space-x-4">
    {isEnabled ? (
      <Link 
        href={`https://wa.me/+5541998370782?text=Hola,%20estoy%20interesado%20en%20el%20viaje%20de%20${from}%20a%20${to}%20el%20${FechaValue}%20a%20través%20de%20${aeroline}%20.Y%20pienso%20pagar%20${MonedaValue}%20en%20${MonedaString}`} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <button 
          className="flex px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-700 transition-colors duration-300 ease-in-out justify-center items-center"
        >
          <span className="mr-1">Comprar en</span> 
          <IcBaselineWhatsapp className="w-6 h-6" />
        </button>
      </Link>
    ) : (
      <button 
        className="flex px-6 py-2 bg-gray-400 cursor-not-allowed text-white text-sm font-medium rounded-lg shadow transition-colors duration-300 ease-in-out justify-center items-center"
        disabled
      >
        <span className="mr-1">Comprar en</span> 
        <IcBaselineWhatsapp className="w-6 h-6" />
      </button>
    )}
  </div>
</CardFooter>




    </Card>
  );
}
