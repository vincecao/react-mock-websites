import React from "react";
import PropTypes from "prop-types";
import NavMenuItem from "./NavMenuPanelItem";
import NavMenuHeader from "./NavMenuHeader";
import { myMenu } from "../../../../data/data";

const NavMenuPanel = ({ setIsOpenPanel }) => {
  return (
    <div className="fixed w-64 max-h-screen min-h-screen overflow-auto shadow-lg bg-white top-0 right-0">
      <NavMenuHeader setIsOpenPanel={setIsOpenPanel} />
      <div className="px-5">
        {myMenu.map((menu) => (
          <NavMenuItem
            key={menu.name}
            text={menu.name}
            subMenus={menu.subMenus}
          />
        ))}
        <input
          className="rounded bg-white m-2 pl-2 border-gray-400 border"
          placeholder="Search LoremHub"
        />
        <button className="rounded-md text-gray-800 m-2 px-2 mr-5 inline">
          <p>Sign in</p>
        </button>
        <button className="rounded-md border-gray-400 border text-gray-800 m-2 px-2 mr-5">
          <p>Sign up</p>
        </button>
      </div>
    </div>
  );
};

NavMenuPanel.propTypes = {};

export default NavMenuPanel;
