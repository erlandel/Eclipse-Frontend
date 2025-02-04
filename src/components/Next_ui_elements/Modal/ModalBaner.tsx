import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Textarea, } from "@nextui-org/react";
import { BiSendDashFill, BiSendPlusFill } from "@/icons/Icons";
import ApiRequest from "@/services/ApiRequest";
import CorrectMessage from "@/messages/CorrectMessage";
import ErrorMessage from "@/messages/ErrorMessage";
import { InterfaceBaner } from "@/interface/InterfaceBaner";


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;

}

const ModalBaner: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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
        // Llama a la función asíncrona
        getBaner();
    }, []);



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDataBaner(prevData => ({
            ...prevData,   // Asegúrate de mantener el estado previo
            text: e.target.value, // Actualiza solo el campo "text"
        }));
    };


    const handleClick = async () => {        
        try {
            const response = await ApiRequest({
                method: 'PATCH',
                url: 'https://eclipse-production-cfda.up.railway.app/api/Navbar/ChangeNavbar',
                body: {
                    text: dataBaner?.text,
                    idNavbar: 1
                },
            });

            if (response?.status === 200) {               
                
                CorrectMessage('Texto editado correctamente');
                onClose();
            } else {
                ErrorMessage('Error al editar el texto');
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
            <Modal backdrop={'blur'} isOpen={isOpen} onClose={onClose} placement={'center'}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Editar Baner:</ModalHeader>
                            <ModalBody>
                                <Textarea
                                    value={dataBaner?.text}
                                    onChange={handleChange}
                                    className="mb-4"
                                />

                            </ModalBody>
                            <ModalFooter className="flex justify-between w-full">
                                <Button
                                    color="danger"
                                    variant="solid"
                                    onPress={onClose}
                                >
                                    Cancelar
                                    <BiSendDashFill className="w-5 h-5 ml-1" />
                                </Button>
                                <Button
                                    color="primary"
                                    onClick={handleClick}
                                >
                                    Enviar
                                    <BiSendPlusFill className="w-5 h-5 ml-1" />
                                </Button>
                            </ModalFooter>

                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
export default ModalBaner;