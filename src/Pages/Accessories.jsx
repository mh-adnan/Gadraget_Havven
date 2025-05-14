/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const Accessories = () => {
  const [accessories, setAccessories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('../../public/items.json')
      .then(response => response.json())
      .then(data => {
        setAccessories(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load items.');
        setLoading(false);
      });
  }, []); 

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
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-purple-700">{item.name}</h3>
              <p className="text-lg text-gray-500">${item.price}</p>
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
