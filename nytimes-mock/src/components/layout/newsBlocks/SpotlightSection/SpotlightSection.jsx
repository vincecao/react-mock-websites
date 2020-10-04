import React from "react";
import SpotlightBlock from "./SpotlightBlock";
import SpotlightNewsList from "./SpotlightNewsList";

const SpotlightSection = ({ spotLightNews, news }) => {
  return (
    <div className="grid lg:grid-flow-col lg:grid-cols-7 p-2">
      <div className="lg:col-span-5">
        <p className="text-4xl font-serif font-semibold p-2 uppercase leading-none text-center">
          Potenti nullam ac tortor vitae purus faucibus.
        </p>
        <SpotlightBlock news={spotLightNews} />
      </div>
      <div className="lg:col-span-2">
        <SpotlightNewsList newsList={news} />
      </div>
    </div>
  );
};

export default SpotlightSection;
