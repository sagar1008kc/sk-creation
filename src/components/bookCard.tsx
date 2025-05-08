'use client';
import { Card } from 'primereact/card';
import Image from 'next/image';
import { Button } from 'primereact/button';
import Link from 'next/link';

export default function BookCard({ title, image, desc, link }: { title: string, image: string, desc: string, link: string }) {
  return (
    <Card title={title} className="shadow-md">
      <Image src={image} alt={title} width={200} height={300} className="mx-auto mb-4" />
      <p className="text-white mb-4">{desc}</p>
      <Link href={link}>
        <Button label="Learn More" className="p-button-text" />
      </Link>
    </Card>
  );
}
