import React, { useState } from 'react';
import { FiMapPin, FiCalendar, FiEye } from 'react-icons/fi';

const categories = [
  'All Projects',
  'Car Parks',
  'Warehouse',
  'Sports Courts',
  'Roads',
];

const projects = [
  {
    category: 'Car Parks',
    title: 'Westfield Shopping Centre',
    desc: 'Complete car park line marking for 500+ spaces including disabled parking and traffic flow optimization.',
    location: 'Sydney, NSW',
    date: 'Completed 2024',
  },
  {
    category: 'Warehouse',
    title: 'Amazon Warehouse',
    desc: 'Industrial line marking for 50,000 sqm warehouse including aisle marking, safety zones, and loading bays.',
    location: 'Melbourne, VIC',
    date: 'Completed 2024',
  },
  {
    category: 'Sports Courts',
    title: 'Sydney Olympic Park',
    desc: 'Multi-sport court marking for basketball, netball, and tennis courts with precision line work.',
    location: 'Sydney, NSW',
    date: 'Completed 2023',
  },
  {
    category: 'Roads',
    title: 'City Council Roads',
    desc: 'Road marking project including lane markings, crosswalks, and traffic symbols for 15km of roads.',
    location: 'Brisbane, QLD',
    date: 'Completed 2023',
  },
  {
    category: 'Car Parks',
    title: 'Corporate Office Complex',
    desc: 'Premium car park marking with custom corporate branding and visitor space designation.',
    location: 'Perth, WA',
    date: 'Completed 2024',
  },
  {
    category: 'Warehouse',
    title: 'Distribution Center',
    desc: 'Complete warehouse floor marking system with color-coded zones and safety compliance.',
    location: 'Adelaide, SA',
    date: 'Completed 2023',
  },
];

const Portfolio = () => {
  const [active, setActive] = useState('All Projects');
  const filtered = active === 'All Projects' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="portfolio" className="w-full bg-[#f6f8fa] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-3">Our Recent Projects</h2>
        <div className="text-center text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
          Take a look at some of our recent line marking projects across Australia. From small car parks to large industrial complexes, we deliver excellence every time.
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full font-semibold text-sm border transition-all ${active === cat ? 'bg-orange-500 text-white border-orange-500 shadow' : 'bg-white text-slate-700 border-slate-200 hover:bg-orange-50'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition flex flex-col border border-slate-100 w-full min-w-0">
              {/* Image Placeholder with Category Badge */}
              <div className="relative h-48 w-full rounded-t-2xl overflow-hidden flex items-end">
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">{p.category}</span>
                </div>
                <div className="w-full h-full bg-gradient-to-b from-slate-200 to-slate-400 flex items-center justify-center text-slate-500 text-lg font-semibold select-none">
                  Project Photo
                </div>
              </div>
              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-1">{p.title}</h3>
                <p className="text-slate-600 text-sm mb-3 line-clamp-3 flex-1">{p.desc}</p>
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-5">
                  <span className="flex items-center gap-1"><FiMapPin className="inline-block" /> {p.location}</span>
                  <span className="flex items-center gap-1"><FiCalendar className="inline-block" /> {p.date}</span>
                </div>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md shadow text-sm flex items-center justify-center gap-2 transition-all mt-auto">
                  <FiEye className="text-lg" /> View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
