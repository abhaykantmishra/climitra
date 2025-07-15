import React from "react";

function ContactUsButton({ className = "", onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (window.navigateTo) {
      window.navigateTo("contact");
    }
  };

  return (
    <button 
      onClick={handleClick}
      className={`ml-4 rounded-lg outline outline-2 outline-white px-3 py-1.5 text-white text-sm font-medium font-montserrat bg-transparent hover:bg-white hover:text-teal-800 transition duration-200 ${className}`}
    >
      Contact Us
    </button>
  );
}

export default ContactUsButton;
