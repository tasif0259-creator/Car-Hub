import { motion } from 'motion/react';
import { ShieldCheck, CreditCard, Truck } from 'lucide-react';

export default function Checkout() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen text-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-black tracking-tighter uppercase mb-4">Checkout</h1>
          <div className="flex items-center justify-center space-x-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            <span className="text-zinc-900">Information</span>
            <div className="w-8 h-px bg-zinc-200" />
            <span>Shipping</span>
            <div className="w-8 h-px bg-zinc-200" />
            <span>Payment</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Form */}
          <div className="space-y-12">
            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest mb-6 flex items-center">
                Contact Information <div className="ml-4 h-px flex-1 bg-zinc-100" />
              </h2>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-zinc-200 py-3 text-sm focus:outline-none focus:border-zinc-900 transition-colors"
              />
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-widest mb-6 flex items-center">
                Shipping Address <div className="ml-4 h-px flex-1 bg-zinc-100" />
              </h2>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full bg-transparent border-b border-zinc-200 py-3 text-sm focus:outline-none focus:border-zinc-900 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-transparent border-b border-zinc-200 py-3 text-sm focus:outline-none focus:border-zinc-900 transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Address"
                className="w-full bg-transparent border-b border-zinc-200 py-3 text-sm focus:outline-none focus:border-zinc-900 transition-colors mb-6"
              />
              <div className="grid grid-cols-3 gap-6">
                <input
                  type="text"
                  placeholder="City"
                  className="w-full bg-transparent border-b border-zinc-200 py-3 text-sm focus:outline-none focus:border-zinc-900 transition-colors"
                />
                <input
                  type="text"
                  placeholder="State"
                  className="w-full bg-transparent border-b border-zinc-200 py-3 text-sm focus:outline-none focus:border-zinc-900 transition-colors"
                />
                <input
                  type="text"
                  placeholder="ZIP Code"
                  className="w-full bg-transparent border-b border-zinc-200 py-3 text-sm focus:outline-none focus:border-zinc-900 transition-colors"
                />
              </div>
            </section>

            <button className="w-full py-5 bg-zinc-900 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all">
              Continue to Shipping
            </button>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-12">
            <div className="bg-zinc-50 p-8 space-y-8">
              <div className="flex items-start space-x-4">
                <Truck className="w-5 h-5 text-zinc-400" />
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1">Fast Delivery</h4>
                  <p className="text-xs text-zinc-500 font-light">Free express shipping on orders over $200.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CreditCard className="w-5 h-5 text-zinc-400" />
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1">Secure Payment</h4>
                  <p className="text-xs text-zinc-500 font-light">All transactions are encrypted and secure.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <ShieldCheck className="w-5 h-5 text-zinc-400" />
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest mb-1">Quality Guarantee</h4>
                  <p className="text-xs text-zinc-500 font-light">30-day returns on all unworn items.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
