import React from 'react'
import cenikData from '@/app/data/cenikData'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: "Ceník | Jiří Kočvara",
  description: 'Zjistěte ceny našich osobních tréninkových programů. Nabízíme různé balíčky a ceny, které odpovídají vašim potřebám a cílům. Pro více informací a rezervace nás kontaktujte. Objevte ceny našich výživových poradenství a plánů. Poskytujeme přehledné informace o nákladech na naše služby a balíčky, které vám pomohou dosáhnout vašich výživových cílů.'
}

function Cenik() {


  return (
    <div className='h-full xl:h-full 2xl:h-screen bg-slate-200 overflow-hidden'>
      <div className='pt-28 md:pt-36 xl:pt-28'>

        <h1 className='text-3xl md:text-4xl text-center animate-fade font-semibold'>Ceník</h1>
        <hr className="w-2/3 h-1 mx-auto mt-4 bg-red-500 border-0 rounded animate-fade"></hr>

        <div className='flex flex-col flex-1 md:px-20 lg:px-28 xl:px-4 md:items-stretch animate-fade p-5 xl:pt-10  xl:flex-row justify-center items-center gap-5 rounded-lg'>

        
          {
          cenikData.map((data,index)=>{
            return <div key={index} className="min-h-[325px] xl:w-1/3 p-6 md:pt-9 lg:hover:scale-105 transition-all text-center bg-white border  rounded-lg shadow ">
              <span className='flex flex-col justify-between h-full '>

                  <span className='flex justify-center items-center '>
                    <Image src={data.icon} className='md:max-w-md'></Image>
                  </span>

                  <span className='flex flex-col break-words overflow-auto h-full'>
                    <p className='text-lg break-words overflow-auto text-center'><strong>{data.name}</strong></p>
                    <p className='break-words w-full  overflow-auto text-center'><strong>Popis: </strong>{data.popis}</p>
                  </span>

                  <span className='flex flex-col justify-center items-center'>
                    <hr className="w-full h-1 mx-auto mt-4 bg-red-500 border-0 rounded animate-fade"></hr>
                    <p className='text-xl'><strong>{data.cena}</strong></p>
                  </span>
                  
                
               

              </span>

            </div>

          })
          
          }
          </div>

          <p className='text-center text-blue-500 pb-5 px-5 text-lg'>Máš zájem o některý z programů? <Link href="/kontakt" className='underline font-semibold'>Kontaktuj mě!</Link></p>


      </div>
    </div>
  )
}

export default Cenik