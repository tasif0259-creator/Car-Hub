export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  image: string;
  category: 'Sedan' | 'SUV' | 'Sports' | 'Luxury' | 'Electric';
  specs: {
    engine: string;
    horsepower: number;
    transmission: string;
    mileage: string;
  };
  features: string[];
}

export const CARS: Car[] = [
  {
    id: '1',
    make: 'Tesla',
    model: 'Model S Plaid',
    year: 2024,
    price: 89990,
    image: 'https://picsum.photos/seed/tesla/800/600',
    category: 'Electric',
    specs: {
      engine: 'Tri-Motor Electric',
      horsepower: 1020,
      transmission: 'Single-speed',
      mileage: '396 miles range',
    },
    features: ['Autopilot', 'Ludicrous Mode', 'Panoramic Roof', 'Premium Audio'],
  },
  {
    id: '2',
    make: 'Porsche',
    model: '911 Carrera',
    year: 2024,
    price: 114400,
    image: 'https://picsum.photos/seed/porsche/800/600',
    category: 'Sports',
    specs: {
      engine: '3.0L Twin-Turbo Flat-6',
      horsepower: 379,
      transmission: '8-speed PDK',
      mileage: '18/24 MPG',
    },
    features: ['Sport Chrono Package', 'PASM', 'Leather Interior', 'LED Matrix Headlights'],
  },
  {
    id: '3',
    make: 'BMW',
    model: 'X5 M Competition',
    year: 2024,
    price: 122300,
    image: 'https://picsum.photos/seed/bmwx5/800/600',
    category: 'SUV',
    specs: {
      engine: '4.4L V8 Twin-Turbo',
      horsepower: 617,
      transmission: '8-speed Automatic',
      mileage: '13/18 MPG',
    },
    features: ['M xDrive', 'Harman Kardon Sound', 'Heated Seats', 'Parking Assistant Plus'],
  },
  {
    id: '4',
    make: 'Mercedes-Benz',
    model: 'S-Class',
    year: 2024,
    price: 114500,
    image: 'https://picsum.photos/seed/merc/800/600',
    category: 'Luxury',
    specs: {
      engine: '3.0L I6 Turbo',
      horsepower: 429,
      transmission: '9-speed Automatic',
      mileage: '20/28 MPG',
    },
    features: ['MBUX', 'Burmester 3D Surround', 'Air Balance', 'Soft Close Doors'],
  },
  {
    id: '5',
    make: 'Audi',
    model: 'RS e-tron GT',
    year: 2024,
    price: 147100,
    image: 'https://picsum.photos/seed/audi/800/600',
    category: 'Electric',
    specs: {
      engine: 'Dual Electric Motors',
      horsepower: 637,
      transmission: '2-speed Automatic',
      mileage: '232 miles range',
    },
    features: ['Quattro AWD', 'Matrix LED', 'Bang & Olufsen', 'Carbon Fiber Roof'],
  },
  {
    id: '6',
    make: 'Lamborghini',
    model: 'Urus Performante',
    year: 2024,
    price: 269000,
    image: 'https://picsum.photos/seed/urus/800/600',
    category: 'SUV',
    specs: {
      engine: '4.0L V8 Twin-Turbo',
      horsepower: 657,
      transmission: '8-speed Automatic',
      mileage: '12/17 MPG',
    },
    features: ['Carbon Ceramic Brakes', 'Alcantara Interior', 'Akrapovic Exhaust', 'Rear-Wheel Steering'],
  }
];
