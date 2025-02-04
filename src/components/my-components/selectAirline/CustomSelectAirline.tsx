'use client';

import { useState } from 'react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { EpSelect, MiSelect } from '@/icons/Icons'; // Asegúrate de que estos íconos estén correctamente importados

// Define el tipo para los datos de aerolíneas
type Airline = {
  key: string;
  label: string;
};

type CustomListboxProps = {
  airlines: Airline[]; // La lista de aerolíneas que el componente recibirá
  selectedLabel?: string; // El label de la aerolínea seleccionada, opcional
  onSelect?: (airline: Airline) => void; // Función de callback para cuando se selecciona una aerolínea
};

export default function CustomSelectAirline({ airlines, selectedLabel, onSelect }: CustomListboxProps) {

const initialSelected = airlines.find(airline => airline.label === selectedLabel) || null;
const [selected, setSelected] = useState<Airline | null>(initialSelected);


  const handleSelect = (airline: Airline) => {
    setSelected(airline);
    if (onSelect) {
      onSelect(airline); // Llama a la función de callback con la aerolínea seleccionada
    }
  };

  return (
    <Listbox value={selected} onChange={handleSelect}>
      <div className="relative mt-2">
        <ListboxButton className="relative w-52 rounded-xl bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
        <span>{selected?.label ? selected.label : "Selecionar aerolinea"}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <MiSelect /> {/* Ícono que se muestra en el botón */}
          </span>
        </ListboxButton>

        <ListboxOptions
          className="absolute z-10 mt-1 max-h-56 w-52 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          {airlines.map((airline) => (
            <ListboxOption
              key={airline.key}
              value={airline}
              className="group relative select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
            >
              <span className="block font-normal group-data-[selected]:font-semibold">
                {airline.label}
              </span>
              {selected?.key === airline.key && ( // Muestra el ícono si esta opción está seleccionada
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
                  <EpSelect aria-hidden="true" />
                </span>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
