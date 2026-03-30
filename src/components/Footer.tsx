import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-black tracking-[0.3em] text-zinc-900 uppercase">VOGUE</span>
            </Link>
            <p className="text-zinc-400 text-xs font-light leading-relaxed max-w-xs">
              Modern essentials for the conscious wardrobe. Designed in Paris, crafted with integrity.
            </p>
            <div className="flex space-x-6">
              <Instagram className="w-4 h-4 text-zinc-400 hover:text-zinc-900 cursor-pointer transition-colors" />
              <Twitter className="w-4 h-4 text-zinc-400 hover:text-zinc-900 cursor-pointer transition-colors" />
              <Facebook className="w-4 h-4 text-zinc-400 hover:text-zinc-900 cursor-pointer transition-colors" />
              <Youtube className="w-4 h-4 text-zinc-400 hover:text-zinc-900 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Shop</h4>
            <ul className="space-y-4 text-[11px] font-medium text-zinc-400 uppercase tracking-widest">
              <li><Link to="/shop" className="hover:text-zinc-900 transition-colors">All Collections</Link></li>
              <li><Link to="/shop" className="hover:text-zinc-900 transition-colors">Essentials</Link></li>
              <li><Link to="/shop" className="hover:text-zinc-900 transition-colors">Outerwear</Link></li>
              <li><Link to="/shop" className="hover:text-zinc-900 transition-colors">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Company</h4>
            <ul className="space-y-4 text-[11px] font-medium text-zinc-400 uppercase tracking-widest">
              <li><Link to="/about" className="hover:text-zinc-900 transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-zinc-900 transition-colors">Contact</Link></li>
              <li><span className="hover:text-zinc-900 transition-colors cursor-pointer">Sustainability</span></li>
              <li><span className="hover:text-zinc-900 transition-colors cursor-pointer">Careers</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Support</h4>
            <ul className="space-y-4 text-[11px] font-medium text-zinc-400 uppercase tracking-widest">
              <li><span className="hover:text-zinc-900 transition-colors cursor-pointer">Shipping & Returns</span></li>
              <li><span className="hover:text-zinc-900 transition-colors cursor-pointer">Size Guide</span></li>
              <li><span className="hover:text-zinc-900 transition-colors cursor-pointer">FAQs</span></li>
              <li><span className="hover:text-zinc-900 transition-colors cursor-pointer">Privacy Policy</span></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-zinc-100 text-[9px] font-bold uppercase tracking-[0.4em] text-zinc-300">
          <p>© 2024 VOGUE. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <span>Paris</span>
            <span>London</span>
            <span>New York</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
