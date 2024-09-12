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
import JirkaKocvara from "../JKFotky/jirka.jpg"
import Video from 'next-video';
import VideoComponent from "./components/Video";








export default function Home() {


  return (
    <div id="main" className=''>

<div id="background-cointainer-main" className="bg-bgMain bg-cover bg-top md:bg-bottom mt-12 lg:bg-center md:mt-20 lg:mt-28 xl:mt-20 bg-no-repeat w-full" style={{ aspectRatio: '16/9' }}>


        <div className="flex justify-start items-start">

          <div className="p-5 backdrop-blur-md rounded-xl animate-fade mt-72 mx-4 sm:mt-40 sm:ml-10 md:mt-72 lg:mt-40">
            <h1 className="text-white text-4xl sm:text-6xl font-semibold">Jiří Kočvara</h1>
            <p className="text-white text-xl sm:text-2xl">Bodybuilder | Coach</p> 

          </div>



        </div>
        

        <div className="w-screen mt-32 sm:mt-52 md:mt-32 xl:mt-72 flex justify-center items-center">
          <p className="text-2xl m-2 p-3  sm:text-3xl backdrop-blur-lg animate-fade rounded-xl text-center sm:p-5 lg:px-8 text-white font-semibold">&ldquo;Trénuj jinak, přemýšlěj lépe&rdquo;</p>
        </div>

        <div className="flex justify-center items-center my-10 md:my-5 lg:my-10"> 
          <p className="text-5xl text-white animate-bounce"><FaChevronDown></FaChevronDown></p>
        </div>
      
      </div>

      <div className="flex min-h-full py-5 md:py-5 lg:py-10 flex-col lg:flex-row justify-center px-3 md:px-20 lg:px-10 xl:px-32 items-center bg-bgPlates bg-center bg-cover bg-no-repeat">
        
      <div className="mb-2 w-full lg:h-[800px] p-6 m-4 bg-gray-400 border opacity-90 border-gray-200 rounded-xl shadow">
          <span className="flex justify-center items-center">
                <Image href="/"
                 src={JirkaKocvara}
                 className="rounded-xl lg:max-h-[400px] lg:max-w-[350px]"
                 
                 alt="Jiří Kočvara sedící u zrcadla ve Fitness Centrum TJ Lokomotiva Beroun s rukama podél těla"
                 >

              </Image>
              </span>
              <h5 className="my-4 text-4xl text-center font-semibold tracking-tight text-gray-900 ">Jiří Kočvara</h5>
              
              <span className="flex justify-center items-center">
                <div className="md:p-1 font-normal flex flex-col rounded-xl bg-gray-300">

                  <span className="flex flex-col md:flex-row items-center m-2 gap-2 p-2 ">
                    <FaMedal className="text-3xl"></FaMedal>
                    <p className="text-center"><strong>IFBB Vícemistr světa mužů 2017</strong></p>
                  </span>

                  <span className="flex flex-col md:flex-row items-center m-2 gap-2 p-2">
                    <FaMedal className="text-3xl"></FaMedal>
                    <p className="text-center"><strong>IFBB Juniorský absolutní mistr České Republiky 2016</strong></p>
                  </span>

                  <span className="flex flex-col md:flex-row items-center m-2 gap-2 p-2">
                    <CgGym className="text-3xl"/>
                    <p className="text-center"><strong>Více než 15 let silového tréninku</strong></p>
                  </span>

                  <span className="flex flex-col md:flex-row items-center m-2 gap-2 p-2">
                    <IoBookOutline className="text-3xl"/>
                    <p className="text-center"><strong>Trenérská praxe již více než 10 let</strong></p>

                  </span>
              </div>

            </span>
              
          </div>

          <VideoComponent/>
                    
      </div>

      

      <div id="mainPage2" className="text-white h-3/4 bg-mainImage md:pb-10 bg-cover bg-no-repeat bg-left-bottom sm:bg-center">

        <div className="flex justify-center flex-col items-center ">

          <h2 className="mt-10 text-3xl sm:text-4xl backdrop-blur-lg animate-fade rounded-xl p-4">Co nabízím</h2>
          <hr className="w-2/3 h-1 mx-auto my-4 bg-white border-0 rounded md:my-10 animate-fade "></hr>


        </div>
     
      <div className="flex flex-col flex-1 md:items-stretch animate-fade lg:flex-row justify-center items-center gap-8 mx-2 md:mx-5 p-3 md:p-5 backdrop-blur-md rounded-lg">

          <div className="min-h-[325px] lg:w-1/3 p-6 md:pt-9 hover:scale-105 transition-all text-center bg-white border rounded-lg shadow">
              <span className="flex justify-center items-center">
                <Image href="/"
                 src={Coach}
                 alt="Ikona trenéra"
                 >

              </Image>
              </span>
              <h5 className=" mb-2 text-2xl font-semibold tracking-tight text-gray-900 ">Osobní trénink</h5>
              <p className="mb-3 font-normal text-gray-900 text-center min-h-[120px]">Osobní individuální trénink je klíčem k maximálnímu dosažení vašich fitness cílů s maximální efektivitou. S našimi odbornými trenéry získáte osobní přístup, který vám pomůže překonat překážky a dosáhnout výsledků, které jste si vždy přáli.</p>
              <Link href="/" className='text-center text-blue-500 underline font-semibold text-lg'>To mě zajímá!</Link>

          </div>

          <div className=" min-h-[325px]  lg:w-1/3 p-6 md:pt-9 hover:scale-105 transition-all text-center bg-white border border-gray-200 rounded-lg shadow">
          <span className="flex justify-center items-center">
                <Image href="/"
                 src={Task}
                 alt="Ikona úkolů"
                 >

              </Image>
              </span>
              <h5 className=" mb-2  text-2xl text-center font-semibold tracking-tight text-gray-900 ">Tréninkový plán</h5>
              <p className="mb-3 font-normal text-gray-900 text-center min-h-[120px]">Tréninkový plán je klíčem k dosažení vašich fitness cílů s maximální efektivitou a podporou. Tréninkové programy jsou navrženy tak, aby odpovídaly vašim individuálním potřebám a cílům, ať už se snažíte zhubnout, nabrat svaly nebo zlepšit svou kondici.</p>
              <Link href="/" className='text-center text-blue-500 underline font-semibold text-lg'>Chci vědět víc!</Link>
              
          </div>

          <div className=" min-h-[325px] lg:w-1/3 p-6 md:pt-9 hover:scale-105 transition-all text-center bg-white border border-gray-200 rounded-lg shadow  ">
          <span className="flex justify-center items-center">
                <Image href="/"
                 src={Restaurant}
                 alt="Ikona plánování"
                 >

              </Image>
              </span>

                  <h5 className="mb-2 text-2xl text-center font-semibold tracking-tight text-gray-900  ">Stravovací plán</h5>
                  <p className="mb-3 font-normal text-gray-900 text-center min-h-[120px]">Stravovací plán je základním kamenem úspěchu na cestě za vašimi fitness cíli. Kvalitní výživa je klíčová nejen pro optimalizaci výkonu během tréninků, ale i pro celkové zdraví a pohodu. </p>
                  <Link href="/" className='text-center text-blue-500 underline font-semibold text-lg'>To je přesně pro mě!</Link>
                
          </div>


      </div>  

      </div>

    </div>
    
  );
}