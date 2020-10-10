import React, { useContext, useState } from "react";
import Dock from "../components/dock/Dock";
import Main from "../components/main/Main";
import NavBar from "../components/nav/NavBar";
import SidePanelWrapper from "../components/sidePanel/SidePanelWrapper";
import { ThemeContext } from "../contexts/ThemeContext";

const Index = () => {
  const [isWideMode, setIsWideMode] = useState(false);

  const { theme } = useContext(ThemeContext);
  const handleMenuButtonOnClick = () => setIsWideMode(!isWideMode);

  return (
    <div
      className={`absolute left-0 top-0 right-0 min-h-screen bg-${theme}Theme-100`}
    >
      <Main isWideMode={isWideMode} />
      <SidePanelWrapper
        className={`${
          !isWideMode ? "hidden" : "block"
        } md:block fixed top-0 bottom-0 left-0 z-10`}
        isWideMode={isWideMode}
      />
      <NavBar
        className="fixed top-0 left-0 right-0 z-10"
        handleMenuButtonOnClick={handleMenuButtonOnClick}
      />
      <Dock />
    </div>
  );
};

/*
const Index = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isLightTheme, light, dark, toggleTheme } = context;
        const theme = isLightTheme ? light : dark;
        return (
          <div
            className="App"
            style={{
              background: theme.ui,
              color: theme.syntax
            }}
          >
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <button onClick={toggleTheme}>Toggle</button>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};
*/

export default Index;
