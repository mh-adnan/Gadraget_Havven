import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistic = () => {
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    toast.success("Statistics Loaded Successfully!", {
      position: "top-right",
      autoClose: 2500,
      pauseOnHover: true,
      theme: "colored",
    });
  }, []);

  const stats = [
    { id: 1, title: "Total Sales", value: 45000, type: "Sales" },
    { id: 2, title: "Total Orders", value: 1500, type: "Orders" },
    { id: 3, title: "New Users", value: 350, type: "Users" },
    { id: 4, title: "Refunds", value: 1200, type: "Sales" },
  ];

  const filteredStats = filter === "All" ? stats : stats.filter((s) => s.type === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 p-8">
      <ToastContainer />
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-10 drop-shadow-md">
        📈 Insights & Statistics
      </h1>

      {/* Filter Dropdown */}
      <div className="flex justify-center mb-6">
        <select
          className="px-4 py-2 rounded-lg border text-purple-700 shadow-md focus:outline-none"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Sales">Sales</option>
          <option value="Orders">Orders</option>
          <option value="Users">Users</option>
        </select>
      </div>

      {/* Animated Stat Cards */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {filteredStats.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-500 hover:border-purple-700 hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-lg font-semibold text-gray-700">{item.title}</h2>
            <p className="text-3xl font-bold text-purple-800 mt-2">${item.value.toLocaleString()}</p>
          </motion.div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="mt-12 bg-white p-6 rounded-xl shadow-xl">
        <h3 className="text-2xl font-bold text-purple-700 mb-4">📊 Performance Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={stats} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="title" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#a855f7" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistic;
