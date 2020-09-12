import React from "react";
import PropTypes from "prop-types";
import NavMenuSubItem from "../NavMenuSubItem/NavMenuSubItem";

const NavMenuDropdown = ({ subMenus, isExpand }) => {
  return isExpand ? (
    <div className="rounded bg-white absolute p-5 w-64 mt-5">
      <NavMenuSubItem subMenus={subMenus} isExpand={isExpand} />
    </div>
  ) : (
    <></>
  );
};

NavMenuDropdown.propTypes = {};

export default NavMenuDropdown;
