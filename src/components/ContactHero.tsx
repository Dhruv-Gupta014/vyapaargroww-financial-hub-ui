
import React from 'react';
import { Phone, Mail, MapPin, Instagram, Linkedin, Send } from 'lucide-react';

const ContactHero = () => {
  const contactIcons = [
    { icon: Phone, position: 'top-20 left-10', color: 'from-blue-500 to-cyan-500' },
    { icon: Mail, position: 'top-40 right-20', color: 'from-purple-500 to-pink-500' },
    { icon: MapPin, position: 'bottom-40 left-20', color: 'from-green-500 to-emerald-500' },
    { icon: Instagram, position: 'bottom-20 right-10', color: 'from-pink-500 to-red-500' },
    { icon: Linkedin, position: 'top-1/2 left-5', color: 'from-blue-600 to-blue-700' },
    { icon: Send, position: 'top-1/2 right-5', color: 'from-yellow-500 to-orange-500' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Floating Contact Icons */}
      {contactIcons.map((contact, index) => (
        <div 
          key={index}
          className={`absolute ${contact.position} w-16 h-16 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center shadow-2xl animate-float`}
          style={{ animationDelay: `${index * 0.4}s` }}
        >
          <contact.icon size={24} className="text-white" />
        </div>
      ))}

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-green-200 to-blue-200 bg-clip-text text-transparent animate-fade-in">
            Get In Touch
          </h1>
          
          <p className="text-2xl text-green-200 mb-12 animate-fade-in delay-300">
            Ready to Transform Your Financial Future?
          </p>
          
          <p className="text-xl text-gray-300 leading-relaxed animate-fade-in delay-500">
            Connect with our team of financial experts and technology innovators. 
            Let's discuss how we can accelerate your business growth with our 
            cutting-edge solutions and strategic insights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
