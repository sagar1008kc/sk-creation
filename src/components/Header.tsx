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
              src="/drskT.png"
              alt="SKCreation"
              width={500}
              height={50}
              className="mx-auto"
              style={{ color: 'transparent' }}
            />
          </Link>
        </div>
      </header>

      <nav
        className={`
          w-full bg-[#a79df3] transition-all duration-300 z-50 p-2
          max-w-screen-xl mx-auto flex items-center justify-center gap-10
          ${isSticky ? 'fixed top-0 shadow-md' : 'relative'}
        `}
      >
        {isSticky && (
          <div className="">
            <Link href="/" passHref>
              <Image
                src="/drskT.png"
                alt="SKCreation"
                width={200}
                height={20}
                className="mx-auto"
                style={{ color: 'transparent' }}
              />
            </Link>
          </div>
        )}

        <div className="flex gap-6 text-md md:text-lg">
          <Link href="/books">Books</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/services">Services</Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
