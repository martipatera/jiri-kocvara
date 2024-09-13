"use client"

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { Label, Textarea } from "flowbite-react";
import { TextInput } from "flowbite-react";




function MojiKlienti() {


  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const { email, isLogged, role } = useSelector(state =>state.login) //takto muzu cist z reduceru hodnotu kterou chci

  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [msg, setMsg] = useState("")
  const [users, setUsers] = useState([]); // Stav pro uchovávání emailů

  console.log(apiUrl)
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
      

      const res = await axios.post(apiUrl+"/api/post_messages",{
        author,
        email,
        subject,
        message,

      });
      setMsg(res.data.message)
      setSubject("")
      setMessage("")
      fetchMessages()
    } catch (error) {
      console.error("Error fetching data:", error);
    }

  };

  const fetchMessages = async () => {
    try {
      const res = await axios.get(apiUrl+"/api/get_messages",{
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });
      const data = await res.data
      await setMessages(data.messages);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  
const deleteMessages = async (id) => {

      try {
        const res = await axios.delete(apiUrl+"/api/delete_message",{
          data: {id}
        });
        const data = await res.data
      } 
      catch (error) {
        console.error("Error fetching data:", error);
      }
      fetchMessages()

    };
  
    const fetchUserData = async () => {
      try {
        const res = await axios.get(apiUrl+"/api/auth/klienti");
        const data = await res.data
        await setUsers(data.users); // Uložení hodnot do stavu
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    
  useEffect(() => {

    fetchMessages();
    fetchUserData();
  }, [[fetchMessages, fetchUserData]]); // useEffect bez závislostí spustí fetchData pouze jednou při mountnutí komponenty

  return (
    <div id='container' className='min-h-screen'>

      {
          isLogged && (role === "admin") || (role === "trenér")?
          <div className=' pt-40 mx-5 sm:pt-48'>
            
            <div className='flex flex-wrap  gap-4 lg:mx-32'>

              {users.length > 0 ? (
                  users.map((user, index) => {
                    return <div className='flex flex-col border-2 rounded-lg border-gray-400 shadow  gap-2 p-5 md:p-3 lg:p-4 xl-p-5' key={index}>
                      <h2 className='font-bold text-lg'>Klient</h2>
                      <hr className="w-full h-1 mx-auto bg-red-500 border-0 rounded  animate-fade"></hr>

                      <p><strong>Jméno:</strong> {user.name}</p>
                      <p><strong>Email:</strong> {user.email}</p>
                      <span className='flex'>
                        <a href={`mailto:${user.email}`} target='_blank' className="text-black border-black  text-center text-sm md:text-base border-2 rounded-full p-2 xl:p-3 max-w-40  hover:brightness-110 hover:scale-105 transition-all"  >Poslat trénink mailem</a>
                        <a href="https://drive.google.com/drive/folders/1jlAP3qufHYeumCYXEkvbOb_ca4ZnO4LV?usp=sharing" target='_blank' className="text-black border-black text-center md:text-base text-sm max-w-40  border-2 rounded-full p-2 xl:p-3  hover:brightness-110 hover:scale-105 transition-all">Poslat trénink na disk</a>
                      </span>
                      
                    </div> // Přidání klíče při mapování
                    })
                  ) : 
                (
                  <p>Načítání emailů...</p>
                )}

            </div>

            <div className='flex flex-col border-2 rounded-lg border-gray-400 shadow lg:mx-32 gap-2 my-3 p-5'>
              <h2 className='font-bold text-lg'>Nová zpráva všem</h2>
              <hr className="w-full h-1 mx-auto bg-red-500 border-0 rounded  animate-fade"></hr>


              <div className="max-w-lg ">
                <div className="mb-2 block">
                  <Label htmlFor="subject" value="Předmět" className='font-bold text-lg' />
                </div>
                <TextInput value={subject} onChange={e => setSubject(e.target.value)} id="subject" type="text" placeholder="Předmět" required />
              </div>

              <div className="max-w-full">
                <div className="mb-2 block">
                  <Label htmlFor="comment" value="Tvoje zpráva" className='font-bold text-lg'/>
                </div>
                <Textarea value={message} onChange={e => setMessage(e.target.value)} id="comment" placeholder="Zpráva" required rows={4} />
                <span className='flex flex-col justify-center items-center mt-4'>
                    <button onClick={sendMessages} className="text-black border-black border-2 rounded-full p-1 xl:p-3 whitespace-nowrap  hover:brightness-110 hover:scale-105 transition-all">Poslat zprávu</button>
                    <p className='pt-2'><strong>{msg}</strong></p>
                </span>
            

              </div>

              </div>

            

            {[...messages].reverse().map((message, index)=>{
              return <div className='flex flex-col border-2 rounded-lg border-gray-400 shadow lg:mx-32 gap-2 my-3 p-5' key={index}>
                <h2 className='font-bold text-lg'>Nová zpráva</h2>
                <hr className="w-full h-1 mx-auto bg-red-500 border-0 rounded  animate-fade"></hr>
                <p className="text-base border-2  break-words overflow-auto rounded-xl md:text-base lg:text-base xl:text-lg"><strong>Odesílatel: </strong>{message.author}</p>
                <p className="text-base border-2  break-words overflow-auto rounded-xl md:text-base lg:text-base xl:text-lg"><strong>Předmět: </strong> {message.subject}</p>
                <p className="text-base border-2  break-words overflow-auto rounded-xl md:text-base lg:text-base xl:text-lg"><strong>Zpráva: </strong> {message.message}</p>
                <p className="text-sm border-2  break-words overflow-auto rounded-xl md:text-sm lg:text-sm xl:text-sm"><strong>Vytvořeno: </strong> {message.created}</p>
                <button onClick={()=>deleteMessages(message.id)} className="text-black w-52 border-black border-2 rounded-full p-1 xl:p-3 whitespace-nowrap  hover:brightness-110 hover:scale-105 transition-all">Odstranit zprávu</button>
                </div>
            })}
          </div>
          :
          <div className='pt-32 flex flex-col justify-center items-center gap-10'>
            
            <h1>Musíš se přihlásit nebo registrovat abys mohl pokračovat</h1>

            <span className='flex'>
              <button className="bg-orange border-2 rounded-full p-1 xl:p-3 whitespace-nowrap text-black border-black hover:brightness-110 hover:scale-105 transition-all"><Link href="/register">Registrovat se</Link></button>
              <button className="bg-orange border-2 rounded-full p-1 xl:p-3 text-black hover:brightness-110 border-black hover:scale-105 transition-all"><Link href="/login">Přihlásit se</Link></button>
            </span>
            
          </div>
      }
      
    </div>
  );
}

export default MojiKlienti;
