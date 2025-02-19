import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import Carousel2 from "./Carousel2";
import Navbar from "../../Shared/Nav/Components/Navbar";

const quote = [
  {
    id: 1,
    description: `“I’m all you need baby” `,
  },
  {
    id: 2,
    description: `“Looking into my eyes when I’m talking to you, take this love that I’m giving to you “ `,
  },
  {
    id: 3,
    description: `“Everyday is holiday, I will celebrate, bad energy for away”`,
  },
  {
    id: 4,
    description: `“No money no love”`,
  },
  {
    id: 5,
    description: `“Never been the same since I met you”`,
  },
  {
    id: 6,
    description: `“Fine like Benita, sweet like Belinda”`,
  },
  {
    id: 7,
    description: `“She do me something I can’t deny”`,
  },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quote.length);
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [quote.length]);
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
      <div
        style={{ fontFamily: "Paytone One, serif" }}
        className="absolute top-20 sm:top-16 lg:top-30 right-auto sm:right-20 text-5xl"
      >
        JSlught
      </div>

      {/* Carousel */}
      <div className="hidden sm:flex px-24 w-full h-48 justify-between">
        <Carousel />
        <Carousel2 />
      </div>

      {/* Quote in Bottom Right Corner */}
      <div className="absolute bottom-20 px-16 italic right-4 text-lg">
        <p >{quote[currentIndex].description}</p>
      </div>
    </div>
  );
}

export default Home;
