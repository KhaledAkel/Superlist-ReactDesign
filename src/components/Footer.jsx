import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex justify-center items-center bg-darkBlue py-28'>
        <div className='w-[65%] max-md:w-[80%]  grid  grid-cols-5 max-md:grid-cols-2 font-ibm text-[15px] text-white font-semibold gap-y-11'>
            <div className='grid grid-flow-row grid-rows-7 col-span-1 gap-y-5'>
                <div  className='font-bold text-tomato text-[18px]'>Superlist</div>
                <div className='hover:opacity-45 cursor-pointer '>Home</div>
                <div className='hover:opacity-45 cursor-pointer'>Updates</div>
                <div className='hover:opacity-45 cursor-pointer'>Pricing</div>
                <div className='hover:opacity-45 cursor-pointer'>Careers</div>
                <div className='hover:opacity-45 cursor-pointer'>Suggestions</div>
                <div className='hover:opacity-45 cursor-pointer'>Help Center</div>
            </div>
            <div className='grid grid-flow-row grid-rows-7 col-span-1 gap-y-5'>
                <div className='font-bold'></div>
                <div className='hover:opacity-45 cursor-pointer'>Go Pro ✨</div>
                <div className='hover:opacity-45 cursor-pointer'>Open Source</div>
                <div className='hover:opacity-45 cursor-pointer'>Cookies</div>
                <div className='hover:opacity-45 cursor-pointer'>Privacy</div>
                <div className='hover:opacity-45 cursor-pointer'>Terms</div>
                <div className='hover:opacity-45 cursor-pointer'>Contract</div>
            </div>
            <div className='grid grid-flow-row grid-rows-7 col-span-1 gap-y-5'>
                <div className='font-bold text-skyBlue text-[18px]'>App</div>
                <div className='hover:opacity-45 cursor-pointer'>Mac</div>
                <div className='hover:opacity-45 cursor-pointer'>Web</div>
                <div className='hover:opacity-45 cursor-pointer'>iOS</div>
                <div className='hover:opacity-45 cursor-pointer'>Android</div>
                <div className='hover:opacity-45 cursor-pointer'>Sign in</div>
                <div className='hover:opacity-45 cursor-pointer'></div>
            </div>
            <div className='grid grid-flow-row grid-rows-7 col-span-1 gap-y-5'>
                <div className='font-bold text-darkGreen text-[18px]'>Social</div>
                <div className='hover:opacity-45 cursor-pointer'>Github</div>
                <div className='hover:opacity-45 cursor-pointer'>LinkedIn</div>
                <div className='hover:opacity-45 cursor-pointer'>Instagram</div>
                <div className='hover:opacity-45 cursor-pointer'>X</div>
                <div className='hover:opacity-45 cursor-pointer'></div>
                <div className='hover:opacity-45 cursor-pointer'></div>
            </div>
            <div className='grid grid-flow-row grid-rows-7 max-md:grid-rows-4 col-span-1 max-md:col-span-2 gap-y-5'>
                <div className='font-bold text-lightPurple text-[18px]'>Updates</div>
                <div className='row-span-5 max-md:row-span-3 bg-[#2c2c3d] rounded-[15px] pl-[15px] pt-[20px] pr-[20px] pb-[20px] flex flex-col justify-between hover:scale-105'>
                    <div className='font-bold text-skyBlue font-ibm text-[30px]'>
                        Bug busters 🐛
                    </div>
                    <a href=""className='bg-skyBlue w-[35%] flex justify-center items-center rounded-[10px] font-bold hover:opacity-90'>V 1.11</a>

                </div>
                <div className='hover:opacity-45 cursor-pointer'></div>
            </div>
        </div>
    </div>
  )
}

export default Footer
