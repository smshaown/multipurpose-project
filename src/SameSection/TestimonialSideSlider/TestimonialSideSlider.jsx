import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

export const TestimonialSideSlider = () => {
  return (
    <div>
       <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{ '--swiper-pagination-color': 'black' }}
      
      >
        <SwiperSlide >
          <div className="py-20 text-center mt-32">
            <p className="text-2xl font-light">
             "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor. Vestibulum ligula porta felis euismod semper. Cras justo
              odio."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="py-20 text-center mt-32">
            <p className="text-2xl font-light">
             "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor. Vestibulum ligula porta felis euismod semper. Cras justo
              odio."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="py-20 text-center mt-32">
            <p className="text-2xl font-light">
             "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor. Vestibulum ligula porta felis euismod semper. Cras justo
              odio."
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
