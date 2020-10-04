import React, { useState, forwardRef, Fragment } from "react";
import { navItems } from "../../../data/data";
import NavPanelItem from "./NavPanelItem";
import NavSecondaryPanel from "./NavSecondaryPanel";

const NavPanel = forwardRef(({ isOpen, OnClick }, ref) => {
  const [currentCategories, setCurrentCategories] = useState([]);

  return (
    <>
      <div
        className={`${
          isOpen ? "fixed" : "hidden"
        } w-64 left-0 top-0 bottom-0 shadow-lg p-2 z-10 bg-white border-r`}
        onClick={OnClick}
        ref={ref}
      >
        {[{ title: "home page", href: "#" }, ...navItems].map((item, index) => {
          return (
            <Fragment key={`panel-${item.title}`}>
              {index % 10 === 0 && index !== 0 && <hr className="my-2" />}
              <NavPanelItem
                item={item}
                mouseEnter={() => setCurrentCategories(item.categories)}
                mouseLeave={() => setCurrentCategories([])}
              />
            </Fragment>
          );
        })}
        <NavSecondaryPanel categories={currentCategories} />
      </div>
    </>
  );
});

export default NavPanel;
