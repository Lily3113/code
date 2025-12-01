import React from 'react';
import { 
  BarChart2, 
  Megaphone, 
  Monitor, 
  Share2, 
  Mail, 
  PieChart, 
  Menu
} from 'lucide-react';

const Logo = ({ className = "h-10 md:h-12" }) => (
  <img 
    src="/PRELUSIVE Logo final (5).png" 
    alt="Prelusive" 
    className={`${className} object-contain`} 
  />
);

const Button = ({ children, variant = 'primary', className = '' }) => {
  const baseStyle = "px-6 py-3 rounded-md font-semibold text-sm transition-all duration-200";
  const variants = {
    primary: "bg-[#0A2540] text-white hover:bg-[#06182c]", // Dark Blue
    secondary: "bg-[#FFC000] text-[#0A2540] hover:bg-[#e0a800]", // Yellow/Gold
    outline: "border-2 border-[#0A2540] text-[#0A2540] hover:bg-gray-50"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Header = () => (
  <header className="bg-white py-5 sticky top-0 z-50 shadow-sm">
    <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
      <Logo />
      
      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-10 text-sm font-semibold text-gray-600">
        <a href="#" className="hover:text-[#0A2540]">Prices</a>
        <a href="#" className="hover:text-[#0A2540]">Services</a>
        <a href="#" className="hover:text-[#0A2540]">About Us</a>
      </nav>

      <div className="hidden md:block">
        <Button variant="primary">Contact Us</Button>
      </div>

      {/* Mobile Menu Icon Placeholder */}
      <button className="md:hidden text-[#0A2540]">
        <Menu size={28} />
      </button>
    </div>
  </header>
);

const Hero = () => (
  <section className="bg-white pt-12 pb-20">
    <div className="container mx-auto px-4 md:px-8 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-[#0A2540] leading-tight mb-6 max-w-4xl mx-auto">
        Amplifying Your Brand in the <br className="hidden md:block" /> Digital World
      </h1>
      
      <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto mb-12 leading-relaxed">
        We use data-driven strategies to power your brand. Our analytics-led approach 
        uncovers insights and refines our actions, so you can reach the right audience 
        — no matter their starting point.
      </p>

      <div className="w-full relative rounded-2xl overflow-hidden shadow-2xl">
        <img 
          src="/1.png" 
          alt="Digital Marketing Hero" 
          className="w-full h-[400px] md:h-[600px] object-cover object-center" 
        />
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="bg-white py-16 md:py-24">
    <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-16">
      <div className="w-full md:w-1/2">
        <div className="mb-4">
           <span className="text-[#FFC000] font-bold text-sm uppercase tracking-widest">About Us</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6 leading-tight">
          Empowering Brands <br /> in the Digital World
        </h2>
        <p className="text-gray-500 mb-6 leading-relaxed">
          At Prelusive Digital Marketing Agency, we're deeply passionate about the digital 
          landscape. Our journey is fueled by creativity and innovation. We exist to help 
          businesses ride the waves of the market, navigate the digital landscape, and 
          turn their vision into reality.
        </p>
        <p className="text-gray-500 mb-8 leading-relaxed">
          We combine data-driven insights with creative excellence to deliver 
          strategies that don't just look good, but perform exceptionally well.
        </p>
        <Button variant="primary">Learn More</Button>
      </div>
      
      <div className="w-full md:w-1/2">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="/2.png" 
            alt="About Us Team" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </div>
  </section>
);

const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-lg transition-shadow border border-gray-50">
    <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
      <div className="text-emerald-500">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-[#0A2540] mb-3">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <BarChart2 size={24} />,
      title: "Digital Marketing Strategy & Consultancy",
      desc: "Unlock potential with data-driven insights. We build custom roadmaps designed for conversion and retention."
    },
    {
      icon: <Megaphone size={24} />,
      title: "Public Relations & Branding",
      desc: "Build a reputation that resonates. We craft narratives that connect your brand with the people who matter most."
    },
    {
      icon: <Monitor size={24} />,
      title: "Website Development & SEO",
      desc: "A seamless user experience meets technical excellence. We build sites that rank high and convert visitors."
    },
    {
      icon: <Share2 size={24} />,
      title: "Social Media & Content Management",
      desc: "Create engagement that counts. We curate content that sparks conversations and builds community."
    },
    {
      icon: <Mail size={24} />,
      title: "Email Marketing Campaigns",
      desc: "Targeted messaging that drives action. Our campaigns are designed to nurture leads into loyal customers."
    },
    {
      icon: <PieChart size={24} />,
      title: "Corporate Branding",
      desc: "Define your identity. We help you establish a visual and verbal language that stands out in the market."
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="md:w-1/2">
            <span className="text-[#FFC000] font-bold text-sm uppercase tracking-widest block mb-3">Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540]">
              Services & Benefits <br /> of Working With Us
            </h2>
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0">
            <p className="text-gray-500 text-sm leading-relaxed">
              We offer a comprehensive Digital Marketing service designed to help your business grow online. From strategy to execution, we craft custom solutions that deliver results.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChoose = () => (
  <section className="bg-white py-20">
    <div className="container mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row items-center gap-16">
      <div className="w-full md:w-1/2">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="/3.png" 
            alt="Why Choose Us" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <span className="text-[#FFC000] font-bold text-sm uppercase tracking-widest block mb-3">Why Choose Prelusive Digital Marketing</span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">
          Smarter Marketing. <br /> Proven Results.
        </h2>
        <p className="text-gray-500 mb-6 leading-relaxed">
          At Prelusive, we don't just run ads; we build campaigns. Every strategy is crafted with your business goals, combining creativity, innovation, and data-driven insights. We focus on connecting brands, customers, and results seamlessly.
        </p>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Our team's agility and efficiency allow us to make necessary pivots to meet your needs with precision, speed, and quality, and we provide transparent reporting so you always see the impact of our campaigns.
        </p>
        <Button variant="primary">Learn More</Button>
      </div>
    </div>
  </section>
);

const CallToActionCard = () => (
  <section className="bg-white pb-20 pt-10 px-4">
    <div className="container mx-auto relative bg-[#06182c] rounded-3xl overflow-hidden min-h-[300px] flex items-center">
      
      {/* Content Side (Left) */}
      <div className="relative z-10 w-full md:w-1/2 px-8 py-12 md:pl-16">
         <span className="text-[#FFC000] font-bold text-sm uppercase tracking-wide block mb-3">Why Choose Prelusive Digital Marketing</span>
         <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
          Smarter Marketing.<br />
          Proven Results.
        </h2>
        <Button variant="secondary" className="px-8 py-3">
          Book Consultancy
        </Button>
      </div>

      {/* Geometric Pattern Side (Right) - Pure CSS approximation of the image */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full hidden md:block opacity-20 text-[#1a3b5c]">
        <div className="grid grid-cols-2 h-full w-full">
            {/* Top Left Quadrant - Emulating shapes */}
            <div className="relative">
                <div className="absolute top-0 left-0 w-32 h-32 bg-current rounded-bl-full opacity-50"></div>
                <div className="absolute top-10 right-10 w-40 h-40 bg-current rounded-full"></div>
            </div>
             {/* Top Right Quadrant */}
            <div className="relative">
                {/* Triangle shape using borders */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[100px] border-l-transparent border-t-[100px] border-t-current"></div>
            </div>
             {/* Bottom Left Quadrant */}
            <div className="relative">
                 <div className="absolute bottom-10 left-10 w-32 h-32 bg-current"></div> {/* Square */}
            </div>
             {/* Bottom Right Quadrant */}
            <div className="relative">
                 <div className="absolute bottom-0 right-0 w-48 h-48 bg-current rounded-tl-full opacity-80"></div>
                 <div className="absolute bottom-0 left-0 w-0 h-0 border-r-[80px] border-r-transparent border-b-[80px] border-b-current"></div>
            </div>
        </div>
      </div>
      
      {/* Mobile background fallback */}
      <div className="md:hidden absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -right-10 -top-10 w-64 h-64 bg-white rounded-full"></div>
      </div>

    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#0A2540] text-white pt-20 pb-10">
    <div className="container mx-auto px-4 md:px-8 text-center flex flex-col items-center">
      
      <span className="text-gray-400 text-xs tracking-[0.2em] uppercase mb-4">Space For Creativity And Passion</span>
      <h2 className="text-3xl md:text-5xl font-bold mb-6">Request More Information</h2>
      
      <p className="text-gray-400 max-w-lg mb-10 text-sm leading-relaxed">
        Drive into matters of innovation, web responsiveness, SEO optimization and engage in data-driven conversations with us.
      </p>

      <Button variant="secondary" className="px-10 py-4 text-base mb-20">
        Contact Us
      </Button>

      <div className="w-full border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        
        {/* Logo Added Here - White version using brightness filter */}
        <div className="mb-2 md:mb-0">
           <img 
            src="/PRELUSIVE Logo final (5).png" 
            alt="Prelusive" 
            className="h-10 brightness-0 invert opacity-90" 
          />
        </div>

        <nav className="flex space-x-8 text-xs font-semibold tracking-wider text-gray-300 uppercase">
          <a href="#" className="hover:text-[#FFC000]">Info</a>
          <a href="#" className="hover:text-[#FFC000]">Services</a>
          <a href="#" className="hover:text-[#FFC000]">Projects</a>
        </nav>

        <div className="flex space-x-4">
          <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-xs hover:border-[#FFC000] hover:text-[#FFC000] cursor-pointer transition-colors">in</div>
          <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-xs hover:border-[#FFC000] hover:text-[#FFC000] cursor-pointer transition-colors">f</div>
          <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-xs hover:border-[#FFC000] hover:text-[#FFC000] cursor-pointer transition-colors">IG</div>
        </div>

      </div>
      
      <div className="mt-8 text-gray-600 text-xs">
        © 2025 Prelusive. All rights reserved.
      </div>

    </div>
  </footer>
);

export default function App() {
  return (
    <div className="font-sans text-[#0A2540] bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <CallToActionCard />
      </main>
      <Footer />
    </div>
  );
}