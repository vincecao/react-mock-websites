import React, { useState } from "react";
import Nav from "../../layout/Nav/Nav";
import HeroHeader from "../../layout/HeroHeader/HeroHeader";
import NavMenuPanel from "../../layout/Nav/NavMenuPanel/NavMenuPanel";
import WelcomeCardOne from "./WelcomeComponents/WelcomeCardOne";
import WelcomeCardTwo from "./WelcomeComponents/WelcomeCardTwo";
import WelcomeInfoOne from "./WelcomeComponents/WelcomeInfoOne";
import WelcomeInfoTwo from "./WelcomeComponents/WelcomeInfoTwo";
import WelcomeInfoThree from "./WelcomeComponents/WelcomeInfoThree";
import WelcomeInfoFour from "./WelcomeComponents/WelcomeInfoFour";

const Welcome = () => {
  const [isOpenPanel, setIsOpenPanel] = useState(false);

  return (
    <div className="w-full">
      <Nav setIsOpenPanel={setIsOpenPanel} />
      <HeroHeader />
      {isOpenPanel && <NavMenuPanel setIsOpenPanel={setIsOpenPanel} />}

      <WelcomeCardOne />
      <WelcomeCardTwo />
      <WelcomeInfoOne />
      <WelcomeInfoTwo />
      <WelcomeInfoThree />
      <WelcomeInfoFour />
    </div>
  );
};

export default Welcome;
