'use client';

import { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      alert('Full Name and Email are required.');
      return;
    }
    setSubmitted(true);
    console.log('Form submitted:', formData);
    // Optionally send this to a backend or email service
  };

  return (
    <>
    <div className='bg-blue-100'>
    <div className="text-center mb-4 ">
    <h5 className="text-2xl text-black m-4 p-4">
        Stay Tuned!
    </h5>
  <span className="text-sm md:text-md max-w-xl text-black mx-auto p-5">
    Have a message for us or feedback to share? We’d love to hear from you!
    Leave your name and email below, and we’ll notify you when we release new books,
    launch fresh designs, or update our shop with exciting items.
  </span>

    <div className="flex justify-center items-center px-4">
      <div className="p-8 rounded-lg shadow-md w-full max-w-xl">
        <span className="text-xl font-bold text-center text-[#808080]">
          Contact Us
        </span>
        {submitted ? (
          <p className="text-black text-center">
            Thank you! We will notify you when new books or items are available.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 mt-3">
            <div>
              <label htmlFor="fullName" className="block mb-1 font-small text-black">
                Full Name <span className="text-red-500">*</span>
              </label>
              <InputText
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-white p-2 rounded-md text-black"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-small text-black">
                Email <span className="text-red-500">*</span>
              </label>
              <InputText
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white p-2 rounded-md text-black"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-1 font-small text-black">
                Phone (optional)
              </label>
              <InputText
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white p-2 rounded-md text-black"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-small text-black">
                Message (optional)
              </label>
              <InputTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-white p-2 rounded-md text-black"
                rows={4}
              />
            </div>

            <Button type="submit" label="Submit" className="w-full bg-[#800000] p-2 rounded-full text-white" />
          </form>
        )}
        </div>
       
      </div>
      <p className="text-sm p-4 text-black">
          <span>Email: </span> info@smindbusiness.com
          </p>
    </div>
    </div>
    </>
  );
}
