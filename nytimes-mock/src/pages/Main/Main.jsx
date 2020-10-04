import React, { useState, useRef, useEffect } from "react";
import HeaderLogo from "../../components/layout/Header/HeaderLogo";
import HeaderNav from "../../components/layout/Header/HeaderNav";
import OpinionSection from "../../components/layout/newsBlocks/OpinionSection/OpinionSection";
import SpotlightSection from "../../components/layout/newsBlocks/SpotlightSection/SpotlightSection";
import TopStoriesSection from "../../components/layout/newsBlocks/TopStoriesSection/TopStoriesSection";
import NavPanel from "../../components/layout/Panel/NavPanel";
import { news, spotLightNews, opinions, covidCaseData } from "../../data/data";

const Main = () => {
  const [isClickOnPanel, setIsClickOnPanel] = useState(false);
  const myPanel = useRef();
  const myMenuButton = useRef();

  const handleClickOutside = (e) => {
    if (
      !myPanel.current.contains(e.target) &&
      !myMenuButton.current.contains(e.target)
    ) {
      setIsClickOnPanel(false);
    }
  };

  const handleClickInside = () => setIsClickOnPanel(true);

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // });

  return (
    <div className="relative w-full min-h-screen" onClick={handleClickOutside}>
      <div className="max-w-6xl m-auto md:px-6 z-0">
        <HeaderNav ref={myMenuButton} handleMenuOnClick={handleClickInside} />
      </div>

      <div className="max-w-6xl m-auto md:px-6 z-0">
        <SpotlightSection
          spotLightNews={spotLightNews}
          news={news.slice(0, 3)}
        />
      </div>

      <div className="max-w-6xl m-auto md grid sm:grid-flow-col sm:grid-cols-3">
        <div className="col-span-2">
          <TopStoriesSection
            topStories={news.slice(3, 6)}
            covidCaseData={covidCaseData}
            topStoriesTwo={news.slice(6, 9)}
          />
        </div>
        <div className="col-span-1">
          <OpinionSection opinions={opinions} />
        </div>
      </div>
      <NavPanel
        ref={myPanel}
        isOpen={isClickOnPanel}
        // onClick={handleClickInside}
      />
    </div>
  );
};

export default Main;
