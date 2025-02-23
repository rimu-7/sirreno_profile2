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
    y: [20, -20],
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
    description: `“I’m all you need baby”`,
  },
  {
    id: 2,
    description: `“Everyday is holiday”`,
  },
  {
    id: 3,
    description: `“No money no love”`,
  },
  {
    id: 4,
    description: `“Never been the same since I met you”`,
  },
  {
    id: 5,
    description: `“Fine like Benita, sweet like Belinda”`,
  },
  {
    id: 6,
    description: `“She do me something I can’t deny”`,
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
        {/* Show Carousel2 only on mobile, centered and positioned to the right */}
        <motion.div
          variants={iconVariants(2.6)}
          initial="initial"
          animate="animate"
          className="sm:hidden flex absolute bottom-42 rounded-2xl w-full" style={{ right: '-40px' }}      >
          <div className="flex justify-center">
            <Carousel2 />
          </div>
        </motion.div>
        {/* Artist Name */}
        <div
          style={{ fontFamily: "Paytone One, serif", fontStyle: "bold" }}
          className="absolute top-60 sm:top-32  right-10 sm:right-20 text-8xl sm:text-8xl md:text-6xl lg:text-9xl text-white"
        >

        </div>
      </div>

      <div className="hidden sm:flex fixed inset-0 items-center justify-between px-8 sm:px-16 lg:px-24 w-full h-full">
        <motion.div className="flex-1 flex justify-start "
          variants={iconVariants(2.6)}
          initial="initial"
          animate="animate"
        >
          <Carousel2 />
        </motion.div>
        <div className="flex-1 flex justify-end">
          <Carousel />
        </div>

      </div>



      {/* Quote Section */}
      <animated.div
        style={quoteAnimation}
        className="absolute hidden sm:flex bottom-10 sm:bottom-20 px-4 sm:px-16 italic sm:text-lg md:text-xl"

      >
        <p
          style={{ fontStyle: 'italic' }}
        >
          {quote[currentIndex].description}
        </p>

      </animated.div>

    </div >


  );
}

export default Home;


