import React from "react";
import { breifStock, briefItems, navItems } from "../../../data/data";
import Briefings from "../Briefings/Briefings";
import HeaderLogo from "./HeaderLogo";

const { DateTime } = require("luxon");

const MenuIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className={className}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const SearchIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className={className}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const UserIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
      clipRule="evenodd"
    />
  </svg>
);

const HeaderNav = React.forwardRef(({ handleMenuOnClick }, ref) => {
  return (
    <div className="relative w-full">
      <div className="absolute top-0 w-full m-auto hidden lg:flex pt-2 z-0">
        <div className="flex-1" />
        <button className="uppercase p-1 mx-1 text-xs font-bold rounded-lg hover:bg-gray-200">
          <p>english</p>
        </button>
        <button className="uppercase p-1 mx-1 text-xs rounded-lg hover:bg-gray-200">
          <p>ESPAÑOL</p>
        </button>
        <button className="uppercase p-1 mx-1 text-xs rounded-lg hover:bg-gray-200">
          <p>中文</p>
        </button>
        <div className="flex-1" />
      </div>

      <div className="absolute top-0 w-full m-auto flex lg:hidden pt-1 z-0">
        <HeaderLogo className="text-3xl" />
      </div>

      <div className="border-b border-gray-400">
        <div className="relative w-full py-2 flex items-center z-10">
          <button
            className="w-8 h-8 p-2 mx-1 rounded-lg hover:bg-gray-200"
            onClick={handleMenuOnClick}
            ref={ref}
          >
            <MenuIcon className="w-full h-full" />
          </button>
          <button className="hidden lg:block w-8 h-8 p-2 mx-1 rounded-lg hover:bg-gray-200">
            <SearchIcon className="w-full h-full" />
          </button>
          <div className="flex-1" />
          <div className="hidden lg:block ">
            <button className="uppercase mx-1 text-xs font-semibold bg-blue-600 p-2 text-white border border-gray-800 rounded hover:bg-blue-700">
              subscribe now
            </button>
            <button className="uppercase mx-1 text-xs font-semibold bg-blue-600 p-2 text-white border border-gray-800 rounded hover:bg-blue-700">
              log in
            </button>
          </div>
          <button className="lg:hidden w-8 h-8 p-2 mx-1 rounded-lg hover:bg-gray-200">
            <UserIcon className="w-full h-full" />
          </button>
        </div>

        <div className="hidden lg:flex justify-between px-5 py-1 items-end">
          <p className="text-xs">
            {DateTime.local().toLocaleString(DateTime.DATE_HUGE)}
          </p>
          <HeaderLogo className="text-5xl" />
          <button className="capitalize px-2 py-1 text-xs rounded-lg hover:bg-gray-200">
            today's paper
          </button>
        </div>
      </div>

      <div className="flex bg-gray-200 sm:bg-white lg:hidden justify-between items-center px-5 py-2 items-end border-b border-gray-400">
        <div className="hidden sm:flex justify-center items-center">
          <svg
            className="w-4 h-4 mr-2 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
          <p className="text-xs mr-2 font-bold">68°F</p>
          <p className="text-xs">74° 60°</p>
        </div>
        <p className="text-xs">
          {DateTime.local().toLocaleString(DateTime.DATE_HUGE)}
        </p>
        <div>
          <button className="uppercase px-2 py-1 text-xs text-blue-700 rounded-lg hover:bg-gray-200">
            subscribe now
          </button>
          <button className="uppercase px-2 py-1 text-xs text-blue-700 rounded-lg hover:bg-gray-200 border-l">
            login
          </button>
        </div>
      </div>

      <div className="hidden lg:flex justify-around items-center px-20 py-1 border-b border-black">
        {navItems.slice(0, 18).map((d, index) => (
          <button
            key={`HeaderNav-navItems-${d.title}`}
            className="p-1 mx-1 text-xs scale-75 rounded-lg hover:bg-gray-200"
          >
            <p className="inline">{d.title}</p>
          </button>
        ))}
      </div>

      <div className="hidden sm:flex flex py-1 border-b border-gray-600">
        {briefItems.map((item, index) => (
          <Briefings
            key={`HeaderNav-briefItems-${item.title}`}
            briefingInfo={item}
            showBorder={index !== 0 ? true : false}
          />
        ))}

        <div className="hidden lg:flex px-2 border-l pl-3 w-40">
          <div>
            {breifStock.map((stock) => (
              <div
                className="flex items-center justify-center border-b py-1"
                key={`HeaderNav-breifStock-${stock.name}`}
              >
                <p className="mr-3 text-xs text-left">{stock.name}</p>
                <div className="flex-1" />
                <p
                  className={`text-xs text-right ${
                    stock.net > 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {stock.net > 0 ? "+" : ""}
                  {stock.net * 100}%
                </p>
                {stock.net > 0 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-3 h-3 text-green-400"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7l4-4m0 0l4 4m-4-4v18"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="w-3 h-3 text-red-400"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 17l-4 4m0 0l-4-4m4 4V3"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block p-2 border-l pl-3 w-40">
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="w-10 h-10 text-gray-500"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <div>
              <p className="text-md text-black font-semibold">66°F</p>
              <p className="text-xs text-black">74° 60°</p>
            </div>
          </div>
          <p className="text-xs text-black">San Francisco, CA</p>
        </div>
      </div>

      <div className="hidden sm:flex pt-1 border-b border-gray-600" />
    </div>
  );
});

export default HeaderNav;
