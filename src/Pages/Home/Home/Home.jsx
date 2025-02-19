import React from "react";
import Carousel from "./Carousel";
import Carousel2 from "./Carousel2";
import Navbar from "../../Shared/Nav/Components/Navbar";

function Home() {
  return (
    <div
      className="h-screen min-w-screen bg-no-repeat 
      flex items-center justify-center w-full relative
      text-center text-2xl text-white"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden bg-cover 
        bg-[url(https://res.cloudinary.com/ddssf6cm6/image/upload/v1739851698/artist_website_1_fe02ec.jpg)]"
      ></div>
      <Navbar />

      {/* Artist Name in Top Right Corner */}
      <div className="absolute top-20 sm:top-16 lg:top-30 right-auto sm:right-20 text-5xl">
        artist name
      </div>

      {/* Carousel */}
      <div className="hidden sm:flex px-24 w-full h-48 justify-between">
        <Carousel />
        <Carousel2 />
      </div>

      {/* Quote in Bottom Right Corner */}
      <div className="absolute bottom-10 px-16 italic right-4 text-lg">
        <p>artist quote</p>
      </div>
    </div>
  );
}

export default Home;
