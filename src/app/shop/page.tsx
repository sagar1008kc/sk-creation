'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from 'primereact/card';

export default function Shop() {
  return (
    <>
      <main className="pt-[30px] bg-white">
  <h1 className="text-3xl md:text-5xl font-bold text-[#800000] mb-3 text-center py-2">
          Shop your favorite T-shirt & Mug - Best Gift
        </h1>
        <section className="w-full">
        <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="shadow-lg p-4">
              <Image
                src="/images/design-1.png"
                alt="shop design"
                width={1200}
                height={500}
                className="mb-4 mx-auto"
              />
              <p className="text-lg md:text-xl max-w-2xl mx-auto mb-2">
          Explore our world of creativity — custom-designed
          T-shirts and mugs that make your favorite choice.
        </p>
              
        <div className="flex justify-center flex-wrap gap-4 mt-6">
            <a
            href="/design"
            className="bg-[#FFFDD0] px-6 py-2 rounded-full hover:bg-red transition text-xs md:text-lg" style={{ color: 'black' }}
            >
            Shop T-Shirts & Mugs
            </a>
  </div>
            </Card>
          </motion.div>
        </section>
      </main>
    </>
  );
}
