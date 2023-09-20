import React from 'react'
import { AboutBanner } from './AboutBanner'
import { WhoAreWe } from './WhoAreWe'
import { WorkingStepsSection } from './WorkingStepsSection'
import { TestimonialSlider } from './TestimonialSlider'
import { ShapeDoc } from './ShapeDoc'

export const About1 = () => {
  return (
    <div>
      <AboutBanner />
      <WhoAreWe />
      <WorkingStepsSection />
      {/* <TestimonialSlider /> */}
      {/* <ShapeDoc /> */}
    </div>
  )
}
