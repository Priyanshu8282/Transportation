import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_2jbu2qn',
        'template_yl55r5j',
        {
          from_name: form.name,
          to_name: 'Ishan Transport Services',
          from_email: form.email,
          message: form.message,
          mobile: form.phone,
        },
        'zWaJxBEjFPbt12kal'
      )
      .then(
        () => {
          setLoading(false);
          toast.success('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            phone: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error('Ahh, something went wrong. Please try again.');
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Ishan Transport Services</title>
        <meta name="description" content="Get in touch with Ishan Transport Services. We are here to assist you with your transport needs." />
        <meta name="keywords" content="contact, transport services, Ishan Transport Services" />
      </Helmet>
      <div className="bg-yellow-100 py-16 px-4 text-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <motion.h2
            className="text-4xl font-bold tracking-wide uppercase mb-4 text-[#004d40]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="text-lg text-[#004d40] mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Have questions or need assistance? Fill out the form below, and we’ll get back to you promptly.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto bg-[#004d40] p-8 rounded-lg shadow-lg">
          {/* Form */}
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            onSubmit={handleSubmit}
          >
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-lg font-medium mb-1 text-yellow-100">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-yellow-100 text-[#004d40] focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-1 text-yellow-100">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-yellow-100 text-[#004d40] focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>
            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-lg font-medium mb-1 text-yellow-100">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-yellow-100 text-[#004d40] focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>
            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-1 text-yellow-100">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here"
                value={form.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-yellow-100 text-[#004d40] focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="text-center">
              <motion.button
                type="submit"
                className="px-8 py-3 bg-yellow-500 text-[#004d40] font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Submit'}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </>
  );
}

export default Contact;