import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NavMenuSubItem from "../NavMenuSubItem/NavMenuSubItem";
import { MenuExpandIcon } from "../../../icons/Icons";

const NavMenuPanelItem = ({ text, subMenus }) => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <div className="pt-5 w-full border-gray-400 border-b">
      <button
        className="flex justify-between w-full"
        onClick={() => setIsExpand(!isExpand)}
      >
        <p className="hover:text-gray-700 transition-all duration-200">
          {text}
        </p>
        {subMenus && (
          <div className="">
            <MenuExpandIcon className="text-gray-800 w-6 h-6 m-auto" />
          </div>
        )}
      </button>
      <NavMenuSubItem subMenus={subMenus} isExpand={isExpand} />
    </div>
  );
};

NavMenuPanelItem.propTypes = {
  text: PropTypes.string.isRequired,
  subMenus: PropTypes.arrayOf(PropTypes.shape())
};

NavMenuPanelItem.defaultProps = {
  subMenus: null
};

export default NavMenuPanelItem;
