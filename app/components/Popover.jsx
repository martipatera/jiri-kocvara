"use client";
import React, { useState } from 'react';
import { FaInfoCircle } from "react-icons/fa";

function Popover() {
  const [isPopoverVisible, setPopoverVisible] = useState(false);

  const handleMouseEnter = () => {
    setPopoverVisible(true);
  };

  const handleMouseLeave = () => {
    setPopoverVisible(false);
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        type="button"
        className="text-deep-orange-700 hover:text-deep-orange-800 focus:ring-4 focus:outline-none focus:ring-deep-orange-300 font-medium rounded-lg text-sm p-2"
      >
        <FaInfoCircle className='text-white' size={20} />
      </button>

      {isPopoverVisible && (
        <div
          role="tooltip"
          className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 z-50 w-64 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg shadow-lg p-3"
        >
          <p>V případě zájmu je možnost domluvit v omezených termínech i soukromé fitko se základním vybavením.</p>
        </div>
      )}
    </div>
  );
}

export default Popover;
