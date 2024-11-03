
"use client";
import Image from "next/image";
import { Card } from "flowbite-react";
import PricingCard from "./PricingCard";
import Foto1 from "./1.jpg"
import { useState } from "react";

function EdukacniTreninkoveJednotky() {

    const [isExpanded, setIsExpanded] = useState(false);


    const toggleText = () => {
        setIsExpanded(!isExpanded);
      };

    

  return (
    <Card className="m-3 md:m-10 opacity-95 animate-fade">
        

        <div className="flex flex-col lg:flex-row ">

            <div className="flex justify-center items-center 2xl:py-20">
            <Image src={Foto1}
            className="w-full h-full rounded-md md:max-w-sm md:h-auto lg:w-auto lg:h-[650px]  xl:max-w-max xl:h-[550px] xl:w-auto"
            alt="Trenér Jiří Kočvara vysvětluje klientce tréninkový plán"></Image>
            
            </div>
            
            <div className="lg:max-w-xl xl:max-w-max">
                <h2 className="text-2xl pt-5 md:pt-5 lg:pt-0 font-bold tracking-tight underline decoration-deep-orange-500/80 text-center">
                Edukační tréninkové jednotky
                </h2>
            
                <p id="text" className="md:px-10 px-0 text-center xl:text-start pt-5">
                    Tréninková jednotka, kde tě učíme vhodnou techniku jednotlivých cviků, jak celkově přistupovat k tréninku vhledem k tvému cíli, jak progresovat jednotlivé cviky, nebo jak zjistit a hodnotit proměnné, které jsou pro tvůj trénink podstatné. Tréninkové jednotce vždy předchází komunikace přes WhatsApp nebo email a osobní diagnostika pohybového aparátu, kde společně probereme co od tréninku očekáváš, jaký je tvůj aktuální fyzický stav a možnosti. Podle toho pak připravím tréninkovou jednotku, která pro tebe bude maximálně přínosná.
                </p>


                <p className="md:px-10 py-5 text-center md:text-start md:pb-0 md:pt-8 font-bold">
                    Je 100% přínosná pro:
                </p>

                <ul class="space-y-4 text-left md:px-10 md:pt-5 ">

                    <li class="flex items-center flex-col md:flex-row space-x-3 rtl:space-x-reverse border md:border-0 border-gray-200 rounded-md shadow-lg md:shadow-none">
                        <svg class="flex-shrink-0 w-8 h-8 md:w-3.5 md:h-3.5 text-green-500 mt-5 md:mt-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                        <span className="font-medium text-center md:text-start pt-3 md:pt-0 px-2 md:px-0 mb-5 md:mb-0">úplné začátečníky, kteří si chtějí již od prvního tréninku osvojit základní návyky a dovednosti potřebné pro bezpečné a efektivní silové cvičení</span>
                    </li>

                    <li class="flex items-center flex-col md:flex-row space-x-3 rtl:space-x-reverse border md:border-0 border-gray-200 rounded-md shadow-lg md:shadow-none">
                        <svg class="flex-shrink-0 w-8 h-8 md:w-3.5 md:h-3.5 text-green-500 mt-5 md:mt-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                        <span className="font-medium text-center md:text-start pt-3 md:pt-0 px-2 md:px-0 mb-5 md:mb-0">středně pokročilé, zkušené a profesionální sportovce, kteří chtějí konzultovat např. problém s konkrétními cviky, stagnací v tréninku, trénink po zranění, nebo cokoli dalšího v čem vidí prostor pro zlepšení</span>
                    </li>

                    <li class="flex items-center flex-col md:flex-row space-x-3 rtl:space-x-reverse border md:border-0 border-gray-200 rounded-md shadow-lg md:shadow-none">
                        <svg class="flex-shrink-0 w-8 h-8 md:w-3.5 md:h-3.5 text-green-500 mt-5 md:mt-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                        <span className="font-medium text-center md:text-start pt-3 md:pt-0 px-2 md:px-0 mb-5 md:mb-0">kondiční / hobby cvičence/ky, kteří se třeba chtějí ujistit, že je to co dělají v posilovně efektivní a vhodné přesně pro ně, jejich aktuální situaci a pokročilost</span>
                    </li>

                    

                    <li class="flex items-center flex-col md:flex-row space-x-3 rtl:space-x-reverse border md:border-0 border-gray-200 rounded-md shadow-lg md:shadow-none">
                        <svg class="flex-shrink-0 w-8 h-8 md:w-3.5 md:h-3.5 text-green-500 mt-5 md:mt-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                        <span className="font-medium text-center md:text-start pt-3 md:pt-0 px-2 md:px-0 mb-5 md:mb-0">všechny, kteří aktuálně nedisponují prostředky pro pravidelné tréninkové jednotky, ale chtějí svoje snažení konzultovat, naučit se něco nového a aplikovat to hned v posilovně</span>
                    </li>


                    <div class="flex items-center flex-col md:flex-row p-4 mb-4  text-sm text-red-800 border border-red-300 rounded-lg bg-red-100 " role="alert">
                        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                        </svg>
                        <span class="sr-only">Info</span>
                        <div className="pt-3 md:pt-0 text-center md:text-start flex flex-col">
                            {isExpanded? <span class="font-medium"><strong>UPOZORNĚNÍ! </strong> První věc, kterou je nutné říci a vždy ji zmiňuji i lidem v posilovně. Dnešní zrychlená doba vytváří v lidech pocit, že lze tak komplexní téma jako silový trénink / fitness / výživu celé nacpat a shrnout do jedné nebo dvou tréninkových jednotek či konzultací, po kterých je člověk schopen vše dělat a chápat vhodným efektivním způsobem na první pokus. V reálném světě to bohužel tak nebývá, proto si prosím uvědom, že některé informace, technické prvky cviků, návyky a prvky tréninku vyžadují, abys je prováděl a opakoval delší dobu a dobře sis je v praxi osvojil/a a zafixoval.</span>
                             : ""}
                            <span class="font-medium"><strong>{isExpanded? "" : "UPOZORNĚNÍ!"} </strong></span>
                            <button id="toggleButton" className="underline mt-2 decoration-red-500 text-center md:text-start" onClick={toggleText}>{isExpanded ? 'Zobrazit méně' : 'Zobrazit více'}</button>

                        </div>

                    </div>

                    

                    <div class="flex items-center flex-col md:flex-row p-4 mb-4 text-sm text-yellow-900 border border-yellow-300 rounded-lg bg-yellow-50" role="alert">
                        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                        </svg>
                        <span class="sr-only">Info</span>
                        <div className="pt-3 md:pt-0 text-center md:text-start">
                            <span class="font-medium"> V případě zájmu je možnost domluvit v omezených termínech i soukromé fitko se základním vybavením.</span>
                        </div>
                    </div>

                    
   
                </ul>

                <span className="flex flex-col xl:flex-row items-center justify-between pt-5 md:px-10 md:pt-10 ">
                    <span className="flex flex-col  justify-center items-center ">
                        <p className="text-xl font-bold underline whitespace-nowrap decoration-deep-orange-500/50">Cena: 1.800 Kč </p>
                        <p className="text-sm text-gray-900 italic text-center"> (zahrnuje diagnostiku pohybového aparátu)</p>
                    </span>
                    <button type="button" class="mt-5 xl:mt-0 w-full md:w-[200px] focus:outline-none text-white bg-deep-orange-500  hover:bg-deep-orange-700 focus:ring-4 focus:ring-deep-orange-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 ">Mám zájem</button>
                    </span>

            </div>

        </div>
      
    </Card>
  );
}

export default EdukacniTreninkoveJednotky
