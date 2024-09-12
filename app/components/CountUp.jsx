"use client"

import React from 'react'
import CountUp from 'react-countup';


function Counter() {
  return (
    <CountUp 
        end={150}
        duration={5}
        prefix='Již více jak '
        suffix=' klientů'
     />
  )
}

export default Counter