import React, { useState, useEffect } from 'react';
import { useCart } from '../Componets/CartContext'; 
import { FaTrash } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Dashbord = () => {
  const { cart, wishlist, getTotalPrice, removeFromCart, removeFromWishlist, clearCart, clearWishlist } = useCart();
  const [activeTab, setActiveTab] = useState('cart');
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/db/cart') {
      setActiveTab('cart');
    } else if (location.pathname === '/db/wishlist') {
      setActiveTab('wishlist');
    }
  }, [location.pathname]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleDeleteFromCart = (item) => {
    removeFromCart(item);
  };

  const handleDeleteFromWishlist = (item) => {
    removeFromWishlist(item);
  };

  const handlePurchase = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    clearCart();
    clearWishlist();
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-gray-50 min-h-screen">
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

      {/* Cart Tab */}
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
            <>
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
              <div className="flex justify-center mt-8">
                <button
                  onClick={handlePurchase}
                  className="bg-green-600 text-white px-6 py-3 rounded-lg text-xl hover:bg-green-700 transition"
                >
                  Purchase
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Wishlist Tab */}
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm text-center">
            <h3 className="text-2xl font-semibold mb-4">Purchase successfully</h3>
            <button
              className="mt-4 bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800 transition"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashbord;
