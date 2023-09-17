import React from 'react'

export const Button = ({button}) => {
  return (
    <div className='py-3 px-[1.2rem] bg-[#3f78e0] rounded-full transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:scale-110 w-[150px] text-white font-semibold text-center tex-lg hover:shadow-xl cursor-pointer'>{button}</div>
  )
}
