import React from "react";

const SpotlightBlock = ({ news }) => {
  const { title, content, img } = news;
  return (
    <div className="grid sm:grid-flow-col sm:grid-cols-6 font-serif border-b lg:border-b-0 p-3">
      <div className="flex flex-col col-span-2 p-1">
        <p className="text-2xl font-bold text-center sm:text-left">{title}</p>
        {content.map((c) => (
          <p
            className="text-md my-1 pr-4 text-gray-700"
            key={`SpotlightBlock-content-${c}`}
          >
            · {c}
          </p>
        ))}
      </div>
      {/* <div
        className="w-64 bg-contain"
        style={{
          backgroundImage: `url(${img})`
        }}
      >
        <p className="absolute text-white text-4xl">{videoTitle}</p>
      </div> */}
      <div className="flex flex-col pt-3 col-span-4">
        <img src={img} alt={title} className="object-cover flex-1 mr-0" />
        <p className="text-xs text-gray-500 text-right">
          XXXXXX / The OLD York Times
        </p>
      </div>
    </div>
  );
};

export default SpotlightBlock;
