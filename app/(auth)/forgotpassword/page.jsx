"use client"

import Link from 'next/link'
import React from 'react'
import Logo from "../logoBlack.png"
import Image from 'next/image'
import axios from 'axios'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logIn } from '@/app/store/loginStore'
import Loading from '@/app/components/Loading'
import { FaBullseye } from 'react-icons/fa6'





function ForgotPassword() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [msg, setMsg] = useState("")
    const [hesloZmeneno, setHesloZmeneno] = useState(false)
    const [loading, setLoading] = useState(false)


    const apiUrl = process.env.EXT_PUBLIC_API_URL

    const {isLogged} = useSelector(state => state.login) //takto muzu cist z reduceru hodnotu kterou chci, MUJ LOGIN REDUCER Z STORE.JS
    const dispatch = useDispatch() // diky tomu muzu pouzivat vsechny akce kteru mam v reduceru

    const handlePasswordChange = async(e) =>{

        e.preventDefault()
        setLoading(true)

        try{
            if(password === passwordConfirm){
                const res = await axios.post("https://jiri-kocvara.onrender.com/api/forgotpassword",{
                    email,
                    password,
                    
                })
                const data = await res.data
                setMsg(data.message)
                setHesloZmeneno(true)

            }
            else{
                setMsg("Hesla se neschodují")
                setHesloZmeneno(false)
            }
            
            
        }
        catch(err){
            setMsg(err.res?.data?.message || "Email nenalezen")
            setHesloZmeneno(false)
        }
        finally{
            setLoading(false)

        }
    }

  return (
    <div className='min-h-screen'>
        {
        !hesloZmeneno? 
        <div>
            <section className="">
        <div className="flex flex-col items-center justify-center px-6 pt-28 mx-auto md:h-screen lg:pt-20">
                  <Image 
                      alt="logo Jiri Kocvara"
                      src={Logo}
                      height={150}
                      width={150}
                      className='m-5'
                      >
                  </Image>
            <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                        Změnit heslo
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg   block w-full p-2.5  " placeholder="tvujemail@email.com" required></input>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Nové heslo</label>
                            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  block w-full p-2.5   " placeholder="******" required></input>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Heslo znovu</label>
                            <input value={passwordConfirm} onChange={(e)=>{setPasswordConfirm(e.target.value)}} type="passwordConfirm" name="passwordConfirm" id="passwordConfirm" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg   block w-full p-2.5  " placeholder="" required></input>
                        </div>
                        
                        
                        <button onClick={handlePasswordChange} type="submit" className="w-full text-white bg-orange hover:brightness-110   font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">{
                            loading? <Loading/> : "Změnit heslo"}</button>
                        
                        <p>{msg}</p>
                    </form>
                </div>
            </div>
        </div>
      </section>
      </div>
        :
        <div><section className="">
        <div className="flex flex-col items-center justify-center px-6 pt-28 mx-auto md:h-screen lg:py-0">
                  <Image 
                      alt="logo Jiri Kocvara"
                      src={Logo}
                      height={150}
                      width={150}
                      >
                  </Image>
            <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                        Změnit heslo
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        
                        
                        
                        <button type="submit" className="w-full text-white bg-orange hover:brightness-110   font-medium rounded-lg text-sm px-5 py-2.5 text-center  "><Link href="/login">Přihlásit se zde</Link></button>
                        
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

export default ForgotPassword