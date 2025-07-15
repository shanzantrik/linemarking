import React from 'react';
import { FiTruck, FiHome, FiTarget, FiMap, FiShield, FiStar } from 'react-icons/fi';

const services = [
  {
    title: 'Car Park Marking',
    icon: <FiTruck className="text-orange-500 text-3xl mb-2" />,
    description: 'Professional car park line marking for shopping centers, offices, and residential complexes.',
    bullets: ['Parking bays', 'Disabled spaces', 'Traffic flow', 'Safety markings'],
  },
  {
    title: 'Warehouse & Factory',
    icon: <FiHome className="text-orange-500 text-3xl mb-2" />,
    description: 'Industrial line marking for warehouses, factories, and distribution centers.',
    bullets: ['Aisle marking', 'Safety zones', 'Loading bays', 'Pedestrian walkways'],
  },
  {
    title: 'Sports Court Marking',
    icon: <FiTarget className="text-orange-500 text-3xl mb-2" />,
    description: 'Precision sports court marking for schools, clubs, and recreational facilities.',
    bullets: ['Tennis courts', 'Basketball courts', 'Netball courts', 'Multi-sport courts'],
  },
  {
    title: 'Road Marking',
    icon: <FiMap className="text-orange-500 text-3xl mb-2" />,
    description: 'Professional road marking services for councils, contractors, and private roads.',
    bullets: ['Lane markings', 'Crosswalks', 'Stop lines', 'Arrows & symbols'],
  },
  {
    title: 'Safety Line Marking',
    icon: <FiShield className="text-orange-500 text-3xl mb-2" />,
    description: 'Workplace safety line marking to meet OH&S requirements and improve safety.',
    bullets: ['Hazard zones', 'Emergency exits', 'Equipment boundaries', 'Walkways'],
  },
  {
    title: 'Specialized Marking',
    icon: <FiStar className="text-orange-500 text-3xl mb-2" />,
    description: 'Custom line marking solutions for unique requirements and special projects.',
    bullets: ['Custom logos', 'Playground marking', 'Warehouse numbering', 'Directional signs'],
  },
];

const Services = () => (
  <section id="services" className="w-full bg-white py-16 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">Professional Line Marking Services</h2>
      <p className="text-center text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
        From car parks to sports courts, we deliver precise, durable line marking solutions across Australia with guaranteed quality and fast turnaround.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white border border-slate-100 rounded-xl shadow-md p-6 flex flex-col items-start hover:shadow-lg transition w-full min-w-0">
            {service.icon}
            <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.title}</h3>
            <p className="text-slate-600 mb-3">{service.description}</p>
            <ul className="mb-4 list-disc list-inside text-slate-500 text-sm">
              {service.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
            <a href="#quote" className="mt-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2 rounded-md shadow text-sm transition-all">Get Quote</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
