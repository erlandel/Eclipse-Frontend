import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";

import ButtonNext from "../button/ButtonNext";
import { Efectivo, MLC, Real, Zelle } from "@/icons/monedaicons";
import { useState } from "react";
import { InterfacePrice } from "@/interface/InterfacePrice";
import InputNumberNext from "../inputNumber/InputNumberNext";






interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  setaddPrice: React.Dispatch<React.SetStateAction<InterfacePrice[]>>;
  addPrice?: InterfacePrice[];
}

export const ModalAddPrice: React.FC<ModalProps> = ({ isOpen, onClose, setaddPrice, addPrice }) => {
  const [prices, setPrices] = useState({
    USD: String(addPrice?.find(price => price.currency === 'USD')?.value || ''),
    Zelle: String(addPrice?.find(price => price.currency === 'Zelle')?.value || ''),
    MLC: String(addPrice?.find(price => price.currency === 'MLC')?.value || ''),
    Real: String(addPrice?.find(price => price.currency === 'R$')?.value || ''),
  });

  const handleInputChange = (name: keyof typeof prices, value: string) => {
    setPrices((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Actualizar el estado con los nuevos precios
    setaddPrice([
      {
        value: Number(prices.USD),  // Convertir a número
        currency: 'USD',
      },
      {
        value: Number(prices.Zelle),
        currency: 'Zelle',
      },
      {
        value: Number(prices.MLC),
        currency: 'MLC',
      },
      {
        value: Number(prices.Real),
        currency: 'R$',
      },
    ]);

    onClose();
  };

  return (
    <Modal backdrop={'blur'} isOpen={isOpen} onClose={onClose} placement={'center'}>
      <ModalContent className="relative max-w-md w-full bg-gradient-to-t from-white to-gray-400 rounded-lg transition-transform duration-500 ease-in-out transform shadow-2xl mx-4">
        <ModalHeader className="flex flex-col gap-1">Agrega los Precios:</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <InputNumberNext
                name="USD"
                placeholder="efectivo"
                icon={<Efectivo />}
                value={prices.USD}
                onChange={(e) => handleInputChange('USD', e.target.value)}
              />
              <InputNumberNext
                name="Zelle"
                placeholder="Zelle"
                icon={<Zelle />}
                value={prices.Zelle}
                onChange={(e) => handleInputChange('Zelle', e.target.value)}
              />
              <InputNumberNext
                name="MLC"
                placeholder="MLC"
                icon={<MLC />}
                value={prices.MLC}
                onChange={(e) => handleInputChange('MLC', e.target.value)}
              />
              <InputNumberNext
                name="Real"
                placeholder="real"
                icon={<Real />}
                value={prices.Real}
                onChange={(e) => handleInputChange('Real', e.target.value)}
              />
            </div>

            <div className="flex justify-between space-x-2 mt-4">
              <ButtonNext
                text="Cancelar"
                onClick={onClose}
                className="bg-red-500 text-white"
              />
              <ButtonNext
                type="submit"
                text="Agregar"
                className="bg-green-500 text-white"
              />
            </div>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
