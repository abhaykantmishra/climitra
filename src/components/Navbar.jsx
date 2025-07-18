// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  const handleNavigation = (page) => {
    if (window.navigateTo) {
      window.navigateTo(page);
    }
  };

  return (
    <div className="hidden md:flex items-center gap-4 lg:gap-[1.875rem] ml-[2rem] lg:ml-[4rem] xl:ml-[12.5rem]">
      <div
        className="text-white text-lg font-bold font-montserrat cursor-pointer hover:text-teal-200 transition-colors"
        onClick={() => handleNavigation("home")}
      >
        Home
      </div>
      <div
        className="text-white text-lg font-medium font-montserrat cursor-pointer hover:text-teal-200 transition-colors"
        onClick={() => handleNavigation("industrial")}
      >
        Industrial Decarbonization
      </div>
      <div
        className="text-white text-lg font-medium font-montserrat cursor-pointer hover:text-teal-200 transition-colors"
        onClick={() => handleNavigation("cdr")}
      >
        CDR
      </div>
      <div
        className="text-white text-lg font-medium font-montserrat cursor-pointer hover:text-teal-200 transition-colors"
        onClick={() => handleNavigation("tech")}
      >
        Tech Suite
      </div>
      <div
        className="text-white text-lg font-medium font-montserrat cursor-pointer hover:text-teal-200 transition-colors"
        onClick={() => handleNavigation("team")}
      >
        Our Team
      </div>
    </div>
  );
};

export default Navbar;
