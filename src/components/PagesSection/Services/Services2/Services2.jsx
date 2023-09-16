import React from 'react'
import { BannerSection } from '../../../BannerSection/BannerSection'
import { DailyReport } from './DailyReport'
import { OurProcess } from './OurProcess'
import AnalysisSection from './AnalysisSection'
import { PerfectControl } from './PerfectControl'
import { OurPricing } from './OurPricing'

export const Services2 = () => {
  return (
    <div>
      <BannerSection />
      <DailyReport />
      <OurProcess />
      <AnalysisSection />
      <PerfectControl />
      <OurPricing />
    </div>
  )
}
