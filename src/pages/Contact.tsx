import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen text-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-24">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase mb-8 leading-[0.85]">
            Contact <br /> <span className="italic font-light text-zinc-300">Us</span>
          </h1>
          <p className="text-zinc-500 max-w-xl font-light text-lg">
            Whether you have a question about sizing, shipping, or just want to say hello, our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Info */}
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Customer Care</h3>
                <p className="text-sm font-medium">support@vogue.com</p>
                <p className="text-sm font-medium">+33 (0) 1 23 45 67 89</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Press & Media</h3>
                <p className="text-sm font-medium">press@vogue.com</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Wholesale</h3>
                <p className="text-sm font-medium">wholesale@vogue.com</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Social</h3>
                <div className="flex space-x-4">
                  <Instagram className="w-5 h-5 cursor-pointer hover:text-zinc-400 transition-colors" />
                  <Twitter className="w-5 h-5 cursor-pointer hover:text-zinc-400 transition-colors" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Flagship Store</h3>
              <p className="text-sm font-medium leading-relaxed">
                22 Avenue Montaigne<br />
                75008 Paris, France
              </p>
              <p className="text-xs text-zinc-400 font-light">Mon - Sat: 10am - 7pm</p>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-zinc-50 p-10"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest">Name</label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-zinc-200 py-3 text-sm focus:outline-none focus:border-zinc-900 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest">Email</label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-zinc-200 py-3 text-sm focus:outline-none focus:border-zinc-900 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-zinc-200 py-3 text-sm focus:outline-none focus:border-zinc-900 transition-colors resize-none"
                  placeholder="How can we help?"
                />
              </div>
              <button className="w-full py-5 bg-zinc-900 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
