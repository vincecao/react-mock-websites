import React from "react";

const MenuButton = ({ isLightTheme, onClick, className }) => {
  return (
    <button
      className={`py-4 px-4 md:px-8 cursor-pointer ${
        isLightTheme ? "text-gray-700" : "text-white"
      } ${className}`}
      onClick={onClick}
    >
      <svg
        className="w-5 h-5 m-auto"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
};

export default MenuButton;
