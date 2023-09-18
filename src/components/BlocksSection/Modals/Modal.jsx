import React, { useState } from 'react';

const Modal = ({ showModal, closeModal }) => {
  const [name, setName] = useState('');

  const handleInputChange = (e) => {
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name}!`);
    closeModal();
  }

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${showModal ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="modal-bg fixed inset-0 bg-black opacity-50"></div>
      <div className="modal-content bg-white p-6 rounded shadow-lg w-1/3">
        <span className="modal-close absolute top-0 right-0 cursor-pointer text-2xl" onClick={closeModal}>&times;</span>
        <h2 className="text-2xl mb-4">Welcome!</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex items-center justify-end">
            <button className="modal-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
