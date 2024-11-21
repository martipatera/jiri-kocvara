import React from 'react';

function VideoComponent() {
  return (
    <div className="mb-2 w-full lg:h-[800px] p-3 md:p-6 m-4 bg-gray-500 border opacity-95 border-gray-200 rounded-xl shadow flex flex-col justify-around items-center">
      <video className='rounded-xl md:h-[550px] lg:h-[675px]' about='Trenér Jiří Kočvara vysvětlující dvě nejdůležitější podmínky pro správný trénink zad'
        loading="lazy"
        controls 
        preload="none"
         poster="/videos/poster.png">
        <source src="/videos/VideoTest.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className='text-center text-black mt-4 md:mt-5 lg:mt-4 font-semibold text-lg'>Zajímají tě další videa? <a target='_blank' href="https://www.instagram.com/jiri_kocvara/" className='underline'>Klikni zde</a></p>

    </div>
  );
}

export default VideoComponent;
