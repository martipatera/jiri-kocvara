import React from 'react'
import cenikData from '@/app/data/cenikData'
import Image from 'next/image'
import Link from 'next/link'

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

        <div className='flex flex-col flex-1 md:px-20 lg:px-28 xl:px-4 md:items-stretch animate-fade p-5 xl:pt-10  xl:flex-row justify-center items-center gap-5 rounded-lg'>

        
          {
          cenikData.map((data,index)=>{
            return <div key={index} className="min-h-[325px] opacity-95 hover:opacity-100 xl:w-1/3 p-4 lg:p-3 md:pt-9 lg:hover:scale-105 transition-all text-center bg-gray-200 border border-gray-300  rounded-lg shadow ">
              <span className='flex flex-col justify-between h-full '>

                  <span className='flex justify-center items-center '>
                    <Image src={data.icon} alt={data.alt} className='md:max-w-md'></Image>
                  </span>

                  <span className='flex flex-col break-words overflow-auto h-full'>
                    <p className='text-lg break-words overflow-auto text-center'><strong>{data.name}</strong></p>
                    <hr className="w-full h-1 my-3 bg-red-500 border-0 rounded animate-fade"></hr>

                    <p className='break-words w-full overflow-auto text-center'><strong>Popis: </strong>{data.popis}</p>
                  </span>
                  
                
               

              </span>

            </div>

          })
          
          }
          </div>

          <p className='text-center text-blue-500 pb-8 pt-8 px-5 text-lg'>Máš zájem o některý z programů? <Link href="/konzultace" className='underline font-semibold'>Objednej se!</Link></p>


      </div>
    </div>
  )
}

export default Sluzby