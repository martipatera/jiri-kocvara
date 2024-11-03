
"use client";
import Image from "next/image";
import { Card } from "flowbite-react";
import PricingCard from "./PricingCard";
import pravidelne from "./pravidelnejednotky.jpg"


function PravidelneTreninkoveJednotky() {
  return (
    <Card className="m-3 md:m-10 opacity-95 animate-fade">
        

        <div className="flex flex-col lg:flex-row">

            <div className="flex justify-center items-center">
            <Image src={pravidelne}
            className="rounded-md"
            alt="Trenér Jiří Kočvara vysvětlující své klientce tréninkový plán"></Image>
            
            </div>
            
            <div className="order-1">
                <h2 className="text-2xl font-bold tracking-tight underline decoration-deep-orange-500/80 text-center">
                    Pravidelné tréninkové jednotky
                </h2>
            
                <p className="md:px-10 md:pt-10">
                Nejvyužívanější služba, pro kterou mě lidé vyhledávají. Kompletně vedené pravidelné tréninkové jednotky. Na začátku spolupráce spolu vždy absolvujeme úvodní konzultaci a diagnostiku pohybového aparátu, kde společně probereme co od spolupráce očekáváš, jaký je tvůj aktuální fyzický stav, výkonnost, časové možnosti a další důležité info. Následně si domluvíme pravidelné termíny tréninkových jednotek. Veškerý tréninkový proces a nastavení tréninku bude na mně, tvým úkolem bude dorazit na trénink a makat podle nastaveného plánu.
                </p>

                <p className="md:px-10 md:pt-8 font-bold">
                    Jsou vhodné pro:
                </p>

                <ul class="space-y-4 text-left md:px-10 md:pt-5">
                    <li class="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                        <span>naprosto všechny, kteří chtějí pracovat na svých cílech, zesílit, změnit svou postavu atraktivnějším a zdravějším směrem</span>
                    </li>

                    <li class="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                        <span>absolutně každého, kdo na celý proces nechce být sám a je pro něj důležité, aby vše bylo vedeno maximálně individuálně vzhledem k jeho aktuálním limitům, potřebám a cílům</span>
                    </li>
  

                    <div class="flex items-center p-4 mb-4 text-sm text-yellow-900 border border-yellow-300 rounded-lg bg-yellow-50" role="alert">
                        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                        </svg>
                        <span class="sr-only">Info</span>
                        <div>
                            <span class="font-medium"> V případě zájmu je možnost domluvit v omezených termínech i soukromé fitko se základním vybavením.</span>
                        </div>
                    </div>

                    
   
                </ul>

                <span className=" flex flex-col md:flex-row items-center justify-between md:px-10 md:pt-10 ">
                    <span className="flex justify-center items-center ">
                        <p className="md:text-xl text-base font-bold underline decoration-deep-orange-500/50">Cena: 1.100 Kč </p>
                        <p className="text-sm text-gray-900 italic"> (formou předplatného, vždy na 4 týdny dopředu - např. tréninková jednotka s frekvencí 1x týdně, tedy předplatné 4 tréninky na 4 týdny - 4400Kč)</p>
                    </span>
                    <button type="button" class="w-[200px] focus:outline-none text-white bg-deep-orange-500  hover:bg-deep-orange-700 focus:ring-4 focus:ring-deep-orange-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 ">Mám zájem</button>
                    </span>

            </div>

        </div>
      
    </Card>
  );
}

export default PravidelneTreninkoveJednotky
