import { motion } from 'motion/react';
import { Trophy, Users, History, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <div className="mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black tracking-tighter uppercase italic mb-8"
          >
            Our <span className="text-orange-500">Legacy</span>
          </motion.h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              Founded in 1998, AutoVault has grown from a boutique showroom to a global leader in premium vehicle acquisition. We don't just sell cars; we curate experiences for the most discerning automotive enthusiasts.
            </p>
            <div className="aspect-video overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1562141989-c5c79ac8f576?auto=format&fit=crop&q=80&w=1000"
                alt="Showroom"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          <div className="text-center p-8 bg-zinc-950 border border-white/5">
            <Trophy className="w-8 h-8 text-orange-500 mx-auto mb-4" />
            <div className="text-4xl font-black mb-1">25+</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-500">Years Excellence</div>
          </div>
          <div className="text-center p-8 bg-zinc-950 border border-white/5">
            <Users className="w-8 h-8 text-orange-500 mx-auto mb-4" />
            <div className="text-4xl font-black mb-1">10k+</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-500">Happy Clients</div>
          </div>
          <div className="text-center p-8 bg-zinc-950 border border-white/5">
            <History className="w-8 h-8 text-orange-500 mx-auto mb-4" />
            <div className="text-4xl font-black mb-1">500+</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-500">Monthly Sales</div>
          </div>
          <div className="text-center p-8 bg-zinc-950 border border-white/5">
            <Globe className="w-8 h-8 text-orange-500 mx-auto mb-4" />
            <div className="text-4xl font-black mb-1">12</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-500">Global Locations</div>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-zinc-900 p-12 md:p-24 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[100px]" />
          <div className="relative z-10 max-w-3xl">
            <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Our Mission</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic mb-8">
              Redefining the <span className="text-zinc-700">Standard</span> of Luxury
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our mission is to provide an unparalleled level of service and transparency in the luxury automotive market. We believe that every client deserves a tailored experience that matches the precision of the vehicles we represent.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-px bg-orange-500" />
              <span className="text-sm font-bold uppercase tracking-widest italic">The AutoVault Team</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
