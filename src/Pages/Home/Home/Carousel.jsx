import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import axios from "axios";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const caseStudies = [
    {
      title: "artist1",
      imageUrl: "https://picsum.photos/id/237/200/300",
      card: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
      link: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      title: "artis2",
      imageUrl: "https://picsum.photos/id/238/200/300",
      card: "https://picsum.photos/seed/picsum/200/300",
      link: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      title: "artist3",
      imageUrl: "https://picsum.photos/seed/picsum/200/300",
      card: "https://picsum.photos/200/300?grayscale",
      link: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      title: "artist14",
      imageUrl: "https://picsum.photos/id/247/200/300",
      card: "https://picsum.photos/200/300/?blur",
      link: "https://picsum.photos/seed/picsum/200/300",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, activeIndex]);

  const nextSlide = () =>
    setActiveIndex((prev) => (prev + 1) % caseStudies.length);
  const prevSlide = () =>
    setActiveIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: true,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/data")
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="h-screen text-white bg-[#212121]">
        {/* <Loading /> */}
      </div>
    );
  }

  return (
    <div {...handlers} className="relative  overflow-hidden">
      <div
        className="flex  items-start justify-center h-48 w-48  relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image (Carousel) */}
        <div className="absolute inset-0  overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={caseStudies[activeIndex].imageUrl}
              src={caseStudies[activeIndex].imageUrl}
              alt="Background"
              className=" object-cover absolute"
              initial={{ opacity: 0, scale: 1.1, x: 100, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.1, x: -100, filter: "blur(10px)" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        <div className="absolute  text-white uppercase flex flex-col justify-between p-10"></div>
      </div>
    </div>
  );
};

export default Carousel;
