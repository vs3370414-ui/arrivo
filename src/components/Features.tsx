import { 
  Navigation, Cpu, ChefHat, BookmarkCheck, ShieldCheck, Heart, 
  Zap, Bath, ParkingCircle, BookOpen, CreditCard, Star, ArrowRight
} from 'lucide-react';

export default function Features() {
  const mainFeatures = [
    {
      icon: Navigation,
      title: 'Live ETA Sync',
      description: 'Active vehicle GPS synchronizes with the restaurant kitchen to automatically queue food preparation based on real-time highway speeds.',
      color: 'text-primary bg-orange-50',
      span: 'md:col-span-2'
    },
    {
      icon: Cpu,
      title: 'AI Arrival Engine',
      description: 'Predicts traffic patterns, toll booth delays, and pitstops to update cooking triggers, ensuring your meals are ready precisely as you arrive.',
      color: 'text-purple-600 bg-purple-50',
      span: 'md:col-span-2'
    },
    {
      icon: ChefHat,
      title: 'Fresh Prep Guarantee',
      description: 'Strict policy: food is never pre-cooked and kept in warmers. Preparation starts exactly when you are minutes away to guarantee piping hot freshness.',
      color: 'text-emerald-600 bg-green-50',
      span: 'md:col-span-1'
    },
    {
      icon: BookmarkCheck,
      title: 'Table Reservation',
      description: 'Guaranteed seat allocation upon pre-order. Never walk into a crowded dhaba only to stand and wait for a table with family.',
      color: 'text-blue-600 bg-blue-50',
      span: 'md:col-span-1'
    },
    {
      icon: ShieldCheck,
      title: 'Hygienic Stops',
      description: 'Every partner restaurant is hand-inspected, FSSAI-approved, and scored on a strict 40-point cleanliness checklist.',
      color: 'text-red-600 bg-red-50',
      span: 'md:col-span-1'
    },
    {
      icon: Heart,
      title: 'Family Friendly Stops',
      description: 'Curated list of stops featuring kids play areas, baby changing tables, nursing rooms, and air-conditioned family lounges.',
      color: 'text-pink-600 bg-pink-50',
      span: 'md:col-span-1'
    },
    {
      icon: Zap,
      title: 'EV Fast Charging',
      description: 'Filter stops by active EV chargers (60kW CCS2 onwards). Plug in your car to charge while you enjoy your meal.',
      color: 'text-amber-500 bg-amber-50',
      span: 'md:col-span-1'
    },
    {
      icon: Bath,
      title: 'Washroom Audits',
      description: 'Real-time rating on washroom sanitation and water supply, backed by hourly checklists from onsite cleaning crews.',
      color: 'text-teal-600 bg-teal-50',
      span: 'md:col-span-1'
    },
    {
      icon: ParkingCircle,
      title: 'Hassle-Free Parking',
      description: 'Access stops with massive, secure, well-lit paved parking yards designed for easy entry, turnaround, and safety.',
      color: 'text-indigo-600 bg-indigo-50',
      span: 'md:col-span-1'
    },
    {
      icon: BookOpen,
      title: 'Live Digital Menu',
      description: 'Access real-time menus with accurate prices, seasonal availabilities, customizable spice indexes, and allergen info.',
      color: 'text-orange-600 bg-orange-50',
      span: 'md:col-span-1'
    },
    {
      icon: CreditCard,
      title: 'One-Click Payments',
      description: 'Support for UPI, NetBanking, credit cards, and instant checkout. Pay in advance for seamless, check-free dine-ins.',
      color: 'text-gray-700 bg-gray-100',
      span: 'md:col-span-1'
    },
    {
      icon: Star,
      title: 'Verified Reviews',
      description: 'Read reviews strictly submitted by verified highway travelers, helping you avoid low-quality tourist trap dhabas.',
      color: 'text-yellow-500 bg-yellow-50',
      span: 'md:col-span-1'
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50/50 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-primary text-primary" />
            <span>EXCELLENCE IN EVERY MILE</span>
          </div>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-brand-dark tracking-tight">
            Designed for Safer, Fresh Highway Stops
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 font-sans max-w-2xl mx-auto">
            We solve the common road-trip struggles of finding clean washrooms, charging your EV, parking securely, and eating hygienic meals.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainFeatures.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div 
                key={index}
                className={`bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col justify-between group ${feat.span}`}
              >
                <div>
                  <div className={`w-11 h-11 rounded-2xl ${feat.color} flex items-center justify-center mb-6 group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <h3 className="font-poppins font-bold text-base text-brand-dark mb-2 group-hover:text-primary transition-colors">
                    {feat.title}
                  </h3>
                  
                  <p className="text-sm text-gray-500 font-sans leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                {/* Micro interactive indicator inside large cards */}
                {feat.span?.includes('col-span-2') && (
                  <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between text-xs font-semibold font-mono text-primary group-hover:text-primary-hover">
                    <span>LAUNCH ACTIVE INTERFACE</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
