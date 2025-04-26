import React from 'react';
import './global.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer'
function App() {
  return (
    <div className="app-container">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <Footer/>

      {/* Add more sections here as you build */}
    </div>
  );
}

export default App;
