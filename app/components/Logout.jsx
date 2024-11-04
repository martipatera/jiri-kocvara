"use client"
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import React from 'react'
import { logOut } from '../store/loginStore'

function Logout() {

  
  const { email,isLogged, role } = useSelector(state =>state.login) //takto muzu cist z reduceru hodnotu kterou chci
  const dispatch = useDispatch() // diky tomu muzu pouzivat vsechny akce kteru mam v reduceru

  const handleLogout = () =>{
    dispatch(logOut())// reducer na odhlaseni
  }

  return (
    <div className='flex flex-col md:flex-row xl:flex-col gap-1 mr-2 md:mr-2'>
      <p className='text-center text-xs border-2 md:text-sm rounded-full p-1 xl:p-1 text-white'>{email} <small>{role}</small></p>
      <button className='text-center text-white hover:brightness-110 hover:scale-105 transition-all border-2 p-1 xl:p-1 rounded-full  whitespace-nowrap' onClick={handleLogout}>Odhlásit se</button>
    </div>
    
  )
}

export default Logout