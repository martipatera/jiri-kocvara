
"use client";

import carouselData from "../data/carouselData";
import { Carousel } from "flowbite-react";
import Image from "next/image";

 function Component() {
  return (
    <div className="h-screen">
      <div className="pt-40 h-1/2 px-3">
        <Carousel>
          {
            carouselData.map((data, index)=>{
              return <Image key={index} src={data.name} alt={data.alt}></Image>

            })
          }
        </Carousel>
      </div>
    </div>
  );
}
export default Component