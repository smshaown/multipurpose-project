import React from 'react'
import img1 from '../../../../assets/images/Pages/About/About1/co1.png';
import { TestimonialSideSlider } from '../../../../SameSection/testimonialSideSlider/TestimonialSideSlider';

export const TestimonialSlider = () => {
  return (
    <div className='bg-[#EDF2FC] h-[625px] mt-40 mb-40' style={{clipPath: 'polygon(0 0, 100% 80px, 100% 100%, 0 100%)'}} >
        <div className='myContainer'>
         <div className='w-[1120px]'>
             {/* left side img  */}
                <div >
                   <div className='w-[250px] h-[250px] rounded-full bg-[#e0e9fa]'>
                     <img src={img1} alt="" />  
                   </div>
                </div>

                {/* Right side text TestimonialSideSlider  */}
                <div>
                    <TestimonialSideSlider />
                </div>
            </div>
        </div>
    </div>
  )
}
