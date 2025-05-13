import React from "react";
import Navbar from "../Componets/Navbar";
import Footer from "../Componets/Footer";
import { Outlet } from "react-router";
import CategorySidebar from "../Componets/CategorySidebar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-249px)] py-12 container mx-auto px-12">
        <Outlet></Outlet>
        <CategorySidebar></CategorySidebar>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;





