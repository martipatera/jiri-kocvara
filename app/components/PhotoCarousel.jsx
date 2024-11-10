"use client"

import { Carousel } from "flowbite-react";
import C1 from "./slideC1.jpeg"
import C2 from "./slideC2.jpeg"
import C3 from "./slideC3.jpeg"
import Image from "next/image";

function PhotoCarousel() {
    return (
      <div className="h-[400px] px-3 md:px-5 lg:px-0 w-full md:h-[650px] md:max-h-full lg:max-h-full xl:max-w-lg rounded-md">
        <Carousel slideInterval={5000}>
            <Image src={C1} alt="Slide 1" className="rounded-md"/>
            <Image src={C2} alt="Slide 2" className="rounded-md"/>
            <Image src={C3} alt="Slide 3" className="rounded-md"/>
        </Carousel>
      </div>
    );
  
} export default PhotoCarousel
