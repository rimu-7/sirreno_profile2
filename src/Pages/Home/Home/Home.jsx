import React from "react";
import Carousel from "./Carousel";
import Navbar from "../../Shared/Nav/Components/Navbar";

function Home() {
  return (
    <div
      className="h-screen min-w-screen bg-no-repeat 
  flex items-center justify-center w-full relative
  text-center text-2xl text-white"
    >
      {/* <Carousel /> */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden bg-cover 
  bg-[url(https://res.cloudinary.com/ddssf6cm6/image/upload/v1739851698/artist_website_1_fe02ec.jpg)]"
      >
        
      </div>
      <Navbar />
      <div className="flex px-5 w-full h-48  justify-between">
        <Carousel />
        <Carousel />
      </div>
      
    </div>
  );
}

export default Home;
