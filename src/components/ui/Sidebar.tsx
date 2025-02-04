import { Bars3Icon, HugeiconsComment01, IcTwotoneAirplaneTicket, Requirements, XMarkIcon } from "@/icons/Icons";
import Link from "next/link";
import { useState, useEffect } from "react";

interface NavItem {
  name: string;
  href: string;
  Icon: React.ComponentType<{ className: string }>; // Añade el tipo para el ícono
}

const navigation: NavItem[] = [
  { name: "Vuelos Disponibles", href: "/vuelos-disponibles", Icon: IcTwotoneAirplaneTicket },
  { name: "Requisitos", href: "/requisitos", Icon: Requirements },
  { name: "Comentarios", href: "/comentarios", Icon: HugeiconsComment01 },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Botón de menú móvil */}
      <button
        className="lg:hidden fixed top-4 right-4 z-20 p-2 rounded-md text-black focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="sr-only">Open sidebar</span>
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        ) : (
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {/* Componente Sidebar */}
      <div
        className={`fixed right-0 mt-8 z-10 w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menú de navegación */}
        <nav className="bg-white shadow-xl rounded-md">
          <div className="px-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group flex items-center px-2 py-2 text-base text-black font-medium rounded-md"
                onClick={handleLinkClick}
              >
                <item.Icon className="mr-8 w-5 h-5  text-gray-600" /> {/* Icono delante del texto */}
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
