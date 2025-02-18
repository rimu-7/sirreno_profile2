import React from "react";



function SecondPart() {
  return (
    <div className="py-10 bg-[#212121] my-10 gap-4 flex flex-col lg:flex-row items-center p-4">
      {/* Left Side - Text Content */}
      <div className="w-full lg:w-1/2 lg:pl-6 mt-6 lg:mt-0">
        {/* <div className="text-white flex gap-2">
          <p className="bg-orange-100 text-orange-700 px-2 text-justify rounded">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <p className="bg-orange-100 text-orange-700 px-2 text-justify rounded">
            2000
          </p>
        </div> */}
        <h1
          className="text-5xl my-5 lg:text-6xl text-amber-400 font-bold flex justify-center items-center gap-2"
          style={{ fontFamily: "Abril Fatface, serif" }}
        >
          OUR VISION
        </h1>
        <p className="text-white flex text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        {/* <div className="flex justify-center gap-x-6 mt-4">
          <BsMusicNote className="text-5xl lg:text-6xl p-3 rounded-full bg-gray-800 text-white transition-all duration-500 hover:text-orange-600 hover:scale-110 cursor-pointer" />

          <Link to="https://www.facebook.com/share/14pR5KvBmuU/?mibextid=wwXIfr">
            <FaFacebook className="text-5xl lg:text-6xl p-3 rounded-full bg-blue-600 text-white transition-all duration-500 hover:bg-blue-700 hover:scale-110" />
          </Link>

          <Link to="https://www.instagram.com/nativebreedmedia?igsh=MWZ2MGQ5Y2cxZW5nNQ==">
            <FaInstagram className="text-5xl lg:text-6xl p-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white transition-all duration-500 hover:scale-110" />
          </Link>

          <Link to="https://www.tiktok.com/@nativebreedmedia">
            <FaTiktok className="text-5xl lg:text-6xl p-3 rounded-full bg-black text-white transition-all duration-500 hover:text-gray-400 hover:scale-110" />
          </Link>

          <Link to="https://twitter.com/nativebreedmedia">
            <FaTwitter className="text-5xl lg:text-6xl p-3 rounded-full bg-blue-500 text-white transition-all duration-500 hover:bg-blue-600 hover:scale-110" />
          </Link>

          <Link to="https://www.youtube.com/@nativebreedmedia">
            <FaYoutube className="text-5xl lg:text-6xl p-3 rounded-full bg-red-600 text-white transition-all duration-500 hover:bg-red-700 hover:scale-110" />
          </Link>
        </div> */}
      </div>

      {/* Right Side - Image Gallery */}
      <div className="">
        <div>
          <img
            className="object-cover object-center  max-w-full rounded-lg hover:scale-105 hover:duration-500"
            src={"https://picsum.photos/seed/picsum/200/300"}
          />
        </div>
      </div>
    </div>
  );
}

export default SecondPart;