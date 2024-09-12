import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";





function Footer() {
  return (
    <footer className='flex justify-center items-center gap-5 h-16 px-3 font-bold border-2 bg-gray-600 border-black '>
      <a href="https://martinpatera.cz/" target='_blank' className='text-base'>Copyright ©2024 Martin Patera</a>
      <a href="https://www.facebook.com/martin.patera.3" className='text-2xl' target='_blank'><FaSquareFacebook ></FaSquareFacebook></a>
      <a href="https://www.instagram.com/_martinpatera_/" target='_blank' className='text-2xl'><FaInstagram></FaInstagram></a>
      <a href="mailto:martinaretap@gmail.com" target='_blank' className='text-2xl'><MdOutlineMailOutline></MdOutlineMailOutline></a>
    </footer>
  )
}

export default Footer