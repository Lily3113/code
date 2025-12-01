import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, CheckCircle, Contact } from 'lucide-react';

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

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <Navbar />
      
      <section className="text-center pt-12 pb-8 max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Contact us</h1>
        <p className="text-sm text-slate-500 leading-relaxed max-w-xl mx-auto">
          Get in touch with us to discuss your digital marketing needs. Whether you're looking for strategy, branding, or full-service campaigns, our team is ready to help your business grow.
        </p>
      </section>

       {/* Office Image */}
      <section className="relative max-w-6xl mx-auto mb-16 px-4">
        <div className="absolute -top-6 -right-6 w-24 h-12 bg-orange-300 rotate-[-15deg] opacity-80 z-10"></div>
        <div className="overflow-hidden rounded-lg shadow-sm">
           <img src="/assets/11.png" alt="Modern Office" className="w-full h-[400px] object-cover" />
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-6xl mx-auto px-4 mb-24">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Left Dark Panel */}
            <div className="bg-[#0b1e3b] text-white p-12 md:w-5/12 relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                    <p className="text-slate-400 text-sm mb-12">Say something to start a live chat!</p>

                    <div className="space-y-8 text-sm">
                        <div className="flex items-center gap-4">
                            <Phone size={18} /> <span>+1234567890</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Mail size={18} /> <span>prelusive@gmail.com</span>
                        </div>
                         <div className="flex items-start gap-4">
                            <MapPin size={18} className="mt-1 flex-shrink-0" /> 
                            <span className="leading-relaxed">123 Takue_thebrain Street Murehwa,<br/>Harare Zimbabwe 02156</span>
                        </div>
                    </div>

                    <div className="flex gap-4 mt-20">
                         {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                             <a key={i} href="#" className="w-8 h-8 rounded-full bg-[#1f3659] hover:bg-orange-400 hover:text-slate-900 flex items-center justify-center transition">
                                 <Icon size={14} />
                             </a>
                         ))}
                    </div>
                </div>
                 {/* Decorative Circle overlay */}
                <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-white opacity-5 rounded-full z-0"></div>
                <div className="absolute bottom-12 right-12 w-24 h-24 bg-white opacity-5 rounded-full z-0"></div>
            </div>

            {/* Right Form Panel */}
            <div className="p-12 md:w-7/12 bg-white">
                <form className="space-y-8">
                    <div className="grid grid-cols-2 gap-8">
                        <div className="border-b border-slate-300 py-2">
                             <label className="text-xs font-bold text-slate-800 block mb-1">First Name</label>
                             <input type="text" className="w-full outline-none text-sm text-slate-600" placeholder="John" />
                        </div>
                        <div className="border-b border-slate-300 py-2">
                             <label className="text-xs font-bold text-slate-800 block mb-1">Last Name</label>
                             <input type="text" className="w-full outline-none text-sm text-slate-600" placeholder="Doe" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div className="border-b border-slate-300 py-2">
                             <label className="text-xs font-bold text-slate-800 block mb-1">Email</label>
                             <input type="email" className="w-full outline-none text-sm text-slate-600" placeholder="example@gmail.com" />
                        </div>
                        <div className="border-b border-slate-300 py-2">
                             <label className="text-xs font-bold text-slate-800 block mb-1">Phone Number</label>
                             <input type="tel" className="w-full outline-none text-sm text-slate-600" placeholder="+1 012 3456 789" />
                        </div>
                    </div>

                    <div>
                         <label className="text-xs font-bold text-slate-800 block mb-4">Select Subject?</label>
                         <div className="flex flex-wrap gap-4 text-xs">
                             {["General Inquiry", "General Inquiry", "General Inquiry", "General Inquiry"].map((opt, i) => (
                                 <label key={i} className="flex items-center gap-2 cursor-pointer">
                                     <input type="radio" name="subject" className="accent-slate-900" />
                                     <span className="text-slate-600">{opt}</span>
                                 </label>
                             ))}
                         </div>
                    </div>

                    <div className="border-b border-slate-300 py-2">
                         <label className="text-xs font-bold text-slate-800 block mb-1">Message</label>
                         <textarea className="w-full outline-none text-sm text-slate-600 resize-none" rows="1" placeholder="Write your message.."></textarea>
                    </div>

                    <div className="flex justify-end pt-4">
                        <button className="bg-[#0b1e3b] text-white text-sm font-medium py-3 px-8 rounded shadow hover:bg-slate-800 transition">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 mb-24">
           {[
               { icon: Phone, title: "Call Us Directly", desc: "Let's discuss how our tailored strategies can help your brand thrive online, whether you're a startup or an established business." },
               { icon: MapPin, title: "Visit Our Office", desc: "Our doors are always open! Come by anytime to discuss how we can help grow and elevate your brand's presence." },
               { icon: Mail, title: "Email Support", desc: "Reach out to us anytime at our email—we're ready to help you grow your brand and achieve your digital goals." }
           ].map((card, idx) => (
               <div key={idx} className="bg-white p-8">
                   <div className="w-10 h-10 rounded bg-slate-50 flex items-center justify-center text-teal-600 mb-4">
                       <card.icon size={20} />
                   </div>
                   <h4 className="text-lg font-bold mb-3">{card.title}</h4>
                   <p className="text-xs text-slate-500 leading-6">{card.desc}</p>
               </div>
           ))}
      </section>

      <Footer />
    </div>
  );
};

export default contact;