import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="bg-[#212121] text-white min-h-screen flex flex-col">
      <Navbar />

      {/* Content area that grows to fill remaining space */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  );
};

export default Main;