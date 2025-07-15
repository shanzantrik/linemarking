import React, { useState } from 'react';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi';
import Map from './common/Map';

const serviceAreas = [
  'Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Canberra', 'Newcastle', 'Gold Coast', 'Sunshine Coast', 'Wollongong'
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-2">Get In Touch</h2>
        <div className="text-center text-lg text-slate-700 mb-10 max-w-2xl mx-auto">
          Ready to start your line marking project? Contact us today for a free quote and consultation. We respond to all inquiries within 2 hours.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-10">
          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <div className="bg-orange-50 rounded-xl p-5 flex items-center gap-4 text-lg text-slate-700"><FiPhone className="text-orange-500" /> <div><div>1300 LINE MARK</div><div className="text-xs text-slate-500">(1300 546 362)</div></div></div>
            <div className="bg-orange-50 rounded-xl p-5 flex items-center gap-4 text-lg text-slate-700"><FiMail className="text-orange-500" /> <div><div>info@linemarkingaustralia.com.au</div><div className="text-xs text-slate-500">quotes@linemarkingaustralia.com.au</div></div></div>
            <div className="bg-orange-50 rounded-xl p-5 flex items-center gap-4 text-lg text-slate-700"><FiMapPin className="text-orange-500" /> <div><div>Sydney, NSW</div><div className="text-xs text-slate-500">Servicing all of Australia</div></div></div>
            <div className="bg-slate-100 rounded-xl p-5 flex items-center gap-4 text-lg text-slate-700"><FiClock className="text-orange-500" /> <div><div>Mon - Fri: 7:00 AM - 5:00 PM</div><div className="text-xs text-slate-500">Sat: 8:00 AM - 12:00 PM</div></div></div>
            <a href="https://wa.me/13005463262" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md shadow flex items-center gap-2 w-max"><FiPhone /> WhatsApp Us</a>
          </div>
          {/* Map fills the box area */}
          <div className="rounded-xl overflow-hidden min-h-[220px] h-full w-full">
            <Map center={[-33.8688, 151.2093]} marker={[-33.8688, 151.2093]} popup="Sydney HQ" height="100%" />
          </div>
        </div>
        {/* Emergency Line Marking & Why Call Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 flex flex-col gap-2">
            <div className="text-red-600 font-bold text-lg mb-1">Emergency Line Marking</div>
            <div className="text-slate-700 mb-2">Need urgent line marking services? We offer 24/7 emergency response for critical projects and safety requirements.</div>
            <a href="tel:13005463262" className="bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2 rounded-md w-max">Call Emergency Line</a>
          </div>
          <div className="rounded-xl p-6 flex flex-col gap-2 bg-gradient-to-r from-orange-500 via-orange-400 to-sky-500 text-white">
            <div className="font-bold text-lg mb-1">Why Call Us?</div>
            <ul className="list-disc pl-5 text-base">
              <li>Free quotes and consultations</li>
              <li>Response within 2 hours</li>
              <li>28 years of experience</li>
              <li>Fully licensed and insured</li>
              <li>Quality guarantee</li>
            </ul>
          </div>
        </div>
        {/* Service Areas */}
        <div className="mb-10">
          <div className="font-bold text-slate-900 mb-3">Service Areas</div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {serviceAreas.map((area, idx) => (
              <div key={idx} className="bg-slate-100 rounded-md px-4 py-2 text-slate-700 text-center text-sm font-medium">{area}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
