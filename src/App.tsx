/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import InteractiveRouteDemo from './components/InteractiveRouteDemo';
import DashboardPreview from './components/DashboardPreview';
import Features from './components/Features';
import Benefits from './components/Benefits';
import TestimonialsAndStats from './components/TestimonialsAndStats';
import MobileAppShowcase from './components/MobileAppShowcase';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { Sparkles, MessageSquare, Route } from 'lucide-react';

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      showToast(`Navigated to: ${id.replace('-', ' ').toUpperCase()}`);
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-50/50 selection:bg-primary/20 selection:text-primary-hover">
      
      {/* Premium Navbar */}
      <Navbar onNavigate={scrollToSection} />

      {/* Hero Section */}
      <HeroSection onCtaClick={scrollToSection} />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Interactive Route Demo Map */}
      <InteractiveRouteDemo />

      {/* Restaurant Dashboard Preview */}
      <DashboardPreview />

      {/* Bento Grid Features Section */}
      <Features />

      {/* Dual Comparative Benefits Section */}
      <Benefits />

      {/* Verified Stats and Testimonials Section */}
      <TestimonialsAndStats />

      {/* Interactive Mobile App Showcase Mockup */}
      <MobileAppShowcase />

      {/* FAQ Accordions Section */}
      <FAQ />

      {/* Footer & Final Call to Action */}
      <Footer onCtaClick={scrollToSection} />

      {/* Micro-Feedback Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-brand-dark/95 backdrop-blur-sm text-white px-4 py-3 rounded-2xl border border-white/10 shadow-xl flex items-center gap-2.5 animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="w-5 h-5 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
            <Sparkles className="w-3.5 h-3.5 animate-spin" />
          </div>
          <span className="text-xs font-poppins font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Static pitch floating badge for investors */}
      <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-sm hover:bg-white border border-gray-100 px-3.5 py-2 rounded-2xl shadow-lg transition-all hover:scale-105 group cursor-pointer"
           onClick={() => scrollToSection('navbar')}>
        <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center text-primary">
          <Route className="w-4 h-4" />
        </div>
        <div>
          <span className="text-[10px] text-gray-400 font-mono block">INVESTOR-DECK PREVIEW</span>
          <span className="text-xs font-bold text-brand-dark font-poppins flex items-center gap-1">
            Arrivo Pitch 
            <span className="text-[9px] font-bold bg-green-50 text-secondary border border-green-100 px-1.5 py-0.2 rounded-full font-mono">
              SaaS v2
            </span>
          </span>
        </div>
      </div>

    </div>
  );
}
