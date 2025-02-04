// src/components/my-components/publicityServices/PublicityServices.tsx
"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ServiceCard from "./ServiceCard.tsx";


const PublicityServices = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/vuelos-disponibles');
  };

  return (
    <div className="relative w-full h-48 mb-4 md:h-96 md:mt-4 md:mb-8 mr-2">
      <Image
        src={"/images/imagen-services/imagen-services.webp"}
        alt="imagen-services"
        fill
        sizes="(50vw, 50vh)"
        priority
        className="object-cover object-center"
      />
<div className="absolute right-6 sm:right-8 xl:right-28  flex flex-col items-center justify-center h-full">
  <ServiceCard
    title="Ahorra tiempo y dinero:"
    description="Encuentra las mejores ofertas en un solo lugar, sin complicaciones."
    imageUrl="/images/imagen-icons/2.svg"
    onClick={handleClick}
  />
  <ServiceCard
    title="Calidad y Servicio Garantizados:"
    description="Más de X clientes satisfechos avalan nuestra calidad y servicio."
    imageUrl="/images/imagen-icons/3.svg"
    onClick={handleClick}
  />
  <ServiceCard
    title="Tú tranquilidad es lo primero:"
    description="Viaja con la certeza de que estamos siempre a tu lado."
    imageUrl="/images/imagen-icons/1.svg"
    onClick={handleClick}
  />
</div>


    </div>
  );
};

export default PublicityServices;
