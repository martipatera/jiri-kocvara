"use client"
import Image from "next/image"

import Img1 from "../../JKFotky/1.jpg"
import Img2 from "../../JKFotky/2.jpg"
import Img3 from "../../JKFotky/3.jpg"

import { Carousel } from "@material-tailwind/react";
 
export function GalleryWithCarousel() {
  return (
    <Carousel loop={true} autoplay={true} className="rounded-xl">
      <Image
        src={Img1}
        alt="image 1"
        className="h-1/2 object-center object-cover"
      />
      <Image
        src={Img2}
        alt="image 2"
        className="h-1/2 object-center object-cover"
      />
      <Image
        src={Img3}
        alt="image 3"
        className="h-1/2  object-center object-cover"
      />
    </Carousel>
  );
}