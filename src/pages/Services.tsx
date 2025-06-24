
import React from 'react';
import Header from '../components/Header';
import ServicesHero from '../components/ServicesHero';
import ServicesGrid from '../components/ServicesGrid';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <ParticleBackground />
      <Header />
      <ServicesHero />
      <ServicesGrid />
      <Footer />
    </div>
  );
};

export default Services;
