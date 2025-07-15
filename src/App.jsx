import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import FloatingCTA from './components/FloatingCTA';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Melbourne from './components/LocationPages/Melbourne';
import SouthAustralia from './components/LocationPages/SouthAustralia';
import Sydney from './components/LocationPages/Sydney';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <FloatingCTA />
              <WhyChooseUs />
              <Process />
              <Portfolio />
              <Testimonials />
              <AboutUs />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/melbourne" element={<Melbourne />} />
          <Route path="/south-australia" element={<SouthAustralia />} />
          <Route path="/sydney" element={<Sydney />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
