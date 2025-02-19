import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import Carousel from "./Carousel";
import Carousel2 from "./Carousel2";
import NavbarPC from "../../Shared/Nav/Components/Navbar";
import Navbar from "../../Shared/Navbar/Navbar";

const quote = [
  {
    id: 1,
    description: `"I'm all you need baby" `,
  },
  {
    id: 2,
    description: `"Looking into my eyes when I'm talking to you, take this love that I'm giving to you " `,
  },
  {
    id: 3,
    description: `"Everyday is holiday, I will celebrate, bad energy for away"`,
  },
  {
    id: 4,
    description: `"No money no love"`,
  },
  {
    id: 5,
    description: `"Never been the same since I met you"`,
  },
  {
    id: 6,
    description: `"Fine like Benita, sweet like Belinda"`,
  },
  {
    id: 7,
    description: `"She do me something I can't deny"`,
  },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quoteAnimation, setQuoteAnimation] = useSpring(() => ({
    from: { transform: "translateY(100%)" },
    to: { transform: "translateY(0%)" },
    config: { duration: 1000 },
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quote.length);
      setQuoteAnimation((prev) => ({
        ...prev,
        from: { transform: "translateY(100%)" },
        to: { transform: "translateY(0%)" },
      }));
    }, 7000); // Change quote every 7 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [quote.length]);

  return (
    <div
      className="min-h-screen min-w-screen bg-no-repeat 
      flex items-center justify-center w-full relative
      text-center text-2xl text-white"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden bg-cover 
        bg-[url(https://res.cloudinary.com/ddssf6cm6/image/upload/v1739851698/artist_website_1_fe02ec.jpg)]"
      ></div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full">
        <div className="hidden sm:block">
          <NavbarPC />
        </div>
        <div className="block sm:hidden">
          <Navbar />
        </div>
      </div>

      {/* Artist Name */}
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
      <div className="block sm:hidden px-4 w-full h-48 justify-between">
        <Carousel />
        <Carousel2 />
      </div>

      {/* Quote */}
      <animated.div
        style={quoteAnimation}
        className="absolute bottom-20 px-4 sm:px-16 italic right-4 text-lg"
      >
        <p>{quote[currentIndex].description}</p>
      </animated.div>
    </div>
  );
}

export default Home;
