import React, { useState } from "react";
import HeroHeader from "../../layout/HeroHeader/HeroHeader";
import NavMenuPanel from "../../layout/Nav/NavMenuPanel/NavMenuPanel";
import WelcomeCardOne from "./WelcomeComponents/WelcomeCardOne";
import WelcomeCardTwo from "./WelcomeComponents/WelcomeCardTwo";
import WelcomeInfoThree from "./WelcomeComponents/WelcomeInfoOne";
import Nav from "../../../layout/Nav/Nav";

const Welcome = () => {
  const [isOpenPanel, setIsOpenPanel] = useState(false);

  return (
    <div className="w-full">
      <Nav setIsOpenPanel={setIsOpenPanel} />
      <HeroHeader />
      {isOpenPanel && <NavMenuPanel setIsOpenPanel={setIsOpenPanel} />}

      <WelcomeCardOne />
      <WelcomeCardTwo />
      <WelcomeInfoThree />
    </div>
  );
};

export default Welcome;
