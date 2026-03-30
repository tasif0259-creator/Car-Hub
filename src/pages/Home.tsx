import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ShoppingBag, Globe, ShieldCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white text-zinc-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2070"
            alt="Fashion Hero"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <span className="text-white text-xs font-bold uppercase tracking-[0.4em] mb-4 block">New Collection 2024</span>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white uppercase leading-[0.85] mb-8">
              Modern <br /> <span className="italic font-light">Elegance</span>
            </h1>
            <p className="text-lg text-white/80 mb-10 font-light max-w-md">
              Curated essentials for the modern wardrobe. Timeless silhouettes meet contemporary craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="px-12 py-5 bg-white text-zinc-900 font-bold uppercase tracking-widest hover:bg-zinc-100 transition-all flex items-center justify-center group"
              >
                Shop Collection
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Vertical Text */}
        <div className="absolute right-10 bottom-10 hidden lg:block">
          <span className="writing-mode-vertical text-[10px] font-bold uppercase tracking-[0.5em] text-white/50 rotate-180">
            Est. 1998 — Paris / London / New York
          </span>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Link to="/shop" className="group relative aspect-[3/4] overflow-hidden bg-zinc-100">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800"
              alt="Essentials"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            <div className="absolute bottom-10 left-10">
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Essentials</h3>
              <span className="text-white/70 text-[10px] font-bold uppercase tracking-widest flex items-center mt-2">
                Explore <ArrowRight className="ml-2 w-3 h-3" />
              </span>
            </div>
          </Link>

          <Link to="/shop" className="group relative aspect-[3/4] overflow-hidden bg-zinc-100 md:translate-y-12">
            <img
              src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800"
              alt="Outerwear"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            <div className="absolute bottom-10 left-10">
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Outerwear</h3>
              <span className="text-white/70 text-[10px] font-bold uppercase tracking-widest flex items-center mt-2">
                Explore <ArrowRight className="ml-2 w-3 h-3" />
              </span>
            </div>
          </Link>

          <Link to="/shop" className="group relative aspect-[3/4] overflow-hidden bg-zinc-100">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800"
              alt="Accessories"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            <div className="absolute bottom-10 left-10">
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Accessories</h3>
              <span className="text-white/70 text-[10px] font-bold uppercase tracking-widest flex items-center mt-2">
                Explore <ArrowRight className="ml-2 w-3 h-3" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center space-y-4">
              <Globe className="w-8 h-8 mx-auto text-zinc-400" />
              <h4 className="text-xs font-bold uppercase tracking-widest">Global Shipping</h4>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">
                Premium worldwide delivery with real-time tracking and carbon-neutral logistics.
              </p>
            </div>
            <div className="text-center space-y-4">
              <ShoppingBag className="w-8 h-8 mx-auto text-zinc-400" />
              <h4 className="text-xs font-bold uppercase tracking-widest">Curated Quality</h4>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">
                Each piece is meticulously selected for its craftsmanship, material, and timeless design.
              </p>
            </div>
            <div className="text-center space-y-4">
              <ShieldCheck className="w-8 h-8 mx-auto text-zinc-400" />
              <h4 className="text-xs font-bold uppercase tracking-widest">Secure Payments</h4>
              <p className="text-zinc-500 text-sm font-light leading-relaxed">
                Industry-standard encryption ensuring your transactions and data are always protected.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
