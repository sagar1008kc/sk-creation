// pages/shop.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from 'primereact/card';

interface Product {
  id: string;
  name: string;
  image: string;
  url: string;
}

const products: Product[] = [
  { id: '1', name: 'Graphic T-Shirt',    image: '/images/17.png', url: '#' },
  { id: '2', name: 'Vintage Mug',         image: '/images/17.png', url: '#' },
  { id: '3', name: 'Logo T-Shirt',        image: '/images/17.png', url: '#' },
  { id: '4', name: 'Custom Mug',          image: '/images/17.png', url: '#' },
  { id: '5', name: 'Motivational Tee',    image: '/images/17.png', url: '#' },
  { id: '6', name: 'Travel Mug',          image: '/images/17.png', url: '#' },
  { id: '7', name: 'Classic T-Shirt',     image: '/images/17.png', url: '#' },
  { id: '8', name: 'Artistic Mug',        image: '/images/17.png', url: '#' },
];

export default function Shop() {
  return (
    <main className="pt-[30px] bg-white">
      {/* Hero Section */}
      <div className="text-xl md:text-3xl font-bold text-[#800000] mb-3 text-center p-2">
        Shop Your Favorite T-shirt & Mug – Best Gift
      </div>
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <motion.div whileHover={{ scale: 1.02 }}>
          <Card className="shadow-lg p-4">
            <Image
              src="/images/design-1.png"
              alt="shop design"
              width={1200}
              height={500}
              className="mb-4 mx-auto"
            />
            <p className="text-sm md:text-xl max-w-2xl mx-auto mb-2 text-center">
              Explore our world of creativity — custom-designed T-shirts and mugs that make your favorite choice.
            </p>
            <div className="flex justify-center flex-wrap gap-4 mt-6">
              <Link
                href="/"
                className="bg-[#FFFDD0] px-6 py-2 rounded-full hover:bg-red transition text-xs md:text-lg"
                style={{ color: 'black' }}
              >
                Shop T-Shirts & Mugs
              </Link>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="w-full mt-12 px-4 sm:px-6 lg:px-8">
        <div className="text-xl md:text-2xl font-bold text-[#a79df3] mb-6 text-center">
          Featured Products
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map(item => (
            <motion.div key={item.id} whileHover={{ scale: 1.02 }}>
              <Card className="flex flex-col items-center p-4 shadow-lg" style={{ height: '100%' }}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="mb-4 rounded-lg object-cover"
                />
                <div className="text-sm text-gray-500 text-center">{item.name}</div>
                <Link
                  href={item.url}
                  
                >
                  <div className=" bg-[#800000] text-white text-center rounded-full hover:bg-[#600] transition">
                    Buy Now
                  </div>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
