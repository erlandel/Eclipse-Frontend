import React, { useEffect } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import type { Selection } from "@nextui-org/react";
import { Calendar } from "lucide-react";

// Definir las props que acepta el componente
interface DropdownCustomProps {
  dateItem: string[]; // Un array de strings para las fechas
  setFechaValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function FechasDrop({ dateItem,setFechaValue }: DropdownCustomProps) {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set(["Fechas Disponibles"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  useEffect(() => {
    setFechaValue(selectedValue); // Actualiza el valor en el padre cuando cambia la selección
  }, [selectedValue, setFechaValue]);

  // setFechaValue(selectedValue);

  return (
    <Dropdown className="w-full sm:w-auto">
      <DropdownTrigger>
        <Button variant="bordered" className="capitalize">
          <span className="flex flex-row items-center gap-2">
          { <Calendar /> }
          { selectedValue }
          </span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Select a date"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        {/* Mapear el array dateItem para generar las opciones del Dropdown */}
        {dateItem.map((date) => (
          <DropdownItem key={date} className="flex items-center justify-between w-full" value={date} textValue="item">
          <div className="flex items-center space-x-2">
            {<Calendar />}
            <span>{date}</span>
          </div>
        </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

