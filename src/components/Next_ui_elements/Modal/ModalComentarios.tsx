import React, { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Textarea,} from "@nextui-org/react";
import StarComponent from "@/components/my-components/Star/StarComponent";
import { AkarIconsCommentAdd, HugeiconsCommentRemove01 } from "@/icons/Icons";
import ApiRequest from "@/services/ApiRequest";
import generateAvatarImage from "@/utils/GenerateAvatar";
import { useSession } from "next-auth/react";
import { useAuthStore } from "@/stores/authStore.store";
import CorrectMessage from "@/messages/CorrectMessage";
import ErrorMessage from "@/messages/ErrorMessage";


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalCustom: React.FC<ModalProps> = ({ isOpen, onClose }) => {

    const [newComment, setNewComment] = useState("");
    const [newRating, setNewRating] = useState(0);
    const { data: session } = useSession();
    const { user } = useAuthStore();

    const email = session?.user?.email || user?.email || "";
    const imageurl = generateAvatarImage(email);

    
    const handleClick = async() => {
      if (email === "") {
        ErrorMessage('Por favor debe autenticarse para comentar');
      onClose();
        

      }
      else{
      try {
        const response = await ApiRequest({
          method: 'POST',
          url: 'https://eclipse-production-cfda.up.railway.app/api/Commentary/CreateCommentary',
          body: {
            comentarytext: newComment,
            stars: newRating,
            email: email,
            image: imageurl,

        },
        });
    
  
        if (response.status === 200) {
          CorrectMessage('Comentario agregado correctamente');

          setTimeout(() => {
            location.reload();
          }, 3000);
        
  
         
        } else {       
         ErrorMessage ('Error al agregar el comentario');
        }
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
      }
      onClose();
      }
    };
    
  return (
    <>
      <Modal backdrop={'blur'} isOpen={isOpen} onClose={onClose} placement={'center'}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Escribe tu opinión:</ModalHeader>
              <ModalBody>
              <StarComponent
                  Nstar={newRating}
                  onClick={(rating) => setNewRating(rating)}
                />
                <Textarea
                  placeholder="Write your review here..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="mb-4"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose} className="flex flex-row items-center gap-1">
                  Cancelar
                  <HugeiconsCommentRemove01 className="w-6 h-6" />
                </Button>
                <Button color="primary"  onPress={handleClick} className="flex flex-row items-center gap-1">
                  Enviar
                  <AkarIconsCommentAdd className="w-6 h-6 " />
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
 export default ModalCustom;