import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen text-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <div className="mb-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-black tracking-tighter uppercase mb-12 leading-[0.85]"
          >
            The <br /> <span className="italic font-light">Philosophy</span>
          </motion.h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <p className="text-xl text-zinc-500 font-light leading-relaxed">
                VOGUE was founded on the principle that quality should never be compromised. We believe in creating pieces that transcend seasons, focusing on meticulous craftsmanship and sustainable materials.
              </p>
              <p className="text-zinc-400 leading-relaxed font-light">
                Our journey began in a small studio in Paris, driven by a passion for tailoring and a vision for a more conscious fashion industry. Today, we continue that legacy by partnering with the world's finest mills and artisans.
              </p>
            </div>
            <div className="aspect-[4/5] overflow-hidden bg-zinc-100">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000"
                alt="Our Studio"
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32">
          <div className="space-y-4">
            <span className="text-zinc-300 text-4xl font-black">01</span>
            <h3 className="text-xs font-bold uppercase tracking-widest">Sustainability</h3>
            <p className="text-zinc-500 text-sm font-light leading-relaxed">
              We use 100% organic cotton and recycled materials in our core collections, reducing our environmental footprint.
            </p>
          </div>
          <div className="space-y-4">
            <span className="text-zinc-300 text-4xl font-black">02</span>
            <h3 className="text-xs font-bold uppercase tracking-widest">Craftsmanship</h3>
            <p className="text-zinc-500 text-sm font-light leading-relaxed">
              Every garment is constructed with reinforced seams and premium hardware to ensure longevity and durability.
            </p>
          </div>
          <div className="space-y-4">
            <span className="text-zinc-300 text-4xl font-black">03</span>
            <h3 className="text-xs font-bold uppercase tracking-widest">Transparency</h3>
            <p className="text-zinc-500 text-sm font-light leading-relaxed">
              We maintain direct relationships with our factories, ensuring fair wages and safe working conditions for all.
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center max-w-3xl mx-auto py-24 border-y border-zinc-100">
          <h2 className="text-3xl md:text-5xl font-light italic text-zinc-400 leading-tight mb-8">
            "Style is a way to say who you are without having to speak."
          </h2>
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-900">— Rachel Zoe</span>
        </div>
      </div>
    </div>
  );
}
