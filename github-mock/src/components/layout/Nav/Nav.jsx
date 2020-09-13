import React from "react";
import PropTypes from "prop-types";
import NavMenuInline from "./NavMenuInline/NavMenuInline";

const MenuIcon = () => (
  <svg
    className="w-8 h-8 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    ></path>
  </svg>
);

const Nav = ({ setIsOpenPanel }) => {
  return (
    <div className="w-full bg-gray-900 h-12 flex justify-between px-8 lg:px-2">
      <img
        src="assets/img/logo.png"
        className="object-contain h-full"
        alt="logo"
      />
      <NavMenuInline className="hidden lg:block" />
      <div className="flex">
        <input
          className="rounded bg-gray-700 w-64 m-2 pl-2 hidden lg:block"
          placeholder="Search LoremHub"
        />
        <button className="rounded-md text-white m-2 px-2 mr-5 hidden lg:block">
          <p>Sign in</p>
        </button>
        <button className="rounded-md border-white border text-white m-2 px-2 mr-5">
          <p>Sign up</p>
        </button>
        <button
          className="m-2 block lg:hidden"
          onClick={() => setIsOpenPanel(true)}
        >
          <MenuIcon />
        </button>
      </div>
    </div>
  );
};

Nav.propTypes = {};

export default Nav;
