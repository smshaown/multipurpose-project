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

        <div>
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
            name="Basic Plan"     
            price={selectMonthly ? "199" : "19"}
            yr={selectMonthly ? "/yr" : "/mo"}
            project="5"
            api="100k"
            storage="200MB" 
            svg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 412.9" className="svg-inject icon-svg icon-svg-md text-primary mb-3 w-12 h-12"><path className="lineal-fill5" d="M453.8 238.1l-9.6 76.3H67.8l-9.6-76.3z"></path><circle className="lineal-fill5" cx="178.1" cy="149.9" r="35.1"></circle><circle className="lineal-fill5" cx="333.9" cy="149.9" r="35.1"></circle><path className="lineal-stroke" d="M498.6 136.5h-60.2c-7.4-.2-13.6 5.7-13.8 13.1-.2 7.4 5.7 13.6 13.1 13.8h11.8l-7.5 61.3H70.1l-7.5-61.3h68.9c7.4 25.7 34.3 40.6 60 33.1 16-4.6 28.5-17.1 33.1-33.1h62.6c7.4 25.7 34.3 40.6 60 33.2 25.7-7.4 40.6-34.3 33.2-60-4.9-17.1-18.9-30.1-36.3-33.9l-39-94.2c-2.8-6.9-10.7-10.1-17.6-7.3s-10.1 10.7-7.3 17.6l35.7 86.2c-14 5.5-24.6 17.2-28.8 31.6h-62.6c-4.2-14.4-14.8-26.1-28.8-31.7l35.7-86.2c2.8-6.9-.4-14.7-7.3-17.6s-14.7.4-17.6 7.3l-39.1 94.2c-17.4 3.8-31.3 16.9-36.2 33.9H13.4C6 136.7.1 142.9.3 150.3c.2 7.1 5.9 12.9 13.1 13.1h22.1l29.8 237.8c.9 6.7 6.6 11.8 13.3 11.8h354.8c6.8 0 12.5-5 13.3-11.8l29.8-237.8h22c7.4-.2 13.3-6.4 13.1-13.8-.2-7.2-5.9-12.9-13-13.1zm-165-8.2c.4 0 .9.1 1.3.1h.7c11.9.9 20.8 11.3 19.9 23.2-.9 11.9-11.3 20.8-23.2 19.9-11.9-.9-20.8-11.3-19.9-23.2.8-11.1 10-19.7 21.2-20zm-157.1.1h.7c.4 0 .9-.1 1.3-.1 11.9.2 21.4 10 21.3 22-.2 11.9-10 21.4-22 21.3-11.9-.2-21.4-10-21.3-22 .2-11.2 8.9-20.4 20-21.2zm-103 123.1h365.1l-6.3 49.5H79.7l-6.2-49.5zM90.4 386L83 327.9h345.9l-7.4 58.1H90.4z"></path></svg>}
            />

          <OurPricingCard
           name="Premium Plan"
            price={selectMonthly ? "499" : "49"}
            yr={selectMonthly ? "/yr" : "/mo"}
            project="20"
            api="300k"
            storage="500MB"
            svg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 479.8 512" className="svg-inject icon-svg icon-svg-md text-primary mb-3 w-12 h-12">
              <path className="lineal-stroke" d="M308 512H61.9c-8 0-14.4-6.5-14.4-14.4V227.2c0-4.3 2-8.4 5.4-11.2l178-143.7c5.3-4.3 12.8-4.3 18.1 0L427 216c3.4 2.7 5.4 6.9 5.4 11.2v269.6c-.2 8-6.8 14.3-14.8 14-7.7-.2-13.8-6.4-14-14V234.1L239.9 102 76.3 234.1v249.1H308c8 .2 14.3 6.8 14 14.8-.2 7.6-6.3 13.8-14 14z"></path>
              <path className="lineal-stroke" d="M465.4 209.8c-3.3 0-6.4-1.1-9-3.2L239.9 32.9 23.5 206.7c-6.2 5-15.3 4-20.3-2.2s-4-15.3 2.2-20.3l225.5-181c5.3-4.2 12.8-4.2 18.1 0l225.5 181c6.2 5 7.2 14.1 2.2 20.3-2.8 3.3-6.9 5.3-11.3 5.3z"></path><ellipse transform="rotate(-80.781 239.904 207.686)" className="lineal-fill5" cx="239.9" cy="207.7" rx="42.9" ry="43"></ellipse>
              <path className="lineal-stroke" d="M239.9 265.1c-31.7 0-57.4-25.7-57.4-57.4s25.7-57.4 57.4-57.4 57.4 25.7 57.4 57.4c-.1 31.7-25.7 57.3-57.4 57.4zm0-85.9c-15.8 0-28.5 12.8-28.5 28.5s12.8 28.5 28.5 28.5 28.5-12.8 28.5-28.5c0-15.8-12.8-28.5-28.5-28.5z"></path>
              <path className="lineal-fill5" d="M171.8 325.7h136.1v171.9H171.8z"></path><path className="lineal-stroke" d="M308 512H171.8c-8 0-14.4-6.5-14.4-14.4V325.7c0-8 6.5-14.4 14.4-14.4H308c8 0 14.4 6.5 14.4 14.4v171.9c0 7.9-6.4 14.4-14.4 14.4zm-121.8-28.9h107.3v-143H186.2v143zm234.2-317.7c-7.9 0-14.4-6.5-14.4-14.4V73.3h-28.6c-8 0-14.4-6.5-14.4-14.4s6.5-14.4 14.4-14.4h43c8 0 14.4 6.5 14.4 14.4v92c0 8-6.4 14.4-14.4 14.5 0-.1 0 0 0 0z"></path></svg>}
          />

          <OurPricingCard
            name="Corporate Plan"
            price={selectMonthly ? "199" : "19"}
            yr={selectMonthly ? "/yr" : "/mo"}
            project="5"
            api="100k"
            storage="200MB"
            svg={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.6 380.8" className="svg-inject icon-svg icon-svg-md text-primary mb-3 w-12 h-12"><path className="lineal-stroke" d="M299.9 104.7h-23.8V56.5c0-18.1-14.6-32.7-32.7-32.7h-77.2c-18 0-32.7 14.7-32.7 32.7v48.2h-23.8V56.5C109.8 25.3 135 0 166.2 0h77.2c31.2 0 56.4 25.3 56.5 56.5v48.2z"></path><path className="lineal-stroke" d="M360.5 380.8H49.1c-27.1 0-49-22-49.1-49.1V119.1C0 92 22 70 49.1 70h311.5c27.1 0 49 22 49.1 49.1v212.7c-.1 27.1-22.1 49-49.2 49zM49.1 93.8c-14 0-25.3 11.3-25.3 25.3v212.7c0 14 11.3 25.3 25.3 25.3h311.5c14 0 25.3-11.3 25.3-25.3V119.1c0-14-11.3-25.3-25.3-25.3H49.1z"></path><path className="lineal-fill5" d="M49.2 81.7c-18.4 0-33.3 14.8-33.3 33.2 0 2.7.3 5.3.9 7.9C35.4 197.9 103.6 254 184.2 254h41.2c80.6 0 148.8-56.1 167.3-131.2 4.3-17.8-6.6-35.8-24.5-40.2-2.6-.6-5.2-.9-7.9-.9H49.2z"></path><path className="lineal-stroke" d="M225.4 265.9h-41.2c-41.5-.1-81.8-14.2-114.3-40C38 200.5 15.3 165.2 5.4 125.6-.5 101.4 14.3 77 38.6 71.1c3.5-.9 7.1-1.3 10.7-1.3h311.1c24.9 0 45.2 20.2 45.2 45.1 0 3.6-.4 7.2-1.3 10.7-9.9 39.6-32.6 74.8-64.5 100.2-32.6 25.9-72.9 40-114.4 40.1zM49.2 93.6c-6.6 0-12.9 3-16.9 8.2-4.1 5.1-5.5 11.8-3.9 18.2 17.6 71.8 81.9 122.3 155.8 122.2h41.2c73.9.1 138.3-50.4 155.8-122.2 1.6-6.3.1-13-3.9-18.1-4.1-5.2-10.3-8.3-16.9-8.2l-311.2-.1z"></path><path className="lineal-fill5" d="M128.5 288.5h-13.8c-8.9 0-16.1-7.2-16.1-16.1v-48.3c0-8.9 7.2-16.1 16.1-16.1h13.8c8.9 0 16.1 7.2 16.1 16.1v48.3c0 8.9-7.2 16.1-16.1 16.1z"></path><path className="lineal-stroke" d="M128.5 300.4h-13.8c-15.5 0-28-12.5-28-28v-48.3c0-15.5 12.5-28 28-28h13.8c15.5 0 28 12.5 28 28v48.3c0 15.5-12.5 28-28 28zm-13.8-80.5c-2.3 0-4.2 1.9-4.2 4.2v48.3c0 2.3 1.9 4.2 4.2 4.2h13.8c2.3 0 4.2-1.9 4.2-4.2v-48.3c0-2.3-1.9-4.2-4.2-4.2h-13.8z"></path><path className="lineal-fill5" d="M294.9 288.5h-13.8c-8.9 0-16.1-7.2-16.1-16.1v-48.3c0-8.9 7.2-16.1 16.1-16.1h13.8c8.9 0 16.1 7.2 16.1 16.1v48.3c0 8.9-7.2 16.1-16.1 16.1z"></path><path className="lineal-stroke" d="M294.9 300.4h-13.8c-15.5 0-28-12.5-28-28v-48.3c0-15.5 12.5-28 28-28h13.8c15.5 0 28 12.5 28 28v48.3c0 15.5-12.5 28-28 28zm-13.8-80.5c-2.3 0-4.2 1.9-4.2 4.2v48.3c0 2.3 1.9 4.2 4.2 4.2h13.8c2.3 0 4.2-1.9 4.2-4.2v-48.3c0-2.3-1.9-4.2-4.2-4.2h-13.8z"></path></svg>}
          />
        </div>
      </div>
    </div>
  );
};
