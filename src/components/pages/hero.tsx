import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
  <div className='w-full mx-auto relative'>
    <Image className='mx-auto w-' src={'/images/banner.jpg'}
    alt='banner img'
   width={1280}
   height={500}
   loading='lazy'/>
   <div className=' absolute top-0 w-full h-full bg-black/30 text-gray-100 flex flex-col items-center justify-center '>
   <h2 className='text-5xl lg:text-[150px] font-bold'>Nitoo Kumari</h2>
   <p className='text-xl lg:text-5xl font-semibold'>Fullstack Developer</p>
    
   </div>
   
  </div>
  )
}

export default Hero