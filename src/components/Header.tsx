'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <nav
      className="flex items-center justify-between bg-black p-4 shadow-md"
    >
      <div className="flex items-center">
        <Image src="/skcreationLOGO.png" alt="SKCreation" width={200} height={100} />
      </div>
      <div className="text-white flex gap-3 text-[12px] md:text-[18px]">
        <Link href="/">Books</Link>
        <Link href="/">Collections</Link>
        <Link href="/">Studio</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}