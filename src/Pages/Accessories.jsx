import React, { useEffect, useState } from 'react';

const Accessories = () => {
  const [accessories, setAccessories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch items.json from your API
    fetch('../../public/items.json') // আপনার API বা JSON ফাইলের পাথ দিন
      .then(response => response.json())
      .then(data => {
        setAccessories(data); // API থেকে পাওয়া ডাটা set করা
        setLoading(false); // লোডিং কমপ্লিট
      })
      .catch(err => {
        setError('Failed to load items.'); // যদি কোনো এরর হয়
        setLoading(false); // লোডিং বন্ধ করা
      });
  }, []); // এটি একবারই রান হবে যখন কম্পোনেন্ট প্রথম রেন্ডার হবে

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-2xl text-purple-800">Loading accessories...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-2xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <h1 className="text-5xl font-extrabold text-center text-purple-800 mb-12">🔥 Accessories Collection</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {accessories.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
          >
            <img
              src={item.image} // আপনার JSON ফাইলে ইমেজ পাথ থাকতে হবে
              alt={item.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-purple-700">{item.name}</h3>
              <p className="text-lg text-gray-500">${item.price}</p>
              {/* <button
                className="mt-4 w-full py-2 text-white bg-purple-600 hover:bg-purple-700 rounded-full text-xl transition duration-300"
              >
                Add to Cart
              </button> */}
            </div>
          </div>
        ))}
      </div>

      <footer className="mt-16 text-center text-gray-700">
        <p className="text-lg">© 2025 Accessories Haven | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Accessories;
