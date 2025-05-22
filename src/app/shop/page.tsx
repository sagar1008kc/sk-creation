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
const shopUrl = 'https://www.etsy.com/shop/DrSKDesigns';
const products: Product[] = [
  { id: '1', name: 'Unisex t-shirt',    image: '/images/1.png', url: 'https://www.etsy.com/listing/4308816409/unisex-ultra-cotton-tee-casual-tee-shirt?click_key=9a42542c69c14dfcab7877ffc8eb362c2b91279f%3A4308816409&click_sum=2cd19cf9&ref=shop_home_active_1' },
  { id: '2', name: 'Unisex t-shirt',         image: '/images/2.png', url: 'https://www.etsy.com/listing/4308287777/summer-vibes-unisex-v-neck-tee-cool-look?ls=r&ref=hp_rv-6&content_source=bc0b8e66f6def299395af3e606b3d16039affb8f%253A4308287777&logging_key=bc0b8e66f6def299395af3e606b3d16039affb8f%3A4308287777' },
  { id: '3', name: 'Logo T-Shirt', image: '/images/61.png', url: shopUrl },
  { id: '4', name: 'Unisex t-shirt',          image: '/images/65.png', url: shopUrl },
  { id: '5', name: 'Unisex t-shirt',    image: '/images/43.png', url: shopUrl },
  { id: '6', name: 'Unisex t-shirt',          image: '/images/34.png', url: shopUrl},
  { id: '7', name: 'Unisex t-shirt',     image: '/images/50.png', url: shopUrl },
  { id: '8', name: 'Unisex t-shirt',        image: '/images/63.png', url: shopUrl },
  { id: '9', name: 'Unisex t-shirt',        image: '/images/54.png', url: shopUrl },
  { id: '10', name: 'Unisex t-shirt',        image: '/images/64.png', url: shopUrl },
  { id: '11', name: 'Unisex t-shirt',        image: '/images/65.png', url: shopUrl},
  { id: '12', name: 'Unisex t-shirt',        image: '/images/5.png', url: shopUrl },
  { id: '13', name: 'Unisex t-shirt',        image: '/images/70.png', url: shopUrl },
  { id: '14', name: 'Unisex t-shirt',        image: '/images/71.png', url: shopUrl },
  { id: '15', name: 'Unisex t-shirt',        image: '/images/72.png', url: shopUrl },
  { id: '16', name: 'Unisex t-shirt',        image: '/images/73.png', url: shopUrl },
  { id: '17', name: 'Unisex t-shirt',        image: '/images/17.png', url: shopUrl },
  { id: '18', name: 'Coffee mug',        image: '/images/m3.png', url: shopUrl },
  { id: '19', name: 'Coffee mug',        image: '/images/m1.png', url: shopUrl },
  { id: '20', name: 'Coffee mug',        image: '/images/m2.png', url: shopUrl },
];

export default function Shop() {
  return (
    <main className="pt-[30px] bg-white">
      {/* Hero Section */}
      <div className="text-l md:text-3xl font-bold text-[#800000] mb-3 text-center p-2">
      Shop Your Favorite T-Shirts & Mugs — The Ultimate Gift!
        <p className='p-3'>Explore Our Collection of Custom-Designed T-Shirts and Mugs<br />
        Perfect for Any Occasion!<br />
        <span className="text-[#808080] my-3"> 🎁 👉Check out all available colors and sizes (XS–5XXL) to find your perfect fit and surprise someone special today!</span>
       </p>
      </div>
      <section className="w-full px-4 sm:px-6 lg:px-8">
        <Link href="https://www.etsy.com/shop/SoftMindShop">
        <motion.div whileHover={{ scale: 1.02 }}>
          <Card className="shadow-lg p-4">
            <Image
              src="/images/shopads.png"
              alt="shop design"
              width={1200}
              height={500}
              className="mb-4 mx-auto"
            />
            <div className="flex justify-center flex-wrap gap-4 mt-6">
              <Link
                href="https://www.etsy.com/shop/DrSKDesigns"
                className="bg-[#FFFDD0] px-6 py-2 rounded-full hover:bg-red transition text-xs md:text-lg"
                style={{ color: 'black' }}
              >
                Shop T-Shirts & Mugs
              </Link>
            </div>
          </Card>
        </motion.div>
        </Link>
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
                    Buy now
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
