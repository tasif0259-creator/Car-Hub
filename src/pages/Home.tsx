import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Zap, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070"
            alt="Hero Car"
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase italic mb-6">
              Precision <span className="text-orange-500">Engineered</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 font-light tracking-wide">
              Discover the ultimate collection of premium vehicles. Performance, luxury, and innovation redefined.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/cars"
                className="px-10 py-4 bg-orange-500 text-black font-bold uppercase tracking-widest hover:bg-orange-600 transition-all flex items-center group"
              >
                View Inventory
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-10 py-4 border border-white/20 hover:bg-white/10 transition-all font-bold uppercase tracking-widest"
              >
                Book a Test Drive
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-orange-500 to-transparent" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-orange-500/10 flex items-center justify-center rounded-lg">
                <Shield className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight">Certified Quality</h3>
              <p className="text-gray-500 leading-relaxed">
                Every vehicle in our inventory undergoes a rigorous 200-point inspection by master technicians.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-orange-500/10 flex items-center justify-center rounded-lg">
                <Zap className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight">Instant Financing</h3>
              <p className="text-gray-500 leading-relaxed">
                Get pre-approved in minutes with our competitive rates and flexible financing options.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-orange-500/10 flex items-center justify-center rounded-lg">
                <Star className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight">Premium Service</h3>
              <p className="text-gray-500 leading-relaxed">
                Experience white-glove delivery and lifetime maintenance support for your new vehicle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Inventory Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-orange-500 text-sm font-bold uppercase tracking-[0.3em] mb-2 block">Our Selection</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">Featured <span className="text-zinc-800">Cars</span></h2>
            </div>
            <Link to="/cars" className="hidden md:flex items-center text-gray-400 hover:text-white transition-colors uppercase tracking-widest text-sm font-bold">
              View All Inventory <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group relative overflow-hidden bg-zinc-900 border border-white/5">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/car${i}/800/500`}
                    alt="Featured Car"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold uppercase tracking-tight">Premium Model {i}</h4>
                      <p className="text-gray-500 text-sm">2024 • Automatic • 0 miles</p>
                    </div>
                    <span className="text-orange-500 font-bold">$120,000</span>
                  </div>
                  <Link to="/cars" className="w-full py-3 border border-white/10 hover:border-orange-500 hover:bg-orange-500 hover:text-black transition-all text-center block font-bold uppercase tracking-widest text-xs">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
