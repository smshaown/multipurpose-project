import React from 'react'
import './JoinOurCommunity.css'
import { Title } from '../Title/Title'

export const JoinOurCommunity = () => {
  return (
    <div className='mt-20 mb-20'>
      <div className='myContainer'>
        <div className='JoinOurCommunity flex flex-col justify-center items-center'>
        <div className=" w-full lg:w-[860px] text-center mx-auto">
          <span>
            <Title title="Our Process" />
          </span>
          <h1 className="text-[#343f52] text-2xl md:text-4xl font-bold text-center py-4">
              We are trusted by over 5000+ clients. Join them now and grow your business.
          </h1>

          <div className='grid grid-cols-3 justify-between items-center mt-10 gap-8'>
            <div>
              <h1 className='text-4xl md:text-6xl font-bold text-[#3F78E0]'> 7518 </h1>
              <p className='font-medium mt-2 text-sm md:text-base'>Completed Projects</p>
            </div>
            <div>
              <h1 className='text-4xl md:text-6xl font-bold text-[#3F78E0]'>5472</h1>
              <p className='font-medium mt-2 text-sm md:text-base'> Satisfied Customers</p>
            </div>
            <div>
              <h1 className='text-4xl md:text-6xl font-bold text-[#3F78E0]'>2184</h1>
              <p className='font-medium mt-2 text-sm md:text-base'>Expert Employees</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
