'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FcGlobe,
  FcServices,
  FcIdea,
  FcBusinessman,
  FcTemplate,
  FcCamera
} from 'react-icons/fc';
const services = [
  {
    icon: <FcGlobe size={60} />,
    title: 'Website Design & Development',
    desc: 'Modern, responsive websites built from scratch and tailored to your brand.',
  },
  {
    icon: <FcTemplate size={60} />,
    title: 'Domain & Hosting',
    desc: 'Get your domain registered and your site hosted, live, and secure.',
  },
  {
    icon: <FcBusinessman size={60} />,
    title: 'Logo & Brand Design',
    desc: 'Custom logo creation and business card design to stand out professionally.',
  },
  {
    icon: <FcIdea size={60} />,
    title: 'Digital Business Ideas',
    desc: 'Consultation and execution of innovative digital business models.',
  },
  {
    icon: <FcServices size={60} />,
    title: 'Ongoing Maintenance',
    desc: 'Stay updated and supported with monthly website care and updates.',
  },
  {
    icon: <FcCamera size={60} />,
    title: 'Marketing Materials',
    desc: 'Digital and print-ready materials for business promotion.',
  },
];
export default function SercicesPage() {
  return (
    <>
     <section className="py-16 px-4">
      <div className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        What We Offer
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-gray-100 hover:bg-[#a79df3] border border-gray-200 rounded-lg p-6 text-center shadow-sm transition"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <div className="text-lg font-semibold mb-2 text-[#800000]">{service.title}</div>
            <div className="text-gray-700 text-sm">{service.desc}</div>
          </div>
        ))}
      </div>
      <div className='text-center text-black bg-blue-100
      p-3 mt-5 border rounded-lg'>For more details contact us.</div>
    </section>
    <div className="border-t "></div>
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto ">
      <h3 className="text-center text-2xl md:text-3xl font-extrabold text-white py-5 border-b-4 border-indigo-500 inline-block mx-auto w-fit tracking-wide">
      about me
</h3>

       <div className="flex justify-center items-center mt-4">
      
      <div className="text-center max-w-lg w-full">
        <Image
          src="/images/author.PNG"
          alt="About the Author"
          width={300}
          height={200}
          className="mx-auto rounded-full mb-4"
        />

        <h2 className="text-xl font-semibold mb-4">SK</h2>
        <p className="text-sm leading-relaxed">
          Software Engineer <br />
          Doctorate Candidate [2025] <br />
          USAII Certified AI Scientist <br />
          CompTIA Security+, CYSA+ Certified <br />
          Microsoft Certified Azure DevOps Engineer <br />
          Google Cloud Certified Cloud Architect Professional <br />
         

        </p>
        <hr className="my-4 border-gray-300" />
        <div className='p-5'>
        <p> Click for Latest Books: <a href='https://www.amazon.com/author/sagar2025'><span className='text-white underline'>Amazon Author Site</span></a></p>
        </div>
       
      </div>
    </div>
          <div className="text-white text-[13px]">
            <p className="mb-4">
              <strong>SK</strong> is a technology strategist, educator, and author with a diverse background spanning software engineering, cybersecurity, and AI. With over 10 years of experience, Khatri has contributed to enterprise-scale applications, led innovation initiatives, and mentored future tech leaders.
            </p>
            <p className="mb-4">
              He began his career as a mathematics teacher, Section Officer and leadership trainer before transitioning into the tech industry. His hands-on experience includes frontend development, full-stack projects, and cloud-based infrastructure. Khatri pursuing a Doctorate in Business Administration with a focus on information systems and enterprize resource management, IT project management.
            </p>
            <p>
              Through his books, he aims to bridge the gap between technical skills and strategic thinking, empowering professionals to thrive in the AI-driven digital age.
            </p>
            <p>Beside from tech life, he enjoys creating imaginative and educational children’s books that inspire curiosity, creativity, and character development. Plus hobbies: song and novel writing...</p>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-sm p-2">
          <Link href="/" className='border p-4 pl-8'>Home</Link>
          </p>
      </div>
      </div>
    </>
    
  );
}