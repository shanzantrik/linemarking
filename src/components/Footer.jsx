import React, { useState, useEffect } from 'react';
import { FiPhone, FiMail, FiMapPin, FiClock, FiArrowUp } from 'react-icons/fi';
import Map from './common/Map';

const Footer = () => {
  // Show button only after scrolling down
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="w-full bg-slate-900 text-white pt-12 pb-6 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-orange-500 text-white font-bold text-lg rounded-md px-3 py-2">LM</div>
              <div>
                <div className="font-bold text-lg">Line Marking Australia</div>
                <div className="text-xs text-slate-300">Professional Since 1995</div>
              </div>
            </div>
            <div className="text-slate-300 text-sm mb-2">Australia's most trusted line marking specialists. We deliver quality, reliability, and exceptional service for all your line marking needs.</div>
            <div className="flex items-center gap-2 text-xs text-slate-400"><FiPhone /> 1300 LINE MARK</div>
            <div className="flex items-center gap-2 text-xs text-slate-400"><FiMail /> info@linemarkingaustralia.com.au</div>
            <div className="flex items-center gap-2 text-xs text-slate-400"><FiMapPin /> Sydney, NSW | All Australia</div>
            <div className="flex items-center gap-2 text-xs text-slate-400"><FiClock /> Mon-Fri 7AM-5PM, Sat 8AM-12PM</div>
          </div>
          {/* Our Services */}
          <div>
            <div className="font-bold mb-2">Our Services</div>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>Car Park Marking</li>
              <li>Warehouse Line Marking</li>
              <li>Sports Court Marking</li>
              <li>Road Marking</li>
              <li>Safety Line Marking</li>
              <li>Custom Solutions</li>
            </ul>
          </div>
          {/* Company */}
          <div>
            <div className="font-bold mb-2">Company</div>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Safety Policy</li>
              <li>Quality Assurance</li>
              <li>Insurance & Licensing</li>
            </ul>
          </div>
          {/* Resources & Social */}
          <div>
            <div className="font-bold mb-2">Resources</div>
            <ul className="text-slate-300 text-sm space-y-1 mb-3">
              <li>Free Quote</li>
              <li>Project Gallery</li>
              <li>Maintenance Guide</li>
              <li>Safety Standards</li>
              <li>Technical Specifications</li>
              <li>Contact Us</li>
            </ul>
            <div className="font-bold mb-1">Follow Us</div>
            <div className="flex gap-3">
              <a href="#" className="bg-slate-800 rounded-full p-2 hover:bg-orange-500 transition"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="bg-slate-800 rounded-full p-2 hover:bg-orange-500 transition"><i className="fab fa-instagram"></i></a>
              <a href="#" className="bg-slate-800 rounded-full p-2 hover:bg-orange-500 transition"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-slate-500">© 2025 Line Marking Australia. All rights reserved.</div>
        <div className="mt-2 text-center text-xs text-slate-500 flex flex-wrap justify-center gap-4">
          <a href="#" className="hover:text-orange-400">Privacy Policy</a>
          <a href="#" className="hover:text-orange-400">Terms of Service</a>
          <a href="#" className="hover:text-orange-400">Sitemap</a>
        </div>
      </footer>
      {/* Move to Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 right-6 z-50 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg w-12 h-12 flex items-center justify-center transition-all border-4 border-white"
          aria-label="Move to top"
        >
          <FiArrowUp className="text-2xl" />
        </button>
      )}
      {/* Sticky Emergency Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-red-600 text-white text-sm py-2 px-4 flex items-center justify-center z-40">
        <FiPhone className="mr-2" />
        <span className="font-semibold">Emergency Line Marking: 1300 546 362</span>
        <span className="mx-2">•</span>
        <span>24/7 Response Available</span>
      </div>
    </>
  );
};

export default Footer;
