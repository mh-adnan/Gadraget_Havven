import React, { useEffect, useState } from "react";

const CategoryWithProducts = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [products, setProducts] = useState([]);

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

  const filteredProducts =
    selectedCategory === "All Products"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="flex h-[30%] bg-gradient-to-r from-purple-50 to-white">
      {/* Sidebar */}
      <div className="w-48 h-[80vh] bg-white p-4 shadow-lg">
        <h2 className="text-xl font-bold text-purple-700 mb-6 border-b pb-2">
          Categories
        </h2>
        <ul className="space-y-3">
          {categories.map((cat) => (
            <li
              key={cat.id}
              onClick={() => setSelectedCategory(cat.category)}
              className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat.category
                  ? "bg-purple-600 text-white shadow"
                  : "text-purple-800 hover:bg-purple-200"
              }`}
            >
              {cat.category}
            </li>
          ))}
        </ul>
      </div>

      {/* Product Grid */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-purple-700 mb-6">
          {selectedCategory}
        </h1>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-lg shadow hover:shadow-xl transition duration-300 bg-white flex flex-col"
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
                    <p className="text-purple-700 font-bold text-base mb-4">
                      ${product.price}
                    </p>
                  </div>
                  <button className="mt-auto bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-20">
            No products available in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default CategoryWithProducts;
