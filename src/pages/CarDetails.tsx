import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { CARS, Car } from '../data';
import { generateCarDescription } from '../services/geminiService';
import { ChevronLeft, Zap, Gauge, Settings, Fuel, CheckCircle2 } from 'lucide-react';

export default function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState<Car | null>(null);
  const [aiDescription, setAiDescription] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundCar = CARS.find(c => c.id === id);
    if (foundCar) {
      setCar(foundCar);
      generateCarDescription(`${foundCar.year} ${foundCar.make} ${foundCar.model}`).then(desc => {
        setAiDescription(desc);
        setLoading(false);
      });
    }
  }, [id]);

  if (!car) return <div className="pt-32 text-center text-white">Car not found</div>;

  return (
    <div className="pt-20 bg-black min-h-screen text-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link to="/cars" className="inline-flex items-center text-gray-500 hover:text-orange-500 transition-colors uppercase tracking-widest text-xs font-bold">
          <ChevronLeft className="w-4 h-4 mr-1" /> Back to Inventory
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="aspect-[16/10] overflow-hidden border border-white/10">
              <img
                src={car.image}
                alt={car.model}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="aspect-square overflow-hidden border border-white/10 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                  <img
                    src={`https://picsum.photos/seed/car-detail-${i}/400/400`}
                    alt="Detail"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Details Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-8">
              <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs mb-2 block">
                {car.year} {car.category}
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-4">
                {car.make} <span className="text-zinc-800">{car.model}</span>
              </h1>
              <div className="text-4xl font-black text-orange-500 mb-6">
                ${car.price.toLocaleString()}
              </div>
              <div className="p-6 bg-zinc-900 border-l-4 border-orange-500 italic text-gray-300 leading-relaxed">
                {loading ? (
                  <div className="animate-pulse flex space-x-4">
                    <div className="flex-1 space-y-4 py-1">
                      <div className="h-4 bg-zinc-800 rounded w-3/4"></div>
                      <div className="h-4 bg-zinc-800 rounded"></div>
                    </div>
                  </div>
                ) : (
                  `"${aiDescription}"`
                )}
              </div>
            </div>

            {/* Quick Specs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              <div className="p-4 bg-zinc-950 border border-white/5 text-center">
                <Zap className="w-5 h-5 text-orange-500 mx-auto mb-2" />
                <span className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Power</span>
                <span className="font-bold">{car.specs.horsepower} HP</span>
              </div>
              <div className="p-4 bg-zinc-950 border border-white/5 text-center">
                <Gauge className="w-5 h-5 text-orange-500 mx-auto mb-2" />
                <span className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Engine</span>
                <span className="font-bold text-[10px]">{car.specs.engine}</span>
              </div>
              <div className="p-4 bg-zinc-950 border border-white/5 text-center">
                <Settings className="w-5 h-5 text-orange-500 mx-auto mb-2" />
                <span className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Transmission</span>
                <span className="font-bold text-[10px]">{car.specs.transmission}</span>
              </div>
              <div className="p-4 bg-zinc-950 border border-white/5 text-center">
                <Fuel className="w-5 h-5 text-orange-500 mx-auto mb-2" />
                <span className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Efficiency</span>
                <span className="font-bold text-[10px]">{car.specs.mileage}</span>
              </div>
            </div>

            {/* Features */}
            <div className="mb-10">
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center">
                Key Features <div className="ml-4 h-px flex-1 bg-white/10" />
              </h3>
              <div className="grid grid-cols-2 gap-y-3">
                {car.features.map(feature => (
                  <div key={feature} className="flex items-center text-sm text-gray-400">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full py-5 bg-orange-500 text-black font-black uppercase tracking-[0.2em] hover:bg-orange-600 transition-all">
              Inquire About This Vehicle
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
