"use client"


import React from 'react'
import Logo from "../logoBlack.png"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'
import Loading from '@/app/components/Loading'



function Register() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [registerCode, setRegisterCode] = useState("")
    const [msg, setMsg] = useState("")
    const [registrovan, setRegistrovan] = useState(false)
    const [loading, setLoading] = useState(false)
    const role = "klient"
    const code = process.env.NEXT_PUBLIC_REGISTER_CODE

    const handleRegister = async (e) =>{
        e.preventDefault()
        setLoading(true)


        const apiUrl = process.env.NEXT_PUBLIC_API_URL

       

        try{
            if(registerCode === code ){
                const res = await axios.post("https://jiri-kocvara.onrender.com/api/register",{
                    name,
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
        finally{
            setLoading(false)
        }
        

    }

   




  return (

    <div id='register' className='min-h-screen'>

        {
            !registrovan? 
            <div className=''>
                <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 pt-24 md:pt-24 mx-autopb-16 lg:py-30 ">
                
                    
                    <Image 
                        alt="logo Jiri Kocvara"
                        src={Logo}
                        height={150}
                        width={150}
                        className='m-5 md:mt-10'  
                        >
                    </Image>
                    
                        
                
                <div className="w-full bg-white rounded-lg shadow md:mb-20 md:mt-0 sm:max-w-md xl:p-5 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-4">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Registrovat se
                        </h1>
                        <form className="space-y-4 md:space-y-6">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Jméno a příjmení</label>
                                <input value={name} onChange={(e)=>setName(e.target.value)} type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5  " placeholder="Křestní / Příjmení" required></input>
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email &#40;na který budou zasílány plány&#41;</label>
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
                            <button onClick={handleRegister} type="submit" className="w-full text-black border-black border hover:brightness-110  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">{
                            loading? <Loading/> : "Registrovat"}
                            </button>
                            <p className="text-sm font-light text-gray-500 ">
                                Už máš účet? <a href="/login" className="font-medium text-black hover:underline ">Přihlas se tady</a>
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
                          alt="logo Jiri Kocvara"
                          src={Logo}
                          height={150}
                        width={150}
                          
                          >
                      </Image>
                    
                        
                </a>
                <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Registrovat se
                        </h1>
                        <form className="space-y-4 md:space-y-6">
                            
                            <button type="submit" className="w-full text-black border-black border hover:brightness-110 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center"><Link href="/login">Přihlaš se zde</Link></button>
                           
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