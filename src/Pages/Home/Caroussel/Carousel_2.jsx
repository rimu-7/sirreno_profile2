import React, { useState, useEffect } from "react";
import Typing from "react-typing-effect";
import { motion } from "framer-motion";
import { RiMusicAiLine } from "react-icons/ri";
import { useSwipeable } from "react-swipeable";
import Loading from "../../Shared/Loading/Loading";
import axios from "axios";

import image1 from "../../../assets/rec1.jpeg";
import image2 from "../../../assets/rec3.jpeg";
import image3 from "../../../assets/rec2.jpeg";
import image4 from "../../../assets/rec4.jpeg";

const transition = {
  duration: 1.5,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
};
const iconVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [15, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const caseStudies = [
    {
      title: "jassmine",
      description: "Lorem ipsum dolor sit amet...",
      imageUrl: image1,
      link: "https://example.com/dress",
    },
    {
      title: "Malcolm LL Smith",
      description: "Lorem ipsum dolor sit amet...",
      imageUrl: image2,
      link: "https://example.com/shoe",
    },
    {
      title: "Jassmine",
      description: "Lorem ipsum dolor sit amet...",
      imageUrl: image3,
      link: "https://example.com/accessories",
    },
    {
      title: "Malcolm LL Smith",
      description: "Lorem ipsum dolor sit amet...",
      imageUrl: image4,
      link: "https://example.com/accessories",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: true,
  });

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/data")
      .then((response) => {
        setImages(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="h-screen text-white bg-[#212121]">
        <Loading />
      </div>
    );
  }

  return (
    <div
      {...handlers}
      className="flex items-center justify-center h-screen w-full overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.img
          key={caseStudies[activeIndex].imageUrl}
          src={caseStudies[activeIndex].imageUrl}
          alt="Background"
          className="w-full h-full object-cover absolute"
          initial={{ opacity: 0, scale: 1.1, x: 100, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 1.1, x: -100, filter: "blur(10px)" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
      </div>
      <div className="absolute w-full h-full  uppercase flex flex-col justify-between p-10">
        <motion.p
          transition={transition}
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="font-bold text-7xl self-end text-amber-400"
          style={{ fontFamily: "Abril Fatface, serif" }}
        >
          {caseStudies[activeIndex].title}
        </motion.p>
        {/* <motion.p
          transition={transition}
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="font-bold text-7xl self-end"
          style={{ fontFamily: "Abril Fatface, serif" }}
        >
          {images.map((item, index) => (
            <p key={index}>{item.artist_name}</p>
          ))}
        </motion.p> */}
        {/* <motion.p
          animate={{ x: [-1000, 0] }}
          transition={transition}
          className="ml-30 text-start text-sm w-40"
        >
          <Typing
            text={caseStudies[activeIndex].description}
            speed={10}
            eraseSpeed={1000000}
            eraseDelay={2000}
            typingDelay={100}
            cursor=" "
            className="h-48"
          />
        </motion.p> */}
        <motion.a
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          href={caseStudies[activeIndex].link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#212121] self-start mb-30 px-6 py-3 text-lg backdrop:blur-md rounded-md"
        >
          <RiMusicAiLine className="text-9xl" />
        </motion.a>
      </div>
    </div>
  );
};

export default Carousel;
