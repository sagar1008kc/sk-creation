'use client';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Header from  '../components/Header'
import Footer from '../components/Footer';

export default function HomePage() {

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header />

      {/* Hero Section */}
      <motion.div 
        className="text-center py-10"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4">The AI-Powered Software Engineer</h1>
        <p className="text-[13px] text-gray-700 mb-6">Thiriving in the age of ai-driven software development</p>
        <Button 
          label="Buy on "
          className="p-button-raised p-button-warning"
          onClick={() => window.open('https://a.co/d/ctqTYCK', '_blank')}
        >
          <img src="/images/amazon.png" alt="Amazon Logo" width={100} height={30} className="mr-2" />
          </Button>
      </motion.div>

      {/* Book Cover Section */}
      <div className="flex justify-center mb-10">
        <Image
          src="/images/ai-book.png"
          alt="Book Cover"
          width={250}
          height={350}
        />
      </div>

      {/* About the Book */}
      <div className="max-w-3xl mx-auto mb-10">
        <Card title={<span className="font-bold text-[16px]">About the Book</span>}>
          <p className="text-gray-700 text-[13px]">
            This book equips modern software engineers with AI-enhanced workflows, tools, and strategies to stay competitive in a rapidly evolving tech landscape.
            You will explore real-world use cases, technical breakdowns, and futureproofing tactics to integrate AI seamlessly into your engineering journey.
          </p>
        </Card>
      </div>

      {/* What’s Inside */}
      <div className="max-w-3xl mx-auto mb-10">
        <Card title={<span className="font-bold text-[16px]">What’s Inside</span>}>
          <ul className="list-disc ml-6 text-gray-700 text-[13px]">
            <li>AI in coding: GitHub Copilot, ChatGPT, and more</li>
            <li>How to ace AI-powered interviews</li>
            <li>Best practices for working with AI-generated code</li>
            <li>Future trends in software development and AI</li>
          </ul>
        </Card>
      </div>

      {/* Published Books */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-12 text-center">Published Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="shadow-lg p-3">
              <Image
                src="/images/ai-book.png"
                alt="Published Book"
                width={200}
                height={300}
                className="mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">The AI-Powered Software Engineer</h3>
              <p className="text-gray-700 mb-4 text-[13px]">
                A must-read for developers who want to integrate AI tools into modern workflows.
              </p>
              <Button 
                  label="Buy on "
                  className="p-button-raised p-button-warning"
                  onClick={() => window.open('https://a.co/d/ctqTYCK', '_blank')}
                >
                  <img src="/images/amazon.png" alt="Amazon Logo" width={100} height={30} className="mr-2" />
          </Button>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="shadow-lg p-3">
              <Image
                src="/images/cybersecurity.jpg"
                alt="Second Published Book"
                width={200}
                height={300}
                className="mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">Cybersecurity Interview Handbook</h3>
              <p className="text-gray-700 mb-4 text-[13px]">
                Recall and practice cybersecurity concepts and techniques with this comprehensive guide for interviews.
              </p>
              <Button 
                label="Buy on "
                className="p-button-raised p-button-warning"
                onClick={() => window.open('https://a.co/d/2voNnSA', '_blank')}
              >
                <img src="/images/amazon.png" alt="Amazon Logo" width={100} height={30} className="mr-2" />
          </Button>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Upcoming Books */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Upcoming Books</h2>
      <p className='text-center'>comming soon...</p>
      </div>

      <Footer />
    </div>
  );
}
