import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";

import "./index.css";
import Dashbord from "./Pages/Dashbord";
import Accessories from "./Pages/Accessories";
import Statistics from "./Pages/Statistics";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails"; // Import ProductDetails page

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="db" element={<Dashbord />} />
        <Route path="ac" element={<Accessories />} />
        <Route path="st" element={<Statistics />} />
      </Route>
       <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
