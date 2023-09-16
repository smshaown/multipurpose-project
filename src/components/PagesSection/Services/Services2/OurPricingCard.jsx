import React from "react";
import { BiCheck } from "react-icons/bi";
import { Button } from "../../../../SameSection/Button/Button";
import "../Services.css";

export const OurPricingCard = ({
  price,
  yr,
  api,
  storage,
  project,
  svg,
  name,
}) => {
  return (
    <div
      className="mt-10 w-full md:w-[350px]  md:gap-4 lg:gap-0 rounded-lg flex flex-col justify-center items-center z-10 relative bg-white mb-5 ourPriceCard"
      style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
    >
      <header className="">
        <span className="flex flex-col justify-center items-center">{svg}</span>
        <h3 className="text-[#343f52] text-xl mt-2 mb-3 font-bold">{name}</h3>
        <h1 className="text-[#343f52] mb-6">
          <sup className="text-xl font-medium">$</sup>{" "}
          <span className="text-4xl font-bold">{price}</span>
          <sub className="font-medium text-base">{yr}</sub>{" "}
        </h1>
      </header>
      <div>
        <ul className="mb-8">
          <li className="flex flex-row gap-2 mt-4">
            <BiCheck className="w-6 h-6 rounded-full text-[#3f78e0] bg-[#dce7f9]" />{" "}
            <span className="font-bold text-black"> {project} </span>Project
          </li>
          <li className="flex flex-row gap-2 mt-4">
            <BiCheck className="w-6 h-6 rounded-full text-[#3f78e0] bg-[#dce7f9]" />{" "}
            <span className="font-bold text-black"> {api} </span>API Access
          </li>
          <li className="flex flex-row gap-2 mt-4">
            <BiCheck className="w-6 h-6 rounded-full text-[#3f78e0] bg-[#dce7f9]" />{" "}
            <span className="font-bold text-black"> {storage} </span>Storage
          </li>
          <li className="flex flex-row gap-2 mt-4">
            <BiCheck className="w-6 h-6 rounded-full text-[#3f78e0] bg-[#dce7f9]" />{" "}
            <span className="font-bold text-black"> Weekly </span>Reports
          </li>
          <li className="flex flex-row gap-2 mt-4">
            <BiCheck className="w-6 h-6 rounded-full text-[#3f78e0] bg-[#dce7f9]" />{" "}
            <span className="font-bold text-black"> 7/24 </span>Support
          </li>
        </ul>
      </div>
      <Button button="Choose Plan" />
    </div>
  );
};
