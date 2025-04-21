'use client';

export default function Footer() {
  return (
    <footer className="text-center text-gray-500 py-6 border-t mt-10">
      © {new Date().getFullYear()} SKCreation.org. All rights reserved.
    </footer>
  );
}
