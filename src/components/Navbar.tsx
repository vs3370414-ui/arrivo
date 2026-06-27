import { useState, useEffect } from 'react';
import { Route, Menu, X, ArrowRight, Smartphone, ChefHat } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Route Demo', id: 'route-demo' },
    { label: 'Dashboard', id: 'dashboard-preview' },
    { label: 'Features', id: 'features' },
    { label: 'Benefits', id: 'benefits' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'App', id: 'app-showcase' },
    { label: 'FAQs', id: 'faqs' },
  ];

  const handleItemClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      onNavigate(id);
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/70 backdrop-blur-md border-b border-gray-200/80 shadow-sm'
          : 'py-4 bg-white/50 backdrop-blur-md border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-orange-400 flex items-center justify-center text-white shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
              <Route className="w-5 h-5 absolute group-hover:opacity-0 transition-opacity" />
              <ChefHat className="w-5 h-5 absolute opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <span className="font-poppins font-extrabold text-xl tracking-tight text-brand-dark flex items-center">
                Arri<span className="text-primary">vo</span>
              </span>
              <span className="text-[9px] text-gray-400 uppercase tracking-widest block font-medium -mt-1 font-mono">
                ETA-SYNC MEALS
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary rounded-lg hover:bg-gray-50/80 transition-all cursor-pointer font-poppins"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button 
              onClick={() => handleItemClick('benefits')}
              className="px-4 py-2 text-sm font-semibold text-[#111827] hover:bg-gray-50 border border-gray-200 rounded-full transition-colors cursor-pointer bg-white"
            >
              Partner Program
            </button>
            <button 
              onClick={() => handleItemClick('app-showcase')}
              className="bg-[#111827] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-black transition-colors flex items-center gap-2 cursor-pointer"
            >
              <Smartphone className="w-4 h-4" />
              <span>Download App</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className="w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-xl transition-all block font-poppins"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 flex flex-col gap-3 px-4">
              <button
                onClick={() => handleItemClick('benefits')}
                className="w-full py-2.5 text-center text-sm font-medium text-gray-700 hover:text-primary border border-gray-200 hover:border-primary/50 rounded-xl transition-all"
              >
                Partner With Us
              </button>
              <button
                onClick={() => handleItemClick('app-showcase')}
                className="w-full py-2.5 text-center text-sm font-medium text-white bg-primary hover:bg-primary-hover shadow-md rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Smartphone className="w-4 h-4" />
                <span>Download App</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
