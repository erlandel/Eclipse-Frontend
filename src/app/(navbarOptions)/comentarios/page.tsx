'use client';
import StarComponent from "@/components/my-components/Star/StarComponent";
import ModalCustom from "@/components/Next_ui_elements/Modal/ModalComentarios";
import { ProiconsNoteAdd, Star } from "@/icons/Icons";
import InterfaceComentary from "@/interface/InterfaceComentary";
import ApiRequest from "@/services/ApiRequest";
import { Avatar, Button, Card, CardBody, CardFooter, Progress, useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";

const Comentarios = () => {
  const [averageRating, setAverageRating] = useState(4.2);
  const [comentary, setComentary] = useState<InterfaceComentary[]>([]);

  const { isOpen, onOpen, onClose } = useDisclosure();


  const getComentary = async () => {
    try {
      const response = await ApiRequest({
        method: 'GET',
        url: 'https://eclipse-production-cfda.up.railway.app/api/Commentary/GetComentary',
      });
  

      if (response.ok) {
        
        const data = await response.json();        
        setComentary(data.comentaryBack);
        setAverageRating(data.totalComentary);     
       
      } else {       
        console.error('Error a obtener los boletos');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };
  
  

  useEffect(() => {   
  
    // Llama a la función asíncrona
    getComentary();
  }, []);
  
  

  

  return (
    <div className="bg-[url('/images/fondo/comentarios.webp')] bg-cover bg-center bg-no-repeat min-h-screen">
      <h2 className="flex text-3xl justify-center items-center pt-4 pb-3 font-bold text-center bg-transparent">
        <span className="bg-gradient-to-t from-gray-500 via-slate-800 to-cyan-800 bg-clip-text text-transparent">Comentarios de nuestros clientes</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-center mx-4 md:mx-20 lg:mx-36">
        {/* Componente de rating general */}
         <div className="flex flex-col md:flex-row items-center mb-6">
          <div className="text-4xl font-bold mr-4">
            {averageRating.toFixed(1)}
          </div>
          <div>
            <div className="flex mb-2 justify-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-6 h-6 ${
                    star <= Math.round(averageRating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <Progress
              size="sm"
              aria-label="Progreso de carga"
              value={averageRating * 20}
              className="max-w-full"
              color="warning"
            />
          </div>
        </div> 

        <div className="flex items-center mb-6">
          <Button
            variant="shadow"
            className="bg-gradient-to-tr from-blue-300 via-slate-300 to-purple-300 justify-center items-center"
            onClick={() => onOpen()}
          >
            <ProiconsNoteAdd 
            className="w-6 h-6" 
            aria-labelledby="icono de agregar comentario"
            />
            Agregar Comentario
          </Button>
          <ModalCustom 
              isOpen={isOpen} 
              onClose={onClose} 
          />
        </div>
      </div>

      {/* Recuro de comentarios con scroll */}
      <div
        className="flex flex-col justify-start h-80 md:h-96 items-center w-full md:w-11/12 lg:w-9/12 mx-auto bg-blue-200 rounded-lg overflow-y-scroll p-4"
        aria-labelledby="Lista de comentarios de clientes"
      >
        {/* Caja de comentarios */}
        <div className="flex flex-col w-full md:w-2/3">
          {comentary?.map((comentary) => (
            <Card key={comentary.idComentary} className={`mb-4 ${comentary.idComentary === 1 ? 'mt-4' : ''}`}>
              <CardBody>
                <div className="flex items-center mb-2">
                   <Avatar
                    src={comentary.image}
                    size="sm"
                    className="mr-2"
                    alt="avatar"
                  /> 
                  <span className="font-semibold">{comentary.email}</span>
                  <StarComponent Nstar={comentary.stars} />
                </div>
                <p>{comentary.comentarytext}</p>
              </CardBody>
               <CardFooter>
                <small className="text-gray-500">{comentary.date}</small>
              </CardFooter> 
            </Card>
          ))}
        </div>
      </div>

      <div className="w-full h-8">

      </div>
    </div>
  );
};

export default Comentarios;
