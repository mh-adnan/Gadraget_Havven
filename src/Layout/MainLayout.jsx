import React, { useEffect } from "react";
import Navbar from "../Componets/Navbar";
import Footer from "../Componets/Footer";
import { Outlet, useLocation } from "react-router";
import CategorySidebar from "../Componets/CategoryWithProducts";

const MainLayout = () => {
  const location = useLocation();

  // Check if the current route is the home page ("/")
  const isHomePage = location.pathname === "/";

  // Dynamic Title Update
  useEffect(() => {
    const path = location.pathname;

    let pageTitle = "GadgetHaven"; // default title

    if (path === "/" || path === "/home") {
      pageTitle = "Home | GadgetHaven";
    } else if (path === "/dashbord") {
      pageTitle = "Dashboard | GadgetHaven";
    } else if (path === "/statistic") {
      pageTitle = "Statistic | GadgetHaven";
    } else {
      // make first letter uppercase
      const formattedPath = path.replace("/", "").charAt(0).toUpperCase() + path.slice(2);
      pageTitle = `${formattedPath} | GadgetHaven`;
    }

    document.title = pageTitle;
  }, [location]);

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
