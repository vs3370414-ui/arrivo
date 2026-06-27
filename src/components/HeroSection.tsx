import { useState, useEffect } from 'react';
import { Route, MapPin, ChefHat, Clock, Sparkles, ArrowRight, ShieldCheck, Play, Star, RotateCcw } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick: (sectionId: string) => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  const [eta, setEta] = useState(15);
  const [kitchenStatus, setKitchenStatus] = useState<'queued' | 'preparing' | 'ready'>('queued');
  const [distance, setDistance] = useState(12.4);
  const [carProgress, setCarProgress] = useState(10); // percentage along path

  // Auto animation to simulate traveler journey on the highway
  useEffect(() => {
    const interval = setInterval(() => {
      setCarProgress((prev) => {
        const next = prev >= 95 ? 10 : prev + 1.5;
        
        // Calculate dynamic ETA and kitchen status based on progress
        const remainingDist = Math.max(0.2, 12.4 * (1 - (next - 10) / 85));
        setDistance(parseFloat(remainingDist.toFixed(1)));
        
        const remainingEta = Math.max(1, Math.round(15 * (1 - (next - 10) / 85)));
        setEta(remainingEta);

        if (next < 35) {
          setKitchenStatus('queued');
        } else if (next >= 35 && next < 80) {
          setKitchenStatus('preparing');
        } else {
          setKitchenStatus('ready');
        }

        return next;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gray-50/50">
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 grid-bg opacity-45 pointer-events-none" />
      
      {/* Dynamic blurred glow orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-secondary/80 opacity-5 rounded-full blur-3xl animate-float-slow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Copy (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left space-y-8">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full self-center lg:self-start w-fit">
              <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse"></span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF6B35]">Order before you arrive</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-[#111827] font-poppins">
              Fresh Food <span className="text-[#FF6B35]">Ready</span> Before You Arrive.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Book premium highway restaurants, reserve your table, and let chefs prepare your meal based on your live ETA. No waiting. Just arrive and eat.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => onCtaClick('route-demo')}
                className="bg-[#FF6B35] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-orange-200 hover:scale-105 transition-transform flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Your Meal</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onCtaClick('benefits')}
                className="bg-white border border-gray-200 text-[#111827] px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Partner Program
              </button>
            </div>

            {/* Trust Proofs and Avatar Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4 border-t border-gray-100">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-bold">JD</div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center text-xs font-bold">SK</div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-400 flex items-center justify-center text-xs font-bold">AP</div>
              </div>
              <div className="text-sm text-center lg:text-left">
                <p className="font-bold text-[#111827]">50K+ Travelers</p>
                <p className="text-gray-400 text-xs italic">Trusting Arrivo daily</p>
              </div>
              
              <div className="hidden sm:block w-px h-8 bg-gray-200 mx-2"></div>
              
              <div className="text-sm text-center lg:text-left">
                <p className="font-bold text-[#111827]">0 Mins</p>
                <p className="text-gray-400 text-xs italic">Average waiting delay</p>
              </div>
            </div>
          </div>

          {/* Hero Interactive Illustration (7 Columns) */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-2xl bg-white/40 p-4 rounded-3xl border border-white/60 shadow-xl backdrop-blur-md">
              {/* Main Visual Frame */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-brand-dark shadow-2xl p-4 flex flex-col justify-between">
                
                {/* Visual Grid Background inside map */}
                <div className="absolute inset-0 grid-bg-dark opacity-10 pointer-events-none" />

                {/* Animated Gradient Highway path */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M 50 140 C 180 140, 250 80, 380 80 C 480 80, 520 180, 640 180"
                    fill="none"
                    stroke="#374151"
                    strokeWidth="16"
                    strokeLinecap="round"
                  />
                  {/* Glowing core route line */}
                  <path
                    d="M 50 140 C 180 140, 250 80, 380 80 C 480 80, 520 180, 640 180"
                    fill="none"
                    stroke="#FF6B35"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="8 6"
                    className="animate-pulse"
                  />
                </svg>

                {/* Start Point (Origin Indicator) */}
                <div className="absolute left-[35px] top-[150px] flex flex-col items-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-gray-400 border-2 border-white shadow-md shadow-black" />
                  <span className="text-[10px] font-bold text-gray-400 mt-1 font-poppins">Delhi</span>
                </div>

                {/* Destination Point */}
                <div className="absolute left-[625px] top-[192px] flex flex-col items-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-secondary border-2 border-white shadow-md shadow-black" />
                  <span className="text-[10px] font-bold text-secondary mt-1 font-poppins">Agra Highway</span>
                </div>

                {/* Moving Car Indicator */}
                <div
                  className="absolute z-20 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg shadow-black/40 border border-primary/20 transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${carProgress}%`,
                    top: `${
                      140 + 
                      (carProgress < 50
                        ? (carProgress - 10) * ((80 - 140) / 40)
                        : (80 + (carProgress - 50) * ((180 - 80) / 40)))
                    }px`
                  }}
                >
                  <span className="text-sm">🚗</span>
                  {/* Radar ripple rings */}
                  <span className="absolute inset-0 rounded-full border border-primary/40 animate-ping opacity-60" />
                </div>

                {/* Target Restaurant Pin */}
                <div className="absolute left-[62%] top-[102px] flex flex-col items-center z-10 group cursor-pointer">
                  {/* Pulse Ring */}
                  <span className="absolute w-10 h-10 -top-1 bg-primary/20 rounded-full animate-pulse-slow" />
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white border-2 border-white shadow-md hover:scale-110 transition-transform">
                    <ChefHat className="w-4 h-4" />
                  </div>
                  <div className="absolute -bottom-8 bg-white/95 text-brand-dark px-2 py-0.5 rounded text-[10px] font-bold whitespace-nowrap shadow-sm border border-gray-100 flex items-center gap-1 font-poppins">
                    <span>Sukhdev Dhaba</span>
                    <span className="text-primary text-[8px]">★ 4.8</span>
                  </div>
                </div>

                {/* Floating GPS/ETA Overlay Panel (Top Left) */}
                <div className="flex justify-between items-start w-full relative z-30">
                  <div className="glass-panel-dark text-white px-3.5 py-2 rounded-xl flex items-center gap-2.5 shadow-lg max-w-[200px]">
                    <div className="p-1.5 rounded-lg bg-primary/25">
                      <Clock className="w-4 h-4 text-primary animate-pulse" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 font-mono block">ETA SYNC ACTIVE</span>
                      <span className="text-xs font-bold font-poppins text-white flex items-center gap-1">
                        Arrival in <span className="text-primary font-extrabold">{eta} min</span>
                      </span>
                    </div>
                  </div>

                  {/* Traveler Mini Details Panel (Top Right) */}
                  <div className="glass-panel-dark text-white px-3.5 py-2 rounded-xl flex items-center gap-2 shadow-lg max-w-[210px]">
                    <div className="w-6 h-6 rounded-full bg-gray-600 overflow-hidden flex items-center justify-center border border-white/20">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" 
                        alt="User profile" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <span className="text-[9px] text-gray-400 font-mono block">CAR WB-02-C45</span>
                      <span className="text-xs font-bold text-gray-100 truncate font-poppins">Amit S. (Patna → Delhi)</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Kitchen Live Status Board (Bottom Overlay) */}
                <div className="flex justify-between items-end w-full relative z-30">
                  <div className="glass-panel-dark text-white px-3 py-2 rounded-xl flex items-center gap-3 w-full shadow-lg border border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-500 ${
                          kitchenStatus === 'ready' 
                            ? 'bg-secondary/20 text-secondary' 
                            : kitchenStatus === 'preparing' 
                            ? 'bg-primary/20 text-primary' 
                            : 'bg-gray-800 text-gray-400'
                        }`}>
                          <ChefHat className={`w-4 h-4 ${kitchenStatus === 'preparing' ? 'animate-bounce' : ''}`} />
                        </div>
                        {kitchenStatus === 'preparing' && (
                          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-primary rounded-full animate-ping" />
                        )}
                      </div>
                      <div>
                        <span className="text-[9px] text-gray-400 font-mono block">KITCHEN STATUS</span>
                        <div className="flex items-center gap-1.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            kitchenStatus === 'ready' 
                              ? 'bg-secondary' 
                              : kitchenStatus === 'preparing' 
                              ? 'bg-primary animate-pulse' 
                              : 'bg-yellow-500'
                          }`} />
                          <span className="text-[11px] font-bold uppercase tracking-wider font-poppins">
                            {kitchenStatus === 'ready' 
                              ? 'Dish is ready & piping hot!' 
                              : kitchenStatus === 'preparing' 
                              ? 'Preparing Paneer Butter Masala...' 
                              : 'Waiting: Order Queued (ETA > 12m)'}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="ml-auto flex items-center gap-1.5 bg-gray-800/80 px-2 py-1 rounded text-[10px] font-mono border border-gray-700">
                      <span>Live Distance:</span>
                      <span className="text-primary font-bold">{distance} km</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Sub-cards: Show real-time dashboard elements */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center text-primary">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-medium font-poppins block">HYGIENE RATING</span>
                    <span className="text-sm font-bold text-brand-dark flex items-center gap-0.5 font-poppins">
                      5/5 <span className="text-secondary text-xs">FSSAI Certified</span>
                    </span>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center text-secondary">
                    <Star className="w-5 h-5 fill-secondary" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-medium font-poppins block">TABLE BOOKED</span>
                    <span className="text-sm font-bold text-brand-dark font-poppins block">
                      Table #04 (Reserved)
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Hint overlay */}
              <div className="absolute -top-3 -right-3 bg-brand-dark text-white text-[10px] font-mono px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1 border border-gray-800">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
                <span>GPS SYNC ACTIVE</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
