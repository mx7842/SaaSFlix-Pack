import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Features';
import CatalogPreview from './components/DemoGenerator';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#141414] text-white selection:bg-red-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <CatalogPreview />
        <Benefits />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;