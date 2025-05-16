'use client';

import Link from 'next/link';

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
        © {new Date().getFullYear()} smindbusiness.com All rights reserved.
      </div>
    </footer>
  );
}
