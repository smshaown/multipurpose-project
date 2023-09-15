import React from "react";
// Let' Talk section us img
import img1 from "../../../../assets/images/Pages/Services/Services1/g5.jpg";
import img2 from "../../../../assets/images/Pages/Services/Services1/g6.jpg";
import { Button } from "../../../../SameSection/Button/Button";

export const LetTalkSection = () => {
  return (
    <div className="mb-40 mt-28 md:mt-40">
      <div className="myContainer flex flex-col lg:flex-row justify-between ">
        {/* Left side div section card img start */}
        <div className="w-full md:w-[55%] flex flex-col lg:flex-row gap-8">
          <div className="md:w-[278px] md:h-[278px] md:mt-24">
            <img
              className="rounded-md object-cover w-full h-full"
              src={img1}
              alt="Let's Talk"
            />
          </div>
          <div>
            <div className="w-full md:w-60 h-48 bg-[#E0E9FA] rounded-md flex flex-col justify-center items-center ">
              <h1 className="text-[#343f52] text-4xl font-bold">5000+</h1>
              <h3 className="text-[#60697b] text-lg mt-1 font-medium">
                Satisfied Customers
              </h3>
            </div>
            <div className="mt-6 w-full md:w-[296px] h-full md:h-[200px]">
              <img className="rounded-md w-full h-full" src={img2} alt="" />
            </div>
          </div>
        </div>

        {/* Right side div section Letter start */}
        <div className="w-full md:w-[45%] ml-0 md:ml-20">
          <h1 className="text-4xl font-bold text-[#343f52]  mt-12 md:mt-0">Let’s Talk</h1>
          <p className="text-xl text-[#60697d] font-medium py-7">
            Lets make something great together. We are <span>trusted by</span>{" "}
            over 5000+ clients. Join them by using our services and grow your
            business.
          </p>
          <p className="text-[#60697b] mb-6 font-serif text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            mollitia, fugit minus repellat deleniti eius, voluptatem quis id
            nisi nam ea veniam eum cupiditate natus at tempore nesciunt! At
            officiis voluptatem provident velit reiciendis earum
          </p>

          {/* button section hook  */}
          <Button button="Join Us" />
        </div>
      </div>
    </div>
  );
};
