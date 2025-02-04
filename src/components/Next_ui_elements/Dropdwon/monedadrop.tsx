import { useState, useEffect } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { Efectivo, Zelle, MLC, Real } from "@/icons/monedaicons";
import type { Selection } from "@nextui-org/react";

// Definir las props que acepta el componente
interface DropdownCustomProps {
  price: { value: number; currency: string }[]; // Arreglo que contiene los precios
  setMonedaValue: React.Dispatch<React.SetStateAction<number>>;
  setMonedaString: React.Dispatch<React.SetStateAction<string>>;
}

// Definir el tipo para los íconos
type PriceIconKey = "USD" | "Zelle" | "MLC" | "R$";

const priceIcons: Record<PriceIconKey, JSX.Element> = {
  USD: <Efectivo className="w-5 h-5"/>,
  Zelle: <Zelle className="w-5 h-5"/>,
  MLC: <MLC className="w-5 h-5"/>,
  R$: <Real className="w-5 h-5"/>,
};

export default function MonedaDropdown({ price, setMonedaValue, setMonedaString }: DropdownCustomProps) {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set());

  const selectedValue = Array.from(selectedKeys)[0] || ""; // Obtiene la moneda seleccionada

  // Obtener el precio y el string correspondiente al valor seleccionado
  const selectedPriceItem = price.find((item) => item.currency === selectedValue);
  const selectedPrice = selectedPriceItem ? selectedPriceItem.value : null; // Obtener el valor o null si no se encuentra
  const selectedString = selectedPriceItem ? selectedPriceItem.currency : "USD"; // Asegúrate de que sea un PriceIconKey

  // Asegúrate de que selectedString sea un PriceIconKey
  const iconKey: PriceIconKey = selectedString as PriceIconKey;

  // Función para actualizar el valor de la moneda
  useEffect(() => {
    setMonedaValue(selectedPrice || 0);
    setMonedaString(selectedString);
  }, [selectedPrice, selectedString, setMonedaValue, setMonedaString]);

  return (
    <div className="flex items-center justify-center space-x-2">
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered" className="capitalize  min-w-[140px] max-w-[200px] truncate">
            <span className="flex w-full justify-between items-center ml-1 mr-1">
            {priceIcons[iconKey]} {/* Muestra el ícono basado en el string */}
            <span className="ml-2">{selectedPrice !== null ? selectedPrice : "Seleccionar método"}</span>
            </span>

          </Button>
        </DropdownTrigger>

        <DropdownMenu
          aria-label="Select a currency"
          variant="flat"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          {price.map(({ value, currency }) => (
            <DropdownItem key={currency} value={currency} textValue="item"> {/* Usa el string como key y value */}
              {priceIcons[currency as PriceIconKey]} {/* Muestra el ícono basado en el string */}
              {currency} - {value}  {/* Muestra el valor en palabras y el precio */}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
