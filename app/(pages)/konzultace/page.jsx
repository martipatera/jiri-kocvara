import Link from 'next/link'
import React from 'react'

function Konzultace() {
  return (
    <div className=''>

        <span className='flex flex-col justify-center items-center pt-52 h-screen'>

            <h3 className='text-3xl md:text-5xl text-center p-3'>Konzultace</h3>
        
            
            <button className="bg-orange border-2 lg:hidden animate-fade rounded-full p-3 xl:p-3 text-white hover:brightness-110 hover:scale-105 transition-all whitespace-nowrap"><Link href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0lVcQhJdQ4F_xMW8k2IaANwupnudGrLTQ1PihBTO1NdI8WdicyZJcKcI4IhmvZYVjeu4i4DYDM?gv=true">Chci vědet víc!</Link></button>

            <iframe className='hidden lg:block' src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0lVcQhJdQ4F_xMW8k2IaANwupnudGrLTQ1PihBTO1NdI8WdicyZJcKcI4IhmvZYVjeu4i4DYDM?gv=true"  width="75%" height="100%" frameBorder="0"></iframe>
    
        </span>

        </div>
  )
}

export default Konzultace