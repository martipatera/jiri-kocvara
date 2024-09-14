"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'


function MujTrenink() {

  const [messages, setMessages] = useState([])

  const apiUrl = process.env.EXT_PUBLIC_API_URL



  const fetchMessages = async () => {
    
    try {
      const res = await axios.get("/api/get_messages", {
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }});
      const data = await res.data
      
      setMessages(data.messages); // Uložení hodnot do stavu
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  useEffect(()=>{
    fetchMessages()

  },[])

  const { isLogged, role } = useSelector(state =>state.login) //takto muzu cist z reduceru hodnotu kterou chci

  return (
    <div id='container' className='min-h-screen w-screen'>

      {
          isLogged && (role === "klient") || (role === "admin")?

          <div className='pt-36 md:pt-48'>
            
            <span className='flex justify-center items-center'>
              <a href="https://drive.google.com/drive/folders/1jlAP3qufHYeumCYXEkvbOb_ca4ZnO4LV?usp=sharing" target='_blank' className="text-black border-black text-center max-w-40 border-2 rounded-full p-1 xl:p-3 whitespace-nowrap  hover:brightness-110 hover:scale-105 transition-all">Moje plány</a>
            </span>
            {[...messages].reverse().map((message, index)=>{
              return <div className='flex flex-col border-2 rounded-lg border-gray-400 shadow mx-5 lg:mx-32 gap-2 my-3 p-5' key={index}>
                <h2 className='font-bold text-lg'>Nová zpráva</h2>
                <hr className="w-full h-1 mx-auto bg-red-500 border-0 rounded  animate-fade"></hr>
                <p className="text-base border-2 break-words overflow-auto rounded-xl md:text-base lg:text-base xl:text-lg"><strong>Odesílatel:</strong> {message.author}</p>
                <p className="text-base border-2 break-words overflow-auto rounded-xl md:text-base lg:text-base xl:text-lg"><strong>Předmět:</strong> {message.subject}</p>
                <p className="text-base border-2  rounded-xl md:text-base lg:text-base xl:text-lg break-words overflow-auto"><strong>Zpráva:</strong> {message.message}</p>
                <p className="text-sm border-2 break-words overflow-auto rounded-xl md:text-sm lg:text-sm xl:text-sm"><strong>Vytvořeno:</strong> {message.created}</p>
                </div>
            })}

          </div>
          :
          <div className='pt-32 flex flex-col justify-center items-center gap-10'>
            
            <h1 className=''>Musíš se přihlásit nebo registrovat abys mohl pokračovat</h1>

            <span className='flex'>
              <button className="bg-orange border-2 rounded-full p-1 xl:p-3 whitespace-nowrap text-black hover:brightness-110 border-black hover:scale-105 transition-all"><Link href="/register">Registrovat se</Link></button>
              <button className="bg-orange border-2 rounded-full p-1 xl:p-3 text-black hover:brightness-110 hover:scale-105 border-black transition-all"><Link href="/login">Přihlásit se</Link></button>
            </span>
            
          </div>
      }

      
      
    </div>
  )
}


export default MujTrenink