"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

function mujTrenink() {

  const [messages, setMessages] = useState([])


  const fetchMessages = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/get_messages");
      const data = await res.data
      console.log(data.messages)
      setMessages(data.messages); // Uložení hodnot do stavu
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(()=>{
    fetchMessages()
  },[])

  const { isLogged } = useSelector(state =>state.login) //takto muzu cist z reduceru hodnotu kterou chci

  return (
    <div id='container' className='min-h-screen w-screen'>

      {
          isLogged?

          <div className='pt-32 md:pt-48'>
            
          <a href='https://drive.google.com/drive/folders/1HK6K7nRjSEQH0pVGKRTRNdLVWBxPsLUK?usp=sharing'>trenink</a>
          {messages.map((message, index)=>{
              return <div className='p-4 max-w-screen-lg border-2 border-red-500 gap-4 mx-5 my-3 xl:mx-auto' key={index}>
                <p className="text-base border-2 break-words overflow-auto rounded-xl md:text-base lg:text-base xl:text-lg">Odesílatel: {message.author}</p>
                <p className="text-base border-2 break-words overflow-auto rounded-xl md:text-base lg:text-base xl:text-lg">Předmět: {message.subject}</p>
                <p className="text-base border-2  rounded-xl md:text-base lg:text-base xl:text-lg break-words overflow-auto">Zpráva: {message.message}</p>
                <p className="text-sm border-2 break-words overflow-auto rounded-xl md:text-sm lg:text-sm xl:text-sm">Vytvořeno: {message.created}</p>
                </div>
            })}

          </div>
          :
          <div className='pt-32 flex flex-col justify-center items-center gap-10'>
            
            <h1 className=''>Musíš se přihlásit nebo registrovat abys mohl pokračovat</h1>

            <span className='flex'>
              <button className="bg-orange border-2 rounded-full p-1 xl:p-3 whitespace-nowrap text-white hover:brightness-110 hover:scale-105 transition-all"><Link href="/register">Registrovat se</Link></button>
              <button className="bg-orange border-2 rounded-full p-1 xl:p-3 text-white hover:brightness-110 hover:scale-105 transition-all"><Link href="/login">Přihlásit se</Link></button>
            </span>
            
          </div>
      }

      
      
    </div>
  )
}

export default mujTrenink