import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";

import "./index.css";
import Dashbord from "./Pages/Dashbord";
import Accessories from "./Pages/Accessories";
import Statistics from "./Pages/Statistics";
import Home from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home/>} />
        <Route path="db" element={<Dashbord/>} />
        <Route path="ac" element={<Accessories/>} />
        <Route path="st" element={<Statistics/>} />
      </Route>
    </Routes>
  );
}

export default App;
