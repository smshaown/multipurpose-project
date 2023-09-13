import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdSystemUpdateAlt } from "react-icons/md";
import { SiMarketo } from "react-icons/si";
import img1 from "../../../../assets/images/Pages/Services/Services1/g1.jpg";
import img2 from "../../../../assets/images/Pages/Services/Services1/g2.jpg";
import img3 from "../../../../assets/images/Pages/Services/Services1/g3.jpg";
import img4 from "../../../../assets/images/Pages/Services/Services1/g4.jpg";

const WhatDoSection = () => {
  return (
    <div className="myContainer mt-64">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-between ">
        <div>
          <h2 className="text-[40px] text-[#343F52] font-bold">What We Do?</h2>
          <p className="text-[#8B697B] leading-8 py-4 text-xl space-y-2 mb-4">
            The full service we are offering is specifically designed to meet
            your business needs and projects.
          </p>

          <div className="flex md:flex-row flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex gap-6">
                <span className="md:w-32 md:h-16 w-20 h-20 bg-[#E0E9FA] rounded-full justify-center items-center flex ">
                  <BiPhoneCall className="text-[#3f78e0] text-2xl" />
                </span>
                <div>
                  <h2 className="text-xl text-[#343f52] mb-3 font-bold mt-2">
                    24/7 Support
                  </h2>
                  <p className="leading-6 font-medium text-lg">
                    Nulla vitae elit libero pharetra augue dapibus.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 mt-0 md:mt-4">
                <span className="md:w-32 md:h-16 w-20 h-20 bg-[#E0E9FA] rounded-full justify-center items-center flex ">
                  <RiSecurePaymentLine className="text-[#3f78e0] text-2xl" />
                </span>
                <div>
                  <h2 className="text-xl text-[#343f52] mb-3 font-bold mt-2">
                  Secure Payments
                  </h2>
                  <p className="leading-6 font-medium text-lg">
                    Nulla vitae elit libero pharetra augue dapibus.
                  </p>
                </div>
              </div>
            </div>


            <div className="flex flex-col gpa-8">

              <div className="flex gap-6">
                <span className="md:w-32 md:h-16 w-20 h-20 bg-[#E0E9FA] rounded-full justify-center items-center flex ">
                  <MdSystemUpdateAlt className="text-[#3f78e0] text-2xl" />
                </span>
                <div>
                  <h2 className="text-xl text-[#343f52] mb-3 font-bold mt-2">
                  Daily Updates
                  </h2>
                  <p className="leading-6 font-medium text-lg">
                    Nulla vitae elit libero pharetra augue dapibus.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 mt-4 md:mt-6">
                <span className="md:w-32 md:h-16 w-20 h-20 bg-[#E0E9FA] rounded-full justify-center items-center flex ">
                  <SiMarketo className="text-[#3f78e0] text-2xl" />
                </span>
                <div>
                  <h2 className="text-xl text-[#343f52] mb-3 font-bold mt-2">
                  Market Research
                  </h2>
                  <p className="leading-6 font-medium text-lg">
                    Nulla vitae elit libero pharetra augue dapibus.
                  </p>
                </div>


              </div>
            </div>



            </div>
        </div>

        <div className="flex gap-4">
          <div className="grid gap-4">
            <img className="rounded-md" src={img1} alt="" />
            <img className="rounded-md" src={img3} alt="" />
          </div>
          <div className="grid gap-4">
            <img className="rounded-md" src={img2} alt="" />
            <img className="rounded-md" src={img4} alt="" />
          </div>
        </div>


      </div>

    
    </div>
  );
};

export default WhatDoSection;
