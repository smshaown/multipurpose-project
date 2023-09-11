import React from 'react';
import HowDoSectionCard from './HowDoSectionCard';

const HowDoSection = () => {
    return (
        <div className='myContainer'>
            <h1 className='text-[40px] text-[#343F52] font-bold mt-28'>How We Do It?</h1>
            <p className='text-[#60697b] space-x-4 text-xl mt-4'>We make your spending stress-free for you to have the perfect control.</p>

            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative '>

            <HowDoSectionCard h2="01" title="Concept" p="Nulla vitae elit libero elit non porta gravida eget metus cras. Aenean eu leo quam. Pellentesque ornare." />

            <HowDoSectionCard h2="02" title="Prepare" p="Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis." />

            <HowDoSectionCard h2="03" title="Retouch" p="Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero." />

            <HowDoSectionCard h2="04" title="Finalize" p="Integer posuere erat, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo." />

            
            <span className="hrSpan hidden lg:block"></span>

            </div>
        </div>
    );
};

export default HowDoSection;