
import React from 'react'
import { TestimonialSideSlider } from '../../../../SameSection/TestimonialSideSlider/TestimonialSideSlider'
import img from '../../../../assets/images/Pages/About/About1/co1.png'

export const TestimonialSlider = () => {
  return (
    <div  className='bg-[#EDF2FC] h-[625px] mt-40 mb-40' style={{clipPath: 'polygon(0 0, 100% 80px, 100% 100%, 0 100%)'}}>
        <div className='myContainer '>
        <div className='flex gap-12 justify-center items-center'>
                <div className='w-full md:w-1/2  flex flex-col justify-center items-center mt-[120px]'>
                    <div className='w-full md:w-[250px] h-full md:h-[250px] hidden md:block rounded-full bg-[#e0e9fa] relative mt-[7.25rem]'>
                      <div className='w-[370px] h-[505px] absolute mt-[-118px]'><img className='w-full h-full' src={img} alt="" /></div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 p-2'>
                  <TestimonialSideSlider />
                </div>
              </div>
        </div>
    </div>
  )
}
