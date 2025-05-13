import { useParams, Link } from "react-router-dom";
import items from "../../public/items.json";
import { FaStar, FaShoppingCart, FaArrowLeft, FaHeart } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const product = items.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center text-red-600 mt-10">Product not found</div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-12 px-6 py-10 bg-gradient-to-br from-white to-gray-100 shadow-xl rounded-xl">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Product Image */}
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <img
            src={product.image}
            alt={product.product_title}
            className="w-full h-auto rounded-lg object-contain max-h-[400px]"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {product.product_title}
          </h1>

          {/* Rating */}
          <div className="flex items-center mb-4 text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar className="text-gray-300" />
            <span className="ml-2 text-sm text-gray-600">(4.0/5)</span>
          </div>

          <p className="text-lg text-gray-700 mb-4">
            <span className="font-semibold">Category:</span>{" "}
            {product.category || "Gadget"}
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            <span className="font-semibold">Description:</span>{" "}
            {product.description}
          </p>

          <p className="text-xl font-bold text-green-600 mb-6">
            ${product.price}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 mb-6">
            <button className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-5 py-2 rounded-lg font-semibold shadow flex items-center gap-2 transition duration-300 ease-in-out">
              <FaShoppingCart /> Add to Cart
            </button>
            <button className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-5 py-2 rounded-lg font-semibold shadow flex items-center gap-2 transition duration-300 ease-in-out">
              <FaHeart /> Add to Wishlist
            </button>
          </div>

          {/* Back to Home Button */}
          <Link
            to="/"
            className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white rounded-lg shadow-md hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <FaArrowLeft className="mr-2" />
            <span className="text-sm font-semibold">Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Additional info */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Product Specifications
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <span className="font-semibold">Brand:</span>{" "}
            {product.brand || "Unknown"}
          </li>
          <li>
            <span className="font-semibold">Model:</span>{" "}
            {product.model || "N/A"}
          </li>
          <li>
            <span className="font-semibold">Availability:</span>{" "}
            {product.inStock ? "In Stock" : "Out of Stock"}
          </li>
          <li>
            <span className="font-semibold">Warranty:</span>{" "}
            {product.warranty || "1 Year"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
