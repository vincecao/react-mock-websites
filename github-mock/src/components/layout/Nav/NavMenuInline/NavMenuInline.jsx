import React from "react";
import PropTypes from "prop-types";
import { myMenu } from "../../../../data/menuList";
import NavMenuItemInline from "./NavMenuItemInline";

const NavMenuInline = ({ className }) => {
  return (
    <div className={`flex flex-1 ${className}`}>
      {myMenu.map((menu) => (
        <NavMenuItemInline
          key={menu.name}
          text={menu.name}
          subMenus={menu.subMenus}
        />
      ))}
    </div>
  );
};

NavMenuInline.propTypes = {};

export default NavMenuInline;
