import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import axios from "axios";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const caseStudies = [
    {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg", // Facebook logo
      link: "https://www.facebook.com/share/14pR5KvBmuU/?mibextid=wwXIfr",
    },
    {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png", // Instagram logo
      link: "https://www.instagram.com/nativebreedmedia?igsh=MWZ2MGQ5Y2cxZW5nNQ==",
    },
    {
      imageUrl: "https://res.cloudinary.com/ddssf6cm6/image/upload/v1740153907/tiktok_ck2vkk.png", // TikTok logo
      link: "https://www.tiktok.com/@nativebreedmedia",
    },
    {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png", // YouTube logo
      link: "https://www.youtube.com/@nativebreedmedia",
    },
    {
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg", // Twitter
      link: "https://twitter.com/nativebreedmedia",
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
    <div {...handlers} className="relative overflow-hidden">
      <div
        className="flex items-start justify-center h-16 w-16 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Link to Social Media */}
        <a href={caseStudies[activeIndex].link} target="_blank" rel="noopener noreferrer">
          <div className="absolute inset-0 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={caseStudies[activeIndex].imageUrl}
                src={caseStudies[activeIndex].imageUrl}
                alt="Social Media Logo"
                className="object-cover absolute"
                initial={{ opacity: 0, scale: 1.1, x: 100, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 1.1, x: -100, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
