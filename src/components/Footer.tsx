
import React from 'react';
import { TrendingUp, Phone, Mail, MapPin, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/40 backdrop-blur-xl border-t border-white/10 text-white relative">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-xl">
                <TrendingUp size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">VyapaarGroww</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering your financial future with revolutionary business solutions, 
              expert accounting services, and cutting-edge technology innovations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Advanced Accountancy',
                'Tax Optimization',
                'Strategic Advisory',
                'Management Excellence',
                'Tech Solutions'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 hover:text-white transition-colors duration-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone size={16} className="text-white" />
                </div>
                <span className="text-gray-300">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail size={16} className="text-white" />
                </div>
                <span className="text-gray-300">info@vyapaargroww.com</span>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mt-1">
                  <MapPin size={16} className="text-white" />
                </div>
                <span className="text-gray-300">
                  123 Business District, Mumbai, Maharashtra 400001
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a
                href="https://instagram.com/vyapaargroww"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl flex items-center justify-center hover:shadow-2xl transition-all duration-500 hover:scale-110"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a
                href="https://linkedin.com/company/vyapaargroww"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:shadow-2xl transition-all duration-500 hover:scale-110"
              >
                <Linkedin size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} VyapaarGroww. All rights reserved. | Elite Chartered Accountancy Firm
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
