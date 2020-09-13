import React, { useState } from "react";
import Nav from "../../layout/Nav/Nav";
import HeroHeader from "../../layout/HeroHeader/HeroHeader";
import NavMenuPanel from "../../layout/Nav/NavMenuPanel/NavMenuPanel";
import WelcomeCardOne from "./WelcomeComponents/WelcomeCardOne";
import WelcomeCardTwo from "./WelcomeComponents/WelcomeCardTwo";
import WelcomeInfoOne from "./WelcomeComponents/WelcomeInfoOne";
import WelcomeInfoTeams from "./WelcomeComponents/WelcomeInfoTeams/WelcomeInfoTeams";
import WelcomeInfoThree from "./WelcomeComponents/WelcomeInfoTeams/WelcomeInfoThree";
import WelcomeInfoFour from "./WelcomeComponents/WelcomeInfoTeams/WelcomeInfoFour";
import WelcomeInfoSecurity from "./WelcomeComponents/WelcomeInfoSecurity/WelcomeInfoSecurity";
import WelcomeInfoSix from "./WelcomeComponents/WelcomeInfoSecurity/WelcomeInfoSix";
import WelcomeInfoIntegrations from "./WelcomeComponents/WelcomeInfoIntegrations/WelcomeInfoIntegrations";
import WelcomeInfoCommunity from "./WelcomeComponents/WelcomeInfoCommunity/WelcomeInfoCommunity";
import WelcomeFooterFormSection from "./WelcomeComponents/WelcomeFooterFormSection/WelcomeFooterFormSection";

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

      <WelcomeInfoTeams />
      <WelcomeInfoThree />
      <WelcomeInfoFour />

      <WelcomeInfoSecurity />
      <WelcomeInfoSix />

      <WelcomeInfoIntegrations />

      <WelcomeInfoCommunity />

      <WelcomeFooterFormSection />
    </div>
  );
};

export default Welcome;
