import React from 'react'
import cenikData from '@/app/data/cenikData'

export const metadata = {
  title: "Ceník | Jiří Kočvara",
  description: 'Zjistěte ceny našich osobních tréninkových programů. Nabízíme různé balíčky a ceny, které odpovídají vašim potřebám a cílům. Pro více informací a rezervace nás kontaktujte. Objevte ceny našich výživových poradenství a plánů. Poskytujeme přehledné informace o nákladech na naše služby a balíčky, které vám pomohou dosáhnout vašich výživových cílů.'
}

function Cenik() {


  return (
    <div className='md:h-screen bg-slate-200 overflow-hidden'>
      <div className='pt-28 md:pt-36'>

        <h1 className='text-3xl md:text-4xl text-center animate-fade font-semibold'>Ceník</h1>
        <hr className="w-2/3 h-1 mx-auto bg-red-500 border-0 rounded animate-fade "></hr>


          {
          cenikData.map((data,index)=>{
            return <div key={index} className='animate-fade mx-5 lg:mx-40 my-5 transition-all hover:scale-105 bg-gray-300 rounded-2xl shadow-xl p-4'>
              <span className='flex flex-col md:flex-row justify-between '>

                <span className=' flex flex-col break-words overflow-auto'>
                  <p className='text-lg'><strong>{data.name}</strong></p>
                  <p className=''><strong>Popis: </strong>{data.popis}</p>
                </span>
                


                <span className='flex justify-center items-center'>
                  <p className='text-lg font-bold'>{data.cena}</p>
                </span>

              </span>

            </div>

          })
          
          }


      </div>
    </div>
  )
}

export default Cenik