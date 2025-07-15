import React, { useState } from 'react';
import { FiCheckCircle, FiPhone, FiUploadCloud, FiTruck, FiHome, FiTarget } from 'react-icons/fi';

const trustBadges = [
  { label: 'Established 1995', icon: <FiCheckCircle className="text-orange-500" /> },
  { label: '5-Star Reviews', icon: <FiCheckCircle className="text-orange-500" /> },
  { label: '500+ Happy Clients', icon: <FiCheckCircle className="text-orange-500" /> },
  { label: 'Industry Leaders', icon: <FiCheckCircle className="text-orange-500" /> },
];

const featureBadges = [
  'Licensed & Insured',
  'Safety Certified',
  'Quality Guarantee',
];

const projectTypes = [
  '',
  'Car Park Marking',
  'Warehouse Line Marking',
  'Sports Court Marking',
  'Road Marking',
  'Safety Line Marking',
  'Custom/Specialized Marking',
];

const initialForm = {
  name: '',
  phone: '',
  email: '',
  projectType: '',
  details: '',
  file: null,
};

const heroTiles = [
  {
    label: 'Car Park Marking',
    icon: <FiTruck className="text-3xl md:text-4xl text-orange-500 mb-2" />,
  },
  {
    label: 'Warehouse Lines',
    icon: <FiHome className="text-3xl md:text-4xl text-orange-500 mb-2" />,
  },
  {
    label: 'Sports Courts',
    icon: <FiTarget className="text-3xl md:text-4xl text-orange-500 mb-2" />,
  },
];

