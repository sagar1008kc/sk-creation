'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="bg-black w-full z-40 shadow-md">
        <div className="flex justify-center items-center ">
        <Link href="/">
          <Image
            src="/CreationLOGO.png"
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
        className={`w-full bg-[#a79df3] transition-all duration-300 z-50 ${
          isSticky ? 'fixed top-0 shadow-md' : 'relative'
        }`}
      >
        <div className="max-w-screen-xl mx-auto flex justify-center gap-6 py-2 text-sm md:text-lg">
          <Link href="/">Dashboard</Link>
          <Link href="/books">Books</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/">Studio</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </>
  );
}
