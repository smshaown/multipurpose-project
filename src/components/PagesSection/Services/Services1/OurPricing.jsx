import React, { useState } from "react";
import { Button } from "../../../../SameSection/Button/Button";

export const OurPricing = () => {
  const [selectMonthly, setSelectMonthly] = useState(true);

  const handleCheckboxChange = () => {
    setSelectMonthly((prev) => !prev);
  };

  return (
    <div className="myContainer mt-40">
      <div className="flex flex-row justify-end items-center gap-4">
        <span className="text-base font-semibold">Monthly</span>
        <label className="flex cursor-pointer select-none items-center">
          <div className="relative">
            <input
              type="checkbox"
              checked={selectMonthly}
              onChange={handleCheckboxChange}
              className="sr-only"
            />
            <div
              className={`box block h-7 w-12 rounded-full border border-[#3f78e0] bg-[#3f78e0] ${
                selectMonthly ? "bg-primary" : "bg-dark"
              }`}
            ></div>
            <div
              className={`absolute left-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#f6f7f9] transition ${
                selectMonthly ? "translate-x-full" : ""
              }`}
            ></div>
          </div>
        </label>
        <h4 className="text-base font-semibold">Yearly <span className="text-red-500">(Save 30%)</span></h4>
      </div>
      <div>
        <div>
           <h4 className="uppercase text-[#aab0bc] font-bold text-lg tracking-wide">Our Pricing</h4>
           <h1 className="text-[#343f52] text-[1.8rem] font-bold py-4">We offer great and premium prices.</h1>
           <p className="text-[#60697b] text-base font-medium pb-4">Enjoy a <span className="text-[#3f78e0]">free 30-day</span> trial and experience the full service. No credit card required!</p>
           <Button button="See All Prices" />
            {/* <h2>price={selectMonthly ? "20.99" : "188.9"}</h2> */}
        </div>
        <div>
            
        </div>
      </div>
    </div>
  );
};
