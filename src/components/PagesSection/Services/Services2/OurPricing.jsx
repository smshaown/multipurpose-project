import React, { useState } from "react";
import { Title } from "../../../../SameSection/Title/Title";
import { OurPricingCard } from "./OurPricingCard";
import "../services.css";

export const OurPricing = () => {
  const [selectMonthly, setSelectMonthly] = useState(true);

  const handleCheckboxChange = () => {
    setSelectMonthly((prev) => !prev);
  };

  return (
    <div className="mt-20 md:mt-40 bg-[#EDF2FC] w-full h-[600px] mb-40">
      <div className="myContainer">
        <div className="w-full lg:w-[860px] flex flex-col mx-auto justify-center items-center pt-[128px]">
          <span>
            <Title title="Our Process" />{" "}
          </span>
          <h1 className="text-[#343f52] text-2xl md:text-4xl font-bold text-center py-4">
            We offer great prices, premium products and quality service for your
            business.
          </h1>
        </div>

        <div className="">
          <div className="flex flex-row justify-center items-center gap-4 mt-20">
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
            <h4 className="text-base font-semibold">
              Yearly <span className="text-red-500">(Save 30%)</span>
            </h4>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center ourPriceCard">
          <OurPricingCard
            className=" z-50"
            price={selectMonthly ? "199" : "19"}
            yr={selectMonthly ? "/yr" : "/mo"}
            project="5"
            api="100k"
            storage="200MB"
          />

          <OurPricingCard
            price={selectMonthly ? "499" : "49"}
            yr={selectMonthly ? "/yr" : "/mo"}
            project="20"
            api="300k"
            storage="500MB"
          />

          <OurPricingCard 
            price={selectMonthly ? "199" : "19"}
            yr={selectMonthly ? "/yr" : "/mo"}
            project="5"
            api="100k"
            storage="200MB"
          />
        </div>
      </div>
    </div>
  );
};
