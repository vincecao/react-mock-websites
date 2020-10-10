import React, { useState, useEffect, useContext } from "react";

export const SidePanelNarrowButton = ({ className, theme, item, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`block w-full py-3 cursor-pointer hover:bg-${theme}Theme-300 text-sidePanel-sm ${className}`}
    >
      <div className="px-8">{item.Icon}</div>
      <p className="mt-1 text-center">{item.name}</p>
    </button>
  );
};

export const SidePanelWideButton = ({ className, theme, item, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`block flex items-center w-full py-3 px-8 cursor-pointer hover:bg-${theme}Theme-300 ${className}`}
    >
      <div className="mr-5">{item.Icon}</div>
      <p className="mt-1 text-center">{item.name}</p>
    </button>
  );
};
