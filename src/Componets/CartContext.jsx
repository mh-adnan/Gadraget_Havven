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

  // Total price of cart
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  // Add item to cart
  const addToCart = (item) => {
    if (!item || !item.id) return;

    const alreadyInCart = cart.some((cartItem) => cartItem.id === item.id);

    if (alreadyInCart) {
      toast.warning("This product is already in the cart!", {
        position: "top-center",
        autoClose: 1000,
      });
      return;
    }

    setCart((prevCart) => [...prevCart, item]);

    toast.success(`${item.product_title} added to cart!`, {
      position: "top-center",
      autoClose: 1000,
    });
  };

  // Add item to wishlist
  const addToWishlist = (item) => {
    if (!item || !item.id) return;

    const alreadyInWishlist = wishlist.some((wishItem) => wishItem.id === item.id);
    if (alreadyInWishlist) {
      toast.warning("This product is already in the wishlist!", {
        position: "top-center",
        autoClose: 1000,
      });
      return;
    }

    setWishlist((prevWishlist) => [...prevWishlist, item]);

    toast.success(`${item.product_title} added to wishlist!`, {
      position: "top-center",
      autoClose: 1000,
    });
  };

  // Remove from cart
  const removeFromCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((cartItem) => cartItem.id !== item.id);
      toast.info(`${item.product_title} removed from cart!`, {
        position: "top-center",
        autoClose: 1000,
      });
      return updatedCart;
    });
  };

  // Remove from wishlist
  const removeFromWishlist = (item) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter((wishItem) => wishItem.id !== item.id);
      toast.info(`${item.product_title} removed from wishlist!`, {
        position: "top-center",
        autoClose: 1000,
      });
      return updatedWishlist;
    });
  };

  // Clear all items from cart
  const clearCart = () => {
    setCart([]);
    toast.success("Thanks For Purchasing", {
      position: "top-center",
      autoClose: 1000,
    });
  };

  // Clear all items from wishlist
  const clearWishlist = () => {
    setWishlist([]);
    toast.success("Wishlist cleared!", {
      position: "top-top",
      autoClose: 1000,
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
        clearCart,
        clearWishlist,
      }}
    >
      {children}
      <ToastContainer position="top-top" autoClose={1000} />
    </CartContext.Provider>
  );
};

export default CartProvider;
