import React, { useState } from "react";
import PropTypes from "prop-types";
import { MenuExpandIcon } from "../../../icons/Icons";
import NavMenuDropdown from "./NavMenuDropdown";

const NavMenuItemInline = ({ text, subMenus }) => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <button>
      <div
        className="flex m-3 relative"
        onMouseEnter={() => setIsExpand(true)}
        onMouseLeave={() => setIsExpand(false)}
      >
        <p className="pr-2 text-white">{text}</p>
        {subMenus && (
          <>
            <div className="m-auto">
              <MenuExpandIcon className="text-gray-300 w-4 h-4" />
            </div>
            <NavMenuDropdown subMenus={subMenus} isExpand={isExpand} />
          </>
        )}
      </div>
    </button>
  );
};

NavMenuItemInline.propTypes = {};

export default NavMenuItemInline;
