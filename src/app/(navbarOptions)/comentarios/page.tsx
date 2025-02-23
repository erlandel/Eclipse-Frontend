'use client';
import StarComponent from "@/components/my-components/Star/StarComponent";
import ModalCustom from "@/components/Next_ui_elements/Modal/ModalComentarios";
import { ProiconsNoteAdd, Star } from "@/icons/Icons";
import InterfaceComentary from "@/interface/InterfaceComentary";
import generateAvatarImage from "@/utils/GenerateAvatar";
// import ApiRequest from "@/services/ApiRequest"; // Código para backend, actualmente no se utiliza
import { Avatar, Button, Card, CardBody, CardFooter, Progress, useDisclosure } from "@nextui-org/react";
import { useEffect, useState } from "react";

// Definimos los datos estáticos fuera del componente para que no se recreen en cada render
const staticComentary: InterfaceComentary[] = [
  {
    idComentary: 1,
    image: generateAvatarImage('Xusuario3'),
    email: "Xusuario1@example.com",
    stars: 5,
    comentarytext: "Excelente servicio, muy recomendado.",
    date: "2025-02-20",
  },
  {
    idComentary: 2,
    image: generateAvatarImage('Yusuario3'),
    email: "Y-usuario2@example.com",
    stars: 4,
    comentarytext: "Buen servicio, pero podría mejorar algunos aspectos.",
    date: "2025-02-18",
  },
  {
    idComentary: 3,
    image: generateAvatarImage('Busuario3'),
    email: "B-usuario3@example.com",
    stars: 3,
    comentarytext: "Servicio regular, hay detalles que optimizar.",
    date: "2025-02-15",
  },
];

const Comentarios = () => {
  // Estados para rating y comentarios
  const [averageRating, setAverageRating] = useState(4.2);
  const [comentary, setComentary] = useState<InterfaceComentary[]>([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    // Se carga el arreglo estático de comentarios
    setComentary(staticComentary);
    // Se calcula el rating promedio basado en los datos estáticos
    const totalStars = staticComentary.reduce((acc, curr) => acc + curr.stars, 0);
    const promedio = totalStars / staticComentary.length;
    setAverageRating(promedio);
  }, []); // No es necesario incluir staticComentary en el array de dependencias

  return (
    <div className="bg-[url('/images/fondo/comentarios.webp')] bg-cover bg-center bg-no-repeat min-h-screen">
      <h2 className="flex text-3xl justify-center items-center pt-4 pb-3 font-bold text-center bg-transparent">
        <span className="bg-gradient-to-t from-gray-500 via-slate-800 to-cyan-800 bg-clip-text text-transparent">
          Comentarios de nuestros clientes
        </span>
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
          <ModalCustom isOpen={isOpen} onClose={onClose} />
        </div>
      </div>
      {/* Sección de comentarios con scroll */}
      <div
        className="flex flex-col justify-start h-80 md:h-96 items-center w-full md:w-11/12 lg:w-9/12 mx-auto bg-blue-200 rounded-lg overflow-y-scroll p-4"
        aria-labelledby="Lista de comentarios de clientes"
      >
        {/* Caja de comentarios */}
        <div className="flex flex-col w-full md:w-2/3">
          {comentary?.map((coment) => (
            <Card key={coment.idComentary} className={`mb-4 ${coment.idComentary === 1 ? 'mt-4' : ''}`}>
              <CardBody>
                <div className="flex items-center mb-2">
                  <Avatar
                    src={coment.image}
                    size="sm"
                    className="mr-2"
                    alt="avatar"
                  />
                  <span className="font-semibold">{coment.email}</span>
                  <StarComponent Nstar={coment.stars} />
                </div>
                <p>{coment.comentarytext}</p>
              </CardBody>
              <CardFooter>
                <small className="text-gray-500">{coment.date}</small>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <div className="w-full h-8"></div>
    </div>
  );
};

export default Comentarios;
