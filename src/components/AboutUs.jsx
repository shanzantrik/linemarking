import React from 'react';
import { FiAward, FiUsers, FiTruck, FiCalendar, FiUser } from 'react-icons/fi';

const milestones = [
  { year: '1995', event: 'Company Founded', desc: 'Started as a small family business in Sydney' },
  { year: '2000', event: 'First Major Contract', desc: 'Secured our first shopping centre project' },
  { year: '2010', event: 'National Expansion', desc: 'Expanded operations across Australia' },
  { year: '2020', event: 'Technology Upgrade', desc: 'Invested in state-of-the-art equipment' },
  { year: '2024', event: 'Industry Leaders', desc: 'Now Australia’s most trusted line marking company' },
];

const values = [
  { icon: <FiAward className="text-orange-500 text-3xl mb-2" />, title: 'Quality First', desc: 'We never compromise on quality. Every project is completed to the highest standards.' },
  { icon: <FiUsers className="text-orange-500 text-3xl mb-2" />, title: 'Customer Focus', desc: 'Our customers are at the heart of everything we do. Your satisfaction is our priority.' },
  { icon: <FiTruck className="text-orange-500 text-3xl mb-2" />, title: 'Reliability', desc: 'We deliver on our promises. On time, on budget, every time.' },
  { icon: <FiCalendar className="text-orange-500 text-3xl mb-2" />, title: 'Experience', desc: 'Nearly 30 years of experience means we’ve seen it all and can handle any challenge.' },
];

const team = [
  { name: 'John Smith', role: 'Founder & CEO', exp: '28 years experience', desc: 'Founded Line Marking Australia in 1995 with a vision to provide the highest quality line marking services.' },
  { name: 'Sarah Johnson', role: 'Operations Manager', exp: '15 years experience', desc: 'Ensures every project meets our strict quality standards and is completed on time.' },
  { name: 'Mike Chen', role: 'Senior Line Marker', exp: '20 years experience', desc: 'Expert in all types of line marking with specialty in sports court and road marking.' },
  { name: 'Lisa Wilson', role: 'Safety Coordinator', exp: '12 years experience', desc: 'Maintains our excellent safety record and ensures all work meets OH&S requirements.' },
];

const AboutUs = () => (
  <section id="about" className="w-full bg-[#f8fafc] py-16 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center text-slate-900 mb-3">About Line Marking Australia</h2>
      <div className="text-center text-lg text-slate-700 mb-10 max-w-2xl mx-auto">
        For nearly three decades, we've been Australia's trusted partner for professional line marking services. Our commitment to quality, safety, and customer satisfaction has made us the industry leader.
      </div>
      {/* Our Story + Photo */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-2xl shadow p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Our Story</h3>
          <p className="text-slate-700 text-base mb-2">Founded in 1995 by John Smith, Line Marking Australia started as a small family business with a simple mission: to provide the highest quality line marking services in Australia.</p>
          <p className="text-slate-700 text-base mb-2">Over the years, we've grown from a local Sydney operation to a national company, but we've never lost sight of our core values: quality, reliability, and customer satisfaction.</p>
          <p className="text-slate-700 text-base">Today, we're proud to be Australia's most trusted line marking specialists, having completed over 500 projects across the country, from small car parks to major infrastructure projects.</p>
        </div>
        <div className="bg-slate-200 rounded-2xl shadow flex items-center justify-center min-h-[220px] text-slate-500 text-lg font-semibold">Company History Photo</div>
      </div>
      {/* Our Journey Timeline */}
      <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">Our Journey</h3>
      <div className="relative max-w-3xl mx-auto mb-16">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-orange-100 z-0" style={{ transform: 'translateX(-50%)' }} />
        <div className="flex flex-col gap-8 sm:gap-12">
          {milestones.map((m, idx) => (
            <div key={idx} className={`relative flex flex-col md:flex-row items-center md:items-stretch w-full`}>
              {/* Card */}
              <div className={`bg-white rounded-2xl shadow p-4 sm:p-6 flex-1 max-w-xl w-full ${idx % 2 === 0 ? 'md:mr-auto md:ml-0 ml-auto' : 'md:ml-auto md:mr-0 mr-auto'} z-10`}>
                <div className="text-orange-500 font-bold text-lg mb-1">{m.year}</div>
                <div className="font-bold text-slate-900 text-xl mb-1">{m.event}</div>
                <div className="text-slate-600 text-base">{m.desc}</div>
              </div>
              {/* Timeline dot */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <span className="bg-white border-4 border-orange-500 w-6 h-6 rounded-full flex items-center justify-center shadow"><span className="bg-orange-500 w-3 h-3 rounded-full block"></span></span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Our Values */}
      <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">Our Values</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-16">
        {values.map((v, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center">
            {v.icon}
            <div className="font-bold text-lg text-slate-900 mb-1">{v.title}</div>
            <div className="text-slate-600 text-base">{v.desc}</div>
          </div>
        ))}
      </div>
      {/* Meet Our Team */}
      <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">Meet Our Team</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {team.map((t, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center text-center">
            <div className="bg-slate-200 rounded-full w-16 h-16 flex items-center justify-center mb-3">
              <FiUser className="text-3xl text-slate-400" />
            </div>
            <div className="font-bold text-lg text-slate-900 mb-1">{t.name}</div>
            <div className="text-orange-600 font-semibold mb-1">{t.role}</div>
            <div className="text-slate-500 text-sm mb-1">{t.exp}</div>
            <div className="text-slate-600 text-base">{t.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutUs;
