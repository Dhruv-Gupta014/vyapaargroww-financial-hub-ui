
import React from 'react';
import { Calculator, TrendingUp, Shield, Smartphone, FileText, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesGrid = () => {
  const services = [
    {
      icon: Calculator,
      title: "Advanced Accountancy",
      description: "Next-generation bookkeeping, financial reporting, and accounting solutions powered by AI and automation.",
      features: ["AI-Powered Analytics", "Real-time Reporting", "Automated Bookkeeping", "Compliance Monitoring"],
      gradient: "from-blue-500 to-cyan-500",
      delay: "0s"
    },
    {
      icon: TrendingUp,
      title: "Strategic Advisory",
      description: "Data-driven business consulting with predictive analytics to maximize growth potential and ROI.",
      features: ["Growth Hacking", "Market Analysis", "Risk Assessment", "Performance Optimization"],
      gradient: "from-purple-500 to-pink-500",
      delay: "0.2s"
    },
    {
      icon: Shield,
      title: "Tax Optimization",
      description: "Advanced tax planning strategies using machine learning to minimize liability and maximize savings.",
      features: ["Smart Tax Planning", "Automated Filing", "GST Optimization", "Compliance Automation"],
      gradient: "from-green-500 to-emerald-500",
      delay: "0.4s"
    },
    {
      icon: Users,
      title: "Management Excellence",
      description: "Revolutionary management consulting with AI-powered insights for operational transformation.",
      features: ["Process Automation", "Team Optimization", "Digital Transformation", "Efficiency Analytics"],
      gradient: "from-orange-500 to-red-500",
      delay: "0.6s"
    },
    {
      icon: Smartphone,
      title: "Tech Solutions",
      description: "Cutting-edge fintech solutions including blockchain, AI, and cloud-based financial management.",
      features: ["Blockchain Integration", "AI Automation", "Cloud Solutions", "Mobile Apps"],
      gradient: "from-yellow-500 to-orange-500",
      delay: "0.8s"
    },
    {
      icon: FileText,
      title: "Compliance Mastery",
      description: "Automated compliance management with real-time monitoring and predictive compliance alerts.",
      features: ["Automated Monitoring", "Legal Documentation", "Regulatory Updates", "Audit Preparation"],
      gradient: "from-indigo-500 to-purple-500",
      delay: "1s"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:bg-white/10 animate-fade-in"
              style={{ animationDelay: service.delay }}
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl`}>
                <service.icon size={32} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105`}>
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-12 py-6 rounded-full font-semibold hover:shadow-2xl transition-all duration-500 hover:scale-105"
          >
            Get Custom Solutions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
