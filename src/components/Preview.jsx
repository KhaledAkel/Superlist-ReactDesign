import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { Monica, Pablo, Laura, John, Jene, gmail, sprint, slack } from '../assets'

const Preview = () => {
  return (
    <div className=' w-full pt-16'>
        <div className='w-[88%] 2xl:w-[64%] h-[75vh] max-sm:h-[85vh] mx-auto border-[2px] border-borderColor flex p-2 gap-3 rounded-[44px]'>
            <div className='w-[22%]  rounded-[44px]  bg-offWhite shadow-[0_0_20px_#ececf1] max-lg:hidden flex flex-col justify-between ' >
                <div className=''>
                    <div className='grid grid-cols-2 gap-3 p-6'>
                        <div className='h-[62px] col-span-1  rounded-[20px] bg-whiteGray '/>
                        <div className='h-[62px] col-span-1 rounded-[20px] bg-whiteGray  '/>
                        <div className='h-[62px] col-span-1 rounded-[20px] bg-whiteGray '/>
                        <div className='h-[62px] col-span-1 rounded-[20px] bg-whiteGray  '/>
                    </div>
                    <div className='font-inter font-semibold'>
                        <div className=' w-full pl-6 py-[6px] text-lightGray text-[14px] '>Lists</div>
                        <div className=' w-full  pl-7 py-[6px] text-[15px] bg-whiteGray relative' >💥 App Launch
                            <div className='h-full w-[3px] absolute bg-tomato top-0 right-0'/> 
                        </div>
                        <div className=' w-full  pl-7 py-[6px] text-[15px] bg-white hover:bg-whiteGray' >🏡 Kitchen Reno</div>
                        <div className=' w-full  pl-7 py-[6px] text-[15px] bg-white hover:bg-whiteGray' >🧘 Daily Habits</div>
                        <div className=' w-full  pl-7 py-[6px] text-[15px] bg-white hover:bg-whiteGray' >🍔 Recipes</div>
                        <div className=' w-full  pl-7 py-[6px] text-[15px] bg-white hover:bg-whiteGray' >✏️ Design Work</div>
                    </div>
                </div>
                <div className=' p-7 flex justify-between items-center gap-[8px]'>
                    <div className='w-[138px] h-[48px] bg-whiteGray rounded-[44px]'/>
                    <div className='w-[48px] h-[48px] rounded-full border border-whiteGray p-[4px]'><img src={Monica} alt="" className='w-full h-full rounded-full'/></div>
                    
                </div>
            </div>
            <div className='w-[48%] max-lg:w-full  rounded-[44px] bg-offWhite shadow-[0_0_20px_#ececf1] flex flex-col gap-y-[20px] pt-[35px] px-[35px]'>
                <div className=' flex items-center'>
                    <div className='h-[36px] flex items-center'>  
                        <img src={Laura} alt="" className='w-[36px] h-full rounded-full border-whiteGray border-[2px]'/>
                        <img src={Jene} alt="" className='w-[36px] h-full rounded-full border-whiteGray border-[2px] ml-[-15px]'/>
                        <img src={John} alt="" className='w-[36px] h-full rounded-full border-whiteGray border-[2px] ml-[-15px]'/>
                        <img src={Pablo} alt="" className='w-[36px] h-full rounded-full border-whiteGray border-[2px] ml-[-15px]'/>
                        <img src={Monica} alt="" className='w-[36px] h-full rounded-full border-whiteGray border-[2px] ml-[-15px]'/>
                    </div>
                    <p className='text-[14px] font-inter text-lightGray font-bold ml-1'>+6</p>
                </div>
                <h1 className='text-[40px] font-ibm text-dark font-semibold '>App Launch</h1>
                <p className='text-[18px] font-inter '>Hey team, here's a quick recap of what we're working on ahead of the launch. Feel free to add any more notes or details to the tasks.</p>
                <div className=' flex justify-between items-center'>
                    <div className='flex'>
                        <FaCircleCheck className='w-[26px] h-[26px] mt-[1px] text-tomato'/>
                        <div>
                            <h1 className='text-[18px] ml-3 font-inter font-semibold text-darkGray line-through decoration-tomato decoration-2'>Launch readiness</h1>
                            <div className='flex gap-x-3 ml-3 mt-2'>
                                <div className='w-[40px] h-[8px] rounded-[50px] bg-whiteGray'/>
                                <div className='w-[40px] h-[8px] rounded-[50px] bg-whiteGray'/>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img src={Jene} alt="" className='w-[26px] h-[26px] rounded-full'/>
                    </div>
                </div>
                <div className=' flex justify-between items-center'>
                    <div className='flex'>
                        <FaCircleCheck className='w-[26px] h-[26px] mt-[1px] text-tomato'/>
                        <div>
                            <h1 className='text-[18px] ml-3 font-inter font-semibold text-darkGray line-through decoration-tomato decoration-2'>Value proposition</h1>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <img src={gmail} alt="" className='w-[26px] h-[26px] rounded-full' />
                        <img src={John} alt="" className='w-[26px] h-[26px] rounded-full'/>
                    </div>
                </div>
                <div className=' flex justify-between items-center'>
                    <div className='flex'>
                        <FaCircleCheck className='w-[26px] h-[26px] mt-[1px] text-whiteGray'/>
                        <div>
                            <h1 className='text-[18px] ml-3 font-inter font-semibold text-darkGray'>Marketing strategy</h1>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img src={Pablo} alt="" className='w-[26px] h-[26px] rounded-full'/>
                    </div>
                </div>
                <div className=' flex justify-between items-center'>
                    <div className='flex'>
                        <FaCircleCheck className='w-[26px] h-[26px] mt-[1px] text-whiteGray'/>
                        <div>
                            <h1 className='text-[18px] ml-3 font-inter font-semibold text-darkGray'>Design system update</h1>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <img src={sprint} alt="" className='w-[26px] h-[26px] rounded-full' />
                        <img src={Laura} alt="" className='w-[26px] h-[26px] rounded-full'/>
                    </div>
                </div>
                <div className=' flex justify-between items-center'>
                    <div className='flex'>
                        <FaCircleCheck className='w-[26px] h-[26px] mt-[1px] text-whiteGray'/>
                        <div>
                            <h1 className='text-[18px] ml-3 font-inter font-semibold text-darkGray'>Website design & dev</h1>
                            <div className='flex gap-x-3 ml-3 mt-2'>
                                <div className='w-[40px] h-[8px] rounded-[50px] bg-whiteGray'/>
                                <div className='w-[40px] h-[8px] rounded-[50px] bg-whiteGray'/>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img src={Monica} alt="" className='w-[26px] h-[26px] rounded-full'/>
                    </div>
                </div>
                <div className=' flex justify-between items-center'>
                    <div className='flex'>
                        <FaCircleCheck className='w-[26px] h-[26px] mt-[1px] text-tomato'/>
                        <div>
                            <h1 className='text-[18px] ml-3 font-inter font-semibold text-darkGray line-through decoration-tomato decoration-2'>Pricing strategy</h1>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-2'>
                        <img src={slack} alt="" className='w-[26px] h-[26px] rounded-full' />
                        <img src={John} alt="" className='w-[26px] h-[26px] rounded-full'/>
                    </div>
                </div>
                <div className=' flex justify-between items-center'>
                    <div className='flex'>
                        <FaCircleCheck className='w-[26px] h-[26px] mt-[1px] text-whiteGray'/>
                        <div>
                            <h1 className='text-[18px] ml-3 font-inter font-semibold text-darkGray'>Prepsre analytics</h1>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <img src={Jene} alt="" className='w-[26px] h-[26px] rounded-full'/>
                    </div>
                </div>

            </div>
            <div className="w-[30%] 
                rounded-[44px] 
                bg-offWhite 
                shadow-[0_0_20px_#ececf1] 
                bg-[url('https://res.cloudinary.com/superlist/image/upload/c_scale,q_66,w_603/v1700760865/website/cities/spain_m8pcpr.webp')]
                object-cover 
                max-lg:hidden">  
            </div>
        </div>

      
    </div>
  )
}

export default Preview
