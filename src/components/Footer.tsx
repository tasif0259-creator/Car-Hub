import { Link } from 'react-router-dom';
import { Car, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Car className="w-8 h-8 text-orange-500" />
              <span className="text-2xl font-bold tracking-tighter text-white uppercase italic">AutoVault</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              The world's premier destination for high-performance and luxury vehicles. Excellence in every detail.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 text-gray-500 hover:text-orange-500 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-500 hover:text-orange-500 cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-gray-500 hover:text-orange-500 cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-gray-500 hover:text-orange-500 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/cars" className="hover:text-white transition-colors">Inventory</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Categories</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="hover:text-white transition-colors cursor-pointer">Sports Cars</li>
              <li className="hover:text-white transition-colors cursor-pointer">Luxury Sedans</li>
              <li className="hover:text-white transition-colors cursor-pointer">Performance SUVs</li>
              <li className="hover:text-white transition-colors cursor-pointer">Electric Vehicles</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-4">Subscribe to get the latest inventory updates.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-zinc-900 border border-white/10 px-4 py-2 text-sm focus:outline-none focus:border-orange-500 flex-1"
              />
              <button className="bg-orange-500 text-black px-4 font-bold text-xs uppercase tracking-widest">Join</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">
          <p>© 2024 AutoVault. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
