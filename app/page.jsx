import Link from "next/link";
import Image from "next/image";

import Restaurant from "./restaurant.png"
import Task from "./task.png"
import Coach from "./trainer.png"
import { CgGym } from "react-icons/cg";
import { CiCircleChevDown } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import gymBackground from "../public/gymBackground.jpg"
import { IoBookOutline } from "react-icons/io5";
import { FaMedal } from "react-icons/fa";
import { CiMedal } from "react-icons/ci";
import JirkaKocvara from "../public/JirkaKocvara.jpg"






export default function Home() {


  



  return (
    <div id="main" className="">

      <div className="h-screen bg-mainImage bg-cover bg-no-repeat bg-left-bottom sm:bg-center ">

        <div className="flex justify-start items-start">

          <div className="p-5 backdrop-blur-md rounded-xl animate-fade mt-36 mx-4 sm:mt-40 sm:ml-10 md:mt-60">
            <h1 className="text-white text-4xl sm:text-6xl font-semibold">Jiří Kočvara</h1>
            <p className="text-white text-xl sm:text-2xl">Bodybuilder | Coach</p> 

          </div>



        </div>
        

        <div className="w-screen mt-32 sm:mt-52 flex justify-center items-center">
          <p className="text-2xl m-2 p-3  sm:text-3xl backdrop-blur-lg animate-fade rounded-xl text-center sm:p-5 lg:px-8 text-white font-semibold">&ldquo;Trénuj jinak, přemýšlěj lépe&rdquo;</p>
        </div>

        <div className="flex justify-center items-center mt-16"> 
          <p className="text-5xl text-white animate-bounce"><FaChevronDown></FaChevronDown></p>
        </div>
      
      </div>

      <div className="flex min-h-[800px] flex-col justify-center items-center bg-mainImage bg-cover bg-no-repeat">

      
        
      <div className="mb-10 max-w-3xl min-h-[325px] p-6 m-4 bg-gray-400 border opacity-95 border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
          <span className="flex justify-center items-center">
                <Image href="/"
                 src={JirkaKocvara}
                 className="rounded-xl"
                 height={250}
                 width={350}
                 alt="Jiří Kočvara stojící u zrcadla ve Fitness Centrum TJ Lokomotiva Beroun s rukama v pažích"
                 >

              </Image>
              </span>
              <h5 className="my-4 text-4xl text-center font-semibold tracking-tight text-gray-900 ">Jiří Kočvara</h5>
              
              <span className="flex justify-center items-center">
                <div className="md:p-1 font-normal flex flex-col rounded-xl bg-gray-300">

                  <span className="flex flex-col md:flex-row items-center m-2 gap-2 p-2 ">
                    <FaMedal className="text-5xl"></FaMedal>
                    <p className="text-center"><strong>IFBB Vícemistr světa mužů 2017</strong></p>
                  </span>

                  <span className="flex flex-col md:flex-row items-center m-2 gap-2 p-2">
                    <FaMedal className="text-5xl"></FaMedal>
                    <p className="text-center"><strong>IFBB Juniorský absolutní mistr České Republiky 2016</strong></p>
                  </span>

                  <span className="flex flex-col md:flex-row items-center m-2 gap-2 p-2">
                    <CgGym className="text-5xl"/>
                    <p className="text-center"><strong>Více než 15 let silového tréninku</strong></p>
                  </span>

                  <span className="flex flex-col md:flex-row items-center m-2 gap-2 p-2">
                    <IoBookOutline className="text-5xl"/>
                    <p className="text-center"><strong>Trenérská praxe již více než 10 let</strong></p>

                  </span>
              </div>

            </span>
              
              
          </div>
      </div>

      

      <div id="mainPage2" className="text-white h-3/4 bg-mainImage  bg-cover bg-no-repeat bg-left-bottom sm:bg-center">

        <div className="flex justify-center flex-col items-center ">

          <h2 className="mt-10 text-2xl sm:text-4xl backdrop-blur-lg animate-fade rounded-xl p-4">Co nabízím</h2>
          <hr className="w-2/3 h-1 mx-auto my-4 bg-white border-0 rounded md:my-10 animate-fade "></hr>


        </div>
     
      <div className="flex flex-col flex-1 md:items-stretch animate-fade m-5 lg:flex-row justify-center items-center gap-8 mx-5 p-5 backdrop-blur-md rounded-lg">

          <div className="min-h-[325px] lg:w-1/3 p-6 md:pt-9 hover:scale-105 transition-all text-center bg-white border  rounded-lg shadow ">
              <span className="flex justify-center items-center">
                <Image href="/"
                 src={Coach}
                 alt="Ikona trenéra"
                 >

              </Image>
              </span>
              <h5 className=" mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Osobní trénink</h5>
              
              <p className="mb-3 font-normal text-gray-900 text-center">Osobní individuální trénink je klíčem k maximálnímu dosažení vašich fitness cílů s maximální efektivitou. S našimi odbornými trenéry získáte osobní přístup, který vám pomůže překonat překážky a dosáhnout výsledků, které jste si vždy přáli.</p>
              
          </div>

          <div className=" min-h-[325px] lg:w-1/3 p-6 md:pt-9 hover:scale-105 transition-all bg-white border border-gray-200 rounded-lg shadow  ">
          <span className="flex justify-center items-center">
                <Image href="/"
                 src={Task}
                 alt="Ikona úkolů"
                 >

              </Image>
              </span>
              <h5 className=" mb-2  text-2xl text-center font-semibold tracking-tight text-gray-900 ">Tréninkový plán</h5>
              
              <p className="mb-3 font-normal text-gray-900 text-center">Tréninkový plán je klíčem k dosažení vašich fitness cílů s maximální efektivitou a podporou. Tréninkové programy jsou navrženy tak, aby odpovídaly vašim individuálním potřebám a cílům, ať už se snažíte zhubnout, nabrat svaly nebo zlepšit svou kondici.</p>
              
          </div>
          <div className=" min-h-[325px] lg:w-1/3 p-6 md:pt-9 hover:scale-105 transition-all bg-white border border-gray-200 rounded-lg shadow  ">
          <span className="flex justify-center items-center">
                <Image href="/"
                 src={Restaurant}
                 alt="Ikona plánování"
                 >

              </Image>
              </span>

                <h5 className="mb-2 text-2xl text-center font-semibold tracking-tight  text-gray-900  ">Stravovací plán</h5>
              <p className="mb-3 font-normal text-gray-900 text-center">Stravovací plán je základním kamenem úspěchu na cestě za vašimi fitness cíli. Kvalitní výživa je klíčová nejen pro optimalizaci výkonu během tréninků, ale i pro celkové zdraví a pohodu.</p>
              
          </div>

      </div>  
      

        <div className="flex justify-center items-center mx-32 pb-10">
          <button className="bg-orange border-2 font-semibold animate-fade rounded-full p-1 xl:p-3 text-white hover:brightness-110 hover:scale-105 transition-all whitespace-nowrap"><Link href="/sluzby">Chci vědet víc!</Link></button>
        </div>

      </div>

    </div>
    
  );
}
