
"use client";

import carouselData from "../data/carouselData";
import { Carousel } from "flowbite-react";
import Counter from "./CountUp"

function CarouselComponent() {
  return (
    
    <div className="h-[375px] md:h-[225px] lg:h-[200px] xl:h-80 2xl:h-40 my-0 text-white bg-gray-500 opacity-100 lg:px-0">
      <Carousel slideInterval={10000}>
        
            {
                carouselData.map((data, index)=>{
                    return <div key={index} className="text-center pb-7 md:pb-4  2xl:pb-5 px-4 md:px-5 xl:px-0 lg:w-3/4">
                        <p><strong>{data.name}</strong></p>
                        <p className="italic 2xl:px-0">&ldquo;{data.review}&rdquo;</p>
                    </div>
                })
            }
        
      </Carousel>
    </div>
  );
}

export default CarouselComponent
