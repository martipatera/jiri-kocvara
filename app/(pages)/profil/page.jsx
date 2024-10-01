
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
    <div className='min-h-screen bg-slate-200'>

      <div className='pt-28 md:pt-40  px-5 lg:px-10 pb-5 2xl:pb-0 '>
        <h1 className='text-3xl md:text-4xl text-center animate-fade font-semibold'>Jiří Kočvara</h1>
        <hr className="w-2/3 h-1 mx-auto my-4 bg-red-500 border-0 rounded md:my-10 animate-fade"></hr>
      </div>

      <div className='rounded-lg flex flex-col lg:flex-row justify-around p-1 md:p-3  mx-2 lg:mx-5 2xl:px-5 2xl:mx-28' >

            <div className='flex flex-col flex-wrap justify-start items-center'>


              <div>
                <Image src={JirkaPoza}
                    className='block md:max-w-lg lg:hidden rounded-xl pt-0'
                    alt='Jiří Kočvara pózující s medailí'
                    >
                </Image>

                
                
              </div>

              
 

              <div className='flex md:px-8 lg:hidden 2xl:flex 2xl:h-full flex-row px-2 justify-start items-center text-center lg:w-[500px] xl:w-[800px] lg:text-start text-lg md:text-lg  flex-wrap break-words pt-10 xl:pt-0 pb-5'>
                <p>Lorem ipsum, um, dolor sit ametum, dolor sit ametum, dolor sit ametum, dolor sit ametum, dolor sit ametum, dolor sit ametum, dolor sit ametum, dolor sit ametum, dolor sit ametum, dolor sit ametum, dolor sit ametum, dolor sit ametum, dolor sit ametum, dolor sit ametum, dolor sit ametum, dolor sit ametum, dolor sit ametum, dolor sit ametum, dolor sit ametum, dolor sit ametdolor sit amet consectetur adipisicing elit. Placeat totam doloribus soluta numquam eaque voluptatibus commodi quis, dolorum aliquam labore. Alias eos itaque, voluptatum quo nemo dolorem quam eius fugiat eum animi error expedita repellendus at corrupti quos ratione exercitationem. Neque quae expedita ex itaque sunt natus fuga dolor pariatur, ea aliquid alias repellat. Voluptas sapiente eveniet laudantium nihil fuga aspernatur quibusdam harum quam? Harum, praesentium quos ratione repellat deserunt consequatur. Officiis commodi dignissimos quibusdam, vitae ad magni labore ea sunt unde est ratione obcaecati voluptas culpa incidunt at consequatur iure nam modi perspiciatis dicta delectus atque? Ducimus ab nam nihil eligendi! Assumenda sunt asperiores aliquid laborum nostrum laudantium ab placeat voluptatum tempora ad, libero necessitatibus aspernatur omnis autem, temporibus exercitationem ea quidem! Quae nulla illo quaerat consequuntur totam ea labore a voluptas unde deleniti, magni impedit reiciendis deserunt dicta reprehenderit autem. Sequi nesciunt veniam, nemo, cum vero neque quae voluptatum ipsum aspernatur aliquam, cupiditate eligendi! Id sunt dolores aspernatur corrupti provident fuga quisquam autem omnis dolorem commodi reprehenderit, magni, reiciendis nostrum esse. Eveniet eaque assumenda aliquam autem totam qui impedit, magnam dolores minima amet alias. Voluptatum aliquid molestias dolores mollitia tempore. Pariatur quas dolorem nihil, esse facilis saepe tempora.1</p>
              </div>

              <div className='hidden pl-3 lg:flex 2xl:hidden flex-row px-2 justify-start items-center text-center xl:w-full xl:px-10 lg:text-start text-lg md:text-lg flex-wrap break-words'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cumque officiis nostrum esse eligendi earum ea. Unde et sequi odio suscipit iusto rerum, assumenda voluptatem! Saepe aperiam tempora ab ipsum omnis, unde velit quis eligendi laborum, itaque, delectus quae magnam. Ab ratione, alias aliquid deleniti cum natus dolorum aut a amet nulla sint error commodi harum repudiandae sed fugiat nisi ipsam voluptatum ducimus qui adipisci, minus voluptate! Earum sapiente odio quod. Blanditiis eos culpa voluptas quis qui aliquam ipsa beatae nemo quod iste quo, nostrum recusandae reiciendis vel accusantium nobis harum. Sapiente eius neque quam repudiandae debitis cumque, hic quasi explicabo molestias, eligendi quae iure temporibus amet, iusto odit vitae architecto voluptates autem nulla in id officiis incidunt beatae. Reprehenderit tempora dolores molestias laboriosam dignissimos fuga. Quas error consectetur voluptates assumenda temporibus commodi provident doloribus aliquam modi, quis ipsa in, exercitationem tempora tempore. Ab, doloremque molestias? Ut labore non ad nesciunt cupiditate quidem quo. Dolorum, aliquam harum est iure praesentium necessitatibus voluptas in exercitationem quod quidem laudantium adipisci officia neque incidunt iste saepe corporis, cumque sed illo delectus deserunt nisi enim excepturi. Tenetur blanditiis eveniet, vitae neque illo at voluptatum doloremque, maxime, porro commodi laboriosam explicabo beatae fugiat iusto quo veniam rerum nam vel tempora atque ea dicta quasi. Minima fugiat reiciendis veniam quam, maiores corporis voluptatum inventore eos nemo ullam incidunt dolor, sunt earum repellat esse provident cumque ut dicta! Eius voluptatibus asperiores quasi mollitia debitis fuga voluptas? Aliquid quod dicta aliquam quasi soluta dolorum possimus officia repellendus atque.2</p>
                 </div>

            

                

              
            </div>
            
              <div className=''>
              <Image src={JirkaPoza}
                className='hidden lg:block rounded-xl w-full max-w-sm md:max-w-md lg:w-[500px] xl:w-max-w-2xl 2xl:max-w-2xl '
                alt='Jiří Kočvara pózující s medailí'>
              </Image>

              <span className='hidden lg:block xl:hidden 2xl:hidden pt-4'>
                <p className='lg:text-start text-lg md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam commodi nulla id, natus, officiis neque recusandae aperiam, consequatur nisi doloribus vitae molestias veritatis alias incidunt. Voluptate tempore provident officiis veritatis itaque saepe nisi debitis corporis atque quod omnis, porro ullam sequi nostrum quia amet delectus doloremque deleniti minus ipsa mollitia. Eveniet consectetur nostrum aspernatur porro blanditiis nisi ullam explicabo, ipsum dolore incidunt et nulla voluptate optio totam rem facilis veniam officiis quis? Quas corrupti est, illo perspiciatis reiciendis at consectetur vero dignissimos. Ad quos nesciunt dolorem, dolores adipisci explicabo sed rem rerum voluptatum obcaecati, eaque nam debitis suscipit, reiciendis distinctio.3</p>
                </span>
                

              </div>
          </div>


    </div>
    
  )
}

export default Profil