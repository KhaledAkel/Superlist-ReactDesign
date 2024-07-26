import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className=''>
      <div className='text-[85px] max-sm:text-[48px] font-ibm font-semibold text-dark flex flex-col justify-center items-center leading-[80px] max-sm:leading-[50px] px-10'>
        <h1>Home to</h1>
        <h1 className='flex items-center'>
          all your 
          <span className='text-tomato text-[65px] max-sm:text-[48px] mx-2'><FaCircleCheck /></span>
          <span className='text-tomato'> lists</span>
        </h1>
      </div>
      <div className='flex flex-col justify-center items-center my-6 font-inter text-[20px] text-lightGray font-semibold text-center max-sm:hidden'>
        <p>Take notes, organize your work, and get more done with AI.</p>
        <p>Simple, blazingly fast, and wrapped in a beautiful UI.</p>
      </div>
      <div className='flex flex-col justify-center items-center my-6 font-inter text-[20px] text-lightGray font-semibold text-center sm:hidden'>
        <p>For team work, personal projects,</p>
        <p>and everything in between.</p>
      </div>
      <div className='flex justify-center items-center text-[20px] max-md:text-[18px] text-white font-bold gap-[15px] mb-[30px] max-sm:mb-[13px]'>
        <a href="" className='bg-tomato px-[25px] py-[10px] rounded-[60px] hover:scale-105 duration-150'>Start today<span className='max-md:hidden'> — it’s free</span></a>
        <a href="" className='bg-lightPurple px-[25px] py-[10px] rounded-[60px] hover:scale-105 duration-150' >Go Pro ✨</a>
      </div>
    </div>
  )
}

export default Hero
