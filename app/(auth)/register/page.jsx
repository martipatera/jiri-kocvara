"use client"

import React from 'react'
import Logo from "../../components/navbarLogoJiriKocvara.png"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'

function Register() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [registerCode, setRegisterCode] = useState("")
    const [msg, setMsg] = useState("")
    const [registrovan, setRegistrovan] = useState(false)
    const role = "klient"


    const handleRegister = async (e) =>{
        e.preventDefault()

       

        try{
            if(registerCode === "KOCVARA"){
                const res = await axios.post("/api/auth/register",{
                    email,
                    password,
                    registerCode,
                    role
                })
                setMsg(res.data.message)
                setRegistrovan(true)
            }
            else{
                setMsg("Prosím použij správný registrační kód tvého trenéra")
                setRegistrovan(false)
            }
            
        }
        catch(err){
            setMsg(err.res?.data?.message || "Uživatel je již registrován")
            setRegistrovan(false)
        }
        

    }

   




  return (

    <div className='h-screen'>

        {
            !registrovan? 
            <div className=''>
                <section className="bg-gray-50 h-screen">
            <div className="flex flex-col items-center justify-center px-6 pt-20 md:pt-60 mx-auto h-screen pb-16 lg:py-30 ">
                
                    
                    <Image 
                        alt="logo"
                        src={Logo}
                        height={50}
                        className='m-5 md:mt-10'  
                        >
                    </Image>
                    
                        
                
                <div className="w-full bg-white rounded-lg shadow md:mb-20 md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-0">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Registrovat se
                        </h1>
                        <form className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5  " placeholder="tvujemail@email.com" required></input>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Heslo</label>
                                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " required></input>
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 ">Heslo znovu</label>
                                <input value={passwordConfirm} onChange={(e)=>setPasswordConfirm(e.target.value)} type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " required></input>
                            </div>
                            <div>
                                <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 ">Registrační kód</label>
                                <input value={registerCode} onChange={(e)=>setRegisterCode(e.target.value)} type="code" name="code" id="code" placeholder="TVUJ KOD" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " required></input>
                            </div>
                            <div className="flex items-start">
                                
                                
                            </div>
                            <button onClick={handleRegister} type="submit" className="w-full text-white bg-orange hover:brightness-110 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Registrovat</button>
                            <p className="text-sm font-light text-gray-500 ">
                                Už máš účet? <a href="/login" className="font-medium text-orange hover:underline ">Přihlas se tady</a>
                            </p>
                            <p>{msg}</p>
                        </form>
                    </div>
                </div>
            </div>
          </section></div>
            :
            <div><section className="bg-gray-50 ">
            <div className="flex flex-col items-center justify-center px-6 pt-28 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 ">
                    
                      <Image 
                          alt="logo"
                          src={Logo}
                          height={50}
                          
                          >
                      </Image>
                    
                        
                </a>
                <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Registrovat se
                        </h1>
                        <form className="space-y-4 md:space-y-6">
                            
                            <button type="submit" className="w-full text-white bg-orange hover:brightness-110 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center"><Link href="/login">Přihlaš se zde</Link></button>
                           
                            <p><strong>{msg}</strong></p>
                        </form>
                    </div>
                </div>
            </div>
          </section></div>
        }
    </div>
    
  )
}

export default Register