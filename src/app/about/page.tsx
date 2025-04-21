'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from 'primereact/card';


export default function AboutAuthorPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto py-10">
        <div className="flex flex-col md:flex-row  items-center">
          <Image
            src="/images/profile.jpg"
            alt="Sagar Khatri"
            width={200}
            height={200}
            className="rounded-full"
          />
          <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <Card className="text-center shadow-2xl p-6 max-w-lg w-full">
        <Image
          src="/76cf8f51-f399-446b-8412-cd94bf642072.png" // adjust path if needed
          alt="About the Author"
          width={400}
          height={200}
          className="mx-auto rounded-full mb-4"
        />

        <h2 className="text-xl font-semibold mb-4">Sagar Khatri</h2>
        <p className="text-sm leading-relaxed">
          Software Engineer <br />
          Doctorate Candidate [2025] <br />
          USAII Certified AI Scientist <br />
          CompTIA Security+, CYSA+ Certified <br />
          Microsoft Certified Azure DevOps Engineer <br />
          Google Cloud Certified Cloud Architect Professional
        </p>
      </Card>
    </div>
          <div className="text-gray-700 text-[13px]">
            <p className="mb-4">
              <strong>Sagar Khatri</strong> is a technology strategist, educator, and author with a diverse background spanning software engineering, cybersecurity, and AI. With over 10 years of experience, Khatri has contributed to enterprise-scale applications, led innovation initiatives, and mentored future tech leaders.
            </p>
            <p className="mb-4">
              He began his career as a mathematics teacher, Section Officer and leadership trainer before transitioning into the tech industry. His hands-on experience includes frontend development, full-stack projects, and cloud-based infrastructure. Khatri pursuing a Doctorate in Business Administration with a focus on information systems and enterprize resource management, IT project management.
            </p>
            <p>
              Through his books, he aims to bridge the gap between technical skills and strategic thinking, empowering professionals to thrive in the AI-driven digital age.
            </p>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-sm bg-blue-100 p-2">
          <Link href="/">Home</Link>
          </p>
      </div>
      </div>
    </div>
  );
}