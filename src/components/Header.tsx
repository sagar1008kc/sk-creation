'use client';

import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: FC = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="w-full z-20 shadow-md">
        <div className="flex justify-center items-center">
          <Link href="/" passHref>
            <Image
              src="/smindLOGO.png"
              alt="smindBusiness"
              width={300}
              height={70}
              style={{ color: 'transparent' }}
            />
          </Link>
        </div>
      </header>

      <nav
        className={`
          w-full bg-gray-400 transition-all duration-300
          max-w-screen-xl flex items-center justify-center gap-10 
          ${isSticky ? 'fixed top-0 shadow-md' : 'relative'}
        `}
        style={{ maxWidth: '100%', paddingRight: '.5rem', zIndex: 999, height: '45px'}}
      >
        {isSticky && (
          <div className="flex items-center justify-start">
            <Link href="/" passHref>
              <Image
                src="/smindLOGO1.png"
                alt="Smind Business"
                width={200}
                height={100}
                className="mx-auto max-w-full rounded-lg"
              />
            </Link>
          </div>
        )}

        <div className="flex gap-4 text-sm md:text-lg">
          <Link href="/">Home</Link>
          <Link href="/books">Books</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
      <div className="overflow-hidden py-2">
          <div className="inline-block animate-slide whitespace-nowrap">
            <a href="https://youtube.com/@thesoftsoul7" >
            <span className="mx-4 text-[#808080] hover:text-black text-sm">  
              <i className="pi pi-youtube"></i>
             Click here for special youtube videos...</span>
            
            </a>
          </div>
        </div>
    </>
  );
};

export default Header;
