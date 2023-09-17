import React from 'react'
import bannerImg from "../../../../assets/images/Pages/About/About1/bg12.webp";
import "../AboutCss.css";


export const AboutBanner = () => {
  return (
    <div className="bg-[#F6F7F9] h-[100vh] text-center -mt-[90px] z-10 ">
      <div className="">
        <div className="pt-56 px-3 md:px-0">
          <h1 className="text-4xl md:text-5xl font-bold text-[#343f52]">Hello! This is Sandbox</h1>
         <p className="text-[#60697b] text-lg md:text-xl mt-4 ">A company turning ideas into beautiful things.</p>
         <div className="mt-16 AboutBannerImg">
          <img src={bannerImg} alt="" /> 
        </div>
        </div>      
      </div>
    </div>
  )
}
