import React from 'react';

const testimonials = [
  {
    quote: 'Outstanding service from start to finish. The team completed our 500-space car park marking ahead of schedule and within budget. The quality is exceptional and has significantly improved traffic flow.',
    name: 'Sarah Mitchell',
    role: 'Property Manager',
    company: 'Westfield Shopping Centres',
  },
  {
    quote: 'We needed urgent warehouse line marking for our new distribution center. Line Marking Australia delivered exactly what we needed with incredible attention to detail and safety compliance.',
    name: 'David Chen',
    role: 'Facilities Manager',
    company: 'Amazon Logistics',
  },
  {
    quote: 'Professional, reliable, and efficient. Their road marking work meets all our strict standards and they always complete projects on time. Highly recommend for any government work.',
    name: 'Michael Thompson',
    role: 'Council Engineer',
    company: 'Brisbane City Council',
  },
  {
    quote: 'The sports court marking for our school was perfect. The team worked around our schedule and created beautiful, precise courts that our students love. Excellent communication throughout.',
    name: 'Lisa Rodriguez',
    role: 'School Principal',
    company: 'Sydney Grammar School',
  },
  {
    quote: 'From quote to completion, everything was seamless. The car park looks fantastic and the custom branding they added really makes our facility stand out. Great value for money.',
    name: 'James Wilson',
    role: 'Operations Director',
    company: 'Corporate Office Park',
  },
  {
    quote: 'We\'ve used Line Marking Australia for multiple projects over the years. Consistent quality, fair pricing, and they always deliver what they promise. Our go-to line marking company.',
    name: 'Emma Johnson',
    role: 'Maintenance Manager',
    company: 'Industrial Estate',
  },
];

const Testimonials = () => (
  <section id="testimonials" className="w-full bg-white py-16 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">What Our Clients Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white border border-slate-100 rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col h-full">
            <div className="text-slate-700 text-base mb-4 italic">“{t.quote}”</div>
            <div className="mt-auto">
              <div className="font-bold text-slate-900">{t.name}</div>
              <div className="text-sm text-slate-500">{t.role}</div>
              <div className="text-xs text-orange-500 font-semibold">{t.company}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
