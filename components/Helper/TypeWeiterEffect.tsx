import React from 'react'
import { TypeAnimation } from 'react-type-animation';
const TypeWeiterEffect = () => {
    return (
        <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
        "A React Devloper",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
        "A Next JS Devloper",
        1000,
        "A Designer",
        1000,
        
        ]}
        wrapper="span"
        speed={10}
        className='xl:text-[50px] lg:text-[40px] sm:text-[30px] text-[25px] text-amber-500 font-bold'
        repeat={Infinity}
        />
    );
}

export default TypeWeiterEffect
