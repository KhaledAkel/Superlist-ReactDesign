import React from 'react'
import { FaArrowRight, FaArrowDown } from "react-icons/fa6";
import { logo, logoText } from '../assets'

const Navbar = () => {
  return (
    <div className='app-navbar w-full h-[85px] flex items-center justify-between px-10 max-sm:px-5'>
        <div className="app-navbar-left flex items-center">
            <div className="flex items-center">
                <div className=''>
                    <a href="" className='flex items-center gap-3 mr-4'>
                       <img src={logo} alt="logo" className='w-[24px] h-[24px] mb-1'/>
                        <img src={logoText} alt="Superlist" className='w-[84px]' />
                    </a>
                </div>
                <div className='flex items-center gap-7 mb-1 font-[600] text-dark font-inter text-[16px]'>
                    <a href=" " className="hover:text-lightGray max-md:hidden">MacOS</a>
                    <a href="" className="hover:text-lightGray max-sm:hidden">Web</a>
                    <a href="" className="hover:text-lightGray max-sm:hidden">iOS</a>
                    <a href="" className="hover:text-lightGray max-sm:hidden">Andriod</a>
                </div>
                </div>
            </div>
        <div className='app-navbar-right flex items-center mb-1 font-inter font-[600] gap-7 text-[16px] text-dark'>
            <a href="" className='hover:text-lightGray max-sm:hidden'>Updates</a>
            <a href="" className='hover:text-lightGray max-md:hidden'>Pricing</a>
            <a href="" className='text-tomato flex items-center gap-3 max-sm:hidden'>Sign in <span> <FaArrowRight /> </span></a>
            <a href="" className='sm:hidden text-tomato flex items-center gap-3'>Download <span> <FaArrowDown /> </span></a>
        </div>
      
    </div>
  )
}

export default Navbar
