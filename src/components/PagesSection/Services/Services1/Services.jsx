import React from 'react';
import Services1Banner from './Services1Banner';
import ProjectCard from './ProjectCard';
import WhatDoSection from './WhatDoSection';
import HowDoSection from './HowDoSection';
import { ModelVideo } from './ModelVideo';
import { OurPricing } from './OurPricing';
import { LetTalkSection } from './LetTalkSection';

const Services = () => {
    return (
        <div className='z-10 mb-96'>
            <Services1Banner />
            <ProjectCard />
            <WhatDoSection />
            <HowDoSection />
            <ModelVideo  />
            <OurPricing />
            <LetTalkSection />
        </div>
    );
};

export default Services;