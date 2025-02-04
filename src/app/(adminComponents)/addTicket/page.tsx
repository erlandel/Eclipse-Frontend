"use client";

import { useDisclosure } from "@nextui-org/react";
import { DateObject } from "react-multi-date-picker";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import { validationAddTicket } from "@/app/lib/validation/validationAddTicket";
import ButtonMoney from "@/components/my-components/button/ButtonMoney";
import ButtonNext from "@/components/Next_ui_elements/button/ButtonNext";
import Calendar from "@/components/Next_ui_elements/calender/Calender";
import InputText from "@/components/Next_ui_elements/inputText/InputText";
import { dataNameAirline } from "@/data/dataNameAirline";
import { Destination, F7MoneyDollarCircleFill, Fa6SolidPlaneCircleCheck, Fa6SolidPlaneCircleXmark, NotoV1Ticket, Origin, Plane } from "@/icons/Icons";
import CorrectMessage from "@/messages/CorrectMessage";
import ApiRequest from "@/services/ApiRequest";
import { ModalAddPrice } from "@/components/Next_ui_elements/Modal/ModalAddPrice";
import CustomSelectAirline from "@/components/my-components/selectAirline/CustomSelectAirline";
import ErrorMessage from "../../../messages/ErrorMessage";
import { InterfacePrice } from "@/interface/InterfacePrice";
import { InterfaceTicket } from "@/interface/InterfaceTicket";



const AddTicket: React.FC = () => {
    const router = useRouter();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [addPrice, setaddPrice] = useState<InterfacePrice[]>([]);



    const [formData, setFormData] = useState<InterfaceTicket>({
        selectedAirline: '',
        origin: '',
        destination: '',
        selectedDates: [],
        prices: [],
    });

    // Manejador para actualizar los valores del formulario
    const handleInputChange = (name: keyof InterfaceTicket, value: string | DateObject[] | { value: number, currency: string }[]) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,

        }));
    };


    const handleSubmit = async () => {
        const { selectedAirline, origin, destination, selectedDates } = formData;
        const dates = selectedDates.map(date => date.format("DD/MM/YYYY"));


        const dataToValidate = {
            nameAirline: selectedAirline,
            origin: origin,
            destination: destination,
            selectedDates: dates,
            price: addPrice,
        };

      
     
        const validatedFields = validationAddTicket.safeParse(dataToValidate);


        if (!validatedFields.success) {
            const firstError = validatedFields.error.errors[0];
            if (firstError) {
                const message = firstError.message; // Obtén el mensaje del primer error

                ErrorMessage(message); // Muestra el mensaje de error
            }
        } if (validatedFields.success) {
                
            try {
                const response = await ApiRequest({
                    method: 'POST',
                    url: 'https://eclipse-production-cfda.up.railway.app/api/Tickets/CreateTicket',
                    body: {
                        nameAirline: selectedAirline,
                        origin: origin,
                        destination: destination,
                        selectedDates: dates,
                        prices: addPrice
                    },
                });


                if (response?.status === 200) {
                    CorrectMessage('Boleto agregado correctamente');

                } else {
                    ErrorMessage('Error al agregar el boleto');
                }

            } catch (error) {
                console.log(error)
            }

        }


    };




    const handleCancelTicket = () => {
        router.push('/adminPanel');
    }







    return (
        <div className="h-screen w-screen bg-[url('/images/fondo/2.webp')] bg-cover bg-center bg-no-repeat">
            <div className="flex justify-center items-center h-full mx-4 ">
                <div className="relative  max-w-md w-full bg-gradient-to-t from-white to-gray-300 rounded-lg  transition-transform duration-500 ease-in-out transform shadow-2xl mx-4">
                    <div className="h-3 w-full bg-black"></div>
                    <div className="w-full h-5/12 ">



                        <div className="flex  items-center justify-between py-3 mx-2">
                            <div>
                                <Plane className="w-10 h-10 my-1 ml-4" />
                            </div>

                            <div >
                                <CustomSelectAirline
                                    airlines={dataNameAirline}
                                    selectedLabel={formData.selectedAirline}
                                    onSelect={(airline) => handleInputChange('selectedAirline', airline.label)}
                                />

                            </div>

                            <div >
                                <NotoV1Ticket className="w-10 h-10 " />
                            </div>
                        </div>


                        <div className="py-3 mx-4 ">
                            <div className="flex justify-between space-x-2">
                                <div className="w-48">
                                    <InputText
                                        name="origin"
                                        placeholder="Origen"
                                        icon={<Origin />}
                                        onChange={(e) => handleInputChange('origin', e.target.value)}
                                    />
                                </div>

                                <div className="w-48">
                                    <InputText
                                        name="destination"
                                        placeholder="Destino"
                                        icon={<Destination />}
                                        onChange={(e) => handleInputChange('destination', e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="py-3 mx-4 ">
                            <div className="flex justify-between space-x-2">

                                <div className="w-48">
                                    <Calendar
                                        selectedDates={formData.selectedDates}
                                        onChange={(dates) => handleInputChange('selectedDates', dates)}
                                        placeholder="Fecha(s)"

                                    />
                                </div>

                                <div className=" w-48">
                                    <ButtonMoney
                                        icon={<F7MoneyDollarCircleFill className="h-7 w-7 ml-2" />}
                                        text="Precios"
                                        onClick={() => { onOpen() }}
                                        className="bg-white w-full h-10"
                                    />
                                    <ModalAddPrice
                                        isOpen={isOpen}
                                        onClose={onClose}
                                        setaddPrice={setaddPrice}
                                    />
                                </div>
                            </div>
                        </div>


                        <div className="py-3 mx-4 flex flex-col space-y-3 ">
                            <div className="flex justify-between space-x-2">
                                <div >
                                    <ButtonNext
                                        icon={<Fa6SolidPlaneCircleXmark className="h-7 w-7" />}
                                        text="Cancelar"
                                        onClick={handleCancelTicket}
                                        className="bg-red-500 text-white"

                                    >
                                    </ButtonNext>
                                </div>

                                <div>
                                    <ButtonNext
                                        onClick={handleSubmit}
                                        icon={<Fa6SolidPlaneCircleCheck className="h-7 w-7" />}
                                        text="Agregar"
                                        className="bg-green-500 text-white"
                                    >
                                    </ButtonNext>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>


            </div>

        </div>
    );
}

export default AddTicket;