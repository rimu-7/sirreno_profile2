import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import Carousel from "./Carousel";
import Carousel2 from "./Carousel2";
// import NavbarPC from "../../Shared/Nav/Components/Navbar";
// import Navbar from "../../Shared/Navbar/Navbar";
import { motion } from "motion/react";
import NavbarPC from "../../Shared/Nav/Components/Navbar";
import Navbar from "../../Shared/Navbar/Navbar";

// Floating animation for social media icons
const iconVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

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
    <div className="relative w-full min-h-screen">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-10">
        {/* Show only on small screens */}
        <div className="block sm:hidden">
          <Navbar />
        </div>

        {/* Show only on larger screens */}
        <div className="hidden sm:block">
          <NavbarPC />
        </div>
      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0 overflow-hidden bg-cover  mt-[60px] sm:mt-0"
        style={{
          backgroundImage: "url(https://res.cloudinary.com/ddssf6cm6/image/upload/v1739851698/artist_website_1_fe02ec.jpg)",
        }}
      >
        {/* Artist Name */}
        <div
          style={{ fontFamily: "Paytone One, serif", fontStyle: "bold" }}
          className="absolute top-60 sm:top-32  right-10 sm:right-20 text-8xl sm:text-8xl md:text-6xl lg:text-9xl text-white"
        >
          JSlught
        </div>
      </div>

      <div className="hidden sm:flex fixed inset-0 items-center justify-between px-8 sm:px-16 lg:px-24 w-full h-full">
        <div className="flex-1 flex justify-start">
          <Carousel />
        </div>
        <div className="flex-1 flex justify-end">
          <Carousel2 />
        </div>
      </div>

      {/* Show Carousel2 only on mobile, centered and positioned to the right */}
      <motion.div
        variants={iconVariants(2.6)}
        initial="initial"
        animate="animate"
        className="sm:hidden flex absolute bottom-42 w-full">
        <div className="flex justify-center">
          <Carousel2 />
        </div>
      </motion.div>







      {/* Quote Section */}
      <animated.div
        style={quoteAnimation}
        className="absolute hidden sm:flex bottom-10 sm:bottom-20 px-4 sm:px-16 italic sm:text-lg md:text-xl"
      >
        <p>{quote[currentIndex].description}</p>
      </animated.div>
    </div >

  );
}

export default Home;


