import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import axios from "axios";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch images from backend
  useEffect(() => {
    axios
      .get("https://profile-2-backend-server.vercel.app/api/carousel") // Adjust API URL if needed
      .then((response) => {
        setImages(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load images");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && images.length > 0) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, activeIndex, images]);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: true,
  });

  if (loading) {
    return (
      <div className="h-screen text-white flex items-center justify-center bg-[#212121]">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen text-white flex items-center justify-center bg-[#212121]">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div {...handlers} className="relative overflow-hidden">
      <div
        className="flex items-start justify-center h-36 w-36  relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {images.length > 0 && (
          <Link to={images[activeIndex].link} className="cursor-pointer">
            <div className="absolute rounded-xl inset-0 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={images[activeIndex].imageUrl}
                  src={images[activeIndex].imageUrl}
                  alt="Background"
                  className="object-cover absolute"
                  initial={{
                    opacity: 0,
                    scale: 1.1,
                    x: 100,
                    filter: "blur(10px)",
                  }}
                  animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
                  exit={{
                    opacity: 0,
                    scale: 1.1,
                    x: -100,
                    filter: "blur(10px)",
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Carousel;
