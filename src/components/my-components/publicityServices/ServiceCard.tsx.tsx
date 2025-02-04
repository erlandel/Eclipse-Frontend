import Image from "next/image";
import { Fa6SolidGreaterThan } from "@/icons/Icons";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
}

const ServiceCard = ({ title, description, imageUrl, onClick }: ServiceCardProps) => {
  return (
    <div className="flex flex-1 items-center justify-center w-full  md:h-auto"> 
      <div className="hover:animate-rotate-y">
        <Image
          src={imageUrl}
          alt={title}
          width={100} // Base width
          height={100} // Base height
          className="w-10 h-10  md:w-24 md:h-24 sm:w-14 sm:h-14" 
        />
      </div>
      <div className="text-left w-full cursor-pointer" onClick={onClick}>
        <div className="w-28 sm:w-full">                  
          <h5 className="text-xs  md:text-xl sm:font-bold">{title}</h5> 
        </div>
        <p className="text-sm hidden lg:block">{description}</p> 
      </div>
      <div className="text-xs md:text-xl md:ml-2 lg:ml-4 transform transition-transform duration-300 hover:-translate-x-1 lg:hover:-translate-x-2"> {/* Ajusta el margen y la transformación */}
        <Fa6SolidGreaterThan />
      </div>
    </div>
  );
};

export default ServiceCard;
