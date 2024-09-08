
"use client";

import carouselData from "../data/carouselData";
import { Carousel } from "flowbite-react";
import Image from "next/image";

 function Component() {
  return (
        <Carousel className="h-screen xl:h-screen w-full xl:w-1/2">
          {
            carouselData.map((data, index)=>{
              return <Image key={index} src={data.name} alt={data.alt}></Image>

            })
          }
        </Carousel>
  );
}
export default Component