import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import WebImage from './maintainn.png'; // Ensure this path is correct
import './modal.css'; // Import the CSS file for transitions

const Maintenance = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open the modal when the component mounts
    setIsOpen(true);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className=''>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <div className="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative z-50 flex flex-col items-center justify-center w-full lg:w-6/12 mx-10 lg:mx-auto bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg border border-opacity-20 border-white rounded-3xl p-6 text-center">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              &times;
            </button>
            <img src={WebImage} alt="Maintenance" className="mx-auto mb-4" width='300' height='300' />
            <h1 className="text-5xl font-bold mb-4 text-[#F1F1F1]">Website under maintenance</h1>
            <p className="text-white text-lg md:w-2/3 mx-auto">
              Hey there! Welcome to my portfolio. My portfolio is under some little upgrade, kindly check back on 5th of June 2024.
            </p>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Maintenance;
