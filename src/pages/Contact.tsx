import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 bg-black min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase italic mb-4">
            Get in <span className="text-orange-500">Touch</span>
          </h1>
          <p className="text-gray-500 max-w-2xl font-light">
            Have questions about a specific vehicle or want to schedule a private viewing? Our team of specialists is here to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold uppercase tracking-widest mb-2">Main Showroom</h3>
                <p className="text-gray-500 leading-relaxed">
                  123 Luxury Drive, Beverly Hills<br />
                  California, CA 90210
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold uppercase tracking-widest mb-2">Phone</h3>
                <p className="text-gray-500 leading-relaxed">
                  Sales: +1 (555) 123-4567<br />
                  Service: +1 (555) 987-6543
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold uppercase tracking-widest mb-2">Email</h3>
                <p className="text-gray-500 leading-relaxed">
                  inquiries@autovault.com<br />
                  support@autovault.com
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video bg-zinc-900 border border-white/10 relative overflow-hidden grayscale">
              <img
                src="https://picsum.photos/seed/map/800/450"
                alt="Map"
                className="w-full h-full object-cover opacity-30"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-500">Interactive Map Loading...</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-zinc-950 border border-white/5 p-8 md:p-12"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-zinc-900 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-zinc-900 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Subject</label>
                <select className="w-full bg-zinc-900 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors appearance-none">
                  <option>General Inquiry</option>
                  <option>Schedule Test Drive</option>
                  <option>Financing Options</option>
                  <option>Sell Your Vehicle</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Message</label>
                <textarea
                  rows={6}
                  className="w-full bg-zinc-900 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button className="w-full py-4 bg-orange-500 text-black font-black uppercase tracking-[0.2em] hover:bg-orange-600 transition-all flex items-center justify-center">
                Send Message <Send className="ml-2 w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
