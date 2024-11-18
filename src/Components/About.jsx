import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="bg-yellow-100 text-gray-800 py-12" id='about'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            className="text-3xl text-[#004d40] font-semibold tracking-wide uppercase sm:text-4xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Ishan Transport Services is dedicated to providing fast, reliable, and affordable transport solutions.
          </motion.p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Our Mission */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-[#004d40]">Our Mission</h3>
              <p className="mt-4 text-lg text-gray-500">
                Our mission is to provide top-notch transport services that exceed our customers' expectations. We strive to
                ensure timely and safe delivery of goods, while maintaining the highest standards of professionalism and
                customer service.
              </p>
            </motion.div>

            {/* Our Values */}
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg "
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-[#004d40]">Our Values</h3>
              <ul className="mt-4 text-lg text-gray-500 list-disc list-inside">
                <li>Reliability</li>
                <li>Efficiency</li>
                <li>Customer Satisfaction</li>
                <li>Integrity</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;