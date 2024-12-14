import React from 'react'
import cenikData from '@/app/data/cenikData'
import Image from 'next/image'
import reviewData from '@/app/data/reviewData'
import Counter from '@/app/components/CountUp'
import reviewDataNoPhoto from '@/app/data/reviewDataNoPhoto'

export const metadata = {
  title: "Jiří Kočvara | Reference",
  description: "Přečtěte si reference spokojených klientů Jiřího Kočvary. Zjistěte, jak jim pomohl dosáhnout jejich fitness cílů díky osobním tréninkům a výživovému poradenství. Přidejte se k nim!"
}

function Reference() {
  return (
    <div className='min-h-screen bg-blue-gray-50 overflow-hidden '>

      <div className='pt-28 md:pt-36 pb-5'>

        <h1 className='text-3xl md:text-4xl text-center animate-fade font-semibold'>Reference</h1>
        <hr className="w-2/3 h-1 mx-auto my-4 bg-red-500 border-0 rounded md:my-10 animate-fade"></hr>

        <span className='flex justify-center items-center my-5 text-xl font-bold'>
          <Counter/>
        </span>

        <div className='flex flex-wrap items-center justify-center gap-4 mx-3 md:mx-14 lg:mx-0'>
        

          {
            reviewData.map((data, index)=>{
              return <div key={index} className=' flex flex-col items-center justify-center lg:flex-row md:max-w-lg lg:max-w-2xl xl:max-w-2xl lg:h-[450px] opacity-95 bg-gray-200 border border-gray-300 rounded-xl shadow gap-4'>

                <span className='flex justify-center items-center lg:px-4'>
                  <Image className='hidden lg:block lg:max-w-xs rounded-xl lg:h-[425px] ' src={data.img} alt={data.alt} quality={50}></Image>

                  <Image  src={data.img} alt={data.alt} quality={50}
                    className='block lg:hidden max-w-xs rounded-3xl p-2 md:max-w-xs'
                    >
                </Image>
                </span>

                <span className='flex flex-col lg:justify-center lg:items-start justify-center items-center overflow-auto flex-wrap'>
                  <h2 className='text-xl lg:text-2xl font-bold '>{data.name}</h2>
                  <span className='lg:h-[375px]'>
                    <p className='break-words overflow-y-auto text-center lg:text-start  italic p-2 mx-3 md:mx-5'>&ldquo;{data.description}&rdquo;</p>
                    <p className='md:mx-5 my-3 '><strong>{data.soutez1}</strong></p>
                    <p className='md:mx-5 my-3 '><strong>{data.soutez2}</strong></p>
                    <p className='md:mx-5 my-3 '><strong>{data.soutez3}</strong></p>
                    <p className='md:mx-5 my-3 '><strong>{data.soutez4}</strong></p>
                  </span>
                  </span>
               
              </div>
            })
          }



        </div>
        <div className='flex flex-row gap-4 my-5 flex-wrap justify-center mx-3 md:mx-14 lg:mx-0'>
        {
            reviewDataNoPhoto.map((data, index)=>{
              return <div key={index} className=' flex flex-col items-center justify-center lg:flex-row max-w-md flex-wrap opacity-95 bg-gray-200 border border-gray-300 rounded-xl shadow gap-4 md:max-w-lg lg:max-w-2xl xl:max-w-2xl'>

                <span className='flex flex-col lg:justify-center lg:items-start justify-center items-center overflow-auto flex-wrap'>
                  <h2 className='text-xl lg:text-2xl font-bold md:mx-5 my-3 '>{data.name}</h2>
                  <p className='break-words overflow-y-auto text-center lg:text-start italic p-2 lg:h-[125px] mx-3 md:mx-5'>&ldquo;{data.review}&rdquo;</p>

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