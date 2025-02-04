"use client"; 
import { Divider } from "@nextui-org/react";
import CarouselFooter from "@/components/my-components/carousel-footer/CarouselFooter";
import ImagenCarouselFooter from "@/components/my-components/carousel-footer/ImagenCarouselFooter";
import Carousel from "@/components/my-components/carousel/Carousel";
import { images } from "@/components/my-components/carousel/ImagePath";
import { PublicityLeft } from "@/components/my-components/publicity/PublicityLeft";
import { PublicityRight } from "@/components/my-components/publicity/PublicityRight";
import WhyChooseUs from "@/components/my-components/whyChooseUs/WhyChooseUs";
import TextImagen from "@/components/my-components/carousel-footer/TextImage";
import PublicityServices from "@/components/my-components/publicityServices/PublicityServices";
import { useAuthStore } from "@/stores/authStore.store";
import { useEffect } from "react";



export default function Home() {

  const { checkSession } = useAuthStore();

  useEffect(() => {  
    checkSession();
  }, [checkSession]);


  return (

    <div>
      <Divider />
      <div className="flex justify-between items-center gap-4 p-4">
        <PublicityLeft />
        <Carousel images={images} />
        <PublicityRight />
      </div>
      <WhyChooseUs />   
      <PublicityServices/>
      <div className="mx-4">
      <CarouselFooter images={ImagenCarouselFooter} textImage={TextImagen} />
      </div>    

    </div>


  )
}


