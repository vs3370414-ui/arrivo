import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../types';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'How does the ETA-based cooking synchronization work?',
      answer: 'When you place an order, our engine continuously monitors your vehicle’s live GPS coordinates and estimated transit time via highway traffic networks. The restaurant is automatically notified to start boiling, roasting, or frying only when your real-time ETA matches the cooking duration of your selected dishes (usually 10 to 15 minutes before arrival).'
    },
    {
      id: 'faq-2',
      question: 'What if I get delayed due to heavy traffic, flat tires, or extra pitstops?',
      answer: 'Your safety and peace of mind is our priority! Since our synchronization is completely automated via live GPS, any road delay or stationary vehicle state is immediately detected. The kitchen queue pauses or pushes your order back in real-time, meaning chefs only begin preparation when you are physically approaching the 10km threshold.'
    },
    {
      id: 'faq-3',
      question: 'Can I cancel my pre-order? Is there a cancellation fee?',
      answer: 'You can cancel or change your order free of charge up to 30 minutes before your expected arrival. If the restaurant has already triggered cooking (within 15 minutes of your arrival), a partial food-waste recovery charge might apply. Refunds are processed instantly back to your original payment method.'
    },
    {
      id: 'faq-4',
      question: 'How does Arrivo guarantee that the food is hygienic?',
      answer: 'Every highway restaurant and dhaba undergoes a strict vetting procedure before boarding our network. We evaluate their cooking environments, water filtration systems, waste management, and staff vaccination records. Every partner is required to maintain a valid FSSAI license and is subject to random, unannounced hygiene audits by our quality controllers.'
    },
    {
      id: 'faq-5',
      question: 'Does the restaurant track my exact real-time location?',
      answer: 'No, we value your privacy. The restaurant only sees an anonymized countdown timer (e.g., "Amit Sharma arriving in 12m") and your vehicle’s model/number plate for secure parking allocation. Your continuous GPS coordinates are never directly exposed to any third-party restaurant operators.'
    }
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent -translate-y-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>COMMONLY ASKED QUESTIONS</span>
          </div>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-brand-dark tracking-tight">
            Have Questions? We Have Answers.
          </h2>
          <p className="mt-4 text-base text-gray-500 font-sans max-w-xl mx-auto">
            Everything you need to know about our smart synchronization, cancellation coverage, and safety audits.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            
            return (
              <div 
                key={faq.id} 
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-xs ${
                  isOpen 
                    ? 'border-primary/20 shadow-md ring-1 ring-primary/5' 
                    : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 font-poppins font-bold text-sm sm:text-base text-brand-dark cursor-pointer select-none"
                >
                  <span className={`${isOpen ? 'text-primary' : 'text-brand-dark'} transition-colors`}>
                    {faq.question}
                  </span>
                  
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                {/* Accordion Content Panel */}
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-60 border-t border-gray-50' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 sm:p-8 text-sm text-gray-500 leading-relaxed font-sans">
                    {faq.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
