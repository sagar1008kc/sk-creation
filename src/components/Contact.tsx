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
    <div className="text-center mb-4">
  <h5 className="text-2xl font-semibold text-white mb-4">
    Stay Tuned!
  </h5>
  <p className="text-gray-700 text-md md:text-lg max-w-xl mx-auto p-3">
    Have a message for us or feedback to share? We’d love to hear from you!
    Leave your name and email below, and we’ll notify you when we release new books,
    launch fresh designs, or update our shop with exciting items.
  </p>
</div>
    <div className="flex justify-center items-center px-4">
      <div className="p-8 rounded-lg shadow-md w-full max-w-xl">
        <h2 className="text-2xl font-bold text-center text-black mb-6">
          Contact Us
        </h2>
        {submitted ? (
          <p className="text-green-600 text-center">
            Thank you! We will notify you when new books or items are available.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block mb-1 font-medium">
                Full Name <span className="text-red-500">*</span>
              </label>
              <InputText
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-gray-200 p-2 rounded-md text-black"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <InputText
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-200 p-2 rounded-md text-black"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-1 font-medium text-black">
                Phone (optional)
              </label>
              <InputText
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-gray-200 p-2 rounded-md text-black"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-medium text-black">
                Message (optional)
              </label>
              <InputTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-gray-200 p-2 rounded-md text-black"
                rows={4}
              />
            </div>

            <Button type="submit" label="Notify Me" className="w-full bg-[#800000] p-2 rounded-full" />
          </form>
        )}
      </div>
    </div>
    </>
  );
}
