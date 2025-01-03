import Link from 'next/link'
import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";





function Footer() {
  const links = [
    {
        name : "Home", path : "/"
    },
    {
        name : "features", path : "/features"
    },
    {
        name : "About", path : "/about"
    },
    {
        name : "Studio", path : "/studio"
    },
]
  return (
    <footer className ="p-10 bg-black">
      <div className='  text-white flex flex-col md:flex-row  
    items-center justify-center gap-12 md:gap-0 md:justify-between max-w-screen-xl mx-auto '>
       {/* logo */}
       <Link href={'/'}><h2 className=' uppercase text-3xl font-extrabold'>Blog</h2></Link>

       {/* links */}
       <div className='text-2xl text-gray-300 flex gap-5 items-center'>
        <Link className=' hover:text-orange-500 duration-200 cursor-pointer' href={'https://www.instagram.com/neetukumari3076/'}><FaSquareInstagram size={30}/></Link>
        <Link className=' hover:text-orange-500 duration-200 cursor-pointer' href={'https://web.facebook.com/people/Nitoo-Kumari/pfbid02tendwaV6VEubNRNoaMjrhiHG7sJT3Hi1ytzBYoGekSmqpUsD6fnxFh4tRqSf5EMal/'}><FaFacebook size={30}/></Link>
        <Link className=' hover:text-orange-500 duration-200 cursor-pointer' href={'https://pk.linkedin.com/in/nitoo-kumari-97b3b5247'}><FaLinkedin size={30}/></Link>
        <Link className=' hover:text-orange-500 duration-200 cursor-pointer' href={'https://github.com/nitoo124'}><FaGithub size={30}/></Link>
       </div>
       <p  className='text-gray-300 text-sm'>© All rights reserved</p>
       </div>
    </footer>
  )
}

export default Footer