import { useState } from 'react'
import { ProposalBanner } from './components/ProposalBanner'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ServicesSection } from './components/ServicesSection'
import { MaintenanceDiagnostic } from './components/MaintenanceDiagnostic'
import { BeforeAfterSection } from './components/BeforeAfterSection'
import { QuoteCalculator } from './components/QuoteCalculator'
import { PortfolioAndRegions } from './components/PortfolioAndRegions'
import { Footer } from './components/Footer'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'

export function App() {
  const [showProposalBanner, setShowProposalBanner] = useState<boolean>(true)

  return (
    <div id="top" className="min-h-screen bg-[#0B0C0E] text-[#F5F5F0] flex flex-col">
      <ProposalBanner
        visible={showProposalBanner}
        onToggle={() => setShowProposalBanner((prev) => !prev)}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <MaintenanceDiagnostic />
        <BeforeAfterSection />
        <QuoteCalculator />
        <PortfolioAndRegions />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
