import React from "react";
import PropTypes from "prop-types";

const NavMenuSubItem = ({ subMenus, isExpand }) => {
  return (
    <div className="pb-5 border-gray-400 border-b">
      {subMenus &&
        isExpand &&
        subMenus.map((menu) => (
          <div key={menu.name} className="text-gray-900 text-left text-sm">
            <a
              href={menu.href}
              className="font-bold block text-gray-900 m-2 ml-0 hover:text-blue-500 transition-all duration-200"
            >
              {menu.name}
            </a>
            {menu.items &&
              menu.items.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-900 m-2 ml-0 text-xs hover:text-blue-500 transition-all duration-200"
                >
                  {item.name}
                </a>
              ))}
          </div>
        ))}
    </div>
  );
};

NavMenuSubItem.propTypes = {
  isExpand: PropTypes.bool,
  subMenus: PropTypes.arrayOf(PropTypes.shape())
};

NavMenuSubItem.defaultProps = {
  isExpand: false,
  subMenus: null
};

export default NavMenuSubItem;
