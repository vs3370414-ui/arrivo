import { Star, ShieldCheck, Quote, TrendingUp } from 'lucide-react';
import { Testimonial, StatItem } from '../types';

export default function TestimonialsAndStats() {
  const testimonials: Testimonial[] = [
    {
      id: 't1',
      name: 'The Banerjee Family',
      role: 'Road Trip Family',
      quote: 'We drove from Patna to Delhi with two toddlers. Finding clean food and washrooms used to be a nightmare. With Arrivo, we pre-booked tables at clean dhabas. The food was hot and served the moment we sat. Best road trip experience!',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100',
      rating: 5,
      location: 'Kolkata to Noida NH19'
    },
    {
      id: 't2',
      name: 'Rohan Deshmukh',
      role: 'Business Traveler',
      quote: 'I travel constantly between Mumbai and Pune for client pitches. Time is money for me. Arrivo lets me eat premium, healthy home-style meals without spending 40 minutes waiting in lines. Extremely fast and predictable.',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100',
      rating: 5,
      location: 'Mumbai-Pune Expressway'
    },
    {
      id: 't3',
      name: 'Sardar Baldev Singh',
      role: 'Restaurant Owner',
      quote: 'Before Arrivo, cooking was guesswork. Some days we wasted 20kg of subzi, other days customers stood angry waiting. Now we receive the orders on our dashboard. We cook exactly when the customer is 10 km away. Food waste is down 75%, and sales are up!',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
      rating: 5,
      location: 'Owner, Sukhdev Dhaba'
    },
    {
      id: 't4',
      name: 'Manpreet & Gursewak',
      role: 'Taxi Driver',
      quote: 'Commercial taxi passengers are always in a rush. Bringing them to verified Arrivo stops guarantees they get high-quality food immediately. Clean toilets make ladies happy, and the parking space is huge.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100',
      rating: 5,
      location: 'Delhi-Chandigarh Route'
    }
  ];

  const stats: StatItem[] = [
    {
      id: 's1',
      value: '1,000+',
      label: 'Partner Restaurants',
      suffix: 'verified',
      description: 'FSSAI inspected dhabas and premium diners along major national highways.'
    },
    {
      id: 's2',
      value: '50K+',
      label: 'Happy Travelers',
      suffix: 'trips saved',
      description: 'Families, tourists, and business road-trippers enjoying zero waiting stops.'
    },
    {
      id: 's3',
      value: '100+',
      label: 'Highways Covered',
      suffix: 'all-India',
      description: 'Including NH19, Yamuna Expressway, Mumbai-Pune Expressway, and NH44.'
    },
    {
      id: 's4',
      value: '98%',
      label: 'On-time Meals',
      suffix: 'ETA sync accuracy',
      description: 'Dishes served hot at table within 2 minutes of the customer stepping in.'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Stats Grid */}
        <div className="bg-gradient-to-r from-brand-dark to-slate-900 text-white rounded-[40px] p-8 sm:p-12 shadow-2xl mb-24 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg-dark opacity-10 pointer-events-none" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center sm:text-left border-b sm:border-b-0 sm:border-r border-white/10 pb-6 sm:pb-0 sm:pr-4 last:border-0 last:pr-0">
                <span className="text-4xl sm:text-5xl font-poppins font-extrabold text-primary block tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs font-bold font-poppins text-gray-300 block uppercase tracking-wider mt-2">
                  {stat.label}
                </span>
                <span className="text-[10px] text-gray-400 font-mono block mt-0.5">
                  {stat.suffix}
                </span>
                <p className="text-xs text-gray-400 mt-2.5 font-sans leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Quote className="w-3.5 h-3.5" />
            <span>HEARD ON THE HIGHWAY</span>
          </div>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-brand-dark tracking-tight">
            Loved by Travelers & Kitchens
          </h2>
          <p className="mt-4 text-base text-gray-500 font-sans max-w-xl mx-auto">
            Discover why road-tripping families and national highway dhabas swear by the Arrivo synchronization engine.
          </p>
        </div>

        {/* Testimonials Masonry/Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((test) => (
            <div 
              key={test.id} 
              className="bg-gray-50/50 rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xs flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group hover:bg-white"
            >
              <div>
                {/* Five Stars Row */}
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-[10px] text-gray-400 font-bold ml-2 font-mono">VERIFIED USER</span>
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-gray-600 font-sans leading-relaxed italic">
                  "{test.quote}"
                </p>
              </div>

              {/* User Avatar Card footer */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200">
                    <img 
                      src={test.avatar} 
                      alt={test.name} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <span className="font-poppins font-bold text-sm text-brand-dark block">
                      {test.name}
                    </span>
                    <span className="text-xs text-gray-400 block">
                      {test.role}
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-orange-50 text-primary font-mono font-bold border border-orange-100">
                    {test.location}
                  </span>
                </div>
              </div>

              {/* Floating Quote graphic inside */}
              <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote className="w-16 h-16 text-brand-dark" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
