import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import ControlButtons from "./ControlButtons/ControlButtons";
import Logo from "./Logo";
import MenuButton from "./MenuButton";
import SearchField from "./SearchField";

const NavBar = ({ className, handleMenuButtonOnClick }) => {
  const { isLightTheme, theme } = useContext(ThemeContext);
  return (
    <div className={`flex justify-center items-center py-1 px-2 border-b border-${theme}Theme-100 shadow-md sm:border-0 md:pl-0 ${className}`}>
      <div
        style={{
          zIndex: -1
        }}
        className={`absolute top-0 left-0 right-0 bottom-0 opacity-md bg-${theme}Theme-200`}
      />

      <MenuButton
        isLightTheme={isLightTheme}
        onClick={handleMenuButtonOnClick}
        className='hidden sm:block'
      />
      <Logo theme={theme} isLightTheme={isLightTheme} />
      <SearchField theme={theme} isLightTheme={isLightTheme} />
      <ControlButtons theme={theme} isLightTheme={isLightTheme} />
    </div>
  );
};

export default NavBar;
