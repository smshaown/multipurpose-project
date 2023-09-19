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
      content: 'Content for Accordion Item 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ipsum asperiores aliquam exercitationem minima error sunt sequi molestiae autem, praesentium consequatur dignissimos, molestias delectus neque cum rem hic illo dolores, accusamus assumenda animi. Esse dolore sed dolorem! Veritatis dolor, sunt, hic dolorum cupiditate ipsam eligendi voluptatum, labore quisquam voluptatibus aspernatur! '
    },
    {
      title: 'Accordion Item 2',
      content: 'Content for Accordion Item Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ipsum asperiores aliquam exercitationem minima error sunt sequi molestiae autem, praesentium consequatur dignissimos, molestias delectus neque cum rem hic illo dolores, accusamus assumenda animi. Esse dolore sed dolorem! Veritatis dolor, sunt, hic dolorum cupiditate ipsam eligendi voluptatum, labore quisquam voluptatibus aspernatur! 2'
    },
    {
      title: 'Accordion Item 3',
      content: 'Content for Accordion Item 3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde ipsum asperiores aliquam exercitationem minima error sunt sequi molestiae autem, praesentium consequatur dignissimos, molestias delectus neque cum rem hic illo dolores, accusamus assumenda animi. Esse dolore sed dolorem! Veritatis dolor, sunt, hic dolorum cupiditate ipsam eligendi voluptatum, labore quisquam voluptatibus aspernatur!'
    },
  ];

  return (
    <div className="max-w-md mx-auto mt-10">
      {items.map((item, index) => (
        <div key={index} className="mb-2">
          <div
            className="flex transform duration-300 ease-in-out justify-between items-center border p-2 cursor-pointer"
            onClick={() => handleToggle(index)}
          >
            <div>{item.title}</div>
            <div className={`rotate-icon transform duration-1000 ease-in-out ${activeIndex === index ? 'active' : ''}`}>
              {activeIndex === index ? <FaMinus /> : <FaPlus />}
            </div>
          </div>
          <div className={`accordion-content transform-all duration-500 ease-in-out ${activeIndex === index ? 'open' : ''}`}>
            {item.content}            
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
