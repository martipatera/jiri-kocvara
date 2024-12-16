import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: "Jiří Kočvara | Konzultace",
  description: "Rezervujte si konzultaci s certifikovaným fitness trenérem a výživovým poradcem. Probereme vaše cíle a připravíme individuální plán. Začněte svou cestu k lepšímu zdraví ještě dnes!"
};

function Konzultace() {


  


  return (
    <div className='min-h-screen overflow-hidden bg-blue-gray-50'>


        <span className='md:pt-36 mx-8 xl:mx-20 pt-40 sm:pt-32 px-5 lg:px-10 animate-fade h-full flex flex-col pb-5 flex-grow justify-center items-center '>

            <h1 className='text-3xl md:text-4xl text-center animate-fade font-semibold'>Konzultace</h1>
            <hr className="w-2/3 h-1 mx-auto my-4 bg-red-500 border-0 rounded md:my-10 animate-fade"></hr>


            <p className='animate-fade mb-5 font-medium bg-slate-100 rounded-xl p-2 text-center'>Chceš udělat první krok k lepšímu zdraví, kondici a spokojenosti? Rezervuj si osobní konzultaci, kde společně probereme tvoje cíle, současný stav a vytvoříme plán na míru tvým potřebám. Ať už jsi úplný začátečník, nebo zkušený sportovec, spolu dosáhneme toho nejlepšího výsledku.</p>
        
            
            <button className="text-black border-black border-2 md:hidden animate-fade rounded-full mt-5 p-3 xl:p-3 hover:brightness-110 hover:scale-105 transition-all whitespace-nowrap"><a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1H8wiQyHKQd3ptWPshU-2YA8NVeJI26v8BkwfAw8vOJWxsmFMis1eKBqEE4laMJi5LeLd-XlE-?gv=true">Objednat se online</a></button>

            <iframe className='hidden md:block border-2 border-gray-300 shadow rounded-xl w-full h-[600px] bg-white' src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1H8wiQyHKQd3ptWPshU-2YA8NVeJI26v8BkwfAw8vOJWxsmFMis1eKBqEE4laMJi5LeLd-XlE-?gv=true"   frameBorder="0"></iframe>
    
        </span>

        </div>
  )
}

export default Konzultace