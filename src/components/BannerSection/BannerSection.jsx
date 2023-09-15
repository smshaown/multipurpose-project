import React from "react";
import './BannerSection.css';


export const BannerSection = () => {
  return (
    <div className="bannerSection h-screen z-10 -mt-[64px]">     
      <div
        className="flex flex-col justify-center items-center w-full h-full px-3"
        style={{ backgroundColor: "rgba(30,34,40,.5)" }}>      
        <h1 className="text-6xl font-bold text-white mt-4">Our Services</h1>
        <h2 className="text-2xl tracking-tigh font-medium text-white text-center w-full md:w-2/4 mt-4">
        We are a creative company that focuses on establishing long-term relationships with customers.
        </h2>
      </div>
    </div>
  );
};
