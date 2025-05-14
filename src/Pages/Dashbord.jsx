import React, { useState } from 'react';
import { useCart } from '../Componets/CartContext'; 
import { FaTrash } from 'react-icons/fa';

const Dashbord = () => {
<<<<<<< HEAD
  const { cart, wishlist, getTotalPrice, removeFromCart, removeFromWishlist } = useCart();
  const [activeTab, setActiveTab] = useState('cart');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleDeleteFromCart = (item) => {
    removeFromCart(item);
  };

  const handleDeleteFromWishlist = (item) => {
    removeFromWishlist(item);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-gray-50">
      <h1 className="text-4xl font-extrabold mb-8 text-purple-800 text-center">🛒 Dashboard</h1>

      <div className="mb-8 flex justify-center space-x-6">
        <button
          className={`px-8 py-3 text-xl font-medium rounded-full transition duration-300 ${activeTab === 'cart' ? 'bg-purple-700 text-white shadow-lg' : 'bg-gray-300 text-gray-700'} hover:bg-purple-600`}
          onClick={() => handleTabChange('cart')}
        >
          Cart
        </button>
        <button
          className={`px-8 py-3 text-xl font-medium rounded-full transition duration-300 ${activeTab === 'wishlist' ? 'bg-purple-700 text-white shadow-lg' : 'bg-gray-300 text-gray-700'} hover:bg-purple-600`}
          onClick={() => handleTabChange('wishlist')}
        >
          Wishlist
        </button>
      </div>

      {activeTab === 'cart' && (
        <div className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold text-green-700">Cart Items</h2>
            <div className="font-bold text-xl text-purple-800">
              Total: ${getTotalPrice().toFixed(2)}
            </div>
          </div>
          {cart.length === 0 ? (
            <p className="text-gray-500 text-lg text-center">No items in cart.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
                  <div className="flex items-center gap-6">
                    <img src={item.image} alt={item.product_title} className="w-20 h-20 object-cover rounded-md shadow-lg" />
                    <div>
                      <h3 className="font-semibold text-lg">{item.product_title}</h3>
                      <p className="text-sm text-gray-600">${item.price}</p>
                    </div>
                  </div>
                  <button
                    className="text-red-500 hover:text-red-700 transition duration-300"
                    onClick={() => handleDeleteFromCart(item)}
                  >
                    <FaTrash className="text-2xl" />
                  </button>
                </div>
              ))}
            </div>
          )}
=======
    return (
        <div>
            <h1>db from adnan</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit tempora, sequi iusto, fugiat consectetur, doloribus repellat repellendus porro aperiam excepturi quas ad. Reiciendis dolores ratione distinctio vitae praesentium obcaecati cum.</p>
>>>>>>> eee6b273a78b997f550fb6f5fe1cc5ea183eec67
        </div>
      )}

      {activeTab === 'wishlist' && (
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-pink-700">Wishlist</h2>
          {wishlist.length === 0 ? (
            <p className="text-gray-500 text-lg text-center">No items in wishlist.</p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {wishlist.map((item, index) => (
                <div key={index} className="flex justify-between items-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300">
                  <div className="flex items-center gap-6">
                    <img src={item.image} alt={item.product_title} className="w-20 h-20 object-cover rounded-md shadow-lg" />
                    <div>
                      <h3 className="font-semibold text-lg">{item.product_title}</h3>
                      <p className="text-sm text-gray-600">${item.price}</p>
                    </div>
                  </div>
                  <button
                    className="text-red-500 hover:text-red-700 transition duration-300"
                    onClick={() => handleDeleteFromWishlist(item)}
                  >
                    <FaTrash className="text-2xl" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dashbord;
