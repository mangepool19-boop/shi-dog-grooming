import Benefits from './components/Benefits.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import SiteNav from './components/SiteNav.jsx'
import Testimonials from './components/Testimonials.jsx'

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f7fcfb] text-[#12323b]">
      <SiteNav />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Benefits />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
