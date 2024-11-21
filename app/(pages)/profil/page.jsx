
import Image from 'next/image'
import React from 'react'
import JirkaFotom from "../../../public/JirkaKocvara.jpg"
import JirkaPoza from "../../../public/jirkaPoza.jpg"

export const metadata = {
  title: "Jiří Kočvara | Profil",
  description: "Jiří Kočvara je certifikovaný fitness trenér a bodybuilder s dlouholetou praxí. Zjistěte více o jeho úspěších, přístupu k tréninku a nabízených fitness službách."
}

function Profil() {
  return (
    <div className='min-h-screen bg-blue-gray-50'>

      <div className='pt-28 md:pt-40  px-5 lg:px-10 pb-5 2xl:pb-0 '>
        <h1 className='text-3xl md:text-4xl text-center animate-fade font-semibold'>Jiří Kočvara</h1>
        <hr className="w-2/3 h-1 mx-auto my-4 bg-red-500 border-0 rounded md:my-10 animate-fade"></hr>
      </div>

      <div className='rounded-lg flex flex-col lg:flex-row justify-around p-1 md:p-3  mx-2 lg:mx-5 2xl:px-5 2xl:mx-28' >

            <div className='flex flex-col flex-wrap justify-start items-center'>


              <div>
                <Image src={JirkaPoza}
                    className='block md:max-w-lg lg:hidden rounded-xl pt-0'
                    alt='Jiří Kočvara pózující s medailí za vítězství v soutěži'
                    quality={50}
                    >
                </Image>

                
                
              </div>

              
 

              <div className=' flex md:px-8 lg:hidden 2xl:flex 2xl:h-full flex-row px-2 justify-start items-center text-center lg:w-[500px] xl:w-[800px] lg:text-start text-lg md:text-lg  flex-wrap break-words pt-10 xl:pt-0 pb-10'>
                <p> <strong>Kdo jsem a jak pracuji?</strong><br></br>
                    Trénování v posilovně, vedení lidí k dosažení progresu a mnohdy i zlepšení kvality běžného života se věnuji stabilně již  <strong>více než 10 let.</strong> Věřím, 
                    že právě díky mojí filozofii, se kterou ke své práci přistupuji, mohu s lidmi pracovat full-time, aniž bych byl nucen mít k trénovaní ještě další práci. 
                    To mi za posledních několik let umožňuje neustále se dál vzdělávat a následně <strong>- to absolutně nejdůležitější –</strong>  aplikovat tyto znalosti v praxi s mými klienty, 
                    aby dosahovali svých cílů bez zbytečných mainstreamových bullshitů a jejich výsledky byly <strong>dlouhodobě udržitelné.</strong> <br></br><br></br>
                    <strong> A jaká je moje filozofie?</strong><br></br>
                    Za mě je jedním z hlavních cílů trenéra pracovat s klientem tak, aby se klient zároveň učil pracovat se sebou i on sám. 
                    Proto se během naší spolupráce snažím klienta edukovat nejen <strong>CO</strong> má dělat, ale i <strong>PROČ.</strong> To vše děláme společně v reálném životě s reálnými výzvami a překážkami. 
                    Spolupráce znamená <strong>PRACOVAT SPOLU</strong>, tedy určitě nečekej, že jsem “čaroděj” který ti sestaví zázračný plán a s minimálním úsilím dosáhneš výsledku
                     “za pouhých 5 týdnů”. <strong>Nevyhnutelně budeš makat.</strong> A naší spoluprací získáš jistotu, že tvoje úsilí, vynaložená energie a změny, které uděláš, 
                     budou mít smysl a dosáhneš dlouhodobě udržitelného progresu.
                    Největší část mojí klientely tvoří stabilní základna <strong>začínajících, středně pokročilých nebo kondičních / hobby cvičenců. </strong> 
                    Chystám také <strong>závodníky</strong> do různých kategorií kulturistiky <strong>(jak mužské, tak ženské kategorie). </strong> 
                    Mám zkušenost s nastavením silového tréninku po různých  <strong>úrazech a operačních zákrocích.</strong> Za svou více než <strong>10letou</strong> trenérskou kariéru 
                    jsem odtrénoval již <strong>nižší stovky klientů. </strong>
                    S nemalým počtem klientů spolupracujeme pravidelně již mnoho let a můžeme tak dosahovat i pokročilejších výsledků. Spousta spokojených klientů se 
                    ke mně vrací i opakovaně.
                    <strong> Vzhledem k nesporným benefitům silového tréninku si nesmírně vážím každého, kdo se rozhodne, ať už s mojí pomocí či jinak, silový trénink zařadit 
                    do svého života.</strong>
                    </p>
              </div>

              <div className='hidden pl-3 pb-5 lg:flex 2xl:hidden flex-row px-8 justify-start items-center text-center xl:w-full xl:px-10 lg:text-start text-lg md:text-lg flex-wrap break-words'>
                  <p><strong>Kdo jsem a jak pracuji?</strong><br></br>
                    Trénování v posilovně, vedení lidí k dosažení progresu a mnohdy i zlepšení kvality běžného života se věnuji stabilně již <strong>více než 10 let.</strong> Věřím, 
                    že právě díky mojí filozofii, se kterou ke své práci přistupuji, mohu s lidmi pracovat full-time, aniž bych byl nucen mít k trénovaní ještě další práci. 
                    To mi za posledních několik let umožňuje neustále se dál vzdělávat a následně <strong>- to absolutně nejdůležitější –</strong> aplikovat tyto znalosti v praxi s mými klienty, 
                    aby dosahovali svých cílů bez zbytečných mainstreamových bullshitů a jejich výsledky byly <strong>dlouhodobě udržitelné.</strong>
                    <br></br><br></br><strong> A jaká je moje filozofie?</strong><br></br>
                    Za mě je jedním z hlavních cílů trenéra pracovat s klientem tak, aby se klient zároveň učil pracovat se sebou i on sám. 
                    Proto se během naší spolupráce snažím klienta edukovat nejen <strong>CO </strong> má dělat, ale i <strong>PROČ.</strong> To vše děláme společně v reálném životě s reálnými výzvami a překážkami. 
                    Spolupráce znamená <strong>PRACOVAT SPOLU</strong>, tedy určitě nečekej, že jsem “čaroděj” který ti sestaví zázračný plán a s minimálním úsilím dosáhneš výsledku
                     “za pouhých 5 týdnů”. <strong>Nevyhnutelně budeš makat.</strong> A naší spoluprací získáš jistotu, že tvoje úsilí, vynaložená energie a změny, které uděláš, 
                     budou mít smysl a dosáhneš dlouhodobě udržitelného progresu.
                    Největší část mojí klientely tvoří stabilní základna <strong>začínajících, středně pokročilých nebo kondičních / hobby cvičenců. </strong> 
                    <strong>závodníky</strong> do různých kategorií kulturistiky <strong>(jak mužské, tak ženské kategorie).</strong> 
                    Mám zkušenost s nastavením silového tréninku po různých <strong>úrazech a operačních zákrocích.</strong>   
                    </p>
              </div>

            

                

              
            </div>
            
              <div className=''>
              <Image src={JirkaPoza}
                className='hidden lg:block rounded-xl w-full max-w-sm md:max-w-md lg:w-[500px] xl:w-max-w-2xl 2xl:max-w-2xl '
                alt='Jiří Kočvara pózující s medailí za vítězství v soutěži'
                quality={50}
                >
              </Image>

              <span className='hidden lg:block xl:hidden 2xl:hidden pt-20'>
                <p className='lg:text-start text-lg md:text-lg'>Za svou více než <strong>10letou</strong> trenérskou kariéru 
                    jsem odtrénoval již <strong>nižší stovky klientů. </strong> S nemalým počtem klientů spolupracujeme pravidelně již mnoho let a můžeme tak dosahovat i pokročilejších výsledků. Spousta spokojených klientů se 
                    ke mně vrací i opakovaně.
                    <strong> Vzhledem k nesporným benefitům silového tréninku si nesmírně vážím každého, kdo se rozhodne, ať už s mojí pomocí či jinak, silový trénink zařadit 
                    do svého života.</strong>
                    </p>
                </span>
                

              </div>
          </div>


    </div>
    
  )
}

export default Profil