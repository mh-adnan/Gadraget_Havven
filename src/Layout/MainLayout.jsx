import React from "react";
import Navbar from "../Componets/Navbar";
import Footer from "../Componets/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-249px)] py-12 container mx-auto px-12">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
