import React from 'react'
import { Hero, Preview } from '../components'

const Header = () => {
  return (
    <div className='w-full pt-14 max-sm:pt-8 '>
        <Hero />
        <div className='h-[1px] bg-tomato sm:hidden'/>
        <Preview />
    </div>
  )
}

export default Header
