import { useState, useEffect } from 'react';
import { Route, MapPin, ChefHat, Play, Pause, RotateCcw, Star, Clock, Sparkles, CheckCircle2, Navigation, Compass } from 'lucide-react';
import { Restaurant } from '../types';

export default function InteractiveRouteDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [carProgress, setCarProgress] = useState(0); // 0 to 100
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<string>('r1');
  const [bookingConfirmed, setBookingConfirmed] = useState<string | null>(null);

  const restaurants: Restaurant[] = [
    {
      id: 'r1',
      name: 'The Grand Trunk Dhaba',
      rating: 4.8,
      reviewsCount: 1240,
      distance: 210, // km from Patna
      eta: 180, // minutes
      foodType: 'Pure Veg',
      prepTime: 12,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=400',
      signatureDishes: ['Kadhai Paneer', 'Butter Naan'],
      x: 22,
      y: 48,
      hasEVCharging: true,
      hasWashroom: true,
      hasParking: true,
    },
    {
      id: 'r2',
      name: 'Highway King Oasis',
      rating: 4.7,
      reviewsCount: 950,
      distance: 360,
      eta: 310,
      foodType: 'Multi-cuisine',
      prepTime: 15,
      image: 'https://images.unsplash.com/photo-1585518419759-7fe2e0f34e22?auto=format&fit=crop&q=80&w=400',
      signatureDishes: ['Litti Chokha Special', 'Dal Baati'],
      x: 42,
      y: 35,
      hasEVCharging: false,
      hasWashroom: true,
      hasParking: true,
    },
    {
      id: 'r3',
      name: 'Mille-Stone Royal Resort',
      rating: 4.9,
      reviewsCount: 2410,
      distance: 510,
      eta: 430,
      foodType: 'Veg',
      prepTime: 10,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400',
      signatureDishes: ['Dal Makhani Supreme', 'Tandoori Roti'],
      x: 62,
      y: 65,
      hasEVCharging: true,
      hasWashroom: true,
      hasParking: true,
    },
    {
      id: 'r4',
      name: 'Mannat Haveli Express',
      rating: 4.9,
      reviewsCount: 3820,
      distance: 780,
      eta: 650,
      foodType: 'Pure Veg',
      prepTime: 12,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=400',
      signatureDishes: ['Special Amritsari Kulcha', 'Haveli Thali'],
      x: 85,
      y: 40,
      hasEVCharging: true,
      hasWashroom: true,
      hasParking: true,
    },
  ];

  // Map progress (0 to 100) to current location names
  const getCurrentLocation = (progress: number) => {
    if (progress < 5) return 'Patna Bypass (NH19)';
    if (progress < 25) return 'Near Varanasi Bypass';
    if (progress < 45) return 'Passing Sasaram / Chandauli';
    if (progress < 65) return 'Prayagraj Highway';
    if (progress < 85) return 'Approaching Kanpur Toll Plaza';
    if (progress < 98) return 'Yamuna Expressway (Mathura)';
    return 'Delhi NCR Ingress';
  };

  // Run journey simulation
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCarProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          const next = prev + 0.8;
          
          // Auto-select restaurant based on proximity
          const carKm = (next / 100) * 960; // Patna to Delhi is ~960 km
          let closest = restaurants[0];
          let minDiff = Infinity;
          
          restaurants.forEach((r) => {
            const diff = Math.abs(r.distance - carKm);
            if (diff < minDiff) {
              minDiff = diff;
              closest = r;
            }
          });
          
          if (closest.id !== selectedRestaurantId) {
            setSelectedRestaurantId(closest.id);
          }
          
          return next;
        });
      }, 100);
    }
    return () => clearInterval(timer);
  }, [isPlaying, selectedRestaurantId]);

  // Calculate current simulated status for the selected restaurant
  const getSimulatedSyncStatus = (r: Restaurant) => {
    const carKm = (carProgress / 100) * 960;
    const distanceToRest = r.distance - carKm;

    if (distanceToRest > 50) {
      return {
        label: 'Order Reserved',
        desc: `Ready in ${(r.distance / 80).toFixed(1)} hrs. ETA tracked.`,
        color: 'bg-blue-50 text-blue-700 border-blue-200',
        badge: 'bg-blue-500'
      };
    } else if (distanceToRest > 0 && distanceToRest <= 50 && distanceToRest > 15) {
      return {
        label: 'Approaching Stop',
        desc: `Live ETA: ${Math.round(distanceToRest * 0.8)}m. Cooking cue sent.`,
        color: 'bg-amber-50 text-amber-700 border-amber-200',
        badge: 'bg-amber-500 animate-pulse'
      };
    } else if (distanceToRest > 0 && distanceToRest <= 15) {
      return {
        label: 'Cooking Active',
        desc: 'Kitchen is preparing your fresh meal based on live ETA.',
        color: 'bg-primary/10 text-primary border-primary/20',
        badge: 'bg-primary animate-ping'
      };
    } else {
      return {
        label: 'Arrived & Served',
        desc: 'Food served hot at table #05! Enjoy your meal.',
        color: 'bg-green-50 text-green-700 border-green-200',
        badge: 'bg-green-500'
      };
    }
  };

  const handleReserve = (rId: string) => {
    setBookingConfirmed(rId);
    setTimeout(() => setBookingConfirmed(null), 3000);
  };

  const currentKm = Math.round((carProgress / 100) * 960);
  const selectedRest = restaurants.find((r) => r.id === selectedRestaurantId) || restaurants[0];
  const syncStatus = getSimulatedSyncStatus(selectedRest);

  return (
    <section id="route-demo" className="py-24 bg-gray-50/70 relative">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>LIVE INTERACTIVE ROUTE ENGINE</span>
            </div>
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-brand-dark tracking-tight">
              Interactive Patna-Delhi Route
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-500 font-sans max-w-xl">
              Simulate your travel journey along National Highway 19. Watch how our kitchen engine triggers preparation automatically based on your proximity.
            </p>
          </div>

          {/* Simulation Controls */}
          <div className="flex items-center gap-3 bg-white p-2 rounded-2xl border border-gray-100 shadow-sm self-start">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 rounded-xl bg-primary text-white hover:bg-primary-hover shadow-sm transition-all flex items-center gap-2 font-poppins font-medium text-xs cursor-pointer"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlaying ? 'Pause Journey' : 'Simulate Journey'}</span>
            </button>
            <button
              onClick={() => {
                setIsPlaying(false);
                setCarProgress(0);
                setSelectedRestaurantId('r1');
              }}
              className="p-3 rounded-xl border border-gray-200 hover:bg-gray-50 text-gray-600 transition-all cursor-pointer"
              title="Reset Simulation"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Interactive Map (8 Columns) */}
          <div className="lg:col-span-8 flex flex-col justify-between bg-brand-dark rounded-3xl p-6 shadow-xl relative overflow-hidden text-white border border-gray-800">
            {/* HUD Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-primary">
                  <Navigation className="w-4 h-4 animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-mono block">CURRENT TRAVEL SECTOR</span>
                  <span className="text-sm font-bold font-poppins text-gray-100">{getCurrentLocation(carProgress)}</span>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div>
                  <span className="text-[10px] text-gray-400 font-mono block text-right">ROUTE SPEED</span>
                  <span className="text-sm font-bold font-poppins text-right block text-secondary">82 km/h</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-mono block text-right">TOTAL COVERED</span>
                  <span className="text-sm font-bold font-poppins text-primary">{currentKm} / 960 km</span>
                </div>
              </div>
            </div>

            {/* Graphic Map Area */}
            <div className="relative h-64 sm:h-80 w-full bg-slate-950/60 rounded-2xl border border-white/5 p-4 flex flex-col justify-between">
              
              {/* Dynamic decorative grid */}
              <div className="absolute inset-0 grid-bg-dark opacity-20 pointer-events-none" />

              {/* Highway SVG Curve */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path
                  d="M 40 160 Q 200 80, 320 200 T 640 100 T 960 160"
                  fill="none"
                  stroke="#1f2937"
                  strokeWidth="18"
                  strokeLinecap="round"
                />
                <path
                  d="M 40 160 Q 200 80, 320 200 T 640 100 T 960 160"
                  fill="none"
                  stroke="#FF6B35"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="10 8"
                  className="opacity-90"
                />
              </svg>

              {/* Start Flag (Patna) */}
              <div className="absolute left-[3%] top-[164px] -translate-y-1/2 flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-white border-4 border-primary shadow-lg" />
                <span className="text-[10px] font-bold text-gray-300 mt-1 font-poppins">Patna</span>
              </div>

              {/* End Flag (Delhi) */}
              <div className="absolute right-[2%] top-[174px] -translate-y-1/2 flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-white border-4 border-secondary shadow-lg" />
                <span className="text-[10px] font-bold text-gray-300 mt-1 font-poppins">Delhi</span>
              </div>

              {/* Interactive Restaurant Markers on Map */}
              {restaurants.map((r) => {
                const isSelected = r.id === selectedRestaurantId;
                const carKm = (carProgress / 100) * 960;
                const rStatus = getSimulatedSyncStatus(r);
                
                return (
                  <button
                    key={r.id}
                    onClick={() => setSelectedRestaurantId(r.id)}
                    className="absolute z-30 transition-transform duration-300 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${r.x}%`,
                      // Map percentage along custom spline (rough mapping)
                      top: `${r.y}%`
                    }}
                  >
                    <div className="relative group flex flex-col items-center">
                      {/* Ripple ring for active/closest stop */}
                      {isSelected && (
                        <span className="absolute w-12 h-12 -top-2 bg-primary/20 rounded-full animate-pulse-slow" />
                      )}
                      
                      {/* Standard Pin */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center border border-white/20 transition-all ${
                        isSelected 
                          ? 'bg-primary text-white scale-110 shadow-lg shadow-primary/40' 
                          : 'bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700'
                      }`}>
                        <ChefHat className="w-4 h-4" />
                      </div>

                      {/* Tooltip Name badge */}
                      <div className={`absolute -top-7 px-2 py-0.5 rounded text-[9px] font-bold whitespace-nowrap shadow-md border transition-all ${
                        isSelected 
                          ? 'bg-primary text-white border-primary' 
                          : 'bg-slate-900 text-gray-400 border-slate-800 group-hover:text-white'
                      }`}>
                        {r.name.split(' ').slice(0, 2).join(' ')}
                      </div>
                    </div>
                  </button>
                );
              })}

              {/* Moving Car Icon along route SVG curve */}
              <div
                className="absolute z-40 w-10 h-10 rounded-full bg-white text-slate-950 flex items-center justify-center shadow-2xl border-2 border-primary transition-all duration-100 -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${carProgress}%`,
                  // Approximating position along curve path for visual alignment
                  top: `${
                    carProgress < 30
                      ? 160 - carProgress * 1.5
                      : carProgress < 50
                      ? 115 + (carProgress - 30) * 4
                      : carProgress < 75
                      ? 195 - (carProgress - 50) * 3.8
                      : 100 + (carProgress - 75) * 2.8
                  }%`
                }}
              >
                <span className="text-lg animate-bounce">🚗</span>
                <span className="absolute inset-0 rounded-full border border-primary animate-ping opacity-45" />
              </div>

            </div>

            {/* Map Sync Controller Info Box (HUD Footer) */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-primary rounded-full animate-ping" />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-sm text-gray-100 flex items-center gap-1.5">
                    {selectedRest.name}
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-gray-300 font-mono font-medium">
                      NH19 Bypass
                    </span>
                  </h4>
                  <p className="text-xs text-gray-400 mt-0.5 font-sans">
                    {syncStatus.desc}
                  </p>
                </div>
              </div>

              <div className={`px-4 py-2 rounded-xl border text-xs font-mono font-bold flex items-center gap-2 ${syncStatus.color}`}>
                <span className={`w-2 h-2 rounded-full ${syncStatus.badge}`} />
                <span>{syncStatus.label}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Restaurant Panel (4 Columns) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-gray-100 shadow-xl flex flex-col justify-between">
            <div>
              {/* Card Image */}
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-gray-100">
                <img 
                  src={selectedRest.image} 
                  alt={selectedRest.name} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-brand-dark text-[10px] font-bold font-mono shadow-sm flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span>{selectedRest.rating} ({selectedRest.reviewsCount} reviews)</span>
                </span>
                
                <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-brand-dark text-white text-[10px] font-bold font-mono shadow-sm">
                  {selectedRest.foodType}
                </span>
              </div>

              {/* Title & Amenities */}
              <h3 className="font-poppins font-bold text-xl text-brand-dark mb-1">
                {selectedRest.name}
              </h3>
              <p className="text-xs text-gray-400 font-mono flex items-center gap-2 mb-4">
                <span>Distance: {selectedRest.distance} km</span>
                <span>•</span>
                <span>Prep: {selectedRest.prepTime} mins</span>
              </p>

              {/* Signature Dishes List */}
              <div className="mb-6">
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider block mb-2 font-poppins">
                  Popular Pre-orders
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedRest.signatureDishes.map((dish) => (
                    <span 
                      key={dish}
                      className="text-xs px-3 py-1.5 rounded-xl bg-gray-50 text-gray-600 border border-gray-100 hover:border-primary/20 hover:bg-orange-50/20 transition-colors"
                    >
                      {dish}
                    </span>
                  ))}
                </div>
              </div>

              {/* Infrastructure details */}
              <div className="border-t border-gray-100 pt-4 mb-6">
                <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider block mb-3 font-poppins">
                  Amenities Available
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <div className={`p-2 rounded-xl border text-center ${selectedRest.hasEVCharging ? 'border-green-100 bg-green-50/40 text-green-700' : 'border-gray-100 text-gray-400'}`}>
                    <span className="text-xs font-bold font-poppins block">EV Charge</span>
                    <span className="text-[9px] block mt-0.5">{selectedRest.hasEVCharging ? 'Available' : 'No'}</span>
                  </div>
                  <div className="p-2 rounded-xl border border-blue-100 bg-blue-50/40 text-blue-700 text-center">
                    <span className="text-xs font-bold font-poppins block">Washrooms</span>
                    <span className="text-[9px] block mt-0.5">Premium</span>
                  </div>
                  <div className="p-2 rounded-xl border border-orange-100 bg-orange-50/40 text-orange-700 text-center">
                    <span className="text-xs font-bold font-poppins block">Parking</span>
                    <span className="text-[9px] block mt-0.5">Secure</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action booking triggers */}
            <div>
              {bookingConfirmed === selectedRest.id ? (
                <div className="w-full bg-secondary text-white py-4 px-6 rounded-2xl flex items-center justify-center gap-2 font-poppins font-bold text-sm shadow-md animate-in zoom-in duration-200">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Table & Meal Pre-Booked!</span>
                </div>
              ) : (
                <button
                  onClick={() => handleReserve(selectedRest.id)}
                  className="w-full bg-brand-dark hover:bg-gray-800 text-white font-semibold py-4 px-6 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 font-poppins text-sm cursor-pointer"
                >
                  <ChefHat className="w-4 h-4 text-primary" />
                  <span>Pre-Book Table & Meal</span>
                </button>
              )}
              <span className="text-[10px] text-gray-400 text-center block mt-3 font-mono">
                No payment cancellation fee. Refundable up to 30 mins before arrival.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
