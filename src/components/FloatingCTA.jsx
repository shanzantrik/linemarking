import React from 'react';

const FloatingCTA = () => (
  <section className="w-full py-12 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="rounded-2xl bg-gradient-to-r from-orange-500 via-orange-400 to-sky-500 p-10 flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Join 500+ Satisfied Customers</h2>
        <p className="text-white text-lg mb-8">Experience the difference that professional line marking can make for your project.</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-8 w-full">
          <div className="flex-1 flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-extrabold text-white">98%</span>
            <span className="text-white text-base mt-1">Customer Satisfaction</span>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-extrabold text-white">4.9/5</span>
            <span className="text-white text-base mt-1">Average Rating</span>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-extrabold text-white">500+</span>
            <span className="text-white text-base mt-1">Projects Completed</span>
          </div>
        </div>
        <a href="#quote" className="bg-white text-orange-600 hover:bg-orange-50 font-bold text-lg px-8 py-3 rounded-md shadow transition-all">Get Your Free Quote Today</a>
      </div>
    </div>
  </section>
);

export default FloatingCTA;
