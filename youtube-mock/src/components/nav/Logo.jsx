import React from "react";

const Logo = ({ isLightTheme }) => {
  return (
    <div className="flex m-0 sm:mr-8 md:mr-20 justify-center items-center">
      <img src="/assets/youtube.svg" className="h-6 mr-1" />
      <p
        className={`font-semibold ${
          isLightTheme ? "text-black" : "text-white"
        }`}
      >
        LoremTube
      </p>
    </div>
  );
};

export default Logo;
