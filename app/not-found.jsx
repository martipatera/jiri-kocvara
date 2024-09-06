import React from 'react'
import Link from 'next/link'

function NotFound() {
  return (
    <div className='h-screen'>

        <div className='pt-28 mx-5 md:pt-32 lg:mx-40'>

            <span>
                <h1 className='text-4xl font-bold text-center'>Error 404</h1>
                <p className='font-semibold text-center'>Je nám líto, ale požadovaná stránka nebyla nalezena. Ujistěte se, že jste neudělali chybu v URL adrese. Je možné, že byla stránka přemístěna nebo odstraněna.</p>
            </span>
            
            <span className='flex justify-center items-center underline font-medium pt-5'>
                <Link href="/" className='text-center text-blue-500'>Zpět na úvodní stránku</Link>
            </span>

        </div>

    </div>
  )
}

export default NotFound