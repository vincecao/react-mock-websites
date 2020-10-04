import React from "react";

const OpinionSection = ({ opinions }) => {
  return (
    <div className="hidden sm:block px-3 border-l">
      <div className="border-black border-t pt-1" />
      <p className="p-3 pb-0 font-serif text-xl font-semibold border-t border-black">
        Opinion
      </p>
      <div className="font-serif">
        <div className="flex border-b mb-2">
          <div className="p-3 relative flex-1">
            <p className="text-md font-bold text-gray-500">
              {opinions[0].name}
            </p>
            <p className="text-md font-bold">{opinions[0].article}</p>
            {opinions[0].opinion && (
              <p className="text-sm">{opinions[0].opinion}</p>
            )}
            <img
              className="absolute right-0 top-0 m-1 w-12 h-12 object-cover rounded-full"
              src={opinions[0].avatar}
              alt={opinions[0].name}
            />
          </div>
          <img
            className="m-3 mr-0 w-40 h-40 object-cover"
            src={opinions[0].img}
            alt={opinions[0].name}
          />
        </div>
        <div className="grid lg:grid-flow-row lg:grid-cols-2 gap-2">
          {opinions.slice(1).map((opinion, index) => (
            <div
              className={`p-3 relative ${
                index % 2 !== 0 ? "lg:border-l" : ""
              } border-b`}
              key={`OpinionSection-${opinion.name}`}
            >
              <p className="text-md font-bold text-gray-500">{opinion.name}</p>
              <p className="text-md font-bold">{opinion.article}</p>
              {opinion.opinion && <p className="text-sm">{opinion.opinion}</p>}
              {opinion.avatar && (
                <img
                  className="absolute right-0 top-0 m-1 w-12 h-12 object-cover rounded-full"
                  src={opinion.avatar}
                  alt={opinion.name}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpinionSection;
