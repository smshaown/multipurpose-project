import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { Model } from "./Model";

export const ModelVideo = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="mt-40 mb-40 service1Img">
      <div
        className="flex flex-col justify-center items-center w-full h-full relative"
        style={{ backgroundColor: "rgba(30,34,40,.5)" }}
      >
        <span
          onClick={openModal}
          className="bg-white rounded-full flex flex-col justify-center items-center pulse cursor-pointer"
        >
          <FaPlay />
        </span>

        <Model isOpen={modalOpen} onClose={closeModal} />

        <h2 className="text-[32px] font-bold text-white text-center w-full md:w-2/4 mt-24">
          Find out everything you need to know about creating a business process
          model.
        </h2>
      </div>
    </div>
  );
};
