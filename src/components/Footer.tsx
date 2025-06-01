'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="text-center bg-grey py-6 mt-3 flex flex-col items-center gap-4 mb-4">
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
                src="/smindLOGO1.png"
                alt="Smind Business"
                width={200}
                height={20}
                className="mx-auto max-w-full rounded-lg"
              />
            </div> <span className='text-[#808080]'>© {new Date().getFullYear()} smindbusiness.com All rights reserved.</span>
    </footer>
  );
}
