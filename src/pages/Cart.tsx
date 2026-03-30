import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight, Trash2, Minus, Plus } from 'lucide-react';

export default function Cart() {
  // Mock cart items
  const cartItems = [
    {
      id: '1',
      name: 'Minimalist Wool Overcoat',
      price: 295,
      size: 'M',
      color: 'Camel',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&q=80&w=200'
    }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 15;
  const total = subtotal + shipping;

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen text-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h1 className="text-5xl font-black tracking-tighter uppercase mb-4">Shopping <span className="italic font-light">Bag</span></h1>
          <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">1 Item in your bag</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-8">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-6 pb-8 border-b border-zinc-100">
                <div className="w-32 aspect-[3/4] bg-zinc-100 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-2">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-sm font-bold uppercase tracking-tight">{item.name}</h3>
                      <span className="text-sm font-medium">${item.price}</span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] text-zinc-400 uppercase tracking-widest">Size: {item.size}</p>
                      <p className="text-[10px] text-zinc-400 uppercase tracking-widest">Color: {item.color}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center border border-zinc-200">
                      <button className="p-2 hover:text-zinc-400 transition-colors"><Minus className="w-3 h-3" /></button>
                      <span className="px-4 text-xs font-bold">{item.quantity}</span>
                      <button className="p-2 hover:text-zinc-400 transition-colors"><Plus className="w-3 h-3" /></button>
                    </div>
                    <button className="text-zinc-400 hover:text-red-500 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            
            <Link to="/shop" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors pt-4">
              <ArrowRight className="w-3 h-3 mr-2 rotate-180" /> Continue Shopping
            </Link>
          </div>

          {/* Summary */}
          <div className="bg-zinc-50 p-8 h-fit">
            <h2 className="text-xs font-bold uppercase tracking-widest mb-8 border-b border-zinc-200 pb-4">Order Summary</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500">Subtotal</span>
                <span className="font-medium">${subtotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500">Shipping</span>
                <span className="font-medium">${shipping}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-500">Estimated Tax</span>
                <span className="font-medium">$0.00</span>
              </div>
            </div>
            <div className="flex justify-between text-lg font-black uppercase tracking-tighter border-t border-zinc-200 pt-6 mb-10">
              <span>Total</span>
              <span>${total}</span>
            </div>
            <Link to="/checkout" className="block w-full py-5 bg-zinc-900 text-white text-center text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
