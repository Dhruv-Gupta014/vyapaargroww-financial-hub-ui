
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactContent = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const googleFormUrl = `https://docs.google.com/forms/d/e/1FAIpQLSf7X8Y9Z1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S0T1/viewform?usp=pp_url&entry.123456789=${encodeURIComponent(formData.name)}&entry.987654321=${encodeURIComponent(formData.email)}&entry.456789123=${encodeURIComponent(formData.phone)}&entry.789123456=${encodeURIComponent(formData.company)}&entry.321654987=${encodeURIComponent(formData.message)}`;
    
    window.open(googleFormUrl, '_blank');
    
    toast({
      title: "Form Opened",
      description: "Google Form has been opened in a new tab. Please complete your submission there.",
    });

    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 9876543210",
      action: "tel:+919876543210",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@vyapaargroww.com",
      action: "mailto:info@vyapaargroww.com",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Business District, Mumbai, Maharashtra 400001",
      action: "#map",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/vyapaargroww",
      gradient: "from-pink-500 to-red-500"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/company/vyapaargroww",
      gradient: "from-blue-600 to-blue-700"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.action}
                  className="group flex items-center space-x-6 p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-2xl`}>
                    <info.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white mb-1">{info.title}</h3>
                    <p className="text-gray-300">{info.details}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-white">Connect With Us</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-16 h-16 bg-gradient-to-r ${social.gradient} rounded-2xl flex items-center justify-center hover:shadow-2xl transition-all duration-500 hover:scale-110`}
                  >
                    <social.icon size={24} className="text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Enhanced Google Maps */}
            <div id="map" className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9947532025815!2d72.82772081490213!3d19.041076087116836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b3b6b1a1a1%3A0x1234567890abcdef!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold mb-8 text-white">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="+91 9876543210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                Submit Query
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactContent;
