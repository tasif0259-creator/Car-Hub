import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CARS } from '../data';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function Inventory() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const categories = ['All', 'Sedan', 'SUV', 'Sports', 'Luxury', 'Electric'];

  const filteredCars = CARS.filter(car => {
    const matchesCategory = filter === 'All' || car.category === filter;
    const matchesSearch = car.make.toLowerCase().includes(search.toLowerCase()) ||
                         car.model.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 bg-black min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-4">
            Our <span className="text-orange-500">Inventory</span>
          </h1>
          <p className="text-gray-500 max-w-2xl font-light">
            Browse our curated selection of high-performance and luxury vehicles. Each car is meticulously inspected and ready for the road.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12 items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all border ${
                  filter === cat
                    ? 'bg-orange-500 border-orange-500 text-black'
                    : 'border-white/10 text-gray-400 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search make or model..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-zinc-900 border border-white/10 px-12 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-zinc-950 border border-white/5 overflow-hidden hover:border-orange-500/50 transition-all"
            >
              <Link to={`/cars/${car.id}`} className="block">
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-white/10">
                    {car.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold uppercase tracking-tight">
                      {car.make} <span className="text-orange-500">{car.model}</span>
                    </h3>
                    <span className="text-lg font-black">${car.price.toLocaleString()}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-[10px] uppercase tracking-widest text-gray-500">
                      <span className="block text-white font-bold mb-1">{car.year}</span>
                      Model Year
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-500">
                      <span className="block text-white font-bold mb-1">{car.specs.horsepower} HP</span>
                      Performance
                    </div>
                  </div>
                  <div className="w-full py-3 bg-white/5 group-hover:bg-orange-500 group-hover:text-black transition-all text-center font-bold uppercase tracking-widest text-xs">
                    View Details
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredCars.length === 0 && (
          <div className="py-24 text-center">
            <p className="text-gray-500 uppercase tracking-widest text-sm">No vehicles found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
