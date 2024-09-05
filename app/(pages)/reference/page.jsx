import React from 'react'
import cenikData from '@/app/data/cenikData'
import Image from 'next/image'

export const metadata = {
  title: "Reference | Jiří Kočvara",
  description: "Jiří Kočvara je fitness trenér a bodybuilder s dlouholetou praxí a mnoha osobními tak trenérskými úspěchy. Prozkoumejte naše fitness služby, včetně osobních tréninků, výživového poradenství a skupinových lekcí. Najděte plán, který vám vyhovuje.",
}

function Klienti() {
  return (
    <div className=' bg-slate-200 overflow-hidden'>
      <div className=' pt-28 md:pt-36'>

        <h1 className='text-3xl md:text-4xl text-center animate-fade font-semibold'>Ceník</h1>
        <hr className="w-2/3 h-1 mx-auto bg-red-500 border-0 rounded animate-fade "></hr>

        <div className='flex flex-col flex-1 md:items-stretch animate-fade p-5 xl:flex-row justify-center items-center gap-8   rounded-lg'>

        
          {
          cenikData.map((data,index)=>{
            return <div key={index} className="min-h-[325px] xl:w-1/4 p-6 md:pt-9 hover:scale-105 transition-all text-center bg-white border  rounded-lg shadow ">
              <span className='flex flex-col justify-between h-full '>

                  <span className='flex justify-center items-center '>
                    <Image src={data.icon} className='md:max-w-md'></Image>
                  </span>

                  <span className='flex flex-col break-words overflow-auto'>
                    <p className='text-lg break-words overflow-auto text-center md:text-start'><strong>{data.name}</strong></p>
                    <p className='break-words w-full  overflow-auto text-center md:text-start'><strong>Popis: </strong>{data.popis}</p>
                  </span>
                  
                
                <span className='flex justify-center items-end'>
                  <p className='text-lg font-bold text-center  md:text-start'>{data.cena}</p>
                </span>

              </span>

            </div>

          })
          
          }
          </div>


      </div>
    </div>
  )
}

export default Klienti