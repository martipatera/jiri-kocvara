
"use client";

import carouselData from "../data/carouselData";
import { Carousel } from "flowbite-react";
import Counter from "./CountUp"

function CarouselComponent() {
  return (
    
    <div className="h-40 sm:h-64 xl:h-80 2xl:h-28 my-auto text-white bg-blue-gray-400 opacity-90 flex flex-col justify-center items-center  lg:px-36">
      <Carousel slideInterval={4000}>
        
            {
                carouselData.map((data, index)=>{
                    return <div key={index} className="text-center border-2 shadow rounded-xl 2xl:h-24 2xl:pt-3">
                        <p>{data.name}</p>
                        <p className="italic">&ldquo;{data.review}&rdquo;</p>
                    </div>
                })
            }
        
      </Carousel>
    </div>
  );
}

export default CarouselComponent
