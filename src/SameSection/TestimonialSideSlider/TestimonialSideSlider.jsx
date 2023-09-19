import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

export const TestimonialSideSlider = () => {
  return (
    <div>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div>
            <p>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor. Vestibulum ligula porta felis euismod semper. Cras justo
              odio.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor. Vestibulum ligula porta felis euismod semper. Cras justo
              odio.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <p>
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
              auctor. Vestibulum ligula porta felis euismod semper. Cras justo
              odio.
            </p>
          </div>{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
