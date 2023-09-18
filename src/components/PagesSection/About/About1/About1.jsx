import React from 'react'
import { AboutBanner } from './AboutBanner'
import { WhoAreWe } from './WhoAreWe'
import { WorkingStepsSection } from './WorkingStepsSection'
import { TestimonialSlider } from './TestimonialSlider'

export const About1 = () => {
  return (
    <div>
      <AboutBanner />
      <WhoAreWe />
      <WorkingStepsSection />
      <TestimonialSlider />
    </div>
  )
}
