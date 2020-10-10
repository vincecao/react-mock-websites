import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/ThemeContext";

const RightArrowIcon = () => (
  <svg
    className="w-5 h-5 ml-2"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const MoreControlButtonsPanel = ({ className }) => {
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? "light" : "dark";

  const moreButtonList = [
    {
      Icon: (
        <svg
          className="w-6 h-6 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      name: `Appearance: ${!isLightTheme ? "Light" : "Dark"}`,
      onClick: toggleTheme
    },
    {
      Icon: (
        <svg
          className="w-6 h-6 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
      name: "Language: English",
      onClick: () => {}
    }
  ];

  return (
    <div
      className={`w-64 right-0 mt-3 mr-2 border-l border-r border-b opacity-md border-${theme}Theme-text-200 ${className} `}
    >
      {moreButtonList.map((item, index) => (
        <button
          className={`w-full flex p-2 bg-${theme}Theme-200`}
          onClick={item.onClick}
        >
          {item.Icon}
          <p className="text-xs">{item.name}</p>
          <div className="flex-1" />
          <RightArrowIcon />
        </button>
      ))}
    </div>
  );
};

export default MoreControlButtonsPanel;
