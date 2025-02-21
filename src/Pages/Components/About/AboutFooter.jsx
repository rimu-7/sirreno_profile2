import React from "react";

const AboutFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-5">
      {/* <div className="flex justify-start  gap-2">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="hover:text-[#7b7a7a] hover:scale-110 hover:duration-500" />
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="hover:text-[#7b7a7a] hover:scale-110 hover:duration-500" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:text-[#7b7a7a] hover:scale-110 hover:duration-500" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="hover:text-[#7b7a7a] hover:scale-110 hover:duration-500" />
        </a>
        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok className="hover:text-[#7b7a7a] hover:scale-110 hover:duration-500" />
        </a>
      </div> */}
      <div className="text-center p-5">
        &copy; {currentYear} Your Website Name. All rights reserved
      </div>
    </footer>
  );
};

export default AboutFooter;
