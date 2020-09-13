import React from "react";

const WelcomeCardTwo = () => {
  return (
    <div className="rounded-lg shadow-lg bg-blue-800 grid lg:grid-flow-col lg:grid-cols-3 gap-4 p-6 border mx-8 my-10">
      <div className="text-left lg:col-span-2 flex flex-col lg:flex-row">
        <div>
          <p className="w-12 m-2 ml-0 text-center text-sm text-green-400 border-green-400 border rounded-full">
            NEW
          </p>
        </div>
        <div>
          <h1 className="text-white font-semibold">
            LoremHub is now free for teams
          </h1>
          <p className="text-white my-3">
            LoremHub Free gives teams private repositories with unlimited
            collaborators at no cost. LoremHub Team is now reduced to $4 per
            user/month.
          </p>
        </div>
      </div>
      <div className="grid sm:grid-flow-col gap-4">
        <div className="w-full lg:w-auto m-auto lg:mr-0">
          <button className="p-4 w-full text-md font-semibold bg-blue-500 hover:bg-blue-700 rounded-lg text-white">
            Try LoremHub Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCardTwo;
