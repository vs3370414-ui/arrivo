import { useState } from 'react';
import { 
  Home, MapPin, Search, ShoppingCart, Clock, CheckCircle2, 
  Smartphone, Navigation, Star, BatteryCharging, Shield, Award 
} from 'lucide-react';

export default function MobileAppShowcase() {
  const [activeScreen, setActiveScreen] = useState<'home' | 'route' | 'list' | 'order' | 'eta' | 'confirm'>('home');

  const screens = [
    {
      id: 'home',
      label: 'Home Screen',
      icon: Home,
      title: 'Dine-In, Pre-Routed',
      desc: 'Set your highway route, save favorite stops, and view verified high-rating dhabas nearby in one tap.',
    },
    {
      id: 'route',
      label: 'Route Selection',
      icon: MapPin,
      title: 'Map-Segmented Travel',
      desc: 'Input destination (e.g. Patna to Delhi) and visualize recommended culinary stops synced perfectly with your pitstop schedules.',
    },
    {
      id: 'list',
      label: 'Restaurant List',
      icon: Search,
      title: 'Vetted & Hygiene-Scored',
      desc: 'Filter dhabas by hourly washroom ratings, available EV fast chargers, secured parking space, and kids entertainment zones.',
    },
    {
      id: 'order',
      label: 'Food Ordering',
      icon: ShoppingCart,
      title: 'Interactive Digital Menus',
      desc: 'Customize meals, choose portion sizes, select your preferred spice levels, and pay securely via digital UPI.',
    },
    {
      id: 'eta',
      label: 'Live ETA Tracking',
      icon: Clock,
      title: 'Real-Time Cooking Sync',
      desc: 'Your vehicle coordinates update continuously. Our system triggers the chefs to start boiling/roasting only when you are minutes away.',
    },
    {
      id: 'confirm',
      label: 'Order Confirmation',
      icon: CheckCircle2,
      title: 'Dine-In Fast Pass',
      desc: 'Unlock your table number, check-in QR code, and enjoy instant, contactless, waiter-free serving the moment you sit down.',
    },
  ];

  return (
    <section id="app-showcase" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Smartphone className="w-3.5 h-3.5" />
            <span>NATIVE HIGHWAY COMPANION APP</span>
          </div>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-brand-dark tracking-tight">
            Arrivo in Your Pocket
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 font-sans max-w-2xl mx-auto">
            Available on iOS and Android. Pre-plan, track, and dine-in seamlessly on Indian roads with our highly rated mobile app.
          </p>
        </div>

        {/* Content Box */}
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Screen Selector (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col gap-3.5 order-2 lg:order-1">
            {screens.map((screen) => {
              const ScreenIcon = screen.icon;
              const isActive = activeScreen === screen.id;
              
              return (
                <button
                  key={screen.id}
                  onClick={() => setActiveScreen(screen.id as any)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex gap-4 ${
                    isActive 
                      ? 'bg-white border-primary shadow-md shadow-primary/5 -translate-x-1' 
                      : 'bg-white/50 border-gray-100 hover:bg-white hover:border-gray-200'
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isActive ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    <ScreenIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-base text-brand-dark flex items-center gap-2">
                      {screen.label}
                      {isActive && <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      {screen.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: iPhone CSS Mockup (5 Columns) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-72 h-[580px] bg-slate-900 rounded-[44px] p-3 shadow-2xl border-[6px] border-slate-800 flex-shrink-0">
              
              {/* iPhone Notch/Dynamic Island */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-full z-40 flex items-center justify-between px-3.5">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-900 border border-gray-800" />
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500/80 animate-pulse" />
              </div>

              {/* iPhone Speaker lines / Home indicators */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-32 h-1 bg-black rounded-full z-40" />

              {/* Inside Mobile Screen Container */}
              <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-white flex flex-col justify-between select-none">
                
                {/* Phone Status bar */}
                <div className="pt-7 px-5 pb-2 bg-gray-50 flex justify-between items-center text-[10px] font-bold text-gray-600 z-30 font-mono">
                  <span>22:10</span>
                  <div className="flex items-center gap-1">
                    <span className="text-[9px]">5G</span>
                    <div className="w-4 h-2 border border-gray-600 rounded-sm p-0.5 flex items-center">
                      <div className="w-2.5 h-full bg-gray-600 rounded-2xs" />
                    </div>
                  </div>
                </div>

                {/* DYNAMIC SCREEN SCREEN VIEWS */}
                <div className="flex-grow flex flex-col justify-between overflow-y-auto bg-gray-50 font-sans">
                  {/* HOME SCREEN */}
                  {activeScreen === 'home' && (
                    <div className="p-4 flex-grow flex flex-col gap-4">
                      {/* Search Bar */}
                      <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center gap-2 text-xs text-gray-400">
                        <Search className="w-4 h-4 text-gray-300" />
                        <span>Enter destination (e.g. Delhi)</span>
                      </div>

                      {/* Streak Bonus Card */}
                      <div className="bg-gradient-to-br from-primary to-orange-500 text-white p-3.5 rounded-xl shadow-sm text-left">
                        <span className="text-[9px] font-bold uppercase tracking-wider block font-mono">ROAD TRIP BONUS</span>
                        <h4 className="font-poppins font-bold text-sm mt-1">Get ₹100 Off Today</h4>
                        <p className="text-[10px] text-orange-50 mt-1">Active on NH19 / Yamuna Expressway.</p>
                      </div>

                      {/* Top Nearby Dhabas */}
                      <div>
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block text-left mb-2">Recommended Stops</span>
                        <div className="space-y-2 text-left">
                          <div className="bg-white p-2.5 rounded-xl border border-gray-100 flex items-center justify-between shadow-xs">
                            <div className="flex items-center gap-2">
                              <span className="text-xl">🍲</span>
                              <div>
                                <span className="font-bold text-xs text-brand-dark block">Sukhdev Prime</span>
                                <span className="text-[10px] text-gray-400 block font-mono">Rating: 4.8★ • 12km</span>
                              </div>
                            </div>
                            <span className="text-[9px] px-2 py-0.5 rounded-full bg-orange-50 text-primary font-bold">Pure Veg</span>
                          </div>

                          <div className="bg-white p-2.5 rounded-xl border border-gray-100 flex items-center justify-between shadow-xs">
                            <div className="flex items-center gap-2">
                              <span className="text-xl">🍢</span>
                              <div>
                                <span className="font-bold text-xs text-brand-dark block">Mannat Haveli</span>
                                <span className="text-[10px] text-gray-400 block font-mono">Rating: 4.9★ • 45km</span>
                              </div>
                            </div>
                            <span className="text-[9px] px-2 py-0.5 rounded-full bg-green-50 text-secondary font-bold">EV fast</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ROUTE SCREEN */}
                  {activeScreen === 'route' && (
                    <div className="p-4 flex-grow flex flex-col gap-3">
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block text-left">Your Highway Route</span>
                      
                      {/* Destination block */}
                      <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm space-y-2 text-left">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-gray-400" />
                          <span className="text-xs font-semibold text-brand-dark">Patna (Origin)</span>
                        </div>
                        <div className="h-4 border-l border-dashed border-gray-300 ml-1" />
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-xs font-semibold text-brand-dark">Delhi (Destination)</span>
                        </div>
                      </div>

                      {/* Map Segment visual */}
                      <div className="bg-slate-900 h-28 rounded-xl relative overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 grid-bg-dark opacity-10" />
                        <span className="text-primary text-[10px] font-mono font-bold animate-pulse">ROUTE GENERATED (960 km)</span>
                        {/* Curved SVG route line */}
                        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                          <path d="M 10 70 Q 120 20, 160 90 T 260 50" fill="none" stroke="#FF6B35" strokeWidth="3" strokeDasharray="4 3" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* RESTAURANT LIST SCREEN */}
                  {activeScreen === 'list' && (
                    <div className="p-4 flex-grow flex flex-col gap-3 overflow-y-auto">
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block text-left">Restaurants near you</span>
                      
                      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-xs text-left">
                        <div className="h-20 bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=200')" }} />
                        <div className="p-2.5">
                          <div className="flex justify-between items-start">
                            <h4 className="font-bold text-xs text-brand-dark">Grand Trunk Dhaba</h4>
                            <span className="text-[9px] font-bold text-primary">★ 4.8</span>
                          </div>
                          <span className="text-[9px] text-gray-400 font-mono">14 km away • NH19 Varanasi</span>
                          <div className="mt-2 flex gap-1">
                            <span className="text-[8px] bg-green-50 text-secondary border border-green-100 px-1.5 py-0.5 rounded">EV Charge</span>
                            <span className="text-[8px] bg-blue-50 text-blue-600 border border-blue-100 px-1.5 py-0.5 rounded">Clean bath</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* FOOD ORDERING SCREEN */}
                  {activeScreen === 'order' && (
                    <div className="p-4 flex-grow flex flex-col gap-3 text-left">
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">Your Cart (Dine-In)</span>
                      
                      <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm space-y-2">
                        <div className="flex justify-between text-xs border-b border-gray-50 pb-2">
                          <span className="font-semibold text-brand-dark">2x Amritsari Paneer Kulcha</span>
                          <span className="font-mono text-gray-600 font-bold">₹240</span>
                        </div>
                        <div className="flex justify-between text-xs border-b border-gray-50 pb-2">
                          <span className="font-semibold text-brand-dark">1x Sweet Kesar Lassi</span>
                          <span className="font-mono text-gray-600 font-bold">₹110</span>
                        </div>
                        
                        {/* Customize sliders */}
                        <div className="pt-2">
                          <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider block">Spice Level: Medium</span>
                          <div className="w-full h-1 bg-gray-100 rounded-full mt-1.5 relative">
                            <div className="absolute left-0 top-0 h-full w-[60%] bg-primary rounded-full" />
                            <div className="absolute left-[60%] -top-1 w-3 h-3 rounded-full bg-white border border-primary shadow-sm" />
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-100 p-3 rounded-xl flex justify-between items-center mt-auto">
                        <span className="text-xs font-bold text-gray-600">Total: ₹350</span>
                        <span className="text-[9px] font-mono text-gray-400">VAT & Taxes incl.</span>
                      </div>
                    </div>
                  )}

                  {/* LIVE ETA TRACKING SCREEN */}
                  {activeScreen === 'eta' && (
                    <div className="p-4 flex-grow flex flex-col gap-4 text-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto animate-pulse">
                        <Navigation className="w-8 h-8 animate-bounce" />
                      </div>
                      
                      <div>
                        <span className="text-[9px] text-gray-400 font-mono block">GPS SYNC ACTIVE</span>
                        <h4 className="font-poppins font-extrabold text-lg text-brand-dark mt-1">ETA: 12 minutes</h4>
                        <p className="text-[10px] text-gray-500 mt-1 max-w-[180px] mx-auto leading-normal">
                          The chef has been triggered! Preparing your Paneer Kulchas.
                        </p>
                      </div>

                      {/* Horizontal speed indicator bar */}
                      <div className="bg-white p-2 rounded-xl border border-gray-100 shadow-xs flex items-center justify-between text-left">
                        <div>
                          <span className="text-[8px] text-gray-400 font-mono block">SPEED</span>
                          <span className="text-xs font-bold text-secondary font-mono">82 km/h</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[8px] text-gray-400 font-mono block">DIST REMAINING</span>
                          <span className="text-xs font-bold text-primary font-mono">9.8 km</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ORDER CONFIRMATION SCREEN */}
                  {activeScreen === 'confirm' && (
                    <div className="p-4 flex-grow flex flex-col gap-3 text-center justify-between">
                      <div>
                        <span className="text-[9px] font-mono text-secondary font-bold tracking-widest uppercase bg-green-50 px-2 py-0.5 rounded-full border border-green-100">DINE-IN READY</span>
                        <h4 className="font-poppins font-bold text-sm text-brand-dark mt-2.5">Table Reserved #08</h4>
                        <span className="text-xs text-gray-400 mt-0.5 block font-mono">Grand Trunk Dhaba Varanasi</span>
                      </div>

                      {/* Mock QR Code */}
                      <div className="w-24 h-24 bg-white border border-gray-200 rounded-xl p-2 mx-auto flex items-center justify-center shadow-xs">
                        <div className="grid grid-cols-4 gap-1 w-full h-full opacity-70">
                          {[...Array(16)].map((_, i) => (
                            <div key={i} className={`rounded-xs ${i % 3 === 0 || i % 7 === 0 ? 'bg-brand-dark' : 'bg-transparent'}`} />
                          ))}
                        </div>
                      </div>

                      <div className="bg-white p-2.5 rounded-xl border border-gray-100 text-left shadow-xs">
                        <span className="text-[9px] text-gray-400 font-bold uppercase block mb-1">Safety Checked</span>
                        <div className="flex items-center gap-1.5 text-[9px] text-gray-600">
                          <Shield className="w-3 h-3 text-secondary" />
                          <span>FSSAI Certified Stop</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Simulated App Bottom Navigation */}
                <div className="py-2 border-t border-gray-100 bg-white grid grid-cols-4 text-center z-30">
                  <div className={`flex flex-col items-center ${activeScreen === 'home' ? 'text-primary' : 'text-gray-400'}`}>
                    <Home className="w-4 h-4" />
                    <span className="text-[7px] font-bold mt-0.5 font-poppins">Explore</span>
                  </div>
                  <div className={`flex flex-col items-center ${activeScreen === 'route' ? 'text-primary' : 'text-gray-400'}`}>
                    <MapPin className="w-4 h-4" />
                    <span className="text-[7px] font-bold mt-0.5 font-poppins">Route</span>
                  </div>
                  <div className={`flex flex-col items-center ${activeScreen === 'order' ? 'text-primary' : 'text-gray-400'}`}>
                    <ShoppingCart className="w-4 h-4" />
                    <span className="text-[7px] font-bold mt-0.5 font-poppins">Order</span>
                  </div>
                  <div className={`flex flex-col items-center ${activeScreen === 'eta' ? 'text-primary' : 'text-gray-400'}`}>
                    <Clock className="w-4 h-4" />
                    <span className="text-[7px] font-bold mt-0.5 font-poppins">Status</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
