import React from 'react';
import { motion } from 'framer-motion';

function Services() {
  const services = [
    {
      title: "Express Delivery",
      description: "Fast and reliable delivery services to ensure your packages arrive on time.",
      icon: "🚚",
    },
    {
      title: "Freight Shipping",
      description: "Comprehensive freight shipping solutions for businesses of all sizes.",
      icon: "📦",
    },
    {
      title: "Warehousing",
      description: "Secure and efficient warehousing services to store your goods safely.",
      icon: "🏢",
    },
  ];

  return (
    <div className="bg-yellow-100 text-gray-800 py-12" id='services'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center">
          <h2 className=" text-[#004d40] font-semibold tracking-wide uppercase text-3xl sm:text-4xl">Our Services</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We provide a wide range of transport and logistics services to meet your needs.
          </p>
        </div>

        {/* Services Section */}
        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg w-72 text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{service.icon}</div>
              {/* Title */}
              <h3 className="text-2xl font-bold text-[#004d40]">{service.title}</h3>
              {/* Description */}
              <p className="mt-4 text-lg text-gray-500">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
