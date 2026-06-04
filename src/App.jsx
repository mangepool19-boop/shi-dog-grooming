import Availability from './components/Availability.jsx'
import Benefits from './components/Benefits.jsx'
import Contact from './components/Contact.jsx'
import FAQ from './components/FAQ.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'
import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'
import GroomingCalculator from './components/GroomingCalculator.jsx'
import Hero from './components/Hero.jsx'
import MeetShi from './components/MeetShi.jsx'
import Pricing from './components/Pricing.jsx'
import Process from './components/Process.jsx'
import Services from './components/Services.jsx'
import SiteNav from './components/SiteNav.jsx'
import Testimonials from './components/Testimonials.jsx'

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#fbf8f1] text-[#2e261f]">
      <SiteNav />
      <main>
        <Hero />
        <MeetShi />
        <Process />
        <Services />
        <Pricing />
        <Availability />
        <Gallery />
        <GroomingCalculator />
        <Benefits />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
