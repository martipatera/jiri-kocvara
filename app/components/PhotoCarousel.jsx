"use client"

import { Carousel } from "flowbite-react";
import C1 from "./slideC1.jpeg"
import C2 from "./slideC2.jpeg"
import C3 from "./slideC3.jpeg"
import C4 from "./slideC4.jpeg"
import Image from "next/image";

function PhotoCarousel() {
    return (
      <div className="h-[400px] px-3 md:px-5 lg:px-0 w-full md:h-[650px] md:max-h-full lg:max-h-full xl:max-w-lg rounded-md">
        <Carousel slideInterval={5000}>
          
            <Image quality={50} src={C1} alt="Trenér Jiří Kočvara stojí vedle kolegy, se kterým získal certifikát, oba se usmívají a drží certifikáty." className="rounded-md"/>
            <Image quality={50} src={C2} alt="Trenér Jiří Kočvara a jeho mentor stojí společně s certifikáty, které potvrzují jejich odborné vzdělání." className="rounded-md"/>
            <Image quality={50} src={C3} alt="Jiří Kočvara, certifikovaný trenér, spolu s kolegou drží certifikáty, které získali po absolvování odborného kurzu." className="rounded-md"/>
            <Image quality={50} src={C4} alt="Jiří Kočvara, certifikovaný trenér, spolu s kolegou drží certifikáty, které získali po absolvování odborného kurzu." className="rounded-md"/>

        </Carousel>
      </div>
    );
  
} export default PhotoCarousel
