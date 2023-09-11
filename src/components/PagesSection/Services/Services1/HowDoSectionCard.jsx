import React from "react";
import '../Services.css';

const HowDoSectionCard = ({h2, title, p}) => {
  return (
    <div className="">
        
      <h2 className="w-16 h-16 bg-[#E0E9FA] rounded-full flex justify-center items-center text-[#4887fa] text-xl font-bold hover:bg-[#4887fa] hover:text-white delay-300 transform ">
        {h2}
        
      </h2>
      
      <h3 className="text-[#343f52] pt-5 pb-2 text-xl font-bold">{title}</h3>
      <p className="text-[#60697b] space-x-4 text-lg mt-2 tracking-tight pr-4">
        {p}
      </p>      
      
    </div>
  );
};

export default HowDoSectionCard;
