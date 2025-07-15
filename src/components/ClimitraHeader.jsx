import React from 'react';
import Navbar from './Navbar';
import ContactUsButton from './ContactUsButton';

const ClimitraHeader = ({ 
  menuOpen, 
  setMenuOpen, 
  menuItems = [], 
  showContactButton = true,
  customContactButton = null,
  zIndex = 10 
}) => {
  return (
    <>
      {/* HEADER */}
      <div className={`absolute top-[4.375rem] w-full px-4 sm:px-6 md:px-8 lg:px-[4.375rem] xl:px-[6.25rem] 2xl:px-[8.75rem]`} style={{ zIndex }}>
        <div className="flex items-center w-full">
          {/* Logo */}
          <img
            src="/images/mask-group.svg"
            alt="Climitra Logo"
            className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto object-contain"
          />

          {/* Navbar */}
          <Navbar />

          {/* Spacer */}
          <div className="flex-grow" />

          {/* Hamburger Menu for mobile */}
          <button
            className="block md:hidden text-white ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Contact Button */}
          {showContactButton && <ContactUsButton />}
          {customContactButton && customContactButton}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className={`absolute top-[8.125rem] left-0 w-full bg-teal-900 flex flex-col items-center gap-4 py-6 md:hidden`} style={{ zIndex: zIndex + 10 }}>
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="text-white text-base font-medium font-montserrat cursor-pointer hover:text-teal-200 transition-colors"
              onClick={() => {
                if (item.onClick) {
                  item.onClick();
                } else if (window.navigateTo) {
                  window.navigateTo(item.route);
                }
                setMenuOpen(false);
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ClimitraHeader;
