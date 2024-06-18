// pages/index.jsx
import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Partners from '../components/Partners';
import Testimonials from '../components/Testimonials';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import PersonaSection from '../components/PersonaSection';
import Navbar from '../components/Navbar';
import Contact from "../components/Contact";
import InfoVideo from "../components/IntroVideo"
export default function HomePage() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="container mx-auto mt-20 px-4">
        <Hero />
        <Features />
        <PersonaSection />
        <InfoVideo/>
        <Pricing />
        <Partners />
        <Testimonials />
        
      </div>
    
      <div className="w-full bg-gray-100">
        <Subscribe />
      </div>
      <div className="w-full bg-gray-900 text-white">
        <Footer />
      </div>
    </div>
  );
}
