import React, { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";
import { ThemeContext } from "../../contexts/ThemeContext";
import DockButton from "./DockButton";

const InitialSidePanelItems = [
  {
    Icon: (
      <svg
        className="w-5 h-5 m-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    ),
    name: "Home",
    isSelected: false,
  },
  {
    Icon: (
      <svg
        className="w-5 h-5 m-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
          clipRule="evenodd"
        />
      </svg>
    ),
    name: "Trending",
    isSelected: false,
  },
  {
    Icon: (
      <svg
        className="w-5 h-5 m-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
          clipRule="evenodd"
        />
      </svg>
    ),
    name: "Library",
    isSelected: false,
  },
];

const Dock = ({ className }) => {
  const [mySideItems, setMySideItems] = useState(InitialSidePanelItems);
  const { theme, isLightTheme } = useContext(ThemeContext);

  const handleSidePanelButtonOnClick = (index) => {
    setMySideItems((_oldItems) =>
      _oldItems.map((item, _index) => ({
        ...item,
        isSelected: _index === index ? true : false,
      }))
    );
  };

  return (
    <div
      className={`flex sm:hidden fixed bottom-0 left-0 right-0 p-3 justify-around items-center border-t border-gray-400 bg-${theme}Theme-100 ${className}`}
    >
      {mySideItems.map((item, index) => (
        <DockButton
          key={uuid()}
          item={item}
          theme={theme}
          className={
            !item.isSelected
              ? "text-gray-600"
              : isLightTheme
              ? "text-red-500"
              : "text-white"
          }
          onClick={() => handleSidePanelButtonOnClick(index)}
        />
      ))}
    </div>
  );
};

Dock.propTypes = {};

export default Dock;
