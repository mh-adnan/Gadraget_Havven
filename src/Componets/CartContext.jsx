import React, { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
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
    if (cart.some((cartItem) => cartItem.id === item.id)) {
      toast.warning("This product is already in the cart!", { position: "top-center", autoClose: 1000 });
      return;
    }
    setCart((prevCart) => [...prevCart, item]);
    toast.success(`${item.product_title} added to cart!`, { position: "top-center", autoClose: 1000 });
  };

  const addToWishlist = (item) => {
    if (!item || !item.id) return;
    if (wishlist.some((wishItem) => wishItem.id === item.id)) {
      toast.warning("This product is already in the wishlist!", { position: "top-center", autoClose: 1000 });
      return;
    }
    setWishlist((prevWishlist) => [...prevWishlist, item]);
    toast.success(`${item.product_title} added to wishlist!`, { position: "top-center", autoClose: 1000 });
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((cartItem) => cartItem.id !== item.id);
      toast.info(`${item.product_title} removed from cart!`, { position: "top-center", autoClose: 1000 });
      return updatedCart;
    });
  };

  const removeFromWishlist = (item) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.filter((wishItem) => wishItem.id !== item.id);
      toast.info(`${item.product_title} removed from wishlist!`, { position: "top-center", autoClose: 1000 });
      return updatedWishlist;
    });
  };

  // New purchaseCart function
  const purchaseCart = () => {
    if (cart.length === 0) {
      toast.error("No items in cart to purchase!", { position: "top-center" });
      return false;  // purchase failed
    }
    setCart([]);
    toast.success("Purchase completed successfully!", { position: "top-center" });
    return true;  // purchase success
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
        purchaseCart,
      }}
    >
      {children}
      <ToastContainer position="top-top" autoClose={1000} />
    </CartContext.Provider>
  );
};

export default CartProvider;
