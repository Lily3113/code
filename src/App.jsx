import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Linkedin, 
  Instagram, 
  Menu, 
  X, 
  Target, 
  Megaphone, 
  Monitor, 
  Share2, 
  PenTool,
  CheckCircle2
} from 'lucide-react';



const SERVICES_DATA = [
  { icon: Target, title: 'Digital Marketing Strategy & Consultancy', desc: 'Tailored strategies to help your brand thrive online, whether you\'re a startup or an established business.' },
  { icon: Megaphone, title: 'Public Relations & Branding', desc: 'Build and manage your brand\'s reputation while increasing visibility in your market.' },
  { icon: Monitor, title: 'Website Development & Seo', desc: 'Develop attractive, user-friendly websites optimized for search engines to convert visitors into customers.' },
  { icon: Share2, title: 'Social Media & Content Management', desc: 'Create engaging content and manage your social channels to grow your audience and build a strong community.' },
  { icon: Mail, title: 'Email Marketing Campaigns', desc: 'Targeted email campaigns to reach your audience directly and drive conversions.' },
  { icon: PenTool, title: 'Corporate Branding', desc: 'Strengthen your brand identity and stand out from competitors in your industry.' },
];

// --- Shared Components ---

const SectionHeader = ({ subtitle, title, centered = false, dark = false }) => (
  <div className={`mb-8 ${centered ? 'text-center' : 'text-left'}`}>
    {subtitle && (
      <span className={`block text-[#fca311] font-bold mb-3 uppercase tracking-wide text-xs md:text-sm`}>
        {subtitle}
      </span>
    )}
    <h2 className={`text-3xl md:text-5xl font-extrabold ${dark ? 'text-white' : 'text-[#0e1c36]'} leading-tight`}>
      {title}
    </h2>
  </div>
);

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-8 py-3 font-medium transition-all duration-300 rounded-sm inline-block cursor-pointer text-sm md:text-base";
  const variants = {
    primary: "bg-[#0e1c36] text-white hover:bg-opacity-90",
    accent: "bg-[#fca311] text-[#0e1c36] hover:bg-opacity-90",
    outline: "border-2 border-[#0e1c36] text-[#0e1c36] hover:bg-[#0e1c36] hover:text-white"
  };
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const StatCard = ({ number, label, icon, className }) => (
  <div className={`bg-white p-4 shadow-xl rounded-sm absolute flex items-center gap-3 animate-fade-in ${className}`} style={{ minWidth: '160px' }}>
    {icon && <div className="bg-gray-100 p-2 rounded-full">{icon}</div>}
    <div>
      <div className="font-bold text-xl text-[#0e1c36]">{number}</div>
      <div className="text-xs text-gray-500 uppercase font-semibold">{label}</div>
    </div>
  </div>
);

// --- Sections ---

