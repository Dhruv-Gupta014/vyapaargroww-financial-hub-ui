
import React from 'react';
import { Users, Target, Award, Lightbulb } from 'lucide-react';

const AboutHero = () => {
  const floatingElements = [
    { icon: Users, position: 'top-20 left-10', color: 'from-blue-500 to-cyan-500' },
    { icon: Target, position: 'top-40 right-20', color: 'from-purple-500 to-pink-500' },
    { icon: Award, position: 'bottom-40 left-20', color: 'from-green-500 to-emerald-500' },
    { icon: Lightbulb, position: 'bottom-20 right-10', color: 'from-yellow-500 to-orange-500' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Floating Icons */}
      {floatingElements.map((element, index) => (
        <div 
          key={index}
          className={`absolute ${element.position} w-20 h-20 bg-gradient-to-br ${element.color} rounded-2xl flex items-center justify-center shadow-2xl animate-float`}
          style={{ animationDelay: `${index * 0.5}s` }}
        >
          <element.icon size={32} className="text-white" />
        </div>
      ))}

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-fade-in">
            About Us
          </h1>
          
          <p className="text-2xl text-blue-200 mb-12 animate-fade-in delay-300">
            Pioneering Excellence in Financial Solutions
          </p>
          
          <p className="text-xl text-gray-300 leading-relaxed animate-fade-in delay-500">
            At VyapaarGroww, we're not just accountants – we're financial architects 
            building the foundation of your success. With cutting-edge technology 
            and decades of expertise, we transform complex financial challenges 
            into growth opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
