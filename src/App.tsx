import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import InterventionZones from './components/InterventionZones';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatButton from './components/ChatButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <InterventionZones />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <ChatButton />
    </div>
  );
}

export default App;