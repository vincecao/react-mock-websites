import React, { useContext } from "react";
import { v4 as uuid } from "uuid";
import { ThemeContext } from "../../contexts/ThemeContext";
import VideoThumbnailComponent from "./VideoThumbnailComponent";

const mockVideoData = require("../../const/mock-video-data.json");

const Main = ({ isWideMode }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`p-0 sm:p-5 ${
        isWideMode ? "md:ml-sidePanel-md" : "md:ml-sidePanel-sm"
      } mt-nav-md`}
    >
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-4">
        {mockVideoData.map((data) => (
          <VideoThumbnailComponent key={uuid()} data={data} theme={theme} />
        ))}
      </div>
    </div>
  );
};

export default Main;
