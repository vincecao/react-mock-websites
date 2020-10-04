import React from "react";
import NavPanelItem from "./NavPanelItem";

const NavSecondaryPanel = ({ categories = [] }) => {
  return (
    <div
      className={`${
        categories.length > 0 ? "fixed" : "hidden"
      } w-64 left-0 top-0 ml-64 p-2 z-10`}
    >
      <div className={`shadow-lg p-2 z-10 bg-white border rounded-lg`}>
        {categories.length > 0 &&
          categories.map((cate) => (
            <NavPanelItem key={`secPanel-${cate.title}`} item={cate} />
          ))}
      </div>
    </div>
  );
};

export default NavSecondaryPanel;
