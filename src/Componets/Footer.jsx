import React from 'react';
import fb from"../assets/social/Fb.png"
import yt from"../assets/social/Youtube_logo.png"
import insta from"../assets/social/insta .jpeg"
import twit from"../assets/social/twitter.png"
import logo from"../assets/logo3.png"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-black to-purple-900 text-white py-12 px-6">
      {/* Logo, Title, Tagline */}
      <div className="flex flex-col items-center justify-center text-center space-y-6">
        {/* Logo and Title */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Gadget Haven Logo"
            className="w-20 h-20 object-contain rounded-xl"
          />
          <h1 className="text-4xl font-extrabold tracking-wider">Gadget Haven</h1>
        </div>

        {/* Tagline */}
        <p className="text-lg text-gray-300 font-bold">
          Providing cutting-edge gadgets since 1992
        </p>

        {/* Social Links */}
        <div className="flex space-x-8 pt-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <img
              src={twit}
              alt="Twitter"
              className="w-12 h-12 rounded-full transition-all duration-500 transform hover:scale-125 hover:ring-4 hover:ring-purple-500 hover:shadow-lg hover:shadow-purple-700"
            />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <img
              src={yt}
              alt="YouTube"
              className="w-12 h-12 rounded-full transition-all duration-500 transform hover:scale-125 hover:ring-4 hover:ring-red-500 hover:shadow-lg hover:shadow-red-700"
            />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <img
              src={fb}
              alt="Facebook"
              className="w-12 h-12 rounded-full transition-all duration-500 transform hover:scale-125 hover:ring-4 hover:ring-blue-500 hover:shadow-lg hover:shadow-blue-700"
            />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img
              src={insta}
              alt="Instagram"
              className="w-12 h-12 rounded-full transition-all duration-500 transform hover:scale-125 hover:ring-4 hover:ring-pink-500 hover:shadow-lg hover:shadow-pink-700"
            />
          </a>
        </div>
      </div>

      {/* Extra Footer Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left mt-12 px-6 text-base text-gray-300">
        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Report Issue</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-3">Subscribe to our newsletter</h3>
          <p className="mb-3 text-base">Stay updated with the latest gadgets and deals.</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-md text-black focus:outline-none text-base"
          />
          <button className="mt-3 bg-purple-700 hover:bg-purple-600 text-white px-5 py-2 rounded-md transition text-base">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-12 text-sm text-center text-gray-400 border-t border-gray-700 pt-5">
        &copy; {new Date().getFullYear()} Gadget Haven. All rights reserved. | Contact: <span className="underline">support@gadgethaven.com</span>
      </div>
    </footer>
  );
};

export default Footer;
