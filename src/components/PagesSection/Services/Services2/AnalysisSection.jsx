import React, { useEffect, useState } from "react";
import img from "../../../../assets/images/Pages/Services/Services2/i8.png";
import ProgressBar from "./ProgressBar";

const AnalysisSection = () => {
 
  return (
    <div className="mb-40">
      <div className="myContainer">
        <div className="flex flex-col md:flex-row  gap-12">
          <div className="w-full lg:w-[60%]">
            <img
              className="w-full h-full"
              src={img}
              alt="Analysis Section Img"
            />
          </div>
          <div className="w-full lg:w-[40%]">
            <h1 className="text-4xl md:text-[40px] font-bold text-[#343f52]">
              We bring rapid solutions to make the life of our customers easier.
            </h1>

            <ProgressBar label="Marketing" percentage={100} color="#3f78e0" />
            <ProgressBar label="Strategy" percentage={80} color="#FAB758" />
            <ProgressBar label="Development" percentage={85} color="#F78B77" />
            <ProgressBar label="Data Analysis" percentage={90} color="#45C4A0" />


          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisSection;
