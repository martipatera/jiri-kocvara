"use client"

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { Label, Textarea } from "flowbite-react";
import { TextInput } from "flowbite-react";




function MojiKlienti() {

  const { email, isLogged, role } = useSelector(state =>state.login) //takto muzu cist z reduceru hodnotu kterou chci

  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [msg, setMsg] = useState("")
  const [users, setUsers] = useState([]); // Stav pro uchovávání emailů


  let author = ""

  if(role === "admin"){
    author = "Martin Patera - Admin"
  }
  else{
    author = "Jiří Kočvara - Trenér"
  }


  const sendMessages = async (e) => {

    e.preventDefault()

    


    if (!author || !subject || !message) {
      console.error("Všechna pole musí být vyplněna.");
      return;
    }    

    try {
      

      const res = await axios.post("http://localhost:3000/api/post_messages",{
        author,
        email,
        subject,
        message,

      });
      setMsg(res.data.message)
      fetchMessages()
      setSubject("")
      setMessage("")
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchMessages = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/get_messages");
      const data = await res.data
      setMessages(data.messages); // Uložení hodnot do stavu
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  
      

  useEffect(() => {

    const fetchUserData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/auth/klienti");
        const data = await res.data
        await setUsers(data.users); // Uložení hodnot do stavu
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    

    fetchMessages()
    fetchUserData();
  }, []); // useEffect bez závislostí spustí fetchData pouze jednou při mountnutí komponenty

  return (
    <div id='container' className='min-h-screen'>

      {
          isLogged && (role === "admin") || (role === "trenér")?
          <div className=' pt-40 mx-5 sm:pt-48'>
            <div className=''>

              {users.length > 0 ? (
                  users.map((user, index) => {
                    return <div className='flex flex-col border-2 border-red-500' key={index}>
                      <p>Jméno {user.name}</p>
                      <p>Email: {user.email}</p>
                      <a href={`mailto:${user.email}`} target='_blank' className="bg-orange text-center max-w-40 border-2 rounded-full p-1 xl:p-3 whitespace-nowrap text-white hover:brightness-110 hover:scale-105 transition-all"  >Poslat trénink mailem</a>
                      <a href="https://drive.google.com/drive/folders/1jlAP3qufHYeumCYXEkvbOb_ca4ZnO4LV?usp=sharing" target='_blank' className="bg-orange text-center max-w-40 border-2 rounded-full p-1 xl:p-3 whitespace-nowrap text-white hover:brightness-110 hover:scale-105 transition-all">Poslat trénink na disk</a>
                      
                    </div> // Přidání klíče při mapování
                    })
                  ) : 
                (
                  <p>Načítání emailů...</p>
                )}

            </div>

              <div className="max-w-lg">
              <div className="mb-2 block">
                <Label htmlFor="subject" value="Předmět" />
              </div>
              <TextInput value={subject} onChange={e => setSubject(e.target.value)} id="subject" type="text" placeholder="Předmět" required />
            </div>

            <div className="max-w-lg">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Tvoje zpráva" />
              </div>
              <Textarea value={message} onChange={e => setMessage(e.target.value)} id="comment" placeholder="Zpráva" required rows={4} />
            </div>
            <button onClick={sendMessages} className="bg-orange border-2 rounded-full p-1 xl:p-3 whitespace-nowrap text-white hover:brightness-110 hover:scale-105 transition-all">Poslat zprávu</button>
            <p>{msg}</p>

            {[...messages].reverse().map((message, index)=>{
              return <div className='p-4 max-w-screen-lg border-2 border-red-500 gap-4 mx-5 my-3 xl:mx-auto' key={index}>
                <p className="text-base border-2 my-2 break-words overflow-auto rounded-xl md:text-base lg:text-base xl:text-lg">Odesílatel:{message.author}</p>
                <p className="text-base border-2 my-2 break-words overflow-auto rounded-xl md:text-base lg:text-base xl:text-lg">Předmět: {message.subject}</p>
                <p className="text-base border-2 my-2 break-words overflow-auto rounded-xl md:text-base lg:text-base xl:text-lg">Zpráva: {message.message}</p>
                <p className="text-sm border-2 my-2 break-words overflow-auto rounded-xl md:text-sm lg:text-sm xl:text-sm">Vytvořeno: {message.created}</p>
                </div>
            })}
          </div>
          :
          <div className='pt-32 flex flex-col justify-center items-center gap-10'>
            
            <h1>Musíš se přihlásit nebo registrovat abys mohl pokračovat</h1>

            <span className='flex'>
              <button className="bg-orange border-2 rounded-full p-1 xl:p-3 whitespace-nowrap text-white hover:brightness-110 hover:scale-105 transition-all"><Link href="/register">Registrovat se</Link></button>
              <button className="bg-orange border-2 rounded-full p-1 xl:p-3 text-white hover:brightness-110 hover:scale-105 transition-all"><Link href="/login">Přihlásit se</Link></button>
            </span>
            
          </div>
      }
      
    </div>
  );
}

export default MojiKlienti;