const Navbar = ({ activePage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['Prices', 'Services', 'About Us'];

  // the navbar context are not spread evenly there are white space to the right and left 

  return (
    <nav className="bg-white py-2 px-6 md:px-12 flex justify-between items-center w-full sticky top-0 z-50 shadow-sm">
      <div 
        // Reduced logo size slightly again for a tighter fit
        className="w-10 md:w-14 cursor-pointer"
        onClick={() => setPage('home')}
      >
        <img src="PRELUSIVE Logo final (5).png" alt="Prelusive Logo" className="w-full object-contain" />
      </div>

      {/* Desktop Nav - Aligned to Right */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <button 
            key={link} 
            onClick={() => setPage(link.toLowerCase().replace(' ', ''))}
            className={`text-sm font-bold hover:text-[#fca311] transition-colors ${activePage === link.toLowerCase().replace(' ', '') ? 'text-[#fca311]' : 'text-[#0e1c36]'}`}
          >
            {link}
          </button>
        ))}
        <Button variant="primary" onClick={() => setPage('contact')}>Contact Us</Button>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden text-[#0e1c36]" onClick={() => setIsOpen(!isOpen)}>
        {/* Reduced icon size slightly */}
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-6 flex flex-col items-center gap-6 md:hidden z-50">
           <button onClick={() => { setPage('home'); setIsOpen(false); }} className="text-[#0e1c36] font-medium">Home</button>
          {links.map((link) => (
            <button 
              key={link} 
              onClick={() => { setPage(link.toLowerCase().replace(' ', '')); setIsOpen(false); }}
              className="text-[#0e1c36] font-medium"
            >
              {link}
            </button>
          ))}
          <Button variant="primary" onClick={() => { setPage('contact'); setIsOpen(false); }}>Contact Us</Button>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-[#0e1c36] text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-gray-800 pb-12 mb-8">
      {/* Request Info Section Overlay */}
      <div className="md:col-span-12 text-center mb-8">
        <span className="text-xs tracking-[0.2em] text-gray-400 uppercase mb-4 block">Ring in a better future with Prelusive</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Request More Information</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-sm leading-relaxed">
          Prelusive is a modern call center solutions provider, delivering tailored virtual support to help businesses connect, scale, and thrive.
        </p>
        <Button variant="accent">Contact Us</Button>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <img src="PRELUSIVE Logo final (5).png" alt="Logo" className="w-12" />
        </div>
        
        <div className="flex gap-8">
            <button className="hover:text-white transition">Team</button>
            <button className="hover:text-white transition">Services</button>
            <button className="hover:text-white transition">About us</button>
        </div>

        <div className="flex gap-4">
            <a href="#" className="w-8 h-8 border border-gray-700 rounded-full flex items-center justify-center hover:bg-[#fca311] hover:text-[#0e1c36] transition"><Linkedin size={14} /></a>
            <a href="#" className="w-8 h-8 border border-gray-700 rounded-full flex items-center justify-center hover:bg-[#fca311] hover:text-[#0e1c36] transition"><Facebook size={14} /></a>
            <a href="#" className="w-8 h-8 border border-gray-700 rounded-full flex items-center justify-center hover:bg-[#fca311] hover:text-[#0e1c36] transition"><Instagram size={14} /></a>
        </div>
    </div>
    <div className="text-center text-[10px] text-gray-600 mt-8">
        © 2025 Prelusive. All rights reserved.
    </div>
  </footer>
);

const CTABanner = () => (
    <section className="max-w-7xl mx-auto px-6 mb-24">
      <div className="bg-[#0e1c36] rounded-sm p-12 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center">
         {/* Geometric Background Overlay */}
         <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none hidden md:block">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-bl-full"></div>
             <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-50"></div>
             <div className="absolute bottom-0 right-64 w-64 h-64 bg-white rounded-tr-full opacity-50"></div>
             <div className="absolute top-12 right-72 w-32 h-32 rounded-full border-4 border-white opacity-30"></div>
         </div>

         <div className="relative z-10 md:w-2/3 text-left">
             <span className="text-[#fca311] text-xs md:text-sm font-bold uppercase tracking-wider mb-3 block">Why Choose Prelusive Digital Marketing</span>
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Smarter Marketing. <br/>Proven Results.</h2>
             <Button variant="accent">Book Consultancy</Button>
         </div>
      </div>
    </section>
);

// --- Page Components ---

const HomePage = () => (
  <div className="animate-fade-in">
    {/* Section 1: Hero - Text Centered, Image Below (Matching Digital Markerting landing page (1).jpg), there should be a shooting star just like the design and remove the white space on the background of the images, there is too much space left from the image and text */}
    <section className="max-w-7xl mx-auto px-4 py-4 md:py-6 text-center">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl md:text-5xl font-extrabold text-[#0e1c36] leading-[1.02] mb-0">
          <span className="block whitespace-nowrap">Amplifying Your Brand</span>
          <span className="block">in the Digital World</span>
        </h1>
        <p className="text-gray-500 mt-2 mb-4 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
          We craft innovative digital marketing strategies that help businesses in Zimbabwe and beyond stand out, grow, and connect with their audience — no matter their starting point.
        </p>
      </div>
      <div className="relative mt-0 md:-mt-24 lg:-mt-28">
        <div className="relative z-10 rounded-sm overflow-hidden shadow-xl">
          <img src="1.png" alt="Digital Marketing Hero" className="w-full h-auto object-cover" />
        </div>
      </div>
    </section>

    {/* Section 2: Empowering Brands - Text Left, Image Right */}
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-1 md:order-1">
          <SectionHeader 
            subtitle="About Us"
            title="Empowering Brands in the Digital World"
          />
          <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
            At Prelusive Digital Marketing, our mission is to revolutionize the digital landscape for businesses in Zimbabwe and beyond. We exist to help brands stand out in competitive markets — no matter their budget or starting point. Our mission is to craft strategies that not only enhance online visibility but also tell each brand's unique story and drive measurable, sustainable growth.
          </p>
          <Button variant="primary">Learn More</Button>

          {/* Decorative image below the button as requested (14.png) */}
          <div className="mt-6 w-full max-w-sm mx-auto md:mx-0">
            <img src="14.png" alt="Decoration 14" width="560" height="360" className="w-full h-auto object-cover rounded-sm shadow-md" />
          </div>
        </div>
           <div className="relative order-2 md:order-2">
             <img src="15.png" alt="Empowering Brands" className="w-full h-auto object-cover rounded-sm shadow-xl" />
        </div>
      </div>
    </section>

    {/* Section 3: Services Grid */}
    <section className="py-20 max-w-7xl mx-auto px-6">
      {/* Header remains left-aligned */}
      <div className="md:flex md:items-center md:justify-between md:gap-8 mb-6">
        <div className="md:flex-1">
          <SectionHeader 
            subtitle="Services"
            title="Services & Benefits of Working With Us"
            centered={false} 
          />
        </div>

        <div className="md:w-1/2 text-gray-600 text-sm md:text-base leading-relaxed hidden md:block md:mt-3 lg:mt-4">
          At Prelusive Digital Marketing, we provide a full suite of services designed to help businesses grow online. From strategy to execution, we craft custom solutions that deliver measurable results.
        </div>
      </div>
      {/* Use a 2-column grid with a gap for visual separation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service, idx) => (
          <div 
            key={idx} 
            // Use subtle shadow and clean styling for the distinct block look
            className={`bg-white p-6 md:p-8 rounded-sm shadow-md transition-all duration-300 hover:shadow-lg`}
          >
            {/* Title font size matched to be similar to header titles in the image */}
            <h3 className="text-lg font-bold text-[#0e1c36] mb-2">{service.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Section 4: Smarter Marketing - Text Left, Image Right */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
           <SectionHeader 
            subtitle="Why Choose Prelusive Digital Marketing"
            title="Smarter Marketing. Proven Results."
          />
          <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
            At Prelusive, we don't believe in one-size-fits-all campaigns. Every strategy is tailored to your business goals, combining creativity, innovation, and data-driven insights. We focus on storytelling, brand positioning, and measurable outcomes — ensuring your brand doesn't just exist online but truly stands out. Our team's agility and efficiency allow us to scale resources to meet your needs while maintaining consistent quality.
          </p>
          <Button variant="primary">Learn More</Button>
        </div>
        <div className="relative">
             <img src="3.png" alt="Smarter Marketing" className="w-full h-auto object-cover rounded-sm shadow-xl" />
        </div>
      </div>
    </section>

    <CTABanner />
     {/* the CTA has rounded edges not corned and the bocks inside at the far end up of it there is a cutted triangle, below it a full circle,below the circle a full triange, next to the full triangle to the left a full circle, ontop of the full circe a square,ontop of the square a cutted half circle and to the left of the sqaure a half circle, thats the description of the CTA */}
  </div>
);
const AboutPage = () => (
  <div className="animate-fade-in">
    {/* Hero - Center Text, Image Below */}
    <div className="text-center pt-12 pb-8 max-w-4xl mx-auto px-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#0e1c36] mb-6">About Us</h1>
      <p className="text-gray-500 text-sm md:text-base leading-relaxed">
        Prelusive Digital Marketing helps brands stand out with creative strategies, data-driven insights, and tailored solutions that inspire growth and measurable results.
      </p>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 mb-24">
        <img src="4.png" alt="Team Meeting" className="w-full h-[450px] object-cover rounded-sm shadow-sm" />
    </div>

    {/* Who We Are - Image Left, Text Right */}
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-16 items-start">
      {/* the image is too small now its not covering the space */}
       <div className="relative">
           <img src="16.png" alt="Who we are" className="w-full h-auto object-cover rounded-sm" />
           <StatCard number="100+" label="Clients" className="top-10 left-0 shadow-lg" />
           <StatCard number="10" label="Team Members" className="bottom-10 right-0 shadow-lg" />
       </div>
       <div className="flex flex-col justify-center h-full pt-4">
           <SectionHeader subtitle="About Us" title="Who we are at prelusive" />
           <p className="text-gray-600 mb-6 leading-relaxed text-sm">
               At Prelusive, we craft digital marketing solutions that help your business grow smarter. From branding to social media, strategy to execution — we've got you covered. Our focus is on storytelling, visibility, and measurable results that drive real impact.
           </p>
           <p className="text-gray-600 mb-8 leading-relaxed text-sm">
               We combine creativity and innovation with data-driven insights, empowering businesses to thrive online. Whether you're a startup or an established brand, we tailor strategies to fit your goals and help you stand out.
           </p>
           <Button variant="primary">Inquire More</Button>
       </div>
    </section>

    {/* Mission - Text Left, Image Right */}
    <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div>
                 <SectionHeader subtitle="Our Mission" title="Offer Flexible Marketing Solutions That Help Your Business Run Smoother." />
                 <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                     Deliver innovative digital marketing solutions that help businesses grow and connect with their audience. We combine creativity, strategy, and technology to drive measurable results and lasting impact.
                 </p>
                 <div className="rounded-sm overflow-hidden h-64 w-full">
                    <img src="6.png" alt="Working" className="w-full h-full object-cover" />
                 </div>
            </div>
            <div className="h-full">
                <img src="8.png" alt="Dark Office" className="w-full h-full min-h-[500px] object-cover rounded-sm" />
            </div>
        </div>
    </section>

    {/* Vision - Image Left, Text Right */}
    <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
            <img src="17.png" alt="Call Center" className="w-full h-auto object-cover rounded-sm" />
            <StatCard number="1000+" label="Lives Changed" className="bottom-8 right-8" />
       {/* the image is small that it cant fit the container  */}
        </div>
        <div>
            <SectionHeader subtitle="Vision" title="Empowering Brands, Driving Growth" />
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Empower brands in Zimbabwe and beyond to stand out, inspire engagement, and achieve sustainable growth through innovative, results-driven digital marketing.
            </p>
            <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                Every project we take on is results-driven, measurable, and designed to set you apart. We focus on understanding your audience, your vision, and your business. By combining creativity, innovation, and strategy, we ensure your brand stands out in a competitive digital landscape.
            </p>
            <Button variant="primary">Contact Us</Button>
        </div>
    </section>
  </div>
);

const ServicesPage = () => (
  <div className="animate-fade-in">
      {/* Hero - Center Text, Image Below */}
      <div className="text-center pt-12 pb-8 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0e1c36] mb-6">Services</h1>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non. Purus parturient viverra nunc, tortor sit laoreet. Quam tincidunt.
          </p>
      </div>

      <div className="max-w-3xl mx-auto px-2 mb-20">
         <img src="10.png" alt="Services Hero" className="w-full h-[450px] object-cover rounded-sm shadow-sm" />
      </div>

      {/* Building Brands - Text Left, Image Right */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 pl-8 md:pl-12 grid md:grid-cols-2 gap-16 items-center">
          <div>
              <SectionHeader subtitle="Services" title="Building Brands That Stand Out" />
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  We help businesses grow and thrive in the digital space. From digital marketing strategies and expert consultancy to public relations and impactful branding, we cover every angle of your online presence. Our team designs modern websites, manages social media creatively, and crafts engaging content that tells your story.
              </p>
              <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                  We also run email campaigns that nurture relationships and drive results, while our SEO and corporate branding services boost visibility and leave a lasting impression.
              </p>
              <Button variant="primary">Inquire More</Button>
          </div>
          <div className="relative">
              <img src="16.png" alt="Building Brands" className="w-full h-auto object-cover rounded-sm shadow-lg" />
              
              <div className="absolute top-4 left-4 bg-white p-3 shadow-md flex items-center gap-2 rounded-sm">
                 <div className="flex -space-x-2">
                     <div className="w-8 h-8 bg-gray-200 rounded-full border-2 border-white"></div>
                     <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                 </div>
                 <div className="text-xs font-bold text-[#0e1c36]">
                    <span className="block">100+</span>
                    <span className="font-normal text-[10px] text-gray-500">Reviews</span>
                 </div>
              </div>
              <div className="absolute bottom-6 right-6 bg-white p-4 shadow-xl rounded-sm text-center min-w-[120px]">
                  <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">Team Members</span>
                  <span className="block text-3xl font-bold text-[#0e1c36]">10</span>
              </div>
          </div>
      </section>

      {/* Digital Services Cards */}
      <section className="py-20 bg-[#fafafa]">
          <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 mb-12 items-end">
                  <div>
                      <span className="text-[#fca311] font-bold uppercase text-xs mb-3 block">How We Work</span>
                      <h2 className="text-3xl font-bold text-[#0e1c36]">Digital Services That Empower Brands</h2>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                      We deliver tailored digital strategies, from branding and social media to content, SEO, and web design, giving ambitious brands the right tools to grow and stand out online.
                  </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                  {[
                      { title: "Our Industries", desc: "We work with brands across retail, tech, hospitality, and professional services, helping them grow and tell their story." },
                      { title: "Revenue Streams", desc: "We focus on social media management and corporate branding to drive engagement and growth." },
                      { title: "Clients We Work With", desc: "We support SMEs, large corporations, and international companies with tailored digital marketing solutions." }
                  ].map((item, i) => (
                      <div key={i} className="bg-white p-8 shadow-sm rounded-sm">
                          <div className="w-10 h-10 bg-[#f0f9ff] rounded-full flex items-center justify-center text-[#fca311]">
                             <CheckCircle2 size={20} />
                          </div>
                          <h3 className="font-bold text-[#0e1c36] mb-3 text-lg">{item.title}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Bottom Image Strip */}
      
      <div className="w-full h-80 relative overflow-hidden mt-8 mb-16 px-9"> 
         {/* the size of the image there should be breathing space from right to left and with the footer */}
          <img src="12.png" alt="Footer Strip" className="w-full h-full object-cover object-center" />
      </div>
  </div>
);

const PricesPage = () => (
    <div className="animate-fade-in">
        <div className="text-center pt-12 pb-8 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0e1c36] mb-6">Prices</h1>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
             We offer flexible pricing to suit your business needs. Get in touch to discuss strategy, branding, or full-service digital marketing packages—our team is ready to help you grow.
          </p>
        </div>

        <div className="max-w-2xl mx-auto px-6 mb-20">
             <img src="9.png" alt="Prices Hero" className="w-full h-[400px] object-cover rounded-sm shadow-sm" />
        </div>
   {/* the correct image is above but its small and when its added size its covering the tapes and the effects around it */}
        {/* Layout: Text Left, Paragraph Right */}
        <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-16 items-start mb-12">
             <div>
                 <span className="text-[#fca311] font-bold uppercase text-xs mb-3 block">Prices</span>
                 <h2 className="text-3xl md:text-4xl font-bold text-[#0e1c36] leading-tight">Book Consultancy by Clicking Button Below</h2>
             </div>
             <p className="text-gray-600 text-sm leading-relaxed">
                 We offer flexible pricing to suit your business needs. Get in touch to discuss strategy, branding, or full-service digital marketing packages—our team is ready to help you grow. Not sure which package fits your business best? Talk to us, and we'll work with you to find the perfect pricing plan tailored to your goals and budget.
             </p>
        </section>

        <CTABanner />
        {/* the CTA has rounded edges not corned and the bocks inside at the far end up of it there is a cutted triangle, below it a full circle,below the circle a full triange, next to the full triangle to the left a full circle, ontop of the full circe a square,ontop of the square a cutted half circle and to the left of the sqaure a half circle, thats the description of the CTA */}
    </div>
);

const ContactPage = () => (
    <div className="animate-fade-in">
         <div className="text-center pt-12 pb-8 max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0e1c36] mb-6">Contact us</h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                Get in touch with us to discuss your digital marketing needs. Whether you're looking for strategy, branding, or full-service campaigns, our team is ready to help your business grow.
            </p>
         </div>

         <div className="max-w-3xl mx-auto px-6 mb-20">
             <img src="13.png" alt="Contact Hero" className="w-full h-[350px] object-cover rounded-sm shadow-sm" />
         </div>

         {/* Form Section */}
         <div className="max-w-6xl mx-auto px-6 mb-24 relative">
             <div className="bg-white shadow-2xl rounded-sm overflow-hidden grid md:grid-cols-12">
                          {/* the circles are not colored there are white eish and grayeish in color */}
                 {/* Contact Info Panel */}
                 <div className="md:col-span-4 bg-[#0e1c36] p-10 text-white relative overflow-hidden flex flex-col justify-between">
                     <div>
                        <h3 className="text-xl font-bold mb-2">Contact Information</h3>
                        <p className="text-gray-400 text-sm mb-12">Say something to start a live chat!</p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <Phone size={20} /> <span className="text-sm">+1234567890</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail size={20} /> <span className="text-sm">prelusive@gmail.com</span>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin size={20} className="mt-1" /> 
                                <span className="text-sm leading-relaxed">123 Takue_thebrain Street Murehwa,<br/>Harare Zimbabwe 02156</span>
                            </div>
                        </div>
                     </div>

                     <div className="flex gap-4 mt-12 relative z-10">
                        <div className="w-8 h-8 bg-[#fca311] rounded-full flex items-center justify-center text-[#0e1c36] hover:bg-white transition-colors cursor-pointer"><Facebook size={16} /></div>
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#0e1c36] hover:bg-[#fca311] transition-colors cursor-pointer"><Instagram size={16} /></div>
                        <div className="w-8 h-8 bg-[#fca311] rounded-full flex items-center justify-center text-[#0e1c36] hover:bg-white transition-colors cursor-pointer"><Linkedin size={16} /></div>
                     </div>

                     {/* Decorative circles in dark panel */}
                     <div className="absolute bottom-[-40px] right-[-40px] w-32 h-32 bg-white opacity-5 rounded-full pointer-events-none"></div>
                     <div className="absolute bottom-[40px] right-[-20px] w-16 h-16 bg-[#fca311] opacity-20 rounded-full pointer-events-none"></div>
                 </div>

                 {/* Form Panel */}
                 <div className="md:col-span-8 p-10 md:p-16">
                     <form className="space-y-10">
                         <div className="grid md:grid-cols-2 gap-10">
                             <div>
                                 <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">First Name</label>
                                 <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#0e1c36] text-[#0e1c36] placeholder-gray-300 transition-colors" placeholder="John" />
                             </div>
                             <div>
                                 <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Last Name</label>
                                 <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#0e1c36] text-[#0e1c36] placeholder-gray-300 transition-colors" placeholder="Doe" />
                             </div>
                         </div>

                         <div className="grid md:grid-cols-2 gap-10">
                             <div>
                                 <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Email</label>
                                 <input type="email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#0e1c36] text-[#0e1c36] placeholder-gray-300 transition-colors" placeholder="john@example.com" />
                             </div>
                             <div>
                                 <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Phone Number</label>
                                 <input type="tel" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#0e1c36] text-[#0e1c36] placeholder-gray-300 transition-colors" placeholder="+1 012 3456 789" />
                             </div>
                         </div>

                         <div>
                             <label className="text-xs font-bold text-gray-500 uppercase tracking-wide block mb-4">Select Subject?</label>
                             <div className="flex flex-wrap gap-6">
                                 {['General Inquiry', 'General Inquiry', 'General Inquiry', 'General Inquiry'].map((opt, i) => (
                                     <label key={i} className="flex items-center gap-2 text-sm text-gray-500 cursor-pointer hover:text-[#0e1c36]">
                                         <input type="radio" name="subject" className="accent-[#0e1c36] w-4 h-4" /> {opt}
                                     </label>
                                 ))}
                             </div>
                         </div>

                         <div>
                             <label className="text-xs font-bold text-gray-500 uppercase tracking-wide">Message</label>
                             <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#0e1c36] text-[#0e1c36] placeholder-gray-300 transition-colors" placeholder="Write your message.." />
                         </div>

                         <div className="text-right pt-4">
                             <Button variant="primary">Send Message</Button>
                         </div>
                     </form>
                 </div>
             </div>
         </div>

         {/* Bottom Cards */}
         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 mb-20">
             {[
                 { title: "Call Us Directly", desc: "Let's discuss how our tailored strategies can help your brand thrive online.", icon: Phone },
                 { title: "Visit Our Office", desc: "Our doors are always open! Come by anytime to discuss how we can help grow and elevate your brand's position.", icon: MapPin },
                 { title: "Email Support", desc: "Reach out to us anytime at our email—we're ready to help you grow your brand and achieve your digital goals.", icon: Mail },
             ].map((card, i) => (
                 <div key={i} className="bg-white p-8 shadow-sm flex flex-col items-center text-center">
                     <div className="w-12 h-12 rounded-full bg-[#f0f9ff] flex items-center justify-center text-[#fca311] mb-4">
                         <card.icon size={22} />
                     </div>
                     <h4 className="font-bold text-[#0e1c36] mb-2">{card.title}</h4>
                     <p className="text-gray-500 text-xs leading-relaxed max-w-xs">{card.desc}</p>
                 </div>
             ))}
         </div>
    </div>
);

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch(activePage) {
      case 'home': return <HomePage />;
      case 'aboutus': return <AboutPage />;
      case 'services': return <ServicesPage />;
      case 'prices': return <PricesPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="font-sans antialiased text-[#4b5563] bg-white min-h-screen flex flex-col">
      <Navbar activePage={activePage} setPage={setActivePage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer />
      
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}



// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import HomePage from "./Home";
// import AboutPage from "./About";
// import PricesPage from "./Prices";   // ✅ FIXED
// import ContactPage from "./contact us";

// import Navbar from "./Navbar";
// import Footer from "./Footer";           // ✅ FIXED

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col bg-white">

//         {/* NAVBAR */}
//         <Navbar />

//         {/* ROUTES */}
//         <div className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/prices" element={<Prices />} /> {/* ✅ FIXED */}
//             <Route path="/contact" element={<contact/>} />
//           </Routes>
//         </div>

//         {/* FOOTER */}
//         <Footer />   {/* ✅ FIXED */}
//       </div>
//     </Router>
//   );
// }

// export default App;
