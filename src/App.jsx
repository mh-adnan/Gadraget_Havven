import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";

import "./index.css";
import Dashbord from "./Pages/Dashbord";
import Accessories from "./Pages/Accessories";
import Statistics from "./Pages/Statistics";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import CartProvider from "./Componets/CartContext"; // Context

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {/* Dashboard Routes */}
          <Route path="db" element={<Dashbord />} />
          <Route path="db/cart" element={<Dashbord />} />
          <Route path="db/wishlist" element={<Dashbord />} />
          
          {/* Other Pages */}
          <Route path="ac" element={<Accessories />} />
          <Route path="st" element={<Statistics />} />
          <Route path="product/:id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
