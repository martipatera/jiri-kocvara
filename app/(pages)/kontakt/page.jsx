import React from 'react'
import JirkaKocvara from "../../../public/JirkaKocvara.jpg"
import Image from 'next/image'

import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";


export const metadata = {
  title: 'Kontakt | Jiří Kočvara',
  description: 'Máte dotazy nebo potřebujete více informací? Kontaktujte nás prostřednictvím našeho kontaktního formuláře nebo nás navštivte osobně.',
};



function Kontakt() {
  return (
    <div id='container' className='min-h-screen w-full overflow-x-hidden'>
      <div className='bg-slate-200 pt-28 sm:pt-32  px-5 lg:px-10'>

          <h1 className='text-3xl md:text-4xl text-center animate-fade font-semibold'>Kontakt</h1>
          <hr className="w-2/3 h-1 mx-auto my-4 bg-red-500 border-0 rounded md:my-10 animate-fade"></hr>


          <div className=' bg-slate-50 border-2 border-gray-300 rounded-lg shadow flex flex-col lg:flex-row justify-around p-3 mb-3 md:p-5'>

            <div className='flex flex-col  flex-wrap gap-3 md:gap-4'>

              <p className='text-2xl md:text-4xl flex-wrap break-words font-semibold'>Jiří Kočvara</p>

              <span className='flex flex-row justify-start items-center text-lg md:text-xl flex-wrap break-words'>
                <FaSquareFacebook></FaSquareFacebook>
                <a href="https://www.facebook.com/jirka.kocvara.1" className='font-semibold' target='_blank'>Facebook</a>
              </span>

              <span className='flex flex-row  justify-start items-center text-lg md:text-xl flex-wrap break-words'>
                <FaInstagram></FaInstagram>
                <a href="https://www.instagram.com/jiri_kocvara/" className='font-semibold' target='_blank'>Instagram</a>
              </span>

              <span className='flex flex-row justify-start items-center text-lg md:text-xl flex-wrap break-words'>
                <MdOutlineEmail></MdOutlineEmail>
                <a href="mailto:trener.jirikocvara@gmail.com" target='_blank' className='break-words overflow-auto font-semibold'>trener.jirikocvara@gmail.com</a>
              </span>

              <hr className="w-full h-1 mx-auto my-4 bg-red-500 border-0 rounded md:my-10 animate-fade "></hr>


              <span className='flex flex-col justify-center items-start text-lg md:text-xl flex-wrap break-words'>
                <a href="https://lokomotivaberoun.cz/fitcentrum/" target='_blank' className='break-words font-semibold text-xl md:text-2xl'>TJ Lokomotiva Beroun</a>
                <p>266 01 Beroun-Město</p>
                <p>Tyršova 85</p>
              </span>

              <span className='flex flex-col justify-center items-start text-lg md:text-xl flex-wrap break-words'>
                <a href="https://www.tyran.cz/" target='_blank' className='break-words text-xl font-semibold md:text-2xl'>Fitness Tyran</a>
                <p>266 01 Beroun-Město</p>
                <p>Na Parkáně 366</p>
              </span>

              

              
            </div>

                <Image src={JirkaKocvara}
                    className='rounded-xl mt-5 w-full max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl h-auto lg:ml-4'
                    alt='Jiří Kočvara stojící u zrcadla ve Fitness Centrum TJ Lokomotiva Beroun s rukama v pažích'
                    
                    >

                </Image>

              

          </div>

          <div className=' bg-slate-50 border-2 border-gray-300 rounded-lg items-center shadow flex flex-grow flex-col md:flex-row justify-around gap-5 p-3 mb-3 md:p-3'>

            <span className='text-center'>
              <h2 className='text-xl font-semibold lg:text-2xl'>TJ Lokomotiva Beroun</h2> 
              <iframe className='w-full h-auto lg:h-[250px] lg:w-[350px] xl:h-[350px] xl:w-[500px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2566.779333457431!2d14.069963512308655!3d49.95924177138367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ba512d3e133fd%3A0x3cd487c4abce4f7c!2sTJ%20Lokomotiva%20Beroun!5e0!3m2!1scs!2scz!4v1725450640272!5m2!1scs!2scz"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>            
            </span>

            <span className='text-center'>
              <h2 className='text-xl font-semibold lg:text-2xl'>Fitness Tyran</h2> 
              <iframe className='w-full  h-auto lg:h-[250px] lg:w-[350px] xl:h-[350px] xl:w-[500px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2566.5777338435123!2d14.07391581230878!3d49.96302317138436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ba514940f2017%3A0xfd025ebad539d4fb!2sFITNESS%20TYRAN!5e0!3m2!1scs!2scz!4v1725450587904!5m2!1scs!2scz"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </span>
          </div>

      </div>
    </div>
  )
}

export default Kontakt