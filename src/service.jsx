import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, CheckCircle } from 'lucide-react';

// --- SHARED COMPONENTS ---

const Navbar = () => (
  <nav className="flex items-center justify-between px-8 py-6 bg-white max-w-7xl mx-auto w-full">
    {/* Left: Actual Logo Image */}
    <div className="flex items-center">
      <img 
        src="/assets/PRELUSIVE Logo final (5).png" 
        alt="Prelusive Logo" 
        className="h-12 w-auto object-contain" 
      />
    </div>

    {/* Center: Navigation Links */}
    <div className="hidden md:flex gap-12 text-sm font-medium text-slate-600">
      <a href="#prices" className="hover:text-slate-900 transition">Prices</a>
      <a href="#services" className="hover:text-slate-900 transition">Services</a>
      <a href="#about" className="hover:text-slate-900 transition">About Us</a>
    </div>

    {/* Right: Contact Button */}
    <button className="bg-[#0b1e3b] text-white text-xs font-medium py-2.5 px-6 rounded shadow-sm hover:bg-slate-800 transition">
      Contact Us
    </button>
  </nav>
);

const Footer = () => (
  <footer className="bg-[#0b1e3b] text-white py-16 px-4 md:px-0">
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-[10px] tracking-[0.2em] uppercase text-slate-400 mb-4">RING IN A BETTER FUTURE WITH PRELUSIVE</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Request More Information</h2>
      <p className="text-slate-300 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
        Prelusive is a modern call center solutions provider, delivering tailored virtual support to help businesses connect, scale, and thrive.
      </p>
      <button className="bg-[#ffbd59] text-slate-900 text-sm font-semibold py-3 px-8 rounded shadow-md hover:bg-yellow-400 transition mb-12">
        Contact Us
      </button>
      <p className="text-xs text-slate-500 mb-16">© 2025 Takue_thebrain</p>

      <div className="flex flex-col md:flex-row items-center justify-between border-t border-slate-800 pt-8 mt-8 px-8">
         {/* Footer Logo */}
         <img 
            src="/assets/PRELUSIVE Logo final (5).png" 
            alt="Prelusive Logo" 
            className="h-12 w-12 object-contain bg-white rounded-full mb-4 md:mb-0 p-1" 
         />
        
        <div className="flex gap-8 text-xs text-slate-400 mb-4 md:mb-0">
           <a href="#" className="hover:text-white">Team</a>
           <a href="#" className="hover:text-white">Services</a>
           <a href="#" className="hover:text-white">About us</a>
        </div>

        <div className="flex gap-4">
          {[Linkedin, Facebook, Instagram].map((Icon, i) => (
             <a key={i} href="#" className="w-8 h-8 rounded-full bg-[#162a4b] flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition">
               <Icon size={14} />
             </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <Navbar />

      <section className="text-center pt-12 pb-12 max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Services</h1>
        <p className="text-xs text-slate-400 leading-relaxed max-w-lg mx-auto">
          Pellentesque etiam blandit tristique senectus et. Eget ipsum dignissim placerat nisi, adipiscing mauris non. Purus parturient viverra nunc, tortor sit laoreet. Quam tincidunt .
        </p>
      </section>

      {/* Hero Image */}
      <section className="relative max-w-6xl mx-auto mb-24 px-4">
         <div className="absolute -top-6 -right-6 w-16 h-24 bg-orange-300 rotate-45 z-10 opacity-90"></div>
         <div className="overflow-hidden rounded-lg">
           <img src="/assets/12.png" alt="Happy woman working late" className="w-full h-[400px] object-cover" />
        </div>
      </section>

      {/* Feature Section 1 */}
      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 mb-24 items-center">
         <div>
            <span className="text-orange-400 text-xs font-bold uppercase mb-2 block">Services</span>
            <h2 className="text-4xl font-bold mb-6 leading-tight">Building Brands That<br/>Stand Out</h2>
            <p className="text-xs text-slate-500 mb-6 leading-6">
                We help businesses grow and thrive in the digital space. From digital marketing strategies and expert consultancy to public relations and impactful branding, we cover every angle of your online presence. Our team designs modern websites, manages social media creativity, and crafts engaging content that tells your story.
            </p>
            <p className="text-xs text-slate-500 mb-8 leading-6">
                We also run email campaigns that nurture relationships and drive results, while our SEO and corporate branding services boost visibility and leave a lasting impression.
            </p>
            <button className="bg-[#0b1e3b] text-white text-xs font-medium py-3 px-8 rounded shadow hover:bg-slate-800 transition">
                Inquire More
            </button>
         </div>

         <div className="relative">
            {/* Overlays on Image */}
             <div className="absolute top-4 left-4 bg-white p-3 rounded shadow-lg z-20 flex items-center gap-3">
                 <div className="flex -space-x-2">
                     <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                     <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
                 </div>
                 <div className="text-[10px] font-bold">100+ Reviews</div>
             </div>
             
             <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded shadow-lg z-20 w-24 text-center">
                 <div className="text-[10px] text-slate-400 uppercase">Team Members</div>
                 <div className="text-3xl font-bold text-slate-800">10</div>
             </div>

             <div className="overflow-hidden rounded-lg shadow-lg">
                <img src="/assets/13.png" alt="Team meeting" className="w-full h-full object-cover" />
             </div>
         </div>
      </section>

      {/* Feature Section 2 (Cards) */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
               <div>
                  <span className="text-orange-400 text-xs font-bold uppercase mb-2 block">How We Work</span>
                  <h2 className="text-3xl font-bold">Digital Services That<br/>Empower Brands</h2>
               </div>
               <div className="flex items-end">
                   <p className="text-xs text-slate-500 leading-6 max-w-sm ml-auto">
                       We deliver tailored digital strategies, from branding and social media to content, SEO, and web design, giving ambitious brands the right tools to grow and stand out online.
                   </p>
               </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
              {[
                  { title: "Our Industries", desc: "We work with brands across retail, tech, hospitality, and professional services, helping them grow and tell their story." },
                  { title: "Revenue Streams", desc: "We focus on social media management and corporate branding to drive engagement and growth." },
                  { title: "Clients We Work With", desc: "We support SMEs, large corporations, and international companies with tailored digital marketing solutions." }
              ].map((item, idx) => (
                  <div key={idx} className="bg-white p-8 shadow-sm border border-slate-100 rounded">
                      <div className="w-10 h-10 rounded bg-slate-50 flex items-center justify-center text-teal-600 mb-4">
                          <CheckCircle size={20} className="text-orange-300" />
                      </div>
                      <h4 className="text-sm font-bold mb-3">{item.title}</h4>
                      <p className="text-[11px] text-slate-500 leading-5">{item.desc}</p>
                  </div>
              ))}
          </div>
      </section>
      
      {/* Bottom Image Slice */}
      <section className="max-w-6xl mx-auto px-4 mb-24 relative">
          <div className="h-64 overflow-hidden rounded-xl relative">
              <img src="/assets/11.png" alt="Office slice" className="w-full h-full object-cover object-center" />
               <div className="absolute -bottom-8 -right-8 w-32 h-16 bg-orange-300 rotate-[-30deg] opacity-80"></div>
          </div>
      </section>

      <Footer />
    </div>
  );
};

// --- RENDER TOGGLE FOR DEMO PURPOSES ---



export default service;