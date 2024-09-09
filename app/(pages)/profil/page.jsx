import Image from 'next/image'
import React from 'react'
import Component from '@/app/components/Component'
import JirkaFotom from "../../../public/JirkaKocvara.jpg"

export const metadata = {
  title: "Profil | Jiří Kočvara",
  description: "Jiří Kočvara je fitness trenér a bodybuilder s dlouholetou praxí a mnoha osobními tak trenérskými úspěchy. Prozkoumejte naše fitness služby, včetně osobních tréninků, výživového poradenství a skupinových lekcí. Najděte plán, který vám vyhovuje.",
}

function Profil() {
  return (
    <div className='2xl:h-full bg-slate-200'>

      <div className='pt-28 md:pt-40  px-5 lg:px-10 pb-5 2xl:pb-0 '>
        <h1 className='text-3xl md:text-4xl text-center animate-fade font-semibold'>Jiří Kočvara</h1>
        <hr className="w-2/3 h-1 mx-auto my-4 bg-red-500 border-0 rounded md:my-10 animate-fade"></hr>
      </div>

      <div className='rounded-lg flex flex-col lg:flex-row justify-around p-1 md:p-3  mx-2 lg:mx-5 2xl:px-36 2xl:mx-20' >

            <div className='flex flex-col flex-wrap justify-start items-center'>


              <div>
                <Image src={JirkaFotom}
                    className='block lg:hidden rounded-xl py-2'
                    alt='Jiří Kočvara stojící u zrcadla ve Fitness Centrum TJ Lokomotiva Beroun s rukama v pažích'
                    >
                </Image>

                
                
              </div>

              
 

              <div className='flex lg:hidden 2xl:flex 2xl:h-full flex-row px-2 justify-start items-center text-center lg:w-[500px] xl:w-[1000px] lg:text-start text-lg xl:text-2xl md:text-xl flex-wrap break-words'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates harum fugit ut libero itaque nesciunt, distinctio rem, ducimus maiores neque sequi! Ipsum, pariatur labore.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates harum fugit ut libero itaque nesciunt, distinctio rem, ducimus maiores neque sequi! Ipsum, pariatur labore.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates harum fugit ut libero itaque nesciunt, distinctio rem, ducimus maiores neque sequi! Ipsum, pariatur labore.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates harum fugit ut libero itaque nesciunt, distinctio rem, ducimus maiores neque sequi! Ipsum, pariatur labore.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates harum fugit ut libero itaque nesciunt, distinctio rem, ducimus maiores neque sequi! Ipsum, pariatur labore.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates harum fugit ut libero itaque nesciunt, distinctio rem, ducimus maiores neque sequi! Ipsum, pariatur labore.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates harum fugit ut libero itaque nesciunt, distinctio rem, ducimus maiores neque sequi! Ipsum, pariatur labore.</p>
              </div>

              <div className='hidden pl-3 lg:flex 2xl:hidden flex-row px-2 justify-start items-center text-center lg:w-[500px] lg:text-start text-lg md:text-xl flex-wrap break-words'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates harum fugit ut libero itaque nesciunt, distinctio rem, ducimus maiores neque sequi! Ipsum, pariatur labore.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates harum fugit ut libero itaque nesciunt, distinctio rem, ducimus maiores neque sequi! Ipsum, pariatur labore.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates harum fugit ut libero itaque nesciunt, distinctio rem, ducimus maiores neque sequi! Ipsum, pariatur labore.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates harum fugit ut libero itaque nesciunt, distinctio rem, ducimus maiores neque sequi! Ipsum, pariatur labore.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates harum fugit ut libero itaque nesciunt, distinctio rem, ducimus maiores neque sequi! Ipsum, pariatur labore.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates harum fugit ut libero itaque nesciunt, distinctio rem, ducimus maiores neque sequi! Ipsum, pariatur labore.</p>
              </div>

            

                

              
            </div>
            
              <div>
              <Image src={JirkaFotom}
                className='hidden lg:block rounded-xl w-full max-w-sm md:max-w-md lg:max-w-xl xl:max-w-3xl  2xl:max-w-4xl h-auto '
                alt='Jiří Kočvara stojící u zrcadla ve Fitness Centrum TJ Lokomotiva Beroun s rukama v pažích'>
              </Image>

              <span className='hidden lg:block 2xl:hidden pt-4'>
                <p className='lg:text-start text-lg md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates harum fugit ut libero itaque nesciunt, distinctio rem, ducimus maiores neque sequi! Ipsum, pariatur labore.</p>
                <p className='lg:text-start text-lg md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates harum fugit ut libero itaque nesciunt, distinctio rem, ducimus maiores neque sequi! Ipsum, pariatur labore.</p>
                <p className='lg:text-start text-lg md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptates harum fugit ut libero itaque nesciunt, distinctio rem, ducimus maiores neque sequi! Ipsum, pariatur labore.</p>
              </span>
                

              </div>
              

                

          </div>

      <div className='mx-0 lg:mx-5 py-3 md:py-14 '>
        <Component/>
      </div>


    </div>
    
  )
}

export default Profil