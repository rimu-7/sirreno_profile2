import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import Carousel from "./Carousel";
import Carousel2 from "./Carousel2";
import NavbarPC from "../../Shared/Nav/Components/Navbar";
import Navbar from "../../Shared/Navbar/Navbar";
import { motion } from "motion/react";

const quote = [
  {
    id: 1,
    description: `“Believe in yourself and anything is possible”`,
  },
  {
    id: 2,
    description: `“Dream big, work hard, stay focused”`,
  },
  {
    id: 3,
    description: `“Success is the sum of small efforts repeated daily”`,
  },
  {
    id: 4,
    description: `“Your only limit is your mind”`,
  },
  {
    id: 5,
    description: `“Keep going, everything you need will come”`,
  },
  {
    id: 6,
    description: `“You are capable of amazing things”`,
  },
  {
    id: 7,
    description: `“Hustle until your haters ask if you’re hiring”`,
  },
];

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quoteAnimation, setQuoteAnimation] = useSpring(() => ({
    from: { transform: "translateY(100%)", opacity: 0 },
    to: { transform: "translateY(0%)", opacity: 1 },
    config: { duration: 1000 },
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteAnimation({
        to: { transform: "translateY(-100%)", opacity: 0 },
        config: { duration: 800 },
        onRest: () => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % quote.length);
          setQuoteAnimation({
            from: { transform: "translateY(100%)", opacity: 0 },
            to: { transform: "translateY(0%)", opacity: 1 },
            config: { duration: 800 },
          });
        },
      });
    }, 7000);

    return () => clearInterval(interval);
  }, [quote.length]);

  return (
    <div className=" relative min-h-screen min-w-screen w-full text-center text-2xl text-white">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-10">
        <div className="hidden sm:block">
          <NavbarPC />
        </div>
        <div className="block sm:hidden">
          <Navbar />
        </div>
      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0 overflow-hidden bg-cover bg-center bg-[url(https://res.cloudinary.com/ddssf6cm6/image/upload/v1739851698/artist_website_1_fe02ec.jpg)]"
        style={{ marginTop: "60px" }}
      >
        {/* Artist Name */}
        <div
          style={{ fontFamily: "Paytone One, serif" }}
          className="absolute top-80 sm:top-32 right-32 sm:right-20 text-5xl"
        >
          JSlught
        </div>
      </div>

      {/* Carousel */}
      <div className="hidden sm:flex px-24 w-full h-48 justify-between">
        <Carousel />
        <Carousel2 />
      </div>
      <div className="block sm:hidden px-4 w-full h-48 justify-between">
        {/* <Carousel /> */}
        {/* <Carousel2 /> */}
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
