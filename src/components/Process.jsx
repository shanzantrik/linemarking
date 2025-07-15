import React from 'react';
import { FiEdit, FiMapPin, FiClipboard, FiCheckCircle } from 'react-icons/fi';

const steps = [
  {
    icon: <FiEdit className="text-orange-500 text-2xl" />,
    title: 'Request Quote',
    subtitle: 'Contact us with your project details',
    desc: 'Fill out our quick form or call us directly. We respond within 2 hours with an initial quote and any questions.',
    timeline: '2 hours',
  },
  {
    icon: <FiMapPin className="text-orange-500 text-2xl" />,
    title: 'Site Inspection',
    subtitle: 'Free on-site assessment and measurement',
    desc: 'Our expert team visits your site to assess the project, take measurements, and provide a detailed quote.',
    timeline: '24 hours',
  },
  {
    icon: <FiClipboard className="text-orange-500 text-2xl" />,
    title: 'Professional Marking',
    subtitle: 'Precise line marking execution',
    desc: 'Using state-of-the-art equipment and premium materials, we complete your project efficiently and to the highest standards.',
    timeline: '1-2 days',
  },
  {
    icon: <FiCheckCircle className="text-orange-500 text-2xl" />,
    title: 'Quality Check & Handover',
    subtitle: 'Final inspection and project completion',
    desc: 'We conduct a thorough quality check, clean up the site, and provide you with maintenance guidelines.',
    timeline: 'Same day',
  },
];

const Process = () => {
  return (
    <section id="process" className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">Our Simple 4-Step Process</h2>
        <p className="text-center text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          From initial contact to project completion, we make the entire process smooth and hassle-free for our clients.
        </p>
        <div className="relative flex flex-col items-center">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-orange-100 z-0" style={{ transform: 'translateX(-50%)' }} />
          <div className="flex flex-col gap-10 sm:gap-16 w-full">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex justify-center items-center w-full px-2 sm:px-0">
                {/* Step card */}
                <div className="relative bg-white border border-slate-200 rounded-2xl shadow-lg px-4 sm:px-8 py-4 sm:py-6 max-w-2xl w-full z-10 flex flex-col items-start">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-orange-100 p-3 rounded-xl flex items-center justify-center">{step.icon}</span>
                    <span className="font-bold text-lg text-slate-900">{step.title}</span>
                  </div>
                  <div className="text-orange-600 font-semibold mb-2 text-base">{step.subtitle}</div>
                  <div className="text-slate-600 text-base mb-4">{step.desc}</div>
                  <span className="text-xs bg-orange-100 text-orange-600 font-semibold px-4 py-2 rounded-full">Timeline: {step.timeline}</span>
                </div>
                {/* Step number floating circle */}
                <div className="absolute top-1/2 -translate-y-1/2 z-20 shadow-lg right-[-24px] sm:right-[-40px] md:right-[-60px]">
                  <span className="bg-orange-500 text-white font-bold text-base sm:text-lg w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border-4 border-white">
                    {idx + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
