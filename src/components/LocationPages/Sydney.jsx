import React from 'react';
import Map from '../common/Map';
import { FiMapPin, FiPhone, FiMail, FiCheckCircle, FiClock, FiTruck, FiShield } from 'react-icons/fi';

const Sydney = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-orange-500 to-orange-700 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-white text-orange-600 rounded-full mb-3">Sydney's Trusted Line Marking Specialists</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Line Marking Sydney</h1>
              <p className="text-lg mb-8">
                Sydney's premier line marking service with over 25 years of experience serving businesses, schools, and councils across NSW. Our local team delivers precision line marking for car parks, warehouses, roads, factories, and sports courts throughout Sydney and surrounding suburbs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn bg-white text-orange-700 hover:bg-orange-50 font-semibold px-6 py-3 rounded-lg transition-all inline-flex items-center justify-center">
                  <FiPhone className="mr-2" />
                  Get a Free Quote
                </a>
                <a href="#services" className="btn bg-transparent border-2 border-white hover:bg-white/10 font-semibold px-6 py-3 rounded-lg transition-all inline-flex items-center justify-center">
                  Explore Services
                </a>
              </div>
            </div>
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                  alt="Line marking work being completed in Sydney"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-6">
                  <div className="flex items-center gap-2 text-sm">
                    <FiMapPin />
                    <span>Sydney, NSW</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Sydney Office</h2>
          <Map center={[-33.8688, 151.2093]} marker={[-33.8688, 151.2093]} popup="Sydney HQ" height="300px" />
        </div>
      </section>
      {/* ...other sections (services, process, FAQ, etc.) can be added here as needed... */}
    </div>
  );
};

export default Sydney;
