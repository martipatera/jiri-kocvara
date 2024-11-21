
import Image from 'next/image'
import React from 'react'
import JirkaFotom from "../../../public/JirkaKocvara.jpg"
import JirkaPoza from "../../../public/jirkaPoza.jpg"
import VzdelaniList from '@/app/components/VzdelaniList'
import PhotoCarousel from '@/app/components/PhotoCarousel'
import cer1 from "./1.png"
import cer2 from "./2.png"
import cer3 from "./3.png"
import cer4 from "./4.png"
import cer5 from "./5.png"

export const metadata = {
  title: "Jiří Kočvara | Vzdělání",
  description: "Jiří Kočvara má bohaté vzdělání v oblasti fitness a výživy, podložené certifikacemi a odbornými kurzy. Zjistěte více o jeho odborné přípravě, znalostech a zkušenostech, které ho činí vysoce kvalifikovaným trenérem."
}

function Vzdelani() {
  return (
    <div className='min-h-screen w-full overflow-auto bg-blue-gray-50'>

      <div className='pt-28 md:pt-40 px-5 lg:px-10 pb-5 2xl:pb-0 '>
        <h1 className='text-3xl md:text-4xl text-center animate-fade font-semibold'>Moje vzdělání</h1>
        <hr className="w-2/3 h-1 mx-auto my-4 bg-red-500 border-0 rounded md:my-10 animate-fade"></hr>
      </div>

      <div>
      <p className='animate-fade mb-5 font-medium bg-slate-100 rounded-xl py-2 px-3 lg:px-8 text-center xl:px-20'>
            Vzdělání trenéra by za mě nemělo začít a skončit základním rekvalifikačním kurzem, naopak. Dlouhodobé vzdělávání, ať už samostudiem či navštěvování kvalitních workshopů,
             kurzů a seminářů je nedílnou součástí mojí práce, díky kterým dokážu svým klientům pomáhat na základě kvalitních ověřených informací, 
             praxe a moderního přístupu k tréninku s přesahem i do dalších oblastí, které se silovým tréninkem úzce souvisí.
        </p>
      </div>
        
        <div className='flex flex-col justify-center items-start xl:gap-14 pb-10 lg:flex-row lg:px-5 xl:px-20'>
            <PhotoCarousel className="order-1"></PhotoCarousel>
            <VzdelaniList className="order-2"></VzdelaniList>


        </div>

        <div className='flex flex-col md:flex-row justify-center items-center gap-3 md:gap-5 my-10 overflow-auto flex-wrap'>
          <a href='/1.png' target='_blank'>
            <Image 
            src={cer1}
            quality={20}
            alt='Certifikát 3S Diagnostika Jiřího Kočvary'
            className="flex-shrink-0"
          ></Image>
          </a>
          <a href='/2.png' target='_blank'>
            <Image 
            src={cer2}
            quality={20}
            alt='Certifikát (P)Rehabilitace bolestí zad a návrat do výkonu/tréninku Jiřího Kočvary'

            className="flex-shrink-0"
          ></Image>
          </a>
          <a href='/3.png' target='_blank'>
            <Image 
            src={cer3}
            quality={20}
            alt='Osvědčení trenér kulturistiky Jiří Kočvara'

            className="flex-shrink-0"
          ></Image>
          </a>
          <a href='/4.png' target='_blank'>
            <Image 
            src={cer4}
            quality={20}
            className="flex-shrink-0"
            alt='Osvědčení osobní trenér kondičního posilování Jiří Kočvara'

          ></Image>
          </a>
          <a href='/5.png' target='_blank'>
            <Image 
            src={cer5}
            quality={20}
            className="flex-shrink-0"
            alt='Certifikát Neuroscientific painmodulation Jiří Kočvara'

          ></Image>
          </a>
        </div>

   
    </div>


      


    
  )
}

export default Vzdelani