import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const hideTimer = useRef(null);

  // Show submenu immediately
  const handleCitiesEnter = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setCitiesOpen(true);
  };
  // Hide submenu with delay
  const handleCitiesLeave = () => {
    hideTimer.current = setTimeout(() => setCitiesOpen(false), 180);
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Info Bar */}
      <div className="w-full bg-slate-900 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="flex items-center gap-1"><FiPhone className="inline-block" /> 1300 LINE MARK</span>
            <span className="hidden md:inline-block">|</span>
            <span className="flex items-center gap-1"><FiMail className="inline-block" /> info@linemarkingaustralia.com.au</span>
          </div>
          <div className="flex items-center gap-2 mt-1 md:mt-0 justify-center">
            <FiMapPin className="inline-block" />
            <span>Sydney, NSW | Servicing All Australia</span>
          </div>
        </div>
      </div>
      {/* Main Nav Bar */}
      <div className="w-full bg-white py-3 px-4 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo and Company Name */}
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-orange-500 text-white font-bold text-lg rounded-md px-3 py-2">LM</div>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-slate-900 text-base md:text-lg">Line Marking Australia</span>
              <span className="text-xs text-slate-500">Professional Since 1995</span>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 ml-8 relative">
            <a href="/#services" className="text-slate-700 hover:text-orange-500 font-medium transition">Services</a>
            <a href="/#why-choose-us" className="text-slate-700 hover:text-orange-500 font-medium transition">Why Choose Us</a>
            <a href="/#portfolio" className="text-slate-700 hover:text-orange-500 font-medium transition">Portfolio</a>
            <a href="/#about" className="text-slate-700 hover:text-orange-500 font-medium transition">About</a>
            <a href="/#contact" className="text-slate-700 hover:text-orange-500 font-medium transition">Contact</a>
            {/* Cities Dropdown */}
            <div className="relative group"
              onMouseEnter={handleCitiesEnter}
              onMouseLeave={handleCitiesLeave}
            >
              <button className="flex items-center gap-1 text-slate-700 hover:text-orange-500 font-medium transition" onClick={() => setCitiesOpen(v => !v)}>
                Cities <FiChevronDown className="text-xs mt-0.5" />
              </button>
              <div className={`absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 py-4 px-2 min-w-[200px] z-30 transition-all ${citiesOpen ? 'block' : 'hidden'}`} style={{ pointerEvents: citiesOpen ? 'auto' : 'none' }}
                onMouseEnter={handleCitiesEnter}
                onMouseLeave={handleCitiesLeave}
              >
                <Link to="/sydney" className="block px-6 py-3 text-slate-700 hover:bg-orange-50 hover:text-orange-500 rounded transition" onClick={() => setCitiesOpen(false)}>Sydney</Link>
                <Link to="/melbourne" className="block px-6 py-3 text-slate-700 hover:bg-orange-50 hover:text-orange-500 rounded transition" onClick={() => setCitiesOpen(false)}>Melbourne</Link>
                <Link to="/south-australia" className="block px-6 py-3 text-slate-700 hover:bg-orange-50 hover:text-orange-500 rounded transition" onClick={() => setCitiesOpen(false)}>South Australia</Link>
              </div>
            </div>
          </nav>
          {/* Mobile Hamburger */}
          <button className="md:hidden ml-2 p-2 rounded hover:bg-slate-100" onClick={() => setMenuOpen(v => !v)} aria-label="Open menu">
            {menuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
          {/* Free Quote Button */}
          <Link to="/#quote" className="ml-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md shadow transition-all text-sm md:text-base">
            Free Quote
          </Link>
        </div>
        {/* Mobile Menu Drawer */}
        {menuOpen && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-40 z-50" onClick={() => setMenuOpen(false)}>
            <div className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg flex flex-col p-6 gap-4" onClick={e => e.stopPropagation()}>
              <button className="self-end mb-2" onClick={() => setMenuOpen(false)} aria-label="Close menu"><FiX className="text-2xl" /></button>
              <a href="/#services" className="py-2 text-slate-700 hover:text-orange-500 font-medium" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="/#why-choose-us" className="py-2 text-slate-700 hover:text-orange-500 font-medium" onClick={() => setMenuOpen(false)}>Why Choose Us</a>
              <a href="/#portfolio" className="py-2 text-slate-700 hover:text-orange-500 font-medium" onClick={() => setMenuOpen(false)}>Portfolio</a>
              <a href="/#about" className="py-2 text-slate-700 hover:text-orange-500 font-medium" onClick={() => setMenuOpen(false)}>About</a>
              <a href="/#contact" className="py-2 text-slate-700 hover:text-orange-500 font-medium" onClick={() => setMenuOpen(false)}>Contact</a>
              {/* Cities Mobile Dropdown */}
              <div className="border-t border-slate-200 mt-2 pt-2">
                <button className="flex items-center gap-1 text-slate-700 hover:text-orange-500 font-medium w-full text-left" onClick={() => setCitiesOpen(v => !v)}>
                  Cities <FiChevronDown className="text-xs mt-0.5" />
                </button>
                {citiesOpen && (
                  <div className="pl-4 mt-1 flex flex-col gap-1">
                    <Link to="/sydney" className="py-2 text-slate-700 hover:text-orange-500 font-medium" onClick={() => setMenuOpen(false)}>Sydney</Link>
                    <Link to="/melbourne" className="py-2 text-slate-700 hover:text-orange-500 font-medium" onClick={() => setMenuOpen(false)}>Melbourne</Link>
                    <Link to="/south-australia" className="py-2 text-slate-700 hover:text-orange-500 font-medium" onClick={() => setMenuOpen(false)}>South Australia</Link>
                  </div>
                )}
              </div>
              <Link to="/#quote" className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-md shadow text-center" onClick={() => setMenuOpen(false)}>Free Quote</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
