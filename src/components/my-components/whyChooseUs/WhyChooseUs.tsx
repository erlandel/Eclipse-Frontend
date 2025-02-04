import { F7EllipsesBubbleFill, Fa6SolidPlane, FluentHatGraduationSparkle16Filled, GgPhone, IconParkSolidUpdateRotation, UisPadlock } from "@/icons/Icons";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col items-center mt-4">
      
      <div className="flex flex-col items-center mb-8 animate__animated animate__bounce w-3/4 lg:w-2/3 ">
        <h3 className="text-3xl lg:text-4xl font-bold">¿Por qué somos <span className="text-blue-500">tu mejor elección?</span></h3>
        <p className="text-xl">¡Descubre el universo de posibilidades con Eclipse!</p>
      </div>


      <div className="flex  flex-col lg:flex-row items-center justify-center mb-8">    

      <div className="flex flex-col  items-start mr-4 ml-4 w-3/4 lg:w-1/3 ">

      <div className="flex items-start mb-4 w-full animate__animated animate__lightSpeedInLeft">
          <div >
            <h5 className="font-bold">Experiencia y profesionalismo: </h5>
            <p className="text-sm">Nuestro equipo experto en viajes ofrece las mejores rutas y tarifas personalizadas para tí.</p>
          </div>
          <div className="flex items-center bg-blue-500 rounded-full p-3 hover:animate-rotate-y">
            <FluentHatGraduationSparkle16Filled className="text-4xl" />
          </div>

        </div>

        <div className="flex items-start mb-4 w-full animate__animated animate__delay-1s animate__lightSpeedInLeft">
          <div >
            <h5 className="font-bold">Asociaciones con aerolíneas de prestigio: </h5>
            <p className="text-sm">
              Colaboramos con aerolíneas de prestigio para ofrecerte tarifas competitivas y garantizar tu seguridad en cada vuelo.
            </p>
          </div>
          <div className="flex items-center bg-blue-500 rounded-full p-3 hover:animate-rotate-y">
            <Fa6SolidPlane className="text-4xl " />
          </div>          
        </div>

        <div className="flex items-start mb-4 w-full animate__animated animate__delay-2s animate__lightSpeedInLeft">
          <div >
            <h5 className="font-bold">Soporte al cliente: </h5>
            <p className="text-sm">
              Nuestro equipo de atención al cliente está disponible para resolver cualquier duda o inconveniente en cualquier momento.
            </p>
          </div>
          <div className="flex items-center bg-blue-500 rounded-full p-3 hover:animate-rotate-y">
            <GgPhone className="text-4xl " />
          </div>          
        </div>

      </div>


      <div className="relative  w-3/4 h-64  lg:w-6/12 sm:h-80  mb-4">
        <Image
          src="/images/imagen-center/imagen-center.webp"
          alt="NextUI hero Image with delay"
          fill
          sizes="(100px, 100px)"
          priority
          className="object-cover object-center rounded-3xl"
        />
      </div>

      <div className="flex flex-col items-center ml-4 w-3/4 lg:w-1/3 mr-4">
      <div className="flex items-start mb-4 w-full animate__animated animate__lightSpeedInRight">
          <div className="flex items-center bg-blue-500 rounded-full p-3 mr-4 hover:animate-rotate-y">
            <UisPadlock className="text-4xl" />
          </div>
          <div >
            <h5 className="font-bold">Transacciones seguras: </h5>
            <p className="text-sm">Garantizamos transacciones seguras con tecnología avanzada y métodos de pago confiables, protegiendo siempre tú información personal.</p>
          </div>

        </div>

        <div className="flex items-start mb-4 w-full animate__animated animate__delay-1s animate__lightSpeedInRight">
          <div className="flex items-center bg-blue-500 rounded-full p-3 mr-4 hover:animate-rotate-y">
            <F7EllipsesBubbleFill className="text-4xl" />
          </div>          
          <div >
            <h5 className="font-bold">Opiniones de nuestros clientes: </h5>
            <p className="text-sm">
            Nos enorgullece que nuestros clientes tengan experiencias positivas, respaldando nuestra reputación de confiabilidad y servicio excepcional.
            </p>
          </div>
        </div>

        <div className="flex items-start mb-4 w-full animate__animated animate__delay-2s animate__lightSpeedInRight">
          <div className="flex items-center bg-blue-500 rounded-full p-3 mr-4 hover:animate-rotate-y">
            <IconParkSolidUpdateRotation className="text-4xl" />
          </div>          
          <div >
            <h5 className="font-bold">Flexibilidad y transparencia: </h5>
            <p className="text-sm">
            Ofrecemos una política flexible de cambios y cancelaciones, con total transparencia en los términos de tus boletos.
            </p>
          </div>
        </div>


      </div>

    </div>
    </div>
  );
}

export default WhyChooseUs;
