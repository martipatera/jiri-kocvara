
"use client";

import carouselData from "../data/carouselData";
import { Carousel } from "flowbite-react";
import Image from "next/image";

 function Component() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          {
            carouselData.map((data, index)=>{
              return <Image key={index} src={data.name} alt={data.alt}></Image>

            })
          }
        </Carousel>
    </div>
  );
}
export default Component