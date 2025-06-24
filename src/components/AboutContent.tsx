
import React from 'react';
import { Users, Target, Award, Lightbulb, Zap, Shield } from 'lucide-react';

const AboutContent = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses with comprehensive financial solutions that drive exponential growth and success.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Elite chartered accountants and business strategists dedicated to your financial excellence and innovation.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description: "Award-winning track record of helping businesses achieve their financial goals with precision and strategy.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Revolutionary technology solutions combined with traditional accounting mastery for unprecedented results.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Rapid deployment of solutions with real-time insights that accelerate your business transformation.",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Absolute Security",
      description: "Military-grade security protocols ensuring your financial data remains protected and confidential.",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:bg-white/10"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl`}>
                <value.icon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
              <p className="text-gray-300 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-3xl p-12 border border-white/10">
          <h3 className="text-4xl font-bold mb-12 text-center text-white">Why VyapaarGroww Leads</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-blue-200 text-lg">Success Stories</div>
            </div>
            <div className="group">
              <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">15+</div>
              <div className="text-purple-200 text-lg">Years Excellence</div>
            </div>
            <div className="group">
              <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">99%</div>
              <div className="text-green-200 text-lg">Success Rate</div>
            </div>
            <div className="group">
              <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-yellow-200 text-lg">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
