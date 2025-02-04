'use client';
import { InterfaceBaner } from "@/interface/InterfaceBaner";
import ErrorMessage from "@/messages/ErrorMessage";
import ApiRequest from "@/services/ApiRequest";
import { useEffect, useState } from "react";

export const Banner = () => {
  const [dataBaner, setDataBaner] = useState<InterfaceBaner | undefined>(undefined);



  const getBaner = async () => {
    try {
        const response = await ApiRequest({
            method: 'GET',
            url: 'https://eclipse-production-cfda.up.railway.app/api/Navbar/GetNavbar',
        });


        if (response?.status === 200) {
            const data = await response.json();               
            setDataBaner(data);            
        } else {
            ErrorMessage('Error al obtener el baner');
        }
    } catch (error) {
        console.error('Error fetching baner:', error);
    }
};

useEffect(() => {    
    getBaner();
}, []);

  return (
    <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white py-2 text-center overflow-hidden h-16 flex items-center justify-center">
    
        <p className="text-2xl font-bold inline-block animate__animated animate__pulse animate__infinite"style={{ animationDuration: '5s' }} >
        {dataBaner?.text}
        </p>
      
    </div>
  );
};