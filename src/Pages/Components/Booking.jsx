import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Corrected library import
import EmailSend from "./Contact/EmailSend";

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

function Contact() {
  return (
    <div className="">
      <div className="min-h-screen bg-[#212121] text-white flex items-center justify-center p-6">
        <div className="p-8 rounded-lg shadow-2xl border-2 border-neutral-700 w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl  font-bold uppercase text-center mb-8"
            style={{ fontFamily: "Abril Fatface, serif" }}
          >
            We Are Just One Click Away
          </h1>

          <div className="space-y-6">
            {/* Phone Numbers */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <FaPhoneAlt className="text-xl sm:text-2xl text-blue-600" />
              <a
                href="tel:+231886120438"
                className="text-lg hover:text-blue-600"
              >
                +23-------------
              </a>
              <a
                href="tel:+231770277646"
                className="text-lg hover:text-blue-600"
              >
                +23-------------
              </a>
              <a
                href="tel:+231555267036"
                className="text-lg hover:text-blue-600"
              >
                +23-------------
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
              <MdOutlineEmail className="text-xl sm:text-2xl text-blue-600" />
              <p className="text-lg">abc@gmail.com</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 xl:gap-8 mt-6">
              {/* <BsMusicNote className="text-4xl sm:text-5xl p-3 rounded-full bg-gray-800 hover:text-orange-600 hover:scale-110 cursor-pointer" /> */}

              <motion.div
                variants={iconVariants(2.6)}
                initial="initial"
                animate="animate"
              >
                <Link to="https://www.facebook.com/share/18BcsFpsc1/?mibextid=wwXIfr">
                  <FaFacebook className="text-4xl sm:text-5xl p-3 rounded-full bg-blue-600 hover:bg-blue-700 hover:scale-110" />
                </Link>
              </motion.div>

              <motion.div
                variants={iconVariants(2.2)}
                initial="initial"
                animate="animate"
              >
                <Link to="https://www.instagram.com/jslughtofficial?igsh=dWo5MzFsMjBkbHJn">
                  <FaInstagram className="text-4xl sm:text-5xl p-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:scale-110" />
                </Link>
              </motion.div>

              <motion.div
                variants={iconVariants(2.6)}
                initial="initial"
                animate="animate"
              >
                <Link to="https://www.tiktok.com/@jslught_official?_t=ZM-8u0og9sidnh&_r=1">
                  <FaTiktok className="text-4xl sm:text-5xl p-3 rounded-full bg-black hover:text-gray-400 hover:scale-110" />
                </Link>
              </motion.div>

              <motion.div
                variants={iconVariants(2.9)}
                initial="initial"
                animate="animate"
              >
                <Link to="https://x.com/jslught?s=21">
                  <FaTwitter className="text-4xl sm:text-5xl p-3 rounded-full bg-blue-500 hover:bg-blue-600 hover:scale-110" />
                </Link>
              </motion.div>

              <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
              >
                <Link to="https://youtube.com/@jslught8561?si=AvhVpbN1AXnssGR_">
                  <FaYoutube className="text-4xl sm:text-5xl p-3 rounded-full bg-red-600 hover:bg-red-700 hover:scale-110" />
                </Link>
              </motion.div>
            </div>

            {/* Email Input Form */}
            <EmailSend />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
