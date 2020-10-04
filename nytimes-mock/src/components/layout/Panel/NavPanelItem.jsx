import React, { useState, useEffect } from "react";

const NavPanelItem = ({ item, mouseEnter, mouseLeave }) => {
  return (
    <button
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className="relative capitalize flex items-center justify-between w-full font-semibold text-left rounded-md py-1 px-3 hover:bg-gray-200"
    >
      <span className="text-sm">{item.title}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="current-fill w-3 h-3 ml-2 text-gray-500"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
};

export default NavPanelItem;
