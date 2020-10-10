import React from "react";

const VideoThumbnailComponent = ({ data, theme }) => {
  return (
    <div className={`mx-auto text-${theme}Theme-text-100`}>
      <div className="relative">
        <img
          src={data.videoThumbnail}
          className="m-auto my-2 object-cover w-full sm:w-video-width h-video-height"
          alt={data.videoTitle}
        />
        <p className="absolute px-1 right-0 bottom-0 m-2 text-xs text-white font-bold bg-gray-900 rounded">
          {data.videoDuration}
        </p>
      </div>
      <div className="flex mx-5 sm:mx-1">
        <img
          src={data.channelLogo}
          className="w-10 h-10 mt-2 mr-2 rounded-full"
          alt={data.channelLogo}
        />
        <div className="">
          <p className="text-md font-semibold sm:max-w-xs">{data.videoTitle}</p>
          <p className="text-sm">{data.contentCreator}</p>
          <p className="text-sm text-gray-600">{`${data.viewTimes} · ${data.uploadTime} `}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoThumbnailComponent;
