import React from 'react';
import { FiClock, FiShield, FiAward, FiTool, FiUsers, FiCheckCircle } from 'react-icons/fi';

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '24hr', label: 'Response Time' },
  { value: '28yrs', label: 'In Business' },
];

const features = [
  {
    icon: <FiClock className="text-orange-500 text-2xl mb-2" />, title: 'Fast Turnaround',
    desc: 'Most projects completed within 24-48 hours. Efficient processes and experienced team ensure rapid project completion without compromising quality.'
  },
  {
    icon: <FiShield className="text-orange-500 text-2xl mb-2" />, title: 'Fully Insured & Licensed',
    desc: '$20M public liability insurance. Complete peace of mind with comprehensive insurance coverage and all necessary licenses for commercial and government work.'
  },
  {
    icon: <FiAward className="text-orange-500 text-2xl mb-2" />, title: '28 Years Experience',
    desc: 'Established 1995 - Industry leaders. Nearly three decades of expertise in line marking across Australia. We\'ve seen it all and done it all.'
  },
  {
    icon: <FiTool className="text-orange-500 text-2xl mb-2" />, title: 'Latest Equipment',
    desc: 'State-of-the-art marking machines. We invest in the latest technology and equipment to ensure precision, efficiency, and superior results every time.'
  },
  {
    icon: <FiUsers className="text-orange-500 text-2xl mb-2" />, title: 'Expert Team',
    desc: 'Trained, certified professionals. Our team undergoes regular training and certification to stay current with industry standards and safety requirements.'
  },
  {
    icon: <FiCheckCircle className="text-orange-500 text-2xl mb-2" />, title: 'Quality Guarantee',
    desc: '2-year warranty on all work. We stand behind our work with a comprehensive warranty. If you\'re not satisfied, we\'ll make it right.'
  },
];

const WhyChooseUs = () => (
  <section id="why-choose-us" className="w-full bg-white py-16 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">Why Choose Line Marking Australia?</h2>
      <p className="text-center text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
        With 28 years of experience and over 500 successful projects, we're Australia's most trusted line marking specialists.
      </p>
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-extrabold text-orange-500 mb-1">{stat.value}</span>
            <span className="text-base text-slate-700 font-medium text-center">{stat.label}</span>
          </div>
        ))}
      </div>
      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white border border-slate-100 rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-lg transition">
            {feature.icon}
            <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
            <p className="text-slate-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
