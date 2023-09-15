import React, { useEffect, useState } from 'react';

const AnalysisSection = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const bar = document.getElementById('bar');
    bar.style.width = `${progress}%`;
  }, [progress]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        } else {
          clearInterval(interval);
          return prevProgress;
        }
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ml-10 mt-10">
      <h1 className="ml-10 mt-10">Progress Bar</h1>
      <div className="ml-10 h-3 relative max-w-xl rounded-full overflow-hidden">
        <div className="w-full h-full bg-gray-200 absolute"></div>
        <div id="bar" className="transition-all ease-out duration-1000 h-full bg-green-500 relative"></div>
      </div>
    </div>
  );
};

export default AnalysisSection;
