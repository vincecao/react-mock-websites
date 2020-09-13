import React from "react";

const WelcomeInfoTeams = () => {
  return (
    <div className="w-full text-center p-3">
      <p className="font-mono">LoremHub for teams</p>
      <p className="text-4xl font-semibold">A better way to work together</p>
      <p className="text-lg m-5 text-gray-700">
        LoremHub brings teams together to work through problems, move ideas
        forward, and learn from each other along the way.
      </p>
      <button className="border border-blue-500 text-blue-600 font-semibold py-4 px-5 rounded-lg">
        Sign up your team
      </button>
    </div>
  );
};

export default WelcomeInfoTeams;
