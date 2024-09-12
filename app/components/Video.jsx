import React from 'react';

function VideoComponent() {
  return (
    <div className="mb-2 w-full lg:h-[800px] p-3 md:p-6 m-4 bg-blue-gray-200 border opacity-90 border-gray-200 rounded-xl shadow flex justify-center items-center">
      <video className='rounded-xl md:h-[550px] lg:h-[675px]' about='Trenér Jiří Kočvara vysvětlující dvě nejdůležitější podmínky pro správný trénink zad'  controls preload="none" poster="/videos/poster.png">
        <source src="/videos/VideoTest.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoComponent;
