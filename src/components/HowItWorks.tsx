import { MapPin, Search, CreditCard, Utensils, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Route',
      description: 'Input your origin and destination. Arrivo maps out your drive and segments your travel time.',
      icon: MapPin,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-primary'
    },
    {
      number: '02',
      title: 'Discover Restaurants',
      description: 'Browse clean, certified, FSSAI-approved highway dhabas and premium restaurants along your exact path.',
      icon: Search,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      textColor: 'text-secondary'
    },
    {
      number: '03',
      title: 'Pre-Order & Book',
      description: 'Select from real-time digital menus, customize spices, pre-pay securely, and reserve your dining table.',
      icon: CreditCard,
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      number: '04',
      title: 'Arrive & Eat Fresh',
      description: 'The kitchen tracks your live GPS ETA and starts cooking just before you reach. Walk in and eat immediately!',
      icon: Utensils,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
  ];

  return (
    <div id="how-it-works" className="bg-white">
      {/* SaaS Landing Bottom Ribbon */}
      <div className="bg-[#111827] border-y border-gray-800 py-6 sm:py-8 px-4 sm:px-8 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg-dark opacity-5" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          <div className="w-full lg:flex-1 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 items-center">
            {/* Step 1 */}
            <div className="flex items-center gap-3">
              <span className="text-gray-700 font-black text-2xl font-poppins">01</span>
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF6B35]">Choose</p>
                <p className="text-xs text-gray-400 font-sans">Select your route</p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex items-center gap-3 border-l border-gray-800 pl-4 md:pl-6 lg:pl-4">
              <span className="text-gray-700 font-black text-2xl font-poppins">02</span>
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF6B35]">Discover</p>
                <p className="text-xs text-gray-400 font-sans">Verified eateries</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-center gap-3 border-l border-gray-800 pl-4 md:pl-6 lg:pl-4">
              <span className="text-gray-700 font-black text-2xl font-poppins">03</span>
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF6B35]">Order</p>
                <p className="text-xs text-gray-400 font-sans">Pre-pay & reserve</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-center gap-3 border-l border-gray-800 pl-4 md:pl-6 lg:pl-4">
              <span className="text-gray-700 font-black text-2xl font-poppins">04</span>
              <div>
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF6B35]">Eat</p>
                <p className="text-xs text-gray-400 font-sans">Fresh food on arrival</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/40 px-6 py-3 rounded-2xl border border-gray-800/80 w-full sm:w-auto text-center sm:text-left flex-shrink-0 flex items-center justify-between sm:justify-start gap-6">
            <div>
              <p className="text-[#FF6B35] text-[10px] font-extrabold tracking-wider uppercase font-mono">PARTNER NETWORK</p>
              <p className="text-white font-black text-xl font-poppins">1,000+ <span className="text-gray-400 font-normal text-sm">Stops</span></p>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
          </div>
        </div>
      </div>

      <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-100 to-transparent -translate-y-1/2 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 text-secondary text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span>Zero Wait Travel Dining</span>
          </div>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-brand-dark tracking-tight">
            How Arrivo Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 font-sans max-w-2xl mx-auto">
            Our intelligent synchronization engine coordinates the highway kitchen with your live driving speed, so food is served piping hot, right as you step in.
          </p>
        </div>

        {/* Step Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={step.number} 
                className="group relative bg-white rounded-3xl p-6 border border-gray-100 hover:border-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-2"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${step.bgColor} flex items-center justify-center ${step.textColor} shadow-sm group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-poppins font-extrabold text-gray-200 group-hover:text-primary/10 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-poppins font-bold text-lg text-brand-dark mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm text-gray-500 font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connectors / Flow helpers */}
                {idx < 3 && (
                  <div className="hidden lg:flex items-center absolute -right-5 top-1/2 -translate-y-1/2 z-20 text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Pro-Tip banner */}
        <div className="mt-16 bg-gradient-to-r from-brand-dark to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute inset-0 grid-bg-dark opacity-10" />
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-poppins font-bold text-base text-white">
                Delayed on the road due to heavy traffic or flat tire?
              </h4>
              <p className="text-xs text-gray-300 font-sans mt-1">
                No worries! Our live GPS system automatically adjusts preparation times, so the restaurant only cooks when you are exactly 12 minutes away.
              </p>
            </div>
          </div>
          <button 
            onClick={() => {
              const element = document.getElementById('route-demo');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-white text-brand-dark hover:bg-gray-100 font-medium text-sm rounded-full transition-all flex items-center gap-2 whitespace-nowrap shadow-sm cursor-pointer relative z-10"
          >
            <span>See live simulator</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  </div>
  );
}
