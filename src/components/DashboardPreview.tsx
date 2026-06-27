import { useState, useEffect } from 'react';
import { ChefHat, Clock, Users, ArrowRight, TrendingUp, AlertCircle, ShoppingBag, Utensils, CheckCircle, Navigation } from 'lucide-react';
import { Order } from '../types';

export default function DashboardPreview() {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 'ord-101',
      travelerName: 'Amit Sharma',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
      vehicleNo: 'UP-16-BD-8902 (Tata Safari)',
      items: ['2x Special Amritsari Kulcha', '1x Kesar Lassi', '1x Sweet Lassi'],
      eta: 12, // minutes
      tableNo: 'Table #08',
      status: 'Queued',
      countdown: 720, // 12 mins in seconds
      timeOrdered: '22:04',
      totalAmount: 480,
    },
    {
      id: 'ord-102',
      travelerName: 'Priya Patel & Family',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
      vehicleNo: 'DL-03-CB-4491 (Maruti Brezza)',
      items: ['2x Deluxe Veg Thali', '1x Butter Naan', '1x Dal Makhani'],
      eta: 34,
      tableNo: 'Table #14',
      status: 'Queued',
      countdown: 2040,
      timeOrdered: '21:55',
      totalAmount: 640,
    },
    {
      id: 'ord-103',
      travelerName: 'Vikram Singh (Solo)',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100',
      vehicleNo: 'HR-26-Z-1102 (Honda Civic)',
      items: ['1x Highway Chicken Curry', '2x Laccha Paratha'],
      eta: 3,
      tableNo: 'Table #03',
      status: 'Preparing',
      countdown: 180, // 3 mins in seconds
      timeOrdered: '22:11',
      totalAmount: 390,
    }
  ]);

  const [revenue, setRevenue] = useState(14580);
  const [activeTables, setActiveTables] = useState(18);

  // Active kitchen countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setOrders((prevOrders) =>
        prevOrders.map((order) => {
          if (order.status === 'Preparing' && order.countdown > 0) {
            const nextCountdown = order.countdown - 1;
            const nextEta = Math.ceil(nextCountdown / 60);
            return {
              ...order,
              countdown: nextCountdown,
              eta: nextEta,
              status: nextCountdown <= 0 ? 'Ready' : 'Preparing'
            };
          }
          // Slow down ETA countdown for other orders for visual effect
          if (order.status === 'Queued' && Math.random() > 0.8) {
            const nextEta = Math.max(1, order.eta - 1);
            return {
              ...order,
              eta: nextEta,
              countdown: nextEta * 60
            };
          }
          return order;
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePrepareNow = (id: string) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => {
        if (order.id === id) {
          return {
            ...order,
            status: 'Preparing',
            // Set preparation duration based on dishes
            countdown: 180, // 3 minutes mock prep
            eta: 3
          };
        }
        return order;
      })
    );
  };

  const handleCompleteOrder = (id: string) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => {
        if (order.id === id) {
          setRevenue((prev) => prev + order.totalAmount);
          setActiveTables((prev) => Math.max(0, prev - 1));
          return {
            ...order,
            status: 'Completed'
          };
        }
        return order;
      })
    );
  };

  return (
    <section id="dashboard-preview" className="py-24 bg-white relative overflow-hidden">
      {/* Dynamic background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <ChefHat className="w-3.5 h-3.5" />
            <span>KITCHEN MANAGEMENT OS</span>
          </div>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-brand-dark tracking-tight">
            Designed for High-Velocity Dhabas
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 font-sans max-w-2xl mx-auto">
            Our specialized Restaurant Dashboard manages incoming highway orders, predicts food prep starts based on live traffic, and automates seat allocations.
          </p>
        </div>

        {/* Dashboard Frame Mockup */}
        <div className="bg-gray-900 rounded-3xl p-4 sm:p-6 shadow-2xl border border-gray-800 text-gray-100 max-w-6xl mx-auto relative overflow-hidden">
          {/* Header OS Control Buttons */}
          <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500 block" />
              <span className="w-3 h-3 rounded-full bg-green-500 block" />
              <span className="text-xs text-gray-500 font-mono ml-4">Arrivo OS v2.4 (Active)</span>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 text-secondary font-mono border border-emerald-500/20 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
                <span>GPS SYNC: ONLINE</span>
              </span>
              <span className="text-xs text-gray-400 font-poppins font-medium">Sukhdev Dhaba (Murthal Bypass)</span>
            </div>
          </div>

          {/* Core Analytics HUD */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-800/50 p-4 rounded-2xl border border-gray-800">
              <div className="flex items-center justify-between text-gray-400 mb-1">
                <span className="text-xs font-poppins font-medium">Today's Revenue</span>
                <TrendingUp className="w-4 h-4 text-secondary" />
              </div>
              <span className="text-xl sm:text-2xl font-bold font-poppins text-white">
                ₹{(revenue).toLocaleString('en-IN')}
              </span>
              <span className="text-[10px] text-secondary font-mono block mt-0.5">+14% vs yesterday</span>
            </div>

            <div className="bg-gray-800/50 p-4 rounded-2xl border border-gray-800">
              <div className="flex items-center justify-between text-gray-400 mb-1">
                <span className="text-xs font-poppins font-medium">Active Bookings</span>
                <Users className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xl sm:text-2xl font-bold font-poppins text-white">
                {orders.filter(o => o.status !== 'Completed').length} Orders
              </span>
              <span className="text-[10px] text-gray-400 font-mono block mt-0.5">3 incoming in next 30m</span>
            </div>

            <div className="bg-gray-800/50 p-4 rounded-2xl border border-gray-800">
              <div className="flex items-center justify-between text-gray-400 mb-1">
                <span className="text-xs font-poppins font-medium">Tables Reserved</span>
                <Utensils className="w-4 h-4 text-blue-400" />
              </div>
              <span className="text-xl sm:text-2xl font-bold font-poppins text-white">
                {activeTables} / 32
              </span>
              <span className="text-[10px] text-blue-400 font-mono block mt-0.5">14 tables empty</span>
            </div>

            <div className="bg-gray-800/50 p-4 rounded-2xl border border-gray-800">
              <div className="flex items-center justify-between text-gray-400 mb-1">
                <span className="text-xs font-poppins font-medium">Waste Saved</span>
                <ShoppingBag className="w-4 h-4 text-purple-400" />
              </div>
              <span className="text-xl sm:text-2xl font-bold font-poppins text-white">
                12.4 kg
              </span>
              <span className="text-[10px] text-purple-400 font-mono block mt-0.5">94% efficiency thali prep</span>
            </div>
          </div>

          {/* Main Dashboard Workspace */}
          <div className="grid lg:grid-cols-12 gap-6">
            
            {/* Left Box: Incoming Orders Live Queue (8 Columns) */}
            <div className="lg:col-span-8 bg-gray-800/30 rounded-2xl border border-gray-800/80 p-4 sm:p-5">
              <div className="flex items-center justify-between mb-4 border-b border-gray-800 pb-3">
                <h3 className="font-poppins font-bold text-sm text-gray-200 flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-primary" />
                  <span>Incoming Highway Queue</span>
                </h3>
                <span className="text-xs font-mono text-gray-400">
                  Auto-Sorted by traveler ETA
                </span>
              </div>

              {/* Order Cards List */}
              <div className="space-y-4">
                {orders.filter(o => o.status !== 'Completed').map((order) => (
                  <div 
                    key={order.id} 
                    className="p-4 rounded-xl bg-gray-800/40 border border-gray-800 hover:border-gray-700/60 transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                  >
                    
                    {/* User and Order Info */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-gray-700">
                        <img 
                          src={order.avatar} 
                          alt={order.travelerName} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-poppins font-bold text-sm text-white">{order.travelerName}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-700 text-gray-300 font-mono font-medium">
                            {order.tableNo}
                          </span>
                        </div>
                        <span className="text-[10px] text-gray-400 font-mono block mt-0.5">
                          🚘 {order.vehicleNo}
                        </span>
                        
                        {/* Items ordered list */}
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {order.items.map((item, i) => (
                            <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-gray-900 text-gray-300 border border-gray-800 font-sans">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* ETA Countdown HUD */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-4 sm:gap-2 border-t sm:border-t-0 border-gray-800/80 pt-3 sm:pt-0">
                      <div className="text-left sm:text-right">
                        <span className="text-[9px] text-gray-400 font-mono uppercase block">ETA TO RESTAURANT</span>
                        <div className="flex items-center sm:justify-end gap-1.5 mt-0.5">
                          <Clock className={`w-3.5 h-3.5 ${order.eta <= 15 ? 'text-primary animate-pulse' : 'text-gray-400'}`} />
                          <span className={`text-sm font-bold font-poppins ${order.eta <= 15 ? 'text-primary font-extrabold' : 'text-white'}`}>
                            {order.eta} mins
                          </span>
                        </div>
                      </div>

                      {/* State Action Buttons */}
                      <div className="ml-auto sm:ml-0">
                        {order.status === 'Queued' ? (
                          order.eta <= 15 ? (
                            <button
                              onClick={() => handlePrepareNow(order.id)}
                              className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-hover text-white text-xs font-bold font-poppins transition-all shadow-md shadow-primary/10 flex items-center gap-1 cursor-pointer animate-pulse"
                            >
                              <ChefHat className="w-3.5 h-3.5" />
                              <span>Prepare Now</span>
                            </button>
                          ) : (
                            <div className="px-3 py-1.5 rounded-lg bg-gray-900 border border-gray-800 text-gray-500 text-[10px] font-mono flex items-center gap-1.5">
                              <AlertCircle className="w-3.5 h-3.5 text-gray-600" />
                              <span>Wait for ETA &lt; 15m</span>
                            </div>
                          )
                        ) : order.status === 'Preparing' ? (
                          <div className="flex items-center gap-2">
                            <div className="px-3 py-1.5 rounded-lg bg-orange-500/10 border border-orange-500/20 text-primary text-xs font-bold font-poppins flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                              <span>Preparing...</span>
                            </div>
                            <button
                              onClick={() => handleCompleteOrder(order.id)}
                              className="px-3 py-1.5 rounded-lg bg-gray-700 hover:bg-gray-600 text-white text-xs font-bold font-poppins transition-all cursor-pointer"
                            >
                              Ready & Served
                            </button>
                          </div>
                        ) : (
                          <div className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-secondary text-xs font-bold font-poppins flex items-center gap-1.5 animate-bounce">
                            <CheckCircle className="w-3.5 h-3.5" />
                            <span>Ready on Table #08!</span>
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                ))}

                {orders.filter(o => o.status !== 'Completed').length === 0 && (
                  <div className="py-12 text-center text-gray-500 font-sans">
                    All incoming traveler orders are prepared and served! Click simulated reset.
                  </div>
                )}
              </div>
            </div>

            {/* Right Box: Live Map Radar and Stats (4 Columns) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Table Status Block */}
              <div className="bg-gray-800/30 rounded-2xl border border-gray-800/80 p-5">
                <h3 className="font-poppins font-bold text-sm text-gray-200 mb-4 flex items-center gap-2 border-b border-gray-800 pb-2">
                  <Utensils className="w-4 h-4 text-blue-400" />
                  <span>Table Allocations</span>
                </h3>

                <div className="grid grid-cols-4 gap-2.5">
                  {[...Array(12)].map((_, index) => {
                    // Mock table states
                    const tableNo = index + 1;
                    const isOccupied = tableNo === 3 || tableNo === 8 || tableNo === 5 || tableNo === 9;
                    const isReserved = tableNo === 14 || tableNo === 4;
                    
                    return (
                      <div 
                        key={index} 
                        className={`p-2 rounded-lg text-center border font-mono transition-colors ${
                          isOccupied 
                            ? 'bg-red-500/10 border-red-500/20 text-red-400' 
                            : isReserved 
                            ? 'bg-primary/10 border-primary/20 text-primary animate-pulse' 
                            : 'bg-gray-900 border-gray-800 text-gray-500'
                        }`}
                        title={isOccupied ? 'Occupied' : isReserved ? 'Reserved for approaching traveler' : 'Empty'}
                      >
                        <span className="text-xs font-bold block">T{tableNo}</span>
                        <span className="text-[7px] uppercase tracking-wider block mt-0.5">
                          {isOccupied ? 'BUSY' : isReserved ? 'ETA' : 'FREE'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Live Traveler Radar Tracker */}
              <div className="bg-gray-800/30 rounded-2xl border border-gray-800/80 p-5 flex-grow">
                <h3 className="font-poppins font-bold text-sm text-gray-200 mb-4 flex items-center gap-2 border-b border-gray-800 pb-2">
                  <Navigation className="w-4 h-4 text-secondary animate-pulse" />
                  <span>Live Traveler Radar</span>
                </h3>

                <div className="relative aspect-square rounded-xl bg-slate-950 border border-gray-800 flex items-center justify-center overflow-hidden">
                  {/* Radar rotating sweep line */}
                  <div className="absolute inset-0 border border-gray-800 rounded-full" />
                  <div className="absolute w-[80%] h-[80%] border border-gray-800/60 rounded-full" />
                  <div className="absolute w-[50%] h-[50%] border border-gray-800/40 rounded-full" />
                  <div className="absolute w-[20%] h-[20%] border border-gray-800/20 rounded-full" />
                  
                  {/* Radar sweep */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-emerald-500/10 animate-[spin_5s_linear_infinite]" />

                  {/* Active Dots representing approaching vehicles */}
                  <div className="absolute top-[35%] left-[25%] flex flex-col items-center">
                    <span className="w-2.5 h-2.5 bg-primary rounded-full animate-ping absolute" />
                    <span className="w-2.5 h-2.5 bg-primary rounded-full" />
                    <span className="text-[7px] text-gray-400 font-mono mt-0.5 whitespace-nowrap">UP-16 (12m)</span>
                  </div>

                  <div className="absolute bottom-[25%] right-[25%] flex flex-col items-center">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span className="text-[7px] text-gray-400 font-mono mt-0.5 whitespace-nowrap">DL-03 (34m)</span>
                  </div>

                  <div className="absolute top-[48%] right-[48%] flex flex-col items-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    <span className="text-[7px] text-gray-500 font-mono">Dhaba (Center)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Dashboard CTA */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 font-sans">
            Own a restaurant or dhaba on a national highway? Join our network and secure guaranteed daily bookings.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('benefits');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-4 inline-flex items-center gap-1 px-4 py-2 rounded-full border border-gray-200 hover:border-primary/50 text-gray-700 hover:text-primary text-xs font-semibold cursor-pointer transition-colors bg-white shadow-sm font-poppins"
          >
            <span>Learn about restaurant benefits</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

      </div>
    </section>
  );
}
