// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import MainLayout from "./Layout/MainLayout";

// import "./index.css";
// import Dashbord from "./Pages/Dashbord";
// import Accessories from "./Pages/Accessories";
// import Statistics from "./Pages/Statistics";
// import Home from "./Pages/Home";
// import ProductDetails from "./Pages/ProductDetails";
// import CartProvider from "./Componets/CartContext"; // Context

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function App() {
//   return (
//     <CartProvider>
//       <Routes>
//         <Route path="/" element={<MainLayout />}>
//           <Route index element={<Home />} />
          
//           {/* Dashboard Routes */}
//           <Route path="db" element={<Dashbord />} />
//           <Route path="db/cart" element={<Dashbord />} />
//           <Route path="db/wishlist" element={<Dashbord />} />

//           {/* Other Pages */}
//           <Route path="ac" element={<Accessories />} />
//           <Route path="st" element={<Statistics />} />
//           <Route path="product/:id" element={<ProductDetails />} />
//         </Route>
//       </Routes>

//       {/* Global Toast Notification */}
//       <ToastContainer position="top-top" autoClose={2000} />
//     </CartProvider>
//   );
// }

// export default App;






























import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";

import "./index.css";
import Dashbord from "./Pages/Dashbord";
import Accessories from "./Pages/Accessories";
import Statistics from "./Pages/Statistics";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import CartProvider from "./Componets/CartContext"; // ডিফল্ট এক্সপোর্ট

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="db" element={<Dashbord />} />
          <Route path="db/cart" element={<Dashbord />} />
          <Route path="db/wishlist" element={<Dashbord />} />
          <Route path="ac" element={<Accessories />} />
          <Route path="st" element={<Statistics />} />
          <Route path="product/:id" element={<ProductDetails />} />
        </Route>
      </Routes>

      <ToastContainer position="top-center" autoClose={2000} />
    </CartProvider>
  );
}

export default App;
