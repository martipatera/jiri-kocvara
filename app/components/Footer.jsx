import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import Logo from "./logoBlack.png"
import Image from 'next/image';





function Footer() {
  return (
    <footer className='flex flex-col md:flex-row justify-between items-center gap-5 h-max px-3 font-bold bg-gray-500 '>

        <div className='flex pt-5 md:py-5 order-1'>
        <Image src={Logo}
              height={65}
              width={75}
              alt="Logo stránky Jiřího Kočvary" 
              priority
              className="sm:ml-10 ml-0 md:ml-0 lg:ml-0 hidden lg:block"
          />

          <Image src={Logo}
              height={65}
              width={75}
              alt="Logo stránky Jiřího Kočvary" 
              priority
              className="lg:hidden"
          />

             
        </div>
        
        <div className='pr-5 order-3 text-sm text-center md:text-right pb-5 md:pb-0'>
              <p>Jiří Kočvara - Coach</p>
              <p>IČO: 05430402</p>
              <p>U Trati 57</p>
              <p>267 12, Loděnice </p>
          </div> 
      

      <div className='flex flex-row items-center gap-5 order-2 '>
        <a href="https://martinpatera.cz/" target='_blank' className='text-sm'>Copyright ©2024 Martin Patera</a>
        
      </div>
      
    </footer>
  )
}

export default Footer