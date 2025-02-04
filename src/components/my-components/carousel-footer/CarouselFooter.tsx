"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; 
import 'swiper/css';
import 'swiper/css/autoplay';
import { useState } from "react";

interface CarouselProps {
  images: string[],
  textImage: string[]
}

const CarouselFooter: React.FC<CarouselProps> = ({ images, textImage }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={15}   
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      breakpoints={{       
        450: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 },
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div 
            className="relative w-full h-44 my-4 group" 
            onMouseEnter={() => setHoveredIndex(index)} 
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Image
              src={image} 
              alt={`Image ${index + 1}`} 
              fill
              priority
              sizes="(50vw, 50vh)"
              className="object-cover object-center rounded-xl transition duration-300 group-hover:brightness-75"             
            />
            {hoveredIndex === index && (
              <div className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">{textImage[index]}</span>
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselFooter;
