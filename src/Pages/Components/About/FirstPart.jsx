import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Typing from "react-typing-effect";

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
const letterAnimation = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: (index) => ({ delay: index * 0.05 }),
};

const firstpart = [
  {
    title: "",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
];

function FirstPart() {
  const [activeIndex] = useState(0);
  const [count, setCount] = useState(1);
  useEffect(() => {
    if (count < 10) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 100); // Adjust the speed of counting here (500ms = 0.5 seconds per increment)
      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [count]);
  const [count2, setCount2] = useState(1);
  useEffect(() => {
    if (count2 < 15) {
      const interval = setInterval(() => {
        setCount2((prevCount2) => prevCount2 + 1);
      }, 100); // Adjust the speed of counting here (500ms = 0.5 seconds per increment)
      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [count2]);
  return (
    <div className="  my-10 gap-4 flex flex-col lg:flex-row items-center p-4">
      {" "}
      {/* Left Side - Image Gallery */}
      <div className="w-full lg:w-[50%] min-h-[140px] overflow-x-scroll rounded-lg lg:overflow-visible">
        {" "}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div
            variants={iconVariants(2.6)}
            initial="initial"
            animate="animate"
            className="flex justify-center"
          >
            <img
              className="object-cover object-center min:h-[90%] w-full rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
              src={"https://picsum.photos/seed/picsum/200/300"}
              alt="image 1"
            />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="flex justify-center"
          >
            <img
              className="object-cover object-center min:h-[90%] w-full rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
              src={"https://picsum.photos/seed/picsum/200/300"}
              alt="image 2"
            />
          </motion.div>
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="flex justify-center"
          >
            <img
              className="object-cover object-center min:h-[90%] w-full rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
              src={"https://picsum.photos/seed/picsum/200/300"}
              alt="image 3"
            />
          </motion.div>
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="flex justify-center"
          >
            <img
              className="object-cover object-center min:h-[90%] w-full rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
              src={"https://picsum.photos/seed/picsum/200/300"}
              alt="image 4"
            />
          </motion.div>
          <motion.div
            variants={iconVariants(2.8)}
            initial="initial"
            animate="animate"
            className="flex justify-center"
          >
            <img
              className="object-cover object-center min:h-[90%] w-full rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
              src={"https://picsum.photos/seed/picsum/200/300"}
              alt="image 5"
            />
          </motion.div>
          <motion.div
            variants={iconVariants(2.4)}
            initial="initial"
            animate="animate"
            className="flex justify-center"
          >
            <img
              className="object-cover object-center min:h-[90%] w-full rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
              src={"https://picsum.photos/seed/picsum/200/300"}
              alt="image 6"
            />
          </motion.div>
        </div>
      </div>
      {/* Right Side - Text Content */}
      <div className="w-full lg:w-1/2 lg:pl-6 mt-6 lg:mt-0">
        {" "}
        <div className="text-white flex gap-2">
          <p
            className="text-3xl text-amber-400 font-bold uppercase text-justify "
            style={{ fontFamily: "Abril Fatface, serif" }}
          >
            We think, create, strategize, and build for our clients
          </p>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="text-5xl my-5 lg:text-6xl text-[#7b7a7a] font-bold flex
          justify-center items-center gap-2"
        >
          {firstpart[activeIndex].title}
        </motion.h1>
        <p className="text-white flex text-justify">
          {firstpart[activeIndex].description}
        </p>
        {/* <div className="flex space-x-4 mt-2">
          <div className="flex flex-col justify-center items-center text-center">
            <motion.p
              key={count}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-6xl lg:text-8xl p-2 rounded text-orange-700"
            >
              +{count}
            </motion.p>
            <p>Artistes</p>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <motion.p
              key={count}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-6xl lg:text-8xl p-2 rounded text-orange-700"
            >
              +{count2}
            </motion.p>
            <p>Albums</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default FirstPart;
