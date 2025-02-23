import React from "react";
import { Link } from "react-router-dom";
import LogoImg from '../../../../image.png'

function Logo() {
  return (
    <div className=" font-bold ">
      <Link to="/" className="flex items-center">
        <img
          src={'https://res.cloudinary.com/ddssf6cm6/image/upload/v1740301731/c557bc945b2762888dac46485524055f_dqffi5.png'}
          alt="Logo"
          className=" hover:scale-125 hover:duration-500 w-28 h-20 rounded"
        />{" "}
        {/* Use the logo as an image */}
      </Link>
    </div>
  );
}

export default Logo;
