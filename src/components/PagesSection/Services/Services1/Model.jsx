import React from 'react'
import '../Services.css';
import videoUrl from "../../../../assets/images/Pages/Services/Services1/movie.mp4";

export const Model = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 w-full h-screen bg-gray-500 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
      <div className="modal-container">
        <div className="modal-content">
          <button className="modal-close" onClick={onClose}>&times;</button>
          <div className="flex justify-center items-center">
    <video controls width="600px" height="6000px">
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
        </div>
      </div>
    </div>
  )
}
