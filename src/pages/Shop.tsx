import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PRODUCTS } from '../data';
import { Search, Filter } from 'lucide-react';

export default function Shop() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const categories = ['All', 'Essentials', 'Outerwear', 'Accessories', 'Footwear'];

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = filter === 'All' || product.category === filter;
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen text-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4">
            Shop <span className="italic font-light">All</span>
          </h1>
          <div className="w-20 h-1 bg-zinc-900 mx-auto" />
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16 items-center justify-between border-b border-zinc-100 pb-8">
          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative pb-1 ${
                  filter === cat
                    ? 'text-zinc-900 border-b-2 border-zinc-900'
                    : 'text-zinc-400 hover:text-zinc-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-80">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent border-b border-zinc-200 px-8 py-2 text-sm focus:outline-none focus:border-zinc-900 transition-colors"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="aspect-[4/5] overflow-hidden bg-zinc-100 mb-6 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                  <button className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%] py-4 bg-white text-zinc-900 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Quick View
                  </button>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">
                    {product.category}
                  </span>
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm font-bold uppercase tracking-tight text-zinc-900">
                      {product.name}
                    </h3>
                    <span className="text-sm font-medium text-zinc-500">${product.price}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-32 text-center">
            <p className="text-zinc-400 uppercase tracking-widest text-xs">No products found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
