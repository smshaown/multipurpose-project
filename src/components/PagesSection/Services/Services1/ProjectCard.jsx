import React from "react";
import banner from "../../../../assets/images/Pages/Services/Services1/banner.jpg";
import bg3 from "../../../../assets/images/Pages/Services/Services1/bg3.jpg";
// import "../Services.css";

const ProjectCard = () => {
  return (
    <div className="myContainer">
      <div className="relative mb-80 md:mb-64">
        <img
          className="md:rounded-lg mt-[-185px] w-full h-full"
          src={banner}
          alt="Banner Img"
        />
        <div
          className="absolute bg3 md:bottom-[-80px] md:left-[93px] w-full h-[full] md:w-[83%] md:h-[192px;] myContainer md:px-0 md:rounded-md"
          style={{
            backgroundImage: `url(${bg3})`,
          }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 text-center justify-center items-center gap-2">
            <div className="mt-8 mb-8">
              <h1 className="text-[2rem] md:text-[3rem] text-white font-bold">
                7518
              </h1>
              <h4 className="text-white font-medium md:text-lg text-base">
                Completed Projects
              </h4>
            </div>
            <div className="mt-8 mb-8">
              <h1 className="text-[2rem] md:text-[3rem] text-white font-bold">
                3472
              </h1>
              <h4 className="text-white font-medium md:text-lg text-base">
                Satisfied Customers
              </h4>
            </div>
            <div className="mt-8 mb-8">
              <h1 className="text-[2rem] md:text-[3rem] text-white font-bold">
                2184
              </h1>
              <h4 className="text-white font-medium md:text-lg text-base">
                Expert Employees
              </h4>
            </div>
            <div className="mt-8 mb-8">
              <h1 className="text-[2rem] md:text-[3rem] text-white font-bold">
                4523
              </h1>
              <h4 className="text-white font-medium md:text-lg text-base">
                Awards Won
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
