'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="text-center py-6 mt-3 flex flex-col items-center gap-4 mb-4">
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/legal"
        >
          <div className="text-gray-500 font-light text-sm underline transition-colors"> Terms & Conditions</div>
         
        </Link>
        <Link
          href="/legal"
        >
          <div className="text-gray-500 font-light text-sm underline transition-colors">Privacy Policy</div>
          
        </Link>
      </div>
      {/* copyright */}
      <div className="text-gray-400 text-sm">
              <Image
                src="/smindLogo1.png"
                alt="Smind Business"
                width={60}
                height={20}
                className="mx-auto max-w-full rounded-lg"
              />
            </div> © {new Date().getFullYear()} smindbusiness.com All rights reserved.
    </footer>
  );
}
