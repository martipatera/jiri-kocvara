import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import Logo from "./logoBlack.png"
import Image from 'next/image';





function Footer() {
  return (
    <footer className='flex flex-col md:flex-row justify-between items-center h-max font-bold bg-gray-500 px-3 '>

        <div className='flex pb-5 md:pb-0 order-3 '>
        <Image src={Logo}
              height={65}
              width={120}
              alt="Logo stránky Jiřího Kočvary" 
              priority
              className="hidden lg:block"
          />

          <Image src={Logo}
              height={75}
              width={75}
              alt="Logo stránky Jiřího Kočvary" 
              priority
              className="lg:hidden"
          />

             
        </div>
        
        <div className='order-1 text-sm text-center md:text-left pt-5 md:py-5  '>
              <p className='whitespace-nowrap' >Jiří Kočvara - Coach</p>
              <p>IČO: 05430402</p>
              <p>U Trati 57</p>
              <p>267 12, Loděnice </p>
          </div> 
      

      <div className='order-2 my-4 md:my-0  w-full text-center'>
        <a href="https://martinpatera.cz/" target='_blank' className='text-sm'>©2024 Martin Patera</a>
        
      </div>
      
    </footer>
  )
}

export default Footer