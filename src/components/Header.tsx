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
      <header className="bg-black w-full z-40 shadow-md">
        <div className="flex justify-center items-center">
          <Link href="/" passHref>
            <Image
              src="/smindLOGO.png"
              alt="smindBusiness"
              width={500}
              height={100}
              style={{ color: 'transparent' }}
            />
          </Link>
        </div>
      </header>

      <nav
        className={`
          w-full bg-gray-100 transition-all duration-300 px-1
          max-w-screen-xl flex items-center justify-center gap-10 
          ${isSticky ? 'fixed top-0 shadow-md' : 'relative'}
        `}
        style={{ maxWidth: '100%', paddingRight: '.5rem', zIndex: 999, height: '50px'}}
      >
        {isSticky && (
          <div className="flex items-center justify-start">
            <Link href="/" passHref>
              <Image
                src="/smindLogoBlack.png"
                alt="Smind Business"
                width={40}
                height={20}
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
      <div className="overflow-hidden bg-red py-2">
          <div className="inline-block animate-slide whitespace-nowrap">
            <a href="https://youtube.com/@thesoftsoul7" >
            <span className="mx-4 text-white hover:text-white text-sm">  
              <i className="pi pi-youtube"></i>
             Click here for special youtube videos...</span>
            
            </a>
          </div>
        </div>
    </>
  );
};

export default Header;
