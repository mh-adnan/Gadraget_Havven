



import React from "react";
import Navbar from "../Componets/Navbar";
import Footer from "../Componets/Footer";
import { Outlet, useLocation } from "react-router";
import CategorySidebar from "../Componets/CategoryWithProducts";


const MainLayout = () => {
  const location = useLocation();

  // Check if the current route is the home page ("/")
  const isHomePage = location.pathname === "/";

  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-249px)] py-12 container mx-auto px-12">
        <Outlet />
        {isHomePage && <CategorySidebar />} {/* Show CategorySidebar only on Home page */}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;




