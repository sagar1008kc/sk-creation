'use client';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Divider } from 'primereact/divider';

export default function HomePage() {

  return (
    <div className="min-h-screen bg-black text-center">
 
      {/* Hero Section */}
      <motion.div 
        className="text-center py-10"
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
      >
        <i>2025’s Best AI-Powered Business Ideas</i>
        <h1 className="text-4xl font-bold mb-4">How to make AI work for you?</h1>
        <p className="text-[13px] text-white mb-6">Start a Smarter Life: Use AI to Work Less, Create More, and Earn Online.</p>
        <div className="flex justify-center mb-10">
        <Image
          src="/images/ai-work-3.png"
          alt="Book Cover"
          width={1200}
          height={200}
        />
      </div>
        <Button 
          label="Buy on "
          className="p-button-raised p-button-warning"
          onClick={() => window.open('https://a.co/d/cmYYN5R', '_blank')}
        >
          <img src="/images/amazon.png" alt="Amazon Logo" width={100} height={30} className="mr-2" />
          </Button>
      </motion.div>

      {/* Book Cover Section */}
      

      {/* About the Book */}
      <div className="max-w-3xl mx-auto mb-10">
        <Card title={<span className="font-bold text-[16px]">About the Book</span>}>
          <p className="text-white text-[13px]">
          Unlock the power of artificial intelligence — without needing to code, write algorithms, or fear the future.
          This beginner-friendly guide is designed for everyone: professionals, small business owners, freelancers, students, and even parents looking to use AI for everyday life and online income.
          </p>
        </Card>
      </div>

      {/* What’s Inside */}
      <div className="max-w-3xl mx-auto mb-10">
        <Card title={<span className="font-bold text-[16px]">What’s Inside</span>}>
          <ul className="list-disc ml-6 text-white text-[13px]">
            <li>Start Your Digital Business Using AI</li>
            <li>Stay Safe with AI</li>
            <li>100 Prompt Templates for Everyday AI Use</li>
            <li>Try It Yourself — Build Your Own Website, Business Card, make your own Brand.</li>
          </ul>
        </Card>
      </div>
<div className=''    
style={{
      backgroundImage: "url('images/4.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
}}></div>
  <Divider style={{ backgroundColor: '#444', height: '2px', margin: '2rem 0' }} />
      {/* Published Books */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-2xl font-bold mb-12 text-center">Published Books</h2>
        <div className="grid grid-cols-1">
          <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="shadow-lg p-4">
              <Image
                src="/images/ai-powered.png"
                alt="Published Book"
                width={1200}
                height={200}
                className="mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">The AI-Powered Software Engineer</h3>
              <p className="text-white mb-4 text-[13px]">
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
          </div>
          <div className="grid grid-cols-1">
          <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="shadow-lg p-4">
              <Image
                src="/images/cybersecurity.jpg"
                alt="Second Published Book"
                width={500}
                height={300}
                className="mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">Cybersecurity Interview Handbook</h3>
              <p className="text-white mb-4 text-[13px]">
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
          <div className="grid grid-cols-1">
          <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="shadow-lg p-4">
              <Image
                src="/images/ai-work-1.png"
                alt="third Published Book"
                width={500}
                height={300}
                className="mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">How to make AI work for you?</h3>
              <p className="text-white mb-4 text-[13px]">
                Digital Business Ideas: Use AI to Work Less, Create More, and Earn Online.
              </p>
              <Button 
                label="Buy on "
                className="p-button-raised p-button-warning"
                onClick={() => window.open('https://a.co/d/cmYYN5R', '_blank')}
              >
                <img src="/images/amazon.png" alt="Amazon Logo" width={100} height={30} className="mr-2" />
          </Button>
            </Card>
          </motion.div>
          </div>
          <div className="grid grid-cols-1">
          <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="shadow-lg p-4">
              <Image
                src="/images/author-1.png"
                alt="fourth Published Book"
                width={500}
                height={200}
                className="mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">Upcomming Books..</h3>
              <p className="text-white mb-4 text-[13px]">
                Check amazon author page for latest books.
              </p>
              <Button 
                label="Click for Latest Books"
                className="p-button-raised p-button-warning"
                onClick={() => window.open('https://www.amazon.com/author/sagar2025', '_blank')}
              >
                <img src="/images/amazon.png" alt="Amazon Logo" width={100} height={30} className="mr-2" />
          </Button>
            </Card>
          </motion.div>
        </div>
      </div> 
    </div>
  );
}
