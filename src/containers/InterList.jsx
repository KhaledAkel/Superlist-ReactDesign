import React from 'react'
import { InterElement } from '../components'
import { elements } from '../data/elements'


const InterList = () => {
  return (
    <div className='w-full bg-darkBlue py-16'>
        <div className='w-[80%] max-sm:w-[85%] mx-auto '>
            <div className='font-ibm text-[45px] max-md:text-[26px] leading-10 max-md:leading-7 font-bold pb-28 max-md:pb-9'>
                <h1 className='text-white'>Lists with</h1>
                <h1 className='text-tomato'>Super Powers</h1>
            </div>
            <div className='bg-clip-text bg-gradient-to-t from-darkWhite to-white pb-44 '>
                {elements.map((element) => (
                    <InterElement key={element.key} title={element.title} detail={element.detail} />
                ))}
                <div className='w-full h-fit font-ibm text-[20px] cursor-pointer text-transparent mt-7'>The list goes on</div>
            </div>
        </div>
      
    </div>
  )
}

export default InterList
