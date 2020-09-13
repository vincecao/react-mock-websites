import React from "react";
import PropTypes from "prop-types";
import { MenuCloseIcon } from "../../../icons/Icons";

const NavMenuHeader = ({ setIsOpenPanel }) => {
  return (
    <div className="w-full bg-gray-200 border-gray-400 border-b">
      <div className="p-5 flex justify-end">
        <button onClick={() => setIsOpenPanel(false)}>
          <MenuCloseIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

NavMenuHeader.propTypes = {};

export default NavMenuHeader;
