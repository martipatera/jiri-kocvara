import React from 'react'
import cenikData from '@/app/data/cenikData'
import Image from 'next/image'
import reviewData from '@/app/data/reviewData'

export const metadata = {
  title: "Reference | Jiří Kočvara",
  description: "Jiří Kočvara je fitness trenér a bodybuilder s dlouholetou praxí a mnoha osobními tak trenérskými úspěchy. Prozkoumejte naše fitness služby, včetně osobních tréninků, výživového poradenství a skupinových lekcí. Najděte plán, který vám vyhovuje.",
}

function Reference() {
  return (
    <div className='lg:h-full 2xl:h-screen bg-slate-200 overflow-hidden'>

      <div className='pt-28 md:pt-36 pb-5'>

        <h1 className='text-3xl md:text-4xl text-center animate-fade font-semibold'>Reference</h1>
        <hr className="w-2/3 h-1 mx-auto my-4 bg-red-500 border-0 rounded md:my-10 animate-fade"></hr>

        <div className='flex flex-wrap items-center justify-center gap-4 mx-3 md:mx-14 lg:mx-0'>

          {
            reviewData.map((data, index)=>{
              return <div key={index} className=' flex flex-col items-center justify-center lg:flex-row border-2 lg:max-w-[900px] lg:max-h-[200px] border-gray-300 rounded-xl shadow gap-4'>

                <span className='flex justify-center items-center'>
                  <Image className='hidden lg:block max-w-[300px] max-h-[200px] rounded-xl ' src={data.img} alt={data.alt}></Image>

                  <Image  src={data.img} alt={data.alt}
                    className='block lg:hidden rounded-3xl p-2 md:max-w-[450px] md:max-h-[400px]'
                    >
                </Image>
                </span>

                <span className='flex flex-col lg:justify-center lg:items-start justify-center items-center'>
                  <h2 className='text-xl lg:text-2xl font-bold '>{data.name}</h2>
                  <p className='break-words overflow-auto text-center lg:text-start h-full italic p-2 md:mx-5'>&ldquo;{data.description}&rdquo;</p>
                </span>
               
              </div>
            })
          }

        </div>

      </div>

    </div>
  )
}

export default Reference