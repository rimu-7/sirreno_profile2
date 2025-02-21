import React, { useEffect, useState } from "react";

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="fixed-bottom bg-neutral-900 flex justify-center p-2 text-white border-t-2 border-neutral-600 text-center">
      <small className="w-full">
        All Rights Reserved &copy; {year} Copyrights{" "}
        <span style={{ fontFamily: "Abril Fatface, serif" }}>CreaqTech</span> .
      </small>
    </div>
  );
}

export default Footer;
