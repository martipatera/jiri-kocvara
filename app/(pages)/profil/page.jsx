
import React from 'react'
import Component from '@/app/components/Component'

export const metadata = {
  title: "Profil | Jiří Kočvara",
  description: "Jiří Kočvara je fitness trenér a bodybuilder s dlouholetou praxí a mnoha osobními tak trenérskými úspěchy. Prozkoumejte naše fitness služby, včetně osobních tréninků, výživového poradenství a skupinových lekcí. Najděte plán, který vám vyhovuje.",
}

function Profil() {
  return (
    <div className=' bg-slate-200'>

      <div className=' pt-28 md:pt-40  px-5 lg:px-10 pb-5'>
        <h1 className='text-3xl md:text-4xl text-center animate-fade font-semibold'>Kontakt</h1>
        <hr className="w-2/3 h-1 mx-auto my-4 bg-red-500 border-0 rounded md:my-10 animate-fade"></hr>
      </div>

      <div className='flex justify-center items-center'>
        <Component/>
      </div>


    </div>
    
  )
}

export default Profil