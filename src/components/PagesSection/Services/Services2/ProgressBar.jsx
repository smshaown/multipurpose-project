import React from 'react';
import { useSpring, animated } from 'react-spring';

const ProgressBar = ({ label, percentage, color }) => {
  const props = useSpring({
    width: `${percentage}%`,
    from: { width: '0%' },
    config: { tension: 280, friction: 60 }
  });

  return (
    <div className="mt-10">
      <h1 className="mt-10 flex flex-row justify-between items-center text-[#60697b] font-medium">
        {label} <span>{percentage}%</span>
      </h1>
      <div className="mt-2 h-[6px] relative max-w-xl rounded-full overflow-hidden">
        <div className="w-full h-full bg-gray-200 absolute"></div>
        <animated.div
          className="h-full"
          style={{
            ...props,
            background: color,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
