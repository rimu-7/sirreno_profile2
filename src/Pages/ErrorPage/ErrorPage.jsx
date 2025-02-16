import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen py-20 bg-white">
        <div className="text-9xl font-bold text-center text-gray-900">404</div>
        <h1 className="text-center font-extrabold text-4xl sm:text-5xl mt-6 text-gray-900">
          You have found a secret place.
        </h1>
        <p className="text-gray-500 text-lg text-center max-w-2xl mx-auto mt-6 mb-12">
          Unfortunately, this is only a 404 page. You may have mistyped the
          address, or the page has been moved to another URL.
        </p>
        <div className="flex justify-center">
          <Link to={"./"}>
            <button
              className="px-6 py-2 text-lg font-medium text-blue-600 hover:text-blue-700 cursor-pointer transition-colors"
              to={"/"}
            >
              Take me to the home page
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ErrorPage;
