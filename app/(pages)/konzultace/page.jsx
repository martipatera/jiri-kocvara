import Link from 'next/link'
import React from 'react'


export const metadata = {
  title: 'Konzultace | Jiří Kočvara',
  description: 'Rezervujte si konzultaci s naším certifikovaným fitness trenérem. Probereme vaše cíle a vytvoříme plán na míru vašim potřebám. Začněte svou cestu k lepšímu zdraví!',
};

function Konzultace() {


  


  return (
    <div className='h-screen bg-slate-200'>

        <span className='animate-fade h-full flex flex-col pb-3 flex-grow justify-center items-center md:pt-32 mx-8 xl:mx-40'>

            <h1 className='text-3xl md:text-4xl text-center animate-fade font-semibold'>Konzultace</h1>
            <hr className="w-2/3 h-1 mx-auto my-4 bg-red-500 border-0 rounded animate-fade"></hr>

            <p className='animate-fade mb-5 font-medium bg-slate-100 rounded-xl p-2'>Chceš udělat první krok k lepšímu zdraví, kondici a spokojenosti? Rezervuj si osobní konzultaci, kde společně probereme tvoje cíle, současný stav a vytvoříme plán na míru tvým potřebám. Ať už jsi úplný začátečník, nebo zkušený sportovec, spolu dosáhneme toho nejlepšího výsledku.</p>
        
            
            <button className="bg-orange border-2 md:hidden animate-fade rounded-full mt-5 p-3 xl:p-3 text-white hover:brightness-110 hover:scale-105 transition-all whitespace-nowrap"><a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0lVcQhJdQ4F_xMW8k2IaANwupnudGrLTQ1PihBTO1NdI8WdicyZJcKcI4IhmvZYVjeu4i4DYDM?gv=true">Chci vědet víc!</a></button>

            <iframe className='hidden md:block border-2 border-gray-300 shadow rounded-xl w-full h-full bg-white' src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0lVcQhJdQ4F_xMW8k2IaANwupnudGrLTQ1PihBTO1NdI8WdicyZJcKcI4IhmvZYVjeu4i4DYDM?gv=true"   frameBorder="0"></iframe>
    
        </span>

        </div>
  )
}

export default Konzultace