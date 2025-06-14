'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FcGlobe, FcServices, FcIdea, FcBusinessman, FcTemplate, FcCamera } from 'react-icons/fc';
import { Button } from 'primereact/button';

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
    title: 'Book Design & Publishing',
    desc: 'We edit and publish your manuscript so you can hold your book in your hands.'
  },
];

const servicePlans = [
  {
    name: 'Basic',
    price: '$499',
    features: [
      'Website Development',
      'UI/UX Design',
      'Deployment & Hosting',
      '1 Month Maintenance',
    ],
  },
  {
    name: 'Pro',
    price: '$999',
    features: [
      'Everything in Basic',
      'Performance Optimization',
      'SEO Setup & Analytics',
      '3 Months Maintenance',
    ],
  },
  {
    name: 'Custom',
    price: 'Contact Us',
    features: [
      'Tailored Feature Set',
      'Dedicated Support',
      'SLA-backed Maintenance',
      'Enterprise Integrations',
    ],
  },
  {
    name: 'Book Publishing',
    price: '$399',
    features: [
      'Book Design & Formatting',
      'Cover Art Creation',
      'Editing & Proofreading',
      'Publishing Assistance',
    ],
  }
];

export default function SercicesPage() {
  return (
    <>
      {/* What We Offer */}
      <section className="py-16 px-4">
        <div className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
          What We Offer
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-100 hover:bg-[#a79df3] border border-gray-200 rounded-lg p-6 text-center shadow-sm transition"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <div className="text-lg font-semibold mb-2 text-[#800000]">
                {service.title}
              </div>
              <div className="text-gray-700 text-sm">{service.desc}</div>
            </div>
          ))}
        </div>

      </section>
      {/* Who We Serve */}
<section className="py-16 px-4 bg-gray-100 text-gray-800">
  <div className="max-w-3xl mx-auto text-center mb-8">
    <h2 className="text-3xl md:text-4xl font-bold">Who We Serve</h2>
    <p className="mt-2 text-lg text-gray-600">
      Perfect for anyone who needs...
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
    <div className="flex items-start space-x-4">
      <FcBusinessman size={36} />
      <div>
        <h3 className="font-semibold">Small Businesses & Startups</h3>
        <p className="text-sm text-gray-600">We build you a brand-new website or refresh your current one so your small business can attract more customers online, look professional, and work smoothly on any device.</p>
      </div>
    </div>

    <div className="flex items-start space-x-4">
      <FcTemplate size={36} />
      <div>
        <h3 className="font-semibold">Digital Design & Branding</h3>
        <p className="text-sm text-gray-600">Business cards, flyers, brochures, and more.</p>
      </div>
    </div>

    <div className="flex items-start space-x-4">
      <FcCamera size={36} />
      <div>
        <h3 className="font-semibold">Authors & Publishers</h3>
        <p className="text-sm text-gray-600">Book design, formatting, editing, and cover art and publish.</p>
      </div>
    </div>

    <div className="flex items-start space-x-4">
      <FcIdea size={36} />
      <div>
        <h3 className="font-semibold">Custom Projects</h3>
        <p className="text-sm text-gray-600">
          Unique digital assets, presentations, or product mockups.
        </p>
      </div>
    </div>
  </div>
</section>
      <section className="py-16 px-4 bg-gray-900 text-black">
  <h2 className="text-4xl font-extrabold text-center mb-12">Our Service Plans</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {servicePlans.map(({ name, price, features }) => (
      <div
        key={name}
        className="
          bg-gradient-to-br 
            from-indigo-600 
            via-purple-600 
            to-pink-600
          rounded-2xl 
          p-8 
          shadow-2xl 
          transform 
          hover:scale-105 
          transition 
          duration-300
        "
      >
        <h3 className="text-2xl font-semibold mb-2 text-white">{name}</h3>
        <p className="text-3xl font-bold mb-6 text-white">{price}</p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-white">
          {features.map(item => (
            <li key={item} className="leading-snug">
              {item}
            </li>
          ))}
        </ul>
        <Button
          label="Select Plan"
          className="p-button-rounded p-button-outlined p-button-light w-full"
        />
      </div>
    ))}
  </div>
  <p className="text-center mt-8 text-gray-400">
    Any questions or need something more custom? 
  </p>
         {/* Service Plans */}
         <Link href="/contact" >
         <div className="text-center text-black bg-blue-100 p-3 mt-5 border rounded-lg mb-12">
          For more details contact us.
        </div>
        </Link>
</section>
<section className="py-16 px-4 bg-gray-100 text-gray-800">
  <div className="max-w-3xl mx-auto text-center mb-8">
    <h2 className="text-3xl md:text-4xl font-bold">Sample websites</h2>
    <p className="mt-2 text-lg text-gray-600">
      What type of business do you have? email us. 
    </p>
    <a href="/https://g.co/gemini/share/c409912edda4" className="text-blue-600 hover:underline mt-4 inline-block">Salon's website</a>
 </div>
  </section>
      <div className="border-t"></div>

      {/* About Me */}
      <div className="min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
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
              <div className="p-5">
                <p>
                  Click for Latest Books:{' '}
                  <a href="https://www.amazon.com/author/sagar2025" className="text-white underline">
                    Amazon Author Site
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="text-white text-[13px] mt-6">
            <p className="mb-4">
              <strong>SK</strong> is a technology strategist, educator, and author with a
              diverse background spanning software engineering, cybersecurity, and AI. With
              over 10 years of experience, Khatri has contributed to enterprise-scale
              applications, led innovation initiatives, and mentored future tech leaders.
            </p>
            <p className="mb-4">
              He began his career as a mathematics teacher, Section Officer and leadership
              trainer before transitioning into the tech industry. His hands-on experience
              includes frontend development, full-stack projects, and cloud-based
              infrastructure. Khatri is pursuing a Doctorate in Business Administration with
              a focus on information systems and enterprise resource management, IT project
              management.
            </p>
            <p className="mb-4">
              Through his books, he aims to bridge the gap between technical skills and
              strategic thinking, empowering professionals to thrive in the AI-driven digital
              age.
            </p>
            <p>
              Besides tech life, he enjoys creating imaginative and educational children’s
              books that inspire curiosity, creativity, and character development. Plus
              hobbies: song and novel writing...
            </p>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm p-2">
              <Link href="/" className="border p-4 pl-8">
                Home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
