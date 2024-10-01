"use client"

import React from 'react'
import Logo from "../logoBlack.png"
import Image from 'next/image'
import axios from 'axios'
import Link from 'next/link'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logIn } from '@/app/store/loginStore'
import Loading from '@/app/components/Loading';




function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")
    const [loading, setLoading] = useState(false)
    const apiUrl = process.env.NEXT_PUBLIC_API_URL

    const {isLogged, role} = useSelector(state => state.login) //takto muzu cist z reduceru hodnotu kterou chci, MUJ LOGIN REDUCER Z STORE.JS
    const dispatch = useDispatch() // diky tomu muzu pouzivat vsechny akce kteru mam v reduceru

    const handleLogin = async(e) =>{
        e.preventDefault()
        setLoading(true)

        
        try{
            const res = await axios.post("https://jiri-kocvara-ow4m.onrender.com/api/login",{
                email: email.trim(),
                password: password.trim()
            })
            const data = res.data
            dispatch(logIn({ email: email, role: data.user.role }));//posilam aktualni login email do reduceru posilam to jako objekt
            setMsg(res.data.message)
            
        }
        catch(err){
            setMsg(err.res?.data?.message || "Přihlášení se nezdařilo, zkus jiné heslo") 
        }
        finally{
            setLoading(false)
        }
    }

  return (
    <div className='min-h-screen bg-blue-gray-50'>
        {   
            !isLogged? 
        <div>
            <section className="bg-blue-gray-50 ">
        <div className="flex flex-col items-center justify-center px-6 pt-28 mx-auto md:h-screen lg:py-0">
                  <Image 
                      alt="logo Jiri Kocvara"
                      src={Logo}
                      height={150}
                        width={150}
                      className='m-5'
                      >
                  </Image>
            <div className="w-full bg-white rounded-lg shadow md:mt-0  sm:max-w-md xl:p-0 ">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                        Přihlásit se
                    </h1>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                            <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg   block w-full p-2.5   " placeholder="tvujemail@email.com" required></input>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Heslo</label>
                            <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg  block w-full p-2.5 " required></input>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50   " required></input>
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="remember" className="text-gray-500 ">Pamatuj si mě</label>
                                </div>
                            </div>
                            <Link className="text-sm font-medium text-black hover:underline" href="/forgotpassword" >Zapomenuté heslo</Link>
                        </div>
                        <button onClick={handleLogin} disabled={loading} type="submit" className="w-full text-black border-black border hover:brightness-110 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center">{
                            loading? <Loading/> : "Přihlásit se"
                        }</button>
                        
                        <p className="text-sm font-light text-gray-500 ">
                            Ještě nemáš účet? <Link href="/register" className="font-medium  hover:underline ">Registrovat se</Link>
                        </p>
                        <p>{msg}</p>
                    </form>
                </div>
            </div>
        </div>
      </section>
      </div>
        :
        <div>
            <section className="bg-gray-50 ">
  <div className="flex flex-col items-center justify-center px-6 pt-44 mx-auto md:h-screen lg:py-0">
            <Image 
                alt="logo Jiri Kocvara"
                src={Logo}
                height={150}
                width={150}
                >
            </Image>
      <div className="w-full text-black border-black border rounded-lg shadow  md:mt-4 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Přihlásit se
              </h1>
              <form className="space-y-4 md:space-y-6 text-center" action="#">
                  {
                    role == "admin" || role == "trenér"?

                    <Link href="/moji_klienti" className="w-52 text-black border-black border hover:brightness-110   font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Moji klienti</Link>
                    :
                    <Link href="/muj_trenink" className="w-52 text-black border-black border hover:brightness-110   font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Muj trénink</Link>

                  }

                  <p><strong>{msg}</strong></p>
              </form>
          </div>
      </div>
  </div>
</section></div>}

        </div>
    
    
    
    
  )
}

export default Login