import { useState } from 'react';
import { 
  Smile, ShieldCheck, Zap, TrendingUp, Sparkles, ChefHat, 
  MapPin, Clock, TableProperties, Users, Trash2, Heart, Smartphone, Store 
} from 'lucide-react';

export default function Benefits() {
  const [activeTab, setActiveTab] = useState<'traveler' | 'restaurant'>('traveler');

  const travelerBenefits = [
    {
      icon: Clock,
      title: 'Zero Waiting Time',
      desc: 'No more standing around for 30 minutes at a crowded counter. Your table is reserved and food is served the second you take your seat.',
      badge: 'TIME SAVER'
    },
    {
      icon: FlameIcon, // custom inline or ChefHat
      title: 'Piping Hot Fresh Meals',
      desc: 'Meals are freshly prepared based on your live ETA. No cold, dry, or microwaved food from warmers. Real highway hospitality.',
      badge: '100% FRESH'
    },
    {
      icon: ShieldCheck,
      title: 'Clean & Sanitized Restrooms',
      desc: 'Gain peace of mind with vetted, family-safe stops. Washrooms are hourly monitored and FSSAI hygiene standards are strictly enforced.',
      badge: 'FAMILY FAVORITE'
    },
    {
      icon: MapPin,
      title: 'Seamless Trip Planning',
      desc: 'Plan your highway breakfast, lunch, or dinner stops perfectly. Align your fuel, EV charging, and restroom breaks in one single app.',
      badge: 'SMART TRIP'
    },
    {
      icon: TableProperties,
      title: 'Reserved Dining Tables',
      desc: 'No fighting for seats. Walk in during busy weekend peaks (like Yamuna Expressway or Delhi-Murthal) with your family table pre-allocated.',
      badge: 'VIP COMFORT'
    },
    {
      icon: Heart,
      title: 'Safer Family Travels',
      desc: 'Travel confidently with children and seniors. Select verified safe-spots featuring specialized family halls and helpful staff.',
      badge: 'SAFE JOURNEY'
    },
  ];

  const ownerBenefits = [
    {
      icon: TrendingUp,
      title: 'Predictable Demand Forecast',
      desc: 'Know exactly who is coming, when they are arriving, and what they ordered, hours before they reach your doorstep.',
      badge: 'HIGHER MARGINS'
    },
    {
      icon: Store,
      title: 'Boost Seat Turnaround',
      desc: 'Reduce table idle times by up to 40%. Food is served immediately, letting families eat and depart faster, doubling busy hour capacity.',
      badge: 'FAST TURN'
    },
    {
      icon: Trash2,
      title: 'Minimize Cooking Waste',
      desc: 'Cook exactly what is ordered. Stop guessing demand and throwing away unsold items at the end of the day. Highly sustainable.',
      badge: 'ZERO WASTE'
    },
    {
      icon: Users,
      title: 'Guaranteed Digital Volume',
      desc: 'Stand out from competing highway dhabas. Receive consistent pre-paid bookings directly from travelers using the Arrivo network.',
      badge: 'LOYALTRAFFIC'
    },
    {
      icon: Smartphone,
      title: 'Modern Order OS',
      desc: 'Replace chaotic handwritten order slips. A unified, cloud-connected Android/iOS POS tablet handles all incoming queues.',
      badge: 'EFFICIENCY'
    },
    {
      icon: Zap,
      title: 'Live GPS Fleet Tracking',
      desc: 'No phone calls asking "where have you reached?". Watch customer vehicles approach your restaurant live on your digital console.',
      badge: 'GPS ENGINE'
    }
  ];

  function FlameIcon(props: any) {
    return <ChefHat {...props} className={`${props.className} text-orange-500`} />;
  }

  return (
    <section id="benefits" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 right-0 h-96 bg-gray-50/50 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Toggle Switch Head */}
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMMUNITY VALUE EXCHANGE</span>
          </div>
          
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-brand-dark tracking-tight text-center">
            Win-Win Highway Infrastructure
          </h2>
          <p className="mt-4 text-base text-gray-500 font-sans max-w-xl text-center mb-10">
            Select your profile to discover how Arrivo adds massive value to either your family road trips or your restaurant operations.
          </p>

          {/* Luxury Rounded Toggle */}
          <div className="bg-gray-100 p-1.5 rounded-full flex items-center shadow-inner border border-gray-200">
            <button
              onClick={() => setActiveTab('traveler')}
              className={`px-8 py-3 rounded-full text-sm font-semibold font-poppins transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'traveler'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>For Highway Travelers</span>
            </button>
            <button
              onClick={() => setActiveTab('restaurant')}
              className={`px-8 py-3 rounded-full text-sm font-semibold font-poppins transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'restaurant'
                  ? 'bg-white text-secondary shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <Store className="w-4 h-4" />
              <span>For Restaurant Owners</span>
            </button>
          </div>
        </div>

        {/* Benefits Display Area */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Visual Showcase (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className={`p-8 rounded-3xl border transition-all duration-500 h-full flex flex-col justify-between ${
              activeTab === 'traveler'
                ? 'bg-orange-50/50 border-orange-100'
                : 'bg-green-50/50 border-green-100'
            }`}>
              <div>
                <span className={`text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
                  activeTab === 'traveler' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
                }`}>
                  {activeTab === 'traveler' ? 'THE TRAVEL EXPERIENCE' : 'THE PARTNER ADVANTAGE'}
                </span>

                <h3 className="font-poppins font-extrabold text-2xl sm:text-3xl text-brand-dark mt-6 mb-4">
                  {activeTab === 'traveler' 
                    ? 'No more roadside compromises' 
                    : 'Multiply your highway revenue'}
                </h3>
                
                <p className="text-sm text-gray-600 font-sans leading-relaxed">
                  {activeTab === 'traveler'
                    ? 'Highway roadtrips in India are iconic, but dining with family shouldn\'t mean compromising on hygiene, clean washrooms, or eating cold reheated food. Arrivo guarantees a clean, fresh culinary stop every time.'
                    : 'Unpredictable travel times mean highway dhabas are flooded during holidays but empty on weekdays. Arrivo brings organized digital demand directly to your kitchen, helping you optimize seating and staff.'}
                </p>
              </div>

              {/* Graphic Mock Block */}
              <div className="mt-8 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 text-white ${
                  activeTab === 'traveler' ? 'bg-primary' : 'bg-secondary'
                }`}>
                  {activeTab === 'traveler' ? <Smile className="w-6 h-6" /> : <TrendingUp className="w-6 h-6" />}
                </div>
                <div>
                  <span className="text-xs text-gray-400 font-medium block">
                    {activeTab === 'traveler' ? 'RESCUING FAMILY TRIPS' : 'BUSINESS STABILITY'}
                  </span>
                  <span className="text-sm font-bold text-brand-dark font-poppins block">
                    {activeTab === 'traveler' ? 'Satisfied, full, and on schedule!' : 'Up to 3.5x boost in off-peak revenue'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid (7 Columns) */}
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
            {activeTab === 'traveler' ? (
              travelerBenefits.map((b, idx) => {
                const Icon = b.icon;
                return (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-primary mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-poppins font-bold text-base text-brand-dark mb-2">
                        {b.title}
                      </h4>
                      <p className="text-xs text-gray-500 font-sans leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                    <span className="text-[9px] font-mono font-bold text-primary tracking-wider mt-4 block">
                      {b.badge}
                    </span>
                  </div>
                );
              })
            ) : (
              ownerBenefits.map((b, idx) => {
                const Icon = b.icon;
                return (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-secondary mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-poppins font-bold text-base text-brand-dark mb-2">
                        {b.title}
                      </h4>
                      <p className="text-xs text-gray-500 font-sans leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                    <span className="text-[9px] font-mono font-bold text-secondary tracking-wider mt-4 block">
                      {b.badge}
                    </span>
                  </div>
                );
              })
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
