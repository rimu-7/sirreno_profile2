import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar2 from "../Pages/Shared/Nav/Navbar";

const Main = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="bg-[#212121] text-white min-h-screen flex flex-col">
      {/*  */}
      {!isHomePage && <Navbar2 />}

      {/* Content area that grows to fill remaining space */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Conditionally render the Footer */}
      {!isHomePage && <Footer />}
    </div>
  );
};

export default Main;
