import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, } from "@nextui-org/react";
import {FluentColorQuestionCircle24, MdiDelete, MdiDeleteOff } from "@/icons/Icons";


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    id: string;
    handleDelete: (id: string) => void;
}

const ModalConfirm: React.FC<ModalProps> = ({ isOpen, onClose, id, handleDelete }) => {

    return (
        <>
            <Modal backdrop={'blur'} isOpen={isOpen} onClose={onClose} placement={'center'}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex justify-center items-center">
                                <FluentColorQuestionCircle24 className="w-14 h-14" />
                            </ModalHeader>
                            <ModalBody className="text-center">
                                <h1 className="text-xl font-bold">¿Estás seguro de que deseas eliminar este boleto?</h1>
                            </ModalBody>
                            <ModalFooter className="flex justify-between w-full">
                                <Button
                                    color="danger"
                                    variant="solid"
                                    onPress={onClose}
                                >
                                    Cancelar
                                    <MdiDeleteOff className="w-5 h-5" />
                                </Button>
                                <Button
                                    color="success"
                                    onClick={() => handleDelete(id)}
                                    onPress={onClose}
                                    className="text-white"
                                >
                                    Eliminar
                                    <MdiDelete className="w-5 h-5" />
                                </Button>
                            </ModalFooter>

                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
export default ModalConfirm;