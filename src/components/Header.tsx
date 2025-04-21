'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-center" >
        <Image src="/skcreationLOGO.png" alt="SKCreation" width={200} height={100} />
      </div>
      <div className="text-sm text-gray-500 flex gap-6">
      <Link href="/about">About The Author</Link>
        <Link href="/">Service</Link>
      </div>
    </nav>
  );
}
