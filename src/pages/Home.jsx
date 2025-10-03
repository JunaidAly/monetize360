import SEO from '../components/SEO'
import HeroSection from '../components/HeroSection'
import WorkWithUsSection from '../components/WorkWithUsSection'
import HighYieldPartnersSection from '../components/HighYieldPartnersSection'
import ServicesOverview from '../components/ServicesOverview'
import ProcessSection from '../components/ProcessSection'
import TestimonialsSection from '../components/TestimonialsSection'
import AboutSection from '../components/AboutSection'
import PaymentOptionsSection from '../components/PaymentOptionsSection'
import FAQSection from '../components/FAQSection'
import Monetize360Section from '../components/Monetize360Section'

function Home() {
  return (
    <div>
      <SEO
        title="Monetize360 Global - Maximize Your Website Revenue"
        description="Monetize360 Global helps website owners maximize revenue through Google AdSense, MCM, AdX, and strategic monetization solutions. Partner with us for higher earnings."
        keywords="website monetization, Google AdSense, Google MCM, AdX, ad revenue, publisher monetization, website earnings, monetize website"
      />
      <HeroSection />
      <WorkWithUsSection />
      <HighYieldPartnersSection />
      <ServicesOverview />
      <ProcessSection />
      <TestimonialsSection />
      <AboutSection />
      <PaymentOptionsSection />
      <FAQSection />
      <Monetize360Section />
    </div>
  )
}

export default Home