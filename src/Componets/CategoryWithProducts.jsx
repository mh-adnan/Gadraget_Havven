import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CategoryWithProducts = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Load categories
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // Load products
  useEffect(() => {
    fetch("/items.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Filter products by category and search term
  const filteredProducts = products
    .filter((product) =>
      selectedCategory === "All Products"
        ? true
        : product.category === selectedCategory
    )
    .filter((product) =>
      product.product_title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="flex bg-gradient-to-r from-purple-50 to-white min-h-screen">
      {/* Sidebar */}
      <div className="w-56 h-[90vh] bg-white p-6 shadow-xl border-r border-gray-200 rounded-tr-xl rounded-br-xl sticky top-20">
        <h2 className="text-2xl font-extrabold text-purple-700 mb-8 border-b-2 border-purple-300 pb-3 tracking-wide">
          Categories
        </h2>
        <ul className="space-y-3">
          {/* <li
            onClick={() => setSelectedCategory("All Products")}
            className={`cursor-pointer px-4 py-3 rounded-lg transition-all duration-300 font-semibold text-lg ${
              selectedCategory === "All Products"
                ? "bg-purple-700 text-white shadow-lg shadow-purple-300"
                : "text-purple-700 hover:bg-purple-100 hover:text-purple-900"
            } transform hover:scale-105`}
          >
            All Products
          </li> */}
          {categories.map((cat) => (
            <li
              key={cat.id}
              onClick={() => setSelectedCategory(cat.category)}
              className={`cursor-pointer px-4 py-3 rounded-lg transition-all duration-300 font-semibold text-lg ${
                selectedCategory === cat.category
                  ? "bg-purple-700 text-white shadow-lg shadow-purple-300"
                  : "text-purple-700 hover:bg-purple-100 hover:text-purple-900"
              } transform hover:scale-105`}
            >
              {cat.category}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Search Bar */}
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-700">
            {selectedCategory}
          </h1>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-purple-300 px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-lg shadow hover:shadow-xl transition transform hover:scale-[1.02] duration-300 bg-white flex flex-col"
              >
                <img
                  src={product.image}
                  alt={product.product_title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {product.product_title}
                    </h3>
                    <p className="text-sm text-gray-600 my-2 line-clamp-2">
                      {product.description}
                    </p>
                    <p className="text-purple-700 font-bold text-base mb-2">
                      ${product.price}
                    </p>
                  </div>
                  <NavLink
                    to={`/product/${product.id}`}
                    className="mt-auto inline-block text-sm px-3 py-1.5 rounded-md bg-gradient-to-r from-indigo-700 via-purple-600 to-purple-500 text-white shadow hover:scale-105 transition duration-300"
                  >
                    View Details
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-20">
            No products found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryWithProducts;
