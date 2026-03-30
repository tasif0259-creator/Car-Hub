import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { PRODUCTS, Product } from '../data';
import { generateProductDescription } from '../services/geminiService';
import { ChevronLeft, ShoppingBag, Heart, Share2, Ruler } from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [aiDescription, setAiDescription] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    const found = PRODUCTS.find(p => p.id === id);
    if (found) {
      setProduct(found);
      setSelectedSize(found.sizes[0]);
      setSelectedColor(found.colors[0]);
      generateProductDescription(found.name).then(desc => {
        setAiDescription(desc);
        setLoading(false);
      });
    }
  }, [id]);

  if (!product) return <div className="pt-32 text-center">Product not found</div>;

  return (
    <div className="pt-24 pb-24 bg-white min-h-screen text-zinc-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="py-8">
          <Link to="/shop" className="inline-flex items-center text-zinc-400 hover:text-zinc-900 transition-colors text-[10px] font-bold uppercase tracking-widest">
            <ChevronLeft className="w-3 h-3 mr-1" /> Back to Shop
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="aspect-[4/5] bg-zinc-100 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[1, 2].map(i => (
                <div key={i} className="aspect-[4/5] bg-zinc-100 overflow-hidden grayscale hover:grayscale-0 transition-all cursor-pointer">
                  <img
                    src={`https://picsum.photos/seed/fashion-detail-${i}/600/750`}
                    alt="Detail"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="mb-10">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-2 block">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">
                {product.name}
              </h1>
              <div className="text-2xl font-medium text-zinc-900 mb-8">
                ${product.price}
              </div>
              
              <div className="text-sm text-zinc-500 leading-relaxed mb-8 font-light">
                {loading ? (
                  <div className="space-y-2 animate-pulse">
                    <div className="h-3 bg-zinc-100 w-full" />
                    <div className="h-3 bg-zinc-100 w-3/4" />
                  </div>
                ) : (
                  aiDescription
                )}
              </div>
            </div>

            {/* Selection */}
            <div className="space-y-8 mb-12">
              {/* Colors */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest">Color: {selectedColor}</label>
                </div>
                <div className="flex gap-3">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border-2 transition-all ${
                        selectedColor === color ? 'border-zinc-900 scale-110' : 'border-transparent'
                      }`}
                      style={{ backgroundColor: color.toLowerCase().replace(' ', '') }}
                      title={color}
                    />
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest">Select Size</label>
                  <button className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 flex items-center hover:text-zinc-900 transition-colors">
                    <Ruler className="w-3 h-3 mr-1" /> Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 text-xs font-bold transition-all border ${
                        selectedSize === size
                          ? 'bg-zinc-900 border-zinc-900 text-white'
                          : 'border-zinc-200 text-zinc-500 hover:border-zinc-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-12">
              <button className="flex-1 py-5 bg-zinc-900 text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 mr-2" /> Add to Bag
              </button>
              <button className="w-16 h-16 border border-zinc-200 flex items-center justify-center hover:border-zinc-900 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Details Accordion */}
            <div className="border-t border-zinc-100 pt-8">
              <h3 className="text-[10px] font-bold uppercase tracking-widest mb-4">Product Details</h3>
              <ul className="space-y-2">
                {product.details.map(detail => (
                  <li key={detail} className="text-xs text-zinc-500 font-light flex items-center">
                    <div className="w-1 h-1 bg-zinc-300 rounded-full mr-3" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
