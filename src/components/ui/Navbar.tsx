"use client";

// import CorrectMessage from "@/messages/CorrectMessage";
// import ErrorMessage from "@/messages/ErrorMessage";
// import ApiRequest from "@/services/ApiRequest";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,

} from "@nextui-org/react";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import LoginDrop from "../Next_ui_elements/Dropdwon/LoginDrop";
import { DropNLogin } from "../Next_ui_elements/Dropdwon/DropNLogin";

import Sidebar from "./Sidebar";
import { useAuthStore } from "@/stores/authStore.store";
import { HugeiconsComment01, IcTwotoneAirplaneTicket, Requirements } from "@/icons/Icons";


  
  
  export default function Navbar_Main() {
  const { status} = useSession();
    const { isAuthenticated } = useAuthStore();

    

  return (
    <Navbar shouldHideOnScroll  className="bg-white dark:bg-gray-800 shadow-md sticky">
      <NavbarBrand>
        <div className="flex items-center gap-1">
          {/* logo de la empresa justo en esta linea  */}
          <Link href={"/"} className="flex items-center">
            <Image
              width={50}
              height={50}
              src="/eclipse-logo.svg"
              alt="Eclipse Logo"
            />

            {/* nombre de la empresa  */}
            <h2
              className="text-2xl font-bold text-transparent dark:text-gray-200 transition duration-300">
              <span className="bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Eclipse</span>
            </h2>
          </Link>

        </div>
      </NavbarBrand>

      

      {/* contenido 2 */}
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarItem  className="text-gray-600  hover:text-cyan-500 dark:text-gray-200  transition duration-300">
          <Link color="foreground" href="/vuelos-disponibles" className="flex flex-row items-center gap-1">
            <IcTwotoneAirplaneTicket className="w-5 h-5" />
            Vuelos Disponibles
          </Link>
        </NavbarItem>
        <NavbarItem className="text-gray-600 hover:text-cyan-500 dark:text-gray-200  transition duration-300">
          <Link color="foreground" href="/requisitos" className="flex flex-row items-center gap-1">
            <Requirements className="w-4 h-4" />
            Requisitos
          </Link>
        </NavbarItem>
        <NavbarItem className="text-gray-600 hover:text-cyan-500 dark:text-gray-200  transition duration-300">
          <Link color="foreground" href="/comentarios" className="flex flex-row items-center gap-1">
            <HugeiconsComment01 className="w-4 h-4" />
            Comentarios
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* contenido 3 */}
      <NavbarContent className=" " justify="end">

       
      {status ==='authenticated' || isAuthenticated ? (
        // Si está autenticado, muestra el dropdown de login
        <LoginDrop />
      ) : (
        //si no estas autenticado, muestra el dropdown de login
        <DropNLogin  />
      )}

      {/* contenido del sidebar */}
      <div className="md:hidden flex items-end ml-8 " >
        <Sidebar/>
      </div>
      </NavbarContent>

      

    </Navbar>
  );
}