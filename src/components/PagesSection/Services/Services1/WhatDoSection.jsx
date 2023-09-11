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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between">
        <div>
          <h2>What We Do?</h2>
          <p>
            The full service we are offering is specifically designed to meet
            your business needs and projects.
          </p>

          <div>
            <div>
              <div>
                <BiPhoneCall />
              </div>
              <div>
                <h2>24/7 Support</h2>
                <p>Nulla vitae elit libero pharetra augue dapibus.</p>
              </div>
            </div>
            <div>
              <div>
                <RiSecurePaymentLine />
              </div>
              <div>
                <h2>Secure Payments</h2>
                <p>Nulla vitae elit libero pharetra augue dapibus.</p>
              </div>
            </div>
            <div>
              <div>
                <MdSystemUpdateAlt />
              </div>
              <div>
                <h2>Daily Updates</h2>
                <p>Nulla vitae elit libero pharetra augue dapibus.</p>
              </div>
            </div>
            <div>
              <div>
                <SiMarketo />
              </div>
              <div>
                <h2>Market Research</h2>
                <p>Nulla vitae elit libero pharetra augue dapibus.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <img src={img1} alt="" />
            </div>
            <div>
              <img src={img2} alt="" />
            </div>
          </div>
          <div>
            <div>
              <img src={img3} alt="" />
            </div>
            <div>
              <img src={img4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatDoSection;
