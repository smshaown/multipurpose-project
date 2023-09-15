import React, { useState } from "react";
import { Button } from "../../../../SameSection/Button/Button";
import { PriceCard } from "../../../../SameSection/PriceCard/PriceCard";

export const OurPricing = () => {
  const [selectMonthly, setSelectMonthly] = useState(true);

  const handleCheckboxChange = () => {
    setSelectMonthly((prev) => !prev);
  };

  return (
    <div className="myContainer mt-40">
      <div className="flex flex-col lg:flex-row justify-between mt-20">
        <div className="mt-20">
          <h4 className="uppercase text-[#aab0bc] font-bold text-lg tracking-wide">
            Our Pricing
          </h4>
          <h1 className="text-[#343f52] text-6xl font-bold py-4">
            We offer great and premium prices.
          </h1>
          <p className="text-[#60697b] text-base font-medium pb-8 mt-8">
            Enjoy a <span className="text-[#3f78e0]">free 30-day</span> trial
            and experience the full service. No credit card required!
          </p>
          <Button button="See All Prices" />
          {/* <h2>price={selectMonthly ? "20.99" : "188.9"}</h2> */}
        </div>

        <div>
          <div className="flex flex-row lg:justify-end items-center gap-4 lg:mt-0 mt-20">
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
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div>
              <PriceCard
                className=" z-50"
                price={selectMonthly ? "199" : "19"}
                yr={selectMonthly ? "/yr" : "/mo"}
                project="5"
                api="100k"
                storage="200MB"
              />

              {/* <div className=" w-[160px] h-[160px] bg-[#edf2fc] rounded-full top-0  -z-10"></div> */}
            </div>

            <div className="h-[600px]">
              <PriceCard
                price={selectMonthly ? "499" : "49"}
                yr={selectMonthly ? "/yr" : "/mo"}
                project="20"
                api="300k"
                storage="500MB"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
