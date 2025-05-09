'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from 'primereact/card';

export default function HomePage() {
  return (
    <>
      <main className="pt-[30px]">
      <motion.div whileHover={{ scale: 1.02 }}>
        <Image
                src="/images/divider-1.png"
                alt="fourth Published Book"
                width={1200}
                height={60}
                className="mb-7 mx-auto"
              />
        </motion.div>
        <section className="w-full">
        <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="shadow-lg p-4">
              <Image
                src="/images/dashboard-T.png"
                alt="fourth Published Book"
                width={1200}
                height={500}
                className="mb-4 mx-auto"
              />
              <p className="text-lg md:text-xl max-w-2xl mx-auto mb-2 p-2">
          Explore our world of creativity — from inspiring books to custom-designed
          T-shirts and mugs that make a statement. Plus, don’t miss out on special contents. Checkout our videos on YouTube!
        </p>
              
        <div className="flex justify-center flex-wrap gap-4 mt-6">
        <a
        href="https://www.amazon.com/author/sagar2025"
        target="_blank"
        className="bg-[#FFFDD0] text-black px-3 py-2 rounded-full hover:bg-red transition text-xs md:text-lg" style={{ color: 'black' }}
        >
          Shop Books
        </a>
    <a
      href="/design"
      className="bg-[#FFFDD0] px-3 py-2 rounded-full hover:bg-red transition text-xs md:text-lg" style={{ color: 'black' }}
    >
      Shop T-Shirts & Mugs
    </a>
    <a
      href="https://www.youtube.com/@thesoftsoul7"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#b2071d] px-3 py-2 rounded-full hover:bg-gray transition text-sx md:text-lg"
    >
      Watch on YouTube
    </a>
  </div>
      </Card>
          </motion.div>
        </section>
        <section className="w-full mt-12  p-5">
          <video
            src="/videos/sk.mp4"
            controls
            autoPlay
            muted
            loop
            className="w-full h-auto"
          />
        </section>
      </main>
    </>
  );
}
