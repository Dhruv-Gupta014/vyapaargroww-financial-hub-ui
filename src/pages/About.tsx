
import React from 'react';
import Header from '../components/Header';
import AboutHero from '../components/AboutHero';
import AboutContent from '../components/AboutContent';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <ParticleBackground />
      <Header />
      <AboutHero />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
