
"use client";
import Image from "next/image";
import { Card } from "flowbite-react";
import PricingCard from "./PricingCard";
import pravidelne from "./pravidelnejednotky.jpg"
import online from "./online.jpg"
import online1 from "./online1.jpg"


function OnlineCoaching() {
  return (
    <Card className="m-3 md:m-10 opacity-95 animate-fade">
        

        <div className="flex flex-col lg:flex-row ">

            <div className="flex justify-center items-center py-20">
            <Image src={online}
            className="w-full h-full  rounded-md"

            alt="Trenér Jiří Kočvara vysvětlující své klientce tréninkový plán"></Image>
            
            </div>
            
            <div>
                <h2 className="text-2xl font-bold tracking-tight underline decoration-deep-orange-500/80 text-center">
                    On-line coaching 
                </h2>
            
                <p className="md:px-10 md:pt-10">
                Díky dnešním technologiím jsme schopni kvalitu trenérské práce udržet na velmi vysoké úrovni ať už trénuješ kdekoli. On-line coaching se od klasických vedených tréninků liší tím, že s tebou sice nebudu na tréninku nakládat kotouče na činku, nastavovat stroj nebo počítat ti opakování, místo toho ale budu skrze propracované on-line nástroje nastavovat, sledovat a vyhodnocovat celý tvůj tréninkový proces, periodizaci tréninku a budeme schopni rychle a přesně nastavovat případné úpravy. Vždy budeš vědět co, jak a proč máš dělat.
                </p>

                <p className="md:px-10 md:pt-8 font-bold">
                    Co zahrnuje můj On-line coaching?
                </p>

                <ul class="space-y-4 text-left md:px-10 md:pt-5">
                    <li class="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                        <span>komplexní poradenství v tématech tréninku, výživy a suplementace</span>
                    </li>

                    <li class="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                        <span>propracované, uživatelsky přívětivé tabulky (Excel) vhodné i pro mobilní telefony</span>
                    </li>

                    <li class="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                        <span>pravidelné updaty 1x týdně formou videa nebo e-mailu</span>
                    </li>

                    <li class="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                        <span>možnost komunikovat přes WhatsApp nebo e-mail</span>
                    </li>

                    <li class="flex items-center space-x-3 rtl:space-x-reverse">
                        <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                        <span>detailní analýzu techniky a provedení cviků</span>
                    </li>
  
                    <div class="flex p-4 mb-4 text-sm text-yellow-900 border border-yellow-300 rounded-lg bg-yellow-50" role="alert">
                        <svg class="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                        </svg>
                        <span class="sr-only">Info</span>
                        <div>
                            <span class="font-medium">POKUD JE JEN TROCHU MOŽNÉ, BUDE SPOLUPRÁCI PŘEDCHÁZET ALESPOŇ PRVNÍ OSOBNÍ SETKÁNÍ, KDE SI PROJDEME DIAGNOSTIKU POHYBOVÉHO APARÁTU a celá spolupráce tak bude ještě efektivnější. Budu tedy rád, když si i přes větší vzdálenost naplánuješ výlet k nám do Berouna. Věřím, že to stojí za to!</span>
                            
                            <p className="font-semibold pt-5">Takže pokud:</p>
                            <ul class="mt-1.5 list-disc list-inside">
                                <li>jsi ochotný/á investovat čas a energii</li>
                                <li>jsi připravený/á udělat nezbytné změny a úpravy svého tréninku a životního stylu</li>
                                <li>chceš posunout svůj progres a výsledky na další úroveň</li>
                            </ul>

                            <p className="font-semibold pt-5">A zároveň jsi:</p>
                            <ul class="mt-1.5 list-disc list-inside">
                                <li>fitness nadšenec, který pravidelně chodí do posilovny</li>
                                <li>závodník a závodnice v kategoriích kulturistiky, classic physique, physique, bikini fitness, wellness bikini fitness atd</li>
                                <li>sportovec věnující se jiným sportů a mající silový trénink jako doplněk svého hlavního sportu</li>
                            </ul>

                            <p className="font-semibold pt-5">Je pro tebe spolupráce on-line správnou volbou!</p>

                        </div>
                        </div>
                    

                        <div class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-100 " role="alert">
                        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                        </svg>
                        <span class="sr-only">Info</span>
                        <div>
                            <span class="font-medium"><strong>Není vhodné pro úplné začátečníky, kteří se chystají do posilovny poprvé nebo mají za sebou jen několik málo prvních tréninků.</strong></span>
                        </div>
                    </div>
   
                </ul>

                

                <span className=" flex flex-col md:flex-row items-center justify-between md:px-10 md:pt-10 ">
                    <span className="flex justify-center items-center ">
                        <p className="md:text-xl text-base font-bold underline decoration-deep-orange-500/50">Cena: 3.500 Kč </p>
                        <p className="text-sm text-gray-900 italic">(minimální délka spolupráce 16 týdnů)</p>
                    </span>
                    <button type="button" class="w-[200px] focus:outline-none text-white bg-deep-orange-500  hover:bg-deep-orange-700 focus:ring-4 focus:ring-deep-orange-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 ">Mám zájem</button>
                    </span>

            </div>

        </div>
      
    </Card>
  );
}

export default OnlineCoaching
