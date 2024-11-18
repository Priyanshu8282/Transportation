import React from 'react';
import { logo, pharma } from '../assets';

function Footer() {
  return (
    <footer className="bg-green-900 text-yellow-200 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Information */}
          <div>
            <img
              src={logo}
              alt="Ishan Transport Services Logo"
              className="w-20 h-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-4">Ishan Transport Services</h3>
            <p className="mb-2">
              <span className="font-semibold">Contact Person:</span> Vinod Dayma
            </p>
            <p className="mb-2">
              <span className="font-semibold">Phone:</span> 9898001715
            </p>
            <p className="mb-2">
              <span className="font-semibold">Email:</span>{' '}
              <a
                href="mailto:Vinoddayma780@gmail.com"
                className="underline hover:text-yellow-400"
              >
                Vinoddayma780@gmail.com
              </a>
            </p>
            <p className="mb-2">
              <span className="font-semibold">Address:</span> Village - Khempur, The. Mavli, Dist. Udaipur (Raj.)
            </p>
          </div>

          {/* Ishan Pharma Information */}
          <div>
            <img
              src={pharma}
              alt="Ishan Pharma Logo"
              className="w-20 h-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-4">Ishan Pharma</h3>
            <p className="mb-2">
              <span className="font-semibold">Contact Person:</span> Vinod Dayma
            </p>
            <p className="mb-2">
              <span className="font-semibold">Phone:</span> 9898001715
            </p>
            <p className="mb-2">
              <span className="font-semibold">PAN:</span> FISPB6651K
            </p>
            <p className="mb-2">
              <span className="font-semibold">GSTIN:</span> 08FISPB6651K1ZO
            </p>
            <p className="mb-2">
              <span className="font-semibold">Email:</span>{' '}
              <a
                href="mailto:ishanpharma2014@gmail.com"
                className="underline hover:text-yellow-400"
              >
                ishanpharma2014@gmail.com
              </a>
            </p>
          </div>

          {/* Google Map Embed */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Location</h3>
            <div className="w-full h-64 overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.3458874672283!2d73.89625581540782!3d24.629501884163104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967b7a9e111db7b%3A0x1044d56d7c467d88!2sKhempur%2C%20Rajasthan%20313204!5e0!3m2!1sen!2sin!4v1692285365066!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Transport Service Location"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-yellow-400 my-8" />

        {/* Footer Bottom */}
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Ishan Transport Services & Ishan Pharma. All rights reserved.
          </p>
          <p className="text-sm">
            Designed & Developed by Priyanshu Sharma
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;