const Hero = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full Name is required.';
    if (!form.phone.trim()) errs.phone = 'Phone Number is required.';
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'Valid Email Address is required.';
    if (!form.projectType) errs.projectType = 'Please select a project type.';
    return errs;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    setErrors(e => ({ ...e, [name]: undefined }));
  };

  const handleFile = e => {
    const file = e.target.files[0];
    if (file && file.size > 10 * 1024 * 1024) {
      setErrors(e => ({ ...e, file: 'File must be under 10MB.' }));
      setForm(f => ({ ...f, file: null }));
      setFileName('');
    } else {
      setForm(f => ({ ...f, file }));
      setFileName(file ? file.name : '');
      setErrors(e => ({ ...e, file: undefined }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    setForm(initialForm);
    setFileName('');
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <section className="w-full bg-white pt-10 pb-8 md:pt-16 md:pb-12 px-4 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Headline and Form */}
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-2">
              Australia's Most Trusted <br />
              <span className="text-orange-500">Line Marking Specialists</span>
            </h1>
            <p className="text-lg text-slate-700 mb-2">
              Professional line marking for car parks, warehouses, sports courts, and roads. Fast turnaround, competitive pricing, and guaranteed quality since 1995.
            </p>
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-4">
              {trustBadges.map((badge, idx) => (
                <span key={idx} className="flex items-center gap-2 bg-slate-100 rounded-full px-3 py-1 text-sm font-medium text-slate-700">
                  {badge.icon} {badge.label}
                </span>
              ))}
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-2 w-full">
              <a href="#quote" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md shadow text-base flex items-center justify-center transition-all">
                Get Free Quote Now <FiCheckCircle className="ml-2" />
              </a>
              <a href="tel:13005463262" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold px-6 py-3 rounded-md shadow text-base flex items-center justify-center transition-all">
                <FiPhone className="mr-2" /> Call 1300 LINE MARK
              </a>
            </div>
            {/* Feature Badges */}
            <div className="flex flex-wrap gap-3 mt-2">
              {featureBadges.map((badge, idx) => (
                <span key={idx} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">
                  {badge}
                </span>
              ))}
            </div>
          </div>
          {/* Right: Quote Form */}
          <div className="w-full flex justify-center">
            <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 border border-slate-100 flex flex-col gap-4 relative mx-auto">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Get Your Free Quote</h2>
              <p className="text-xs text-slate-500 mb-2">Quick response within 2 hours • No obligation • Free site inspection</p>
              {submitted && <div className="bg-green-100 text-green-700 px-3 py-2 rounded text-sm mb-2">Thank you! Your quote request has been submitted.</div>}
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1">
                  <label className="block text-xs font-semibold mb-1">Full Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} className={`w-full border ${errors.name ? 'border-red-400' : 'border-slate-300'} rounded px-3 py-2 text-sm`} placeholder="Your full name" />
                  {errors.name && <div className="text-xs text-red-500 mt-1">{errors.name}</div>}
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-semibold mb-1">Phone Number *</label>
                  <input name="phone" value={form.phone} onChange={handleChange} className={`w-full border ${errors.phone ? 'border-red-400' : 'border-slate-300'} rounded px-3 py-2 text-sm`} placeholder="Your phone number" />
                  {errors.phone && <div className="text-xs text-red-500 mt-1">{errors.phone}</div>}
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Email Address *</label>
                <input name="email" value={form.email} onChange={handleChange} className={`w-full border ${errors.email ? 'border-red-400' : 'border-slate-300'} rounded px-3 py-2 text-sm`} placeholder="your.email@example.com" />
                {errors.email && <div className="text-xs text-red-500 mt-1">{errors.email}</div>}
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Project Type *</label>
                <select name="projectType" value={form.projectType} onChange={handleChange} className={`w-full border ${errors.projectType ? 'border-red-400' : 'border-slate-300'} rounded px-3 py-2 text-sm`}>
                  {projectTypes.map((type, idx) => (
                    <option key={idx} value={type}>{type ? type : 'Select project type'}</option>
                  ))}
                </select>
                {errors.projectType && <div className="text-xs text-red-500 mt-1">{errors.projectType}</div>}
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Project Details</label>
                <textarea name="details" value={form.details} onChange={handleChange} className="w-full border border-slate-300 rounded px-3 py-2 text-sm min-h-[60px]" placeholder="Tell us about your project, location, timeline, and any specific requirements..." />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1">Upload Plans/Photos (Optional)</label>
                <label className={`flex flex-col items-center justify-center border-2 border-dashed ${errors.file ? 'border-red-400' : 'border-slate-300'} rounded-lg px-4 py-6 cursor-pointer text-slate-500 hover:border-orange-400 transition`}>
                  <FiUploadCloud className="text-2xl mb-2" />
                  <span className="text-xs">Click to upload plans or photos</span>
                  <span className="text-xs text-slate-400">PDF, JPG, PNG, DWG files up to 10MB</span>
                  <input type="file" accept=".pdf,.jpg,.jpeg,.png,.dwg" className="hidden" onChange={handleFile} />
                  {fileName && <span className="text-xs mt-1 text-slate-700">{fileName}</span>}
                  {errors.file && <span className="text-xs text-red-500 mt-1">{errors.file}</span>}
                </label>
              </div>
              <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md shadow text-base flex items-center justify-center transition-all mt-2">
                Get My Free Quote
              </button>
              <div className="text-xs text-slate-400 text-center mt-2">✓ No spam • ✓ Quick response • ✓ Free consultation</div>
            </form>
          </div>
        </div>
      </section>
      {/* Experience Badge and Service Tiles */}
      <section className="relative w-full bg-transparent px-4">
        <div className="max-w-7xl mx-auto relative">
          {/* Floating Experience Badge */}
          <div className="absolute right-0 top-0 md:top-1/2 md:-translate-y-1/2 z-10 max-w-[160px] w-full pr-2 hidden sm:block">
            <div className="bg-white shadow-lg rounded-xl px-6 py-4 flex flex-col items-center">
              <span className="text-3xl font-extrabold text-orange-500 leading-none">28</span>
              <span className="text-sm font-medium text-slate-700">Years Experience</span>
            </div>
          </div>
          {/* Service Tiles */}
          <div className="flex flex-col md:flex-row gap-6 justify-between pt-8 pb-4 w-full">
            {heroTiles.map((tile, idx) => (
              <div key={idx} className="flex-1 bg-slate-200 rounded-2xl flex flex-col items-center justify-center py-8 md:py-16 shadow-sm min-w-[160px] w-full">
                {tile.icon}
                <span className="text-lg md:text-xl font-semibold text-slate-600 mt-2">{tile.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
