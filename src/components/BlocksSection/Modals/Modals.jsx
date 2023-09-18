import React, { useState } from 'react'
import Modal from './Modal';

export const Modals = () => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(true);
    }
  
    const closeModal = () => {
      setShowModal(false);
    }


  return (
    <div>
         <h1 className="text-3xl font-bold text-center mt-6">React Modal Example</h1>
         <button className="btn" onClick={openModal}>Open Modal</button>
            <Modal showModal={showModal} closeModal={closeModal} />
    </div>
  )
}
