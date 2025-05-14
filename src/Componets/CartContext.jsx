import React, { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Create Context
const CartContext = createContext();

// Custom hook
export const useCart = () => {
  return useContext(CartContext);
};

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const addToCart = (item) => {
    if (!item || !item.id) return;

    const alreadyInCart = cart.some((cartItem) => cartItem.id === item.id);

    if (alreadyInCart) {
      toast.warning("This product is already in the cart!", {
        position: "top-right",
        autoClose: 2000, // Auto close after 2 seconds
      });
      return;
    }

    setCart((prevCart) => [...prevCart, item]);
    // Removed "Added to cart" notification.
  };

  const addToWishlist = (item) => {
    if (!item || !item.id) return;

    const alreadyInWishlist = wishlist.some((wishItem) => wishItem.id === item.id);
    if (alreadyInWishlist) {
      toast.warning("This product is already in the wishlist!", {
        position: "top-right",
        autoClose: 2000, // Auto close after 2 seconds
      });
      return;
    }

    setWishlist((prevWishlist) => [...prevWishlist, item]);
    toast.success("Added to wishlist successfully!", {
      position: "top-right",
      autoClose: 2000, // Auto close after 2 seconds
    });
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((cartItem) => cartItem.id !== item.id);
      toast.info(`${item.product_title} removed from cart!`, {
        position: "top-right",
        autoClose: 2000, // Auto close after 2 seconds
      });
      return updatedCart;
    });
  };

  const removeFromWishlist = (item) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter((wishItem) => wishItem.id !== item.id);
      toast.info(`${item.product_title} removed from wishlist!`, {
        position: "top-right",
        autoClose: 2000, // Auto close after 2 seconds
      });
      return updatedWishlist;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        getTotalPrice,
        addToCart,
        addToWishlist,
        removeFromCart,
        removeFromWishlist,
      }}
    >
      {children}
      <ToastContainer position="top-right" autoClose={2000} />
    </CartContext.Provider>
  );
};

export default CartProvider;
