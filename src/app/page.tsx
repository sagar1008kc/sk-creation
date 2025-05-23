'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

export default function HomePage() {
  return (
    <>
       <div className='text-center pt-5'>
          <h5 className="text-xl md:text-3xl"  style={{ letterSpacing: '6px' }}>
            Welcome to Smind Business Platform</h5>
        </div>
      <main className="pt-[30px]">
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
          ><Button type="submit" label="Shop Books" className="w-full bg-[#a79df3] p-1 rounded-full text-xs md:text-xl" />
          </a>
          <a
            href="https://www.etsy.com/shop/DrSKDesigns"
          >
            <Button type="submit" label="Shop T-Shirts & Mugs" className="w-full bg-[#a79df3] p-1 rounded-full text-xs md:text-xl" />
            
          </a>
          <a
            href="https://www.youtube.com/@thesoftsoul7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button type="submit" label="Watch on YouTube" className="w-full bg-[#a79df3] p-1 rounded-full text-xs md:text-xl" />
            
          </a>
        </div>
      </Card>
      </motion.div>
        </section>
        <section className="w-full mt-12 px-4 sm:px-6 lg:px-8">
        <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="shadow-lg p-4">
              <Link  href="/shop">
              <Image
                src="/images/shop1.png"
                alt="youtube"
                width={1200}
                height={500}
                className="mb-4 mx-auto"
              />
              
              </Link>
          </Card>
          </motion.div>
        </section>
        <section className="w-full mt-12  p-5">
        <div className='text-center border-t'>
          <h3 className="text-3xl md:text-5xl font-bold m-5">
            Watch special contents on YouTube</h3>
        </div>
        <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="shadow-lg p-4">
              <Link  href="https://youtube.com/@thesoftsoul7">
              <Image
                src="/images/youtube.png"
                alt="youtube"
                width={1200}
                height={500}
                className="mb-4 mx-auto"
              />
              
              </Link>
          </Card>
          </motion.div>
        </section>
      </main>
    </>
  );
}
