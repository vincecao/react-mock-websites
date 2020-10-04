import React from "react";

const TopStoriesSection = ({ topStories, covidCaseData, topStoriesTwo }) => {
  return (
    <div className="mx-3 font-serif">
      <div className="border-t border-black flex grid sm:grid-flow-col sm:grid-cols-3">
        {topStories.map((top, index) => (
          <div
            className="my-3 flex-1"
            key={`TopStoriesSection-topStories-${top.title}`}
          >
            <div
              className={`${
                index !== 0 ? "border-t sm:border-t-0 sm:border-l" : ""
              } px-3 pt-3`}
            >
              <p className="text-md font-semibold">{top.title}</p>
              <p className="text-sm">{top.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid sm:grid-flow-col sm:grid-cols-2 font-sans border-t border-black py-3">
        <div className="mx-2 py-2 text-sm flex-1 flex justify-between border-b sm:border-b-0 sm:border-r">
          <table className="table-auto">
            <thead className="">
              <tr className="text-xs">
                <th className="px-2 pb-2 font-semibold text-left">
                  {covidCaseData.countryName}
                </th>
                <th className="px-2 pb-2 font-normal text-right">
                  On {covidCaseData.date}
                </th>
                <th className="px-2 pb-2 font-normal text-right">
                  14-day change
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td className="px-2 text-xs">New cases</td>
                <td className="px-2 text-red-400 text-right">
                  {covidCaseData.newCase.today}
                </td>
                <td className="px-2 text-red-400 text-right">
                  {covidCaseData.newCase["14DayChange"]}
                </td>
              </tr>
              <tr>
                <td className="px-2 text-xs">New deaths</td>
                <td className="px-2 text-right">
                  {covidCaseData.newDeath.today}
                </td>
                <td className="px-2 text-right">
                  {covidCaseData.newDeath["14DayChange"]}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mx-2 py-2 flex-1 flex flex-col justify-between items-between">
          <p className="text-xs">
            Where cases are <span className="font-semibold">highest</span> per
            capita
          </p>
          <div className="grid grid-flow-col grid-cols-3 grid-rows-3">
            {covidCaseData.highestPerCapita.map((c) => (
              <p
                className="underline text-xs mx-6"
                key={`TopStoriesSection-highestPerCapita-${c}`}
              >
                {c}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="grid sm:grid-flow-col sm:grid-cols-6">
        <div className="sm:col-span-2">
          {topStoriesTwo.slice(0, 2).map((top, index) => (
            <div
              className={`mx-2 py-3 ${index === 0 ? "border-b" : ""}`}
              key={`TopStoriesSection-topStoriesTwo-${top.title}`}
            >
              <p className="text-md font-semibold">{top.title}</p>
              <p className="text-sm">{top.content}</p>
            </div>
          ))}
        </div>
        <div className="sm:col-span-4 p-2 border-t sm:border-t-0 sm:border-l">
          <img src={topStoriesTwo[2].img} alt={topStoriesTwo[2].title} />
          <p className="text-md font-semibold">{topStoriesTwo[2].title}</p>
          <p className="text-sm">{topStoriesTwo[2].content}</p>
        </div>
      </div>
    </div>
  );
};

export default TopStoriesSection;
