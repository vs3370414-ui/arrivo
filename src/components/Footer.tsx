import { Smartphone, ChefHat, Route, ArrowRight, Github, Twitter, Linkedin, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onCtaClick: (sectionId: string) => void;
}

export default function Footer({ onCtaClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#', badge: 'Hiring' },
      { label: 'Press Kit', href: '#' },
      { label: 'Blog & Travelogue', href: '#' },
    ],
    Restaurants: [
      { label: 'Partner Program', href: '#' },
      { label: 'Kitchen OS Login', href: '#' },
      { label: 'FSSAI Standards', href: '#' },
      { label: 'Owner Success Stories', href: '#' },
    ],
    Support: [
      { label: 'Help Center', href: '#' },
      { label: 'Roadside Helpline', href: '#' },
      { label: 'Contact Support', href: '#' },
      { label: 'System Status', href: '#' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Refund Policy', href: '#' },
      { label: 'Data Security', href: '#' },
    ]
  };

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-12 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 grid-bg-dark opacity-10 pointer-events-none" />

      {/* 1. Final Call-to-Action Card Block */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10">
        <div className="relative bg-gradient-to-r from-primary to-orange-500 rounded-[40px] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl text-center sm:text-left">
          
          {/* Dynamic glowing background circles inside card */}
          <div className="absolute -top-10 -right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-black/10 rounded-full blur-3xl" />

          <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* CTA copy */}
            <div className="lg:col-span-8">
              <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
                Ready to Enjoy Fresh Food <br />
                Without the Roadside Wait?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-orange-50 font-sans max-w-xl">
                Pre-book your favorite dhaba, synchronize your live transit speed, and find piping hot meals served directly at your table upon arrival.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center sm:justify-start lg:justify-center items-stretch sm:items-center lg:items-stretch w-full">
              <button
                onClick={() => onCtaClick('route-demo')}
                className="px-8 py-4 bg-white text-primary hover:bg-orange-50 font-bold text-base rounded-full shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer font-poppins"
              >
                <span>Book First Meal</span>
                <ArrowRight className="w-5 h-5 text-primary" />
              </button>

              <button
                onClick={() => onCtaClick('app-showcase')}
                className="px-8 py-4 bg-brand-dark/30 hover:bg-brand-dark/45 text-white font-bold text-base rounded-full border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer font-poppins"
              >
                <Smartphone className="w-5 h-5 text-white" />
                <span>Download Mobile App</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Structured Sitemap & Logo Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/10 pb-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          
          {/* Logo & Company details (2 Columns) */}
          <div className="col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 group cursor-pointer">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-orange-400 flex items-center justify-center text-white shadow-md">
                  <Route className="w-5 h-5" />
                </div>
                <span className="font-poppins font-extrabold text-lg tracking-tight text-white">
                  Arri<span className="text-primary">vo</span>
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-4 leading-relaxed font-sans max-w-xs">
                Arrivo is India's leading travel-dining technology platform, helping roadtrippers discover hygienic highway restaurants, pre-book seats, and align fresh cooking with GPS speeds.
              </p>
            </div>

            {/* Support hotline */}
            <div className="mt-8 flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl max-w-xs">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-[10px] text-gray-400 font-mono">
                Corporate: Gurgaon / Patna NCR
              </span>
            </div>
          </div>

          {/* Links lists (4 Columns) */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <span className="text-xs font-bold font-poppins uppercase tracking-widest text-gray-300 block mb-4">
                {category}
              </span>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-xs text-gray-400 hover:text-primary transition-colors flex items-center gap-1.5 font-sans"
                    >
                      <span>{link.label}</span>
                      {link.badge && (
                        <span className="text-[8px] font-bold bg-primary/10 text-primary border border-primary/20 px-1.5 py-0.2 rounded-full font-mono">
                          {link.badge}
                        </span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>

      {/* 3. Bottom legal & Social bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Copyright notice */}
        <p className="text-xs text-gray-400 font-sans text-center sm:text-left">
          &copy; {currentYear} Arrivo Technologies Private Limited. All rights reserved. 
          <br className="hidden sm:inline" />
          <span className="text-[10px] text-gray-500 font-mono mt-1 block">
            Disclaimer: Arrivo is an independent tech platform. Restaurant names are registered trademarks of their respective owners.
          </span>
        </p>

        {/* Social Icons row */}
        <div className="flex items-center gap-4">
          <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all" aria-label="Twitter">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all" aria-label="LinkedIn">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all" aria-label="Github">
            <Github className="w-4 h-4" />
          </a>
          <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all" aria-label="Mail Support">
            <Mail className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}
