import React, { useState, useEffect } from 'react';
import { invoice } from '../assets';

function Invoice() {
  const [showInvoice, setShowInvoice] = useState(true);

  useEffect(() => {
    // Hide the invoice image after 5 seconds
    const timer = setTimeout(() => {
      setShowInvoice(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowInvoice(false);
  };

  return (
    <>
      {showInvoice && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative bg-white p-4 shadow-lg max-w-sm w-full text-center">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-3xl p-2"
              onClick={handleClose}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-[#004d40]">Transport Invoice</h2>
            <img
              className="w-full h-auto object-cover rounded-lg"
              src={invoice}
              alt="Invoice"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Invoice;