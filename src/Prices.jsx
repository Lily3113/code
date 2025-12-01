import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, CheckCircle } from 'lucide-react';

// --- SHARED COMPONENTS ---

const Navbar = ({ setActivePage }) => (
  <nav className="flex items-center justify-between px-8 py-6 bg-white max-w-7xl mx-auto w-full">
    {/* Left: Actual Logo Image */}
    <div className="flex items-center">
      <img
        src="/assets/PRELUSIVE Logo final (5).png"
        alt="Prelusive Logo"
        className="h-12 w-auto object-contain"
      />
    </div>

    {/* Center: Navigation Links (Handles Page Switching) */}
    <div className="hidden md:flex gap-12 text-sm font-medium text-slate-600 items-center">
      <button onClick={() => setActivePage('prices')} className="hover:text-slate-900 transition">Prices</button>
      <button onClick={() => setActivePage('services')} className="hover:text-slate-900 transition">Services</button>
      {/* 'About Us' links to the 'Contact' page as per the available views */}
      <button onClick={() => setActivePage('contact')} className="hover:text-slate-900 transition">About Us</button>
    </div>

    {/* Right: Contact Button */}
    <button onClick={() => setActivePage('contact')} className="bg-[#0b1e3b] text-white text-xs font-medium py-2.5 px-6 rounded shadow-sm hover:bg-slate-800 transition">
      Contact Us
    </button>
  </nav>
);

PricesPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <Navbar />
      
      {/* Hero Section */}
      <section className="text-center pt-12 pb-8 max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Prices</h1>
        <p className="text-sm text-slate-500 leading-relaxed max-w-xl mx-auto">
          We offer flexible pricing to suit your business needs. Get in touch to discuss strategy, branding, or full-service digital marketing packages—our team is ready to help you grow.
        </p>
      </section>

      {/* Main Image Banner */}
      <section className="relative max-w-6xl mx-auto mb-20 px-4">
        {/* Decorative elements simulating the tape/shapes */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400/20 rotate-12 rounded-full blur-xl"></div>
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#0b1e3b] rotate-45 opacity-10"></div>
        
        <div className="overflow-hidden rounded-lg">
           <img src="/assets/10.png" alt="Happy woman with credit card" className="w-full h-[400px] object-cover" />
        </div>
      </section>

      {/* Content Block */}
      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 mb-20 items-center">
        <div>
          <span className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-2 block">Prices</span>
          <h2 className="text-4xl font-bold leading-tight mb-6">
            Book Consultancy<br />by Clicking Button<br />Below
          </h2>
        </div>
        <div>
          <p className="text-sm text-slate-500 leading-7">
            We offer flexible pricing to suit your business needs. Get in touch to discuss strategy, branding, or full-service digital marketing packages—our team is ready to help you grow. Not sure which package fits your business best? Talk to us, and we'll work with you to find the perfect pricing plan tailored to your goals and budget.
          </p>
        </div>
      </section>

      {/* Dark CTA Card */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="bg-[#0b1e3b] rounded-2xl p-12 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-start justify-between">
            {/* Geometric overlay pattern */}
            <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none">
                 <div className="grid grid-cols-2 gap-0 h-full">
                    <div className="bg-white rounded-full translate-x-1/2"></div>
                    <div className="bg-white"></div>
                    <div className="bg-white rounded-full"></div>
                    <div className="bg-white" style={{clipPath: 'polygon(0 0, 0% 100%, 100% 0)'}}></div>
                 </div>
            </div>

            <div className="relative z-10 max-w-lg">
                <span className="text-orange-400 text-xs font-bold mb-3 block">Why Choose Prelusive Digital Marketing</span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-snug">
                  Smarter Marketing.<br />Proven Results.
                </h3>
                <button className="bg-[#ffbd59] text-slate-900 text-sm font-semibold py-3 px-8 rounded hover:bg-yellow-400 transition">
                  Book Consultancy
                </button>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Prices;