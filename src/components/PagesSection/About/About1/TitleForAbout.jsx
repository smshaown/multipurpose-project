import React from 'react'

export const TitleForAbout = ({svg, title}) => {
  return (
    <div className='myContainer'>
         <div className='w-full md:w-[600px] mx-auto'>
             <span className="flex flex-col justify-center items-center mb-6">{svg}</span>
            <h1 className='text-2xl text-center md:text-4xl font-bold text-[#252931]'>{title}</h1>
        </div>
    </div>
  )
}
