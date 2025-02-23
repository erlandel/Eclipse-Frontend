'use client';
// import { InterfaceBaner } from "@/interface/InterfaceBaner";
// import ApiRequest from "@/services/ApiRequest";
// import { useEffect, useState } from "react";

export const Banner = () => {
  // const [dataBaner, setDataBaner] = useState<InterfaceBaner | undefined>(undefined);
  // Comentamos la función de obtención del banner
  /*
  const getBaner = async () => {
    try {
        const response = await ApiRequest({
            method: 'GET',
            url: 'https://eclipse-production-cfda.up.railway.app/api/Navbar/GetNavbar',
        });

        if (response?.status === 200) {
            const data = await response.json();               
            setDataBaner(data);            
        }else{
            console.log('Error al obtener el banner');
        } 
    } catch (error) {
        console.error('Error fetching baner:', error);
    }
  };

  useEffect(() => {    
      getBaner();
  }, []);
  */

  return (
    <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white py-2 text-center overflow-hidden h-16 flex items-center justify-center">
    
        <p className="text-2xl font-bold inline-block animate__animated animate__pulse animate__infinite" style={{ animationDuration: '5s' }}>
        ¡Descubre el universo de posibilidades con Eclipse!
        </p>
      
    </div>
  );
};