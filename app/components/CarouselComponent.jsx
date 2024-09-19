
"use client";

import carouselData from "../data/carouselData";
import { Carousel } from "flowbite-react";
import Counter from "./CountUp"

function CarouselComponent() {
  return (
    
    <div className="h-[265px] md:h-44 lg:h-44 xl:h-80 2xl:h-32 my-0 text-white bg-gray-500 opacity-100 lg:px-0">
      <Carousel slideInterval={4000}>
        
            {
                carouselData.map((data, index)=>{
                    return <div key={index} className="text-center pb-7 md:pb-4  2xl:pb-5 px-10 md:px-14 xl:px-20 lg:w-3/4">
                        <p>{data.name}</p>
                        <p className="italic 2xl:px-0">&ldquo;{data.review}&rdquo;</p>
                    </div>
                })
            }
        
      </Carousel>
    </div>
  );
}

export default CarouselComponent
