import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Footer from "../Pages/Shared/Footer/Footer";
import JivoChat from "../Pages/Home/Home/jivochat/JivoChat";
import Navbar from "../Pages/Shared/Nav/Navbar";

const Main = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="bg-[#212121] text-white w-full min-h-screen flex flex-col">
      {/* Navbar is hidden on the home page */}
      {!isHomePage && <Navbar />}

      {/* Centered Content with max-width for 4K screens */}
      <div className="flex-grow w-full max-w-[1800px] mx-auto">
        <Outlet />
      </div>

      <JivoChat />

      {/* Footer is always shown at the bottom */}
      {!isHomePage && <Footer />}
    </div>
  );
};

export default Main;
