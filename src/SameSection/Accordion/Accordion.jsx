import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './Accordion.css';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  }

  const items = [
    {
      title: 'Accordion Item 1',
      content: 'Content for Accordion Item 1'
    },
    {
      title: 'Accordion Item 2',
      content: 'Content for Accordion Item 2'
    },
    {
      title: 'Accordion Item 3',
      content: 'Content for Accordion Item 3'
    },
  ];

  return (
    <div className="max-w-md mx-auto mt-10">
      {items.map((item, index) => (
        <div key={index} className="mb-2">
          <div
            className="flex justify-between items-center border p-2 cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            <div>{item.title}</div>
            <div className={`rotate-icon ${activeIndex === index ? 'active' : ''}`}>
              {activeIndex === index ? <FaMinus /> : <FaPlus />}
            </div>
          </div>
          <div className={`accordion-content ${activeIndex === index ? 'open' : ''}`}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
