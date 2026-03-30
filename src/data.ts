export interface Product {
  id: string;
  name: string;
  category: 'Essentials' | 'Outerwear' | 'Accessories' | 'Footwear';
  price: number;
  image: string;
  description: string;
  sizes: string[];
  colors: string[];
  details: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Minimalist Wool Overcoat',
    category: 'Outerwear',
    price: 295,
    image: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&q=80&w=800',
    description: 'A timeless silhouette crafted from premium Italian wool blend.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Camel', 'Black', 'Navy'],
    details: ['80% Wool, 20% Polyamide', 'Satin lining', 'Internal chest pocket', 'Dry clean only'],
  },
  {
    id: '2',
    name: 'Heavyweight Cotton Hoodie',
    category: 'Essentials',
    price: 85,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
    description: 'The perfect everyday layer made from 450gsm organic cotton.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Heather Grey', 'Off-White', 'Forest Green'],
    details: ['100% Organic Cotton', 'Pre-shrunk', 'Ribbed cuffs and hem', 'Made in Portugal'],
  },
  {
    id: '3',
    name: 'Raw Denim Slim Jeans',
    category: 'Essentials',
    price: 145,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800',
    description: 'Japanese selvedge denim that ages beautifully with every wear.',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Indigo'],
    details: ['14oz Selvedge Denim', 'Button fly', 'Reinforced pockets', 'Unwashed'],
  },
  {
    id: '4',
    name: 'Leather Chelsea Boots',
    category: 'Footwear',
    price: 220,
    image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&q=80&w=800',
    description: 'Classic silhouette with a modern tapered toe and durable sole.',
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['Black', 'Dark Brown'],
    details: ['Full-grain leather', 'Elastic side panels', 'Pull tabs', 'Resoleable construction'],
  },
  {
    id: '5',
    name: 'Cashmere Beanie',
    category: 'Accessories',
    price: 65,
    image: 'https://images.unsplash.com/photo-1576871333020-2219bc216c25?auto=format&fit=crop&q=80&w=800',
    description: 'Ultra-soft 100% cashmere for ultimate winter warmth.',
    sizes: ['One Size'],
    colors: ['Charcoal', 'Beige', 'Black'],
    details: ['100% Grade A Cashmere', 'Rib-knit design', 'Breathable warmth', 'Hand wash only'],
  },
  {
    id: '6',
    name: 'Technical Rain Shell',
    category: 'Outerwear',
    price: 185,
    image: 'https://images.unsplash.com/photo-1544923246-77307dd654ca?auto=format&fit=crop&q=80&w=800',
    description: 'Waterproof and breathable protection for unpredictable weather.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Olive', 'Black'],
    details: ['3-layer waterproof fabric', 'Taped seams', 'Adjustable hood', 'YKK zippers'],
  }
];
