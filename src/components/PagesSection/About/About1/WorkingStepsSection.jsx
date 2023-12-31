import React from "react";
import { TitleForAbout } from "./TitleForAbout";
import { Button } from "../../../../SameSection/Button/Button";

export const WorkingStepsSection = () => {
  return (
    <div className="myContainer">
      {/* title section  */}
      <div>
        <TitleForAbout
          svg={
            <svg
              viewBox="0 0 512 447"
              xmlns="http://www.w3.org/2000/svg"
              className="svg-inject icon-svg icon-svg-md mb-4 h-14 w-14"
            >
              <path
                className="lineal-stroke"
                d="M102.4 447C45.8 447 0 401.1 0 344.6s45.9-102.4 102.4-102.4c36.3 0 69.9 19.2 88.3 50.5 4.1 6.9 1.8 15.8-5.2 19.9-6.9 4.1-15.8 1.8-19.9-5.2-20.5-34.9-65.4-46.6-100.3-26.1s-46.6 65.4-26.1 100.3 65.4 46.6 100.3 26.1c10.2-6 18.8-14.3 25-24.3 4.3-6.8 13.2-8.9 20.1-4.6 6.8 4.3 8.9 13.2 4.6 20.1-18.7 30-51.5 48.2-86.8 48.1zm395.1-119.8H254.3c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h243.1c8 .2 14.4 6.9 14.2 14.9-.2 7.8-6.4 14-14.1 14.2zm-91.2 63.9h-152c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h152c8 .2 14.4 6.9 14.2 14.9-.2 7.7-6.5 14-14.2 14.2z"
              ></path>
              <circle
                className="lineal-fill3"
                cx="102.4"
                cy="102.4"
                r="87.8"
              ></circle>
              <path
                className="lineal-stroke"
                d="M102.4 204.8C45.8 204.8 0 158.9 0 102.4S45.8 0 102.4 0s102.4 45.8 102.4 102.4c-.1 56.5-45.9 102.3-102.4 102.4zm0-175.7c-40.5 0-73.3 32.8-73.3 73.3s32.8 73.3 73.3 73.3 73.3-32.8 73.3-73.3c-.1-40.5-32.9-73.2-73.3-73.3zM497.5 85H254.3c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h243.1c8 .2 14.4 6.9 14.2 14.9-.2 7.8-6.4 14-14.1 14.2zm-91.2 63.8h-152c-8-.2-14.4-6.9-14.2-14.9.2-7.7 6.4-14 14.2-14.2h152c8 .2 14.4 6.9 14.2 14.9-.2 7.8-6.5 14-14.2 14.2z"
              ></path>
            </svg>
          }
          title="Here are 3 working steps to organize our business projects."
        />
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-14 mt-8 md:mt-16">
        <div className="w-full lg:w-1/2 lg:order-first order-last">
          <h1 className="text-4xl md:text-[34px] font-bold text-[#343f52] mt-8">
            How It Works?
          </h1>
          <p className="pt-[28px] text-[#60697b] text-2xl font-medium tracking-wide">
            Find out everything you need to know and more about how we create
            our business process models.
          </p>
          <p className="text-[#60697b] text-[17.50px] font-light pt-6 tracking-wide leading-6">
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam
            id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus
            eget urna mollis ornare.
          </p>
          <p className="text-[#60697b] text-[17.50px] font-light pt-6 tracking-wide leading-6 mb-8">
            Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id
            ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed
            consectetur. Sed posuere consectetur est at lobortis. Vestibulum id
            ligula porta felis.
          </p>

          <span className="mt-4">
            <Button button="Learn More" />
          </span>
        </div>

        {/* Right Side section  */}
        <div className="w-full lg:w-1/2 mt-8 md:mt-12">
          <div className="flex flex-col justify-center items-center">

            <div className="w-full h-full lg:w-[490px] lg:h-[120px] "
              style={{ boxShadow: "0 0 0 .05rem rgba(8,60,130,.06),0 0 1.25rem rgba(30,34,40,.04)"}}>
                  <div className="flex flex-row  items-center pt-8 pl-8">
                     <div className="w-14 h-14 bg-[#E0E9FA] rounded-full flex justify-center items-center mr-5">
                      <h4 className="font-bold text-xl text-[#3F78E0]">1</h4>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">Collect Ideas</h2>
                      <p className="text-[#60697b] font-light text=lg mt-1">Nulla vitae elit libero pharetra augue dapibus.</p>
                    </div>
                </div>
              </div>



            <div className="w-full h-full lg:w-[490px] lg:h-[120px] mt-6 lg:ml-12"
              style={{ boxShadow: "0 0 0 .05rem rgba(8,60,130,.06),0 0 1.25rem rgba(30,34,40,.04)"}}>
                  <div className="flex flex-row  items-center pt-8 pl-8">
                     <div className="w-14 h-14 bg-[#E0E9FA] rounded-full flex justify-center items-center mr-5">
                      <h4 className="font-bold text-xl text-[#3F78E0]">2</h4>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">Data Analysis</h2>
                      <p className="text-[#60697b] font-light text=lg mt-1">Nulla vitae elit libero pharetra augue dapibus.</p>
                    </div>
                </div>
              </div>


              
            <div className="w-full h-full lg:w-[490px] lg:h-[120px] mt-6"
              style={{ boxShadow: "0 0 0 .05rem rgba(8,60,130,.06),0 0 1.25rem rgba(30,34,40,.04)"}}>
                  <div className="flex flex-row  items-center pt-8 pl-8">
                     <div className="w-14 h-14 bg-[#E0E9FA] rounded-full flex justify-center items-center mr-5">
                      <h4 className="font-bold text-xl text-[#3F78E0]">3</h4>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">Finalize Product</h2>
                      <p className="text-[#60697b] font-light text=lg mt-1">Nulla vitae elit libero pharetra augue dapibus.</p>
                    </div>
                </div>
              </div>



          </div>
        </div>
      </div>
    </div>
  );
};
