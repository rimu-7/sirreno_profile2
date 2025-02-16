import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="bg-[#212121] min-h-screen  text-white">
      <Navbar />

      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
