import React, { useEffect, useState } from "react";
import img from "../../../../assets/images/Pages/Services/Services2/i8.png";

const AnalysisSection = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const bar = document.getElementById("bar");
    bar.style.width = `${progress}%`;
  }, [progress]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        } else {
          clearInterval(interval);
          return prevProgress;
        }
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-40">
      <div className="myContainer">
        <div className="flex flex-col md:flex-row  gap-12">
          <div className="w-full lg:w-[60%]">
            <img
              className="w-full h-full"
              src={img}
              alt="Analysis Section Img"
            />
          </div>
          <div className="w-full lg:w-[40%]">
            <h1 className="text-4xl md:text-[40px] font-bold text-[#343f52]">
              We bring rapid solutions to make the life of our customers easier.
            </h1>

            <div className=" mt-10">
              <h1 className="mt-10 flex flex-row justify-between items-center text-[#60697b] font-medium">
                Marketing <span>100%</span>
              </h1>
              <div className="mt-2 h-[6px] relative max-w-xl rounded-full overflow-hidden">
                <div className="w-full h-full bg-gray-200 absolute"></div>
                <div
                  id="bar"
                  className="transition-all ease-out duration-1000 h-full bg-[#3f78e0] relative"
                ></div>
              </div>
            </div>

            {/* Strategy progress  */}
            <div className=" mt-10">
              <h1 className="mt-10 flex flex-row justify-between items-center text-[#60697b] font-medium">
                Strategy <span>80%</span>
              </h1>
              <div className="mt-2 h-[6px] relative max-w-xl rounded-full overflow-hidden">
                <div className="w-full h-full bg-gray-200 absolute"></div>
                <div
                  id="bar"
                  className="w-[80%] transition-all ease-out duration-1000 h-full bg-[#FAB758] relative"
                ></div>
              </div>
            </div>

            {/* Development progress  */}
            <div className=" mt-10">
              <h1 className="mt-10 flex flex-row justify-between items-center text-[#60697b] font-medium">
                Development <span>85%</span>
              </h1>
              <div className="mt-2 h-[6px] relative max-w-xl rounded-full overflow-hidden">
                <div className="w-full h-full bg-gray-200 absolute"></div>
                <div
                  id="bar"
                  className="w-[85%] transition-all ease-out duration-1000 h-full bg-[#F78B77] relative"
                ></div>
              </div>
            </div>

            {/* Data Analysis progress  */}
            <div className=" mt-10">
              <h1 className="mt-10 flex flex-row justify-between items-center text-[#60697b] font-medium">
                Data Analysis <span>85%</span>
              </h1>
              <div className="mt-2 h-[6px] relative max-w-xl rounded-full overflow-hidden">
                <div className="w-full h-full bg-gray-200 absolute"></div>
                <div
                  id="bar"
                  className="w-[90%] transition-all ease-out duration-1000 h-full bg-[#45C4A0] relative"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisSection;
