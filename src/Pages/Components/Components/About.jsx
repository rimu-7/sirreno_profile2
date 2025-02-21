import Navbar from "../Shared/Nav/Navbar";
import React, { useState } from "react";
import { motion } from "framer-motion";
import FirstPart from "./About/FirstPart";
import SecondPart from "./About/SecondPart";

const about = [
  {
    title: "---------------",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `,
  },
];
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

function About() {
  const [activeIndex] = useState(0); // Default index since you have one item

  return (
    <div className="">
      <div className="text-white px-3 min-h-[calc(100vh-200px)]">
        <div className=" py-10 text-white flex flex-col justify-center items-center text-center">
          <motion.h1
            variants={iconVariants(2.6)}
            initial="initial"
            animate="animate"
            className="text-6xl text-amber-400"
            style={{ fontFamily: "Abril Fatface, serif" }}
          >
            {about[activeIndex].title}
          </motion.h1>
          <p className=" text-justify  px-3">
            {about[activeIndex].description}
          </p>
        </div>

        {/* First part */}
        <FirstPart />
        {/* Second part */}
        <SecondPart />
        {/* Footer */}
        {/* <AboutFooter /> */}
      </div>
    </div>
  );
}

export default About;
