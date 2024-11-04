import React from 'react'
import cenikData from '@/app/data/cenikData'
import Image from 'next/image'
import Link from 'next/link'
import EdukacniTreninkoveJednotky from '@/app/components/EdukacniTreninkoveJednotky'
import PravidelneTreninkoveJednotky from '@/app/components/PravidelneTreninkoveJednotky'
import OnlineCoaching from '@/app/components/OnlineCoaching'

export const metadata = {
  title: 'Jiří Kočvara | Služby',
  description: "Objevte naše fitness služby, včetně osobních tréninků, výživového poradenství a skupinových lekcí. Najděte si plán na míru a začněte svou cestu ke zdravějšímu životnímu stylu ještě dnes!"
};






function Sluzby() {

    

  return (
    <div className='min-h-screen bg-blue-gray-50 overflow-hidden bg-none lg:bg-bgLogo75 bg-center bg-no-repeat '>
      <div className='pt-28 md:pt-36 xl:pt-28'>

        <h1 className='text-3xl md:text-4xl text-center animate-fade font-semibold'>Služby</h1>
        <hr className="w-2/3 h-1 mx-auto mt-4 bg-red-500 border-0 rounded animate-fade"></hr>

        



        <EdukacniTreninkoveJednotky></EdukacniTreninkoveJednotky>
        <PravidelneTreninkoveJednotky></PravidelneTreninkoveJednotky>
        <OnlineCoaching></OnlineCoaching>
          

        


      </div>
    </div>
  )
}

export default Sluzby