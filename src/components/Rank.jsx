import React from 'react'
import { day, week, month } from '../assets'

function Rank() {
  return (
    <div className='flex max-sm:flex-col justify-center items-center py-32 max-sm:py-11 gap-x-11 gap-y-16 max-md:mb-3'>
        <img src={day} alt=""  className='w-[200px] hover:-translate-y-3 duration-300 cursor-pointer'/>
        <img src={week} alt="" className='w-[200px] hover:-translate-y-3 duration-300 cursor-pointer'/>
        <img src={month} alt=""className='w-[200px] hover:-translate-y-3 duration-300 cursor-pointer' />      
    </div>
  )
}

export default Rank
