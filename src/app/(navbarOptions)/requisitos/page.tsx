import React from "react";
import { WarningIcon } from "@/icons/Icons";


type Requirement = {
  country: string;
  requirements: string[];
  backgroundImage: string; // Personalización del fondo de la tarjeta
};


const requirementsList: Requirement[] = [
  {
    country: "Guyana",
    requirements: [
      "Pasaporte",
      "Pasaje ida y vuelta",
      "Retorno emitido 24 horas antes del vuelo",
      "Reserva de hostal",
      "Carne de vacunación de la COVID 19",
    ],
    backgroundImage:
      "bg-gradient-to-br from-gray-300 to-blue-500",
  },
  {
    country: "Nicaragua (desde Cuba)",
    requirements: [
      "Pasaporte ",
      "Pasaje ida y vuelta",
      "Retorno emitido 36 horas antes del vuelo",
      "Fiebre Amarilla Internacional (Obligatorio)",
      "Reserva de alojamiento",
    ],
    backgroundImage:
      "bg-gradient-to-br from-gray-300 to-blue-500",
  },
  {
    country: "Nicaragua (desde Brasil y Uruguay)",
    requirements: [
      "Pasaporte",
      "Pasaje ida y vuelta",
      "Retorno emitido 36 horas antes del vuelo",
      "Reserva de alojamiento",
      "Fiebre Amarilla Internacional (Obligatorio)",
    ],
    backgroundImage:
      "bg-gradient-to-tr from-gray-300 to-blue-500",
  },
  {
    country: "Surinam",
    requirements: [
      "Pasaporte",
      "Pasaje ida y vuelta",
      "Retorno emitido 24 horas antes del vuelo",
      'Reserva de alojamiento ',
      "Carne de vacunación de la COVID 19",
      "Visa"
    ],
    backgroundImage:
      "bg-gradient-to-tr from-gray-300 to-blue-500",
  },
];

const TravelRequirements: React.FC = () => {
  return (
    <div className="bg-[url('/images/fondo/awa.webp')] bg-cover bg-center bg-no-repeat min-h-screen">
    <div className="p-6 max-w-6xl mx-auto pt-10 ">
      <h1 className="text-3xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-white">
        Requisitos para Viajar
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        {requirementsList.map((item) => (
          <div
            key={item.country}
            className={`p-6 rounded-xl shadow-lg ${item.backgroundImage} transform hover:scale-105 transition-transform duration-500`}
          >
            <h2 className="text-2xl font-bold mb-4 text-black">
              {item.country}
            </h2>
            <ul className="list-none space-y-3">
              {item.requirements.map((req, index) => (
                <li
                  key={index}
                  className="flex items-start text-black bg-white/20 p-3 rounded-lg backdrop-blur-md hover:bg-white/30 transition-colors duration-300"
                >
                  <span className="text-xl mr-2">✔️</span>
                  <span>{req}</span>
                  {req.includes("Obligatorio") && (
                    <WarningIcon className="ml-2 text-yellow-400" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TravelRequirements;
