import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Benefits from './components/Benefits.jsx'
import Products from './components/Products.jsx'
import BeforeAfter from './components/BeforeAfter.jsx'
import WhyChoose from './components/WhyChoose.jsx'
import Portfolio from './components/Portfolio.jsx'
import Testimonials from './components/Testimonials.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Products />
        <BeforeAfter />
        <WhyChoose />
        <Portfolio />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
