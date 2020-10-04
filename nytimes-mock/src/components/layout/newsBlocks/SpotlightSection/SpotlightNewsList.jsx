import React from "react";

const SpotlightNewsList = ({ newsList }) => {
  return (
    <div className="h-full grid md:grid-flow-col md:cols-3 lg:grid-flow-row lg:rows-3 justify-center font-serif p-2 lg:border-l bg-white">
      {newsList.map((news, index) => (
        <div
          className={`flex flex-col-reverse md:flex-row lg:flex-col-reverse p-3 bg-white ${
            index > 0
              ? "border-t md:border-t-0 md:border-l lg:border-l-0 lg:border-t"
              : ""
          }`}
          key={`SpotlightNewsList-newsList-${news.title}`}
        >
          <div>
            <p className="font-bold text-lg">{news.title}</p>
            <p className="text-sm text-gray-700">{news.content}</p>
          </div>
          {news.img && (
            <img
              src={news.img}
              className="object-cover h-40 m-2"
              alt={news.title}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default SpotlightNewsList;
