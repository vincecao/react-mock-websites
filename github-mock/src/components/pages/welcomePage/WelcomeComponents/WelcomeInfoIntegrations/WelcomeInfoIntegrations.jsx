import React from "react";

const WelcomeInfoIntegrations = () => {
  return (
    <div className="w-full text-center p-3">
      <p className="font-mono">Integrations</p>
      <p className="text-4xl font-semibold">Build on LoremHub</p>
      <p className="text-lg m-5 text-gray-700">
        Customize your process with LoremHub apps and an intuitive API.
        Integrate the tools you already use or discover new favorites to create
        a happier, more efficient way of working.
      </p>
      <button className="border border-blue-500 text-blue-600 font-semibold py-4 px-5 rounded-lg">
        Learn about integrations
      </button>
      <div className="flex flex-wrap mt-5 justify-center">
        <div className="rounded-full w-20 h-20 m-4 hover:shadow-lg bg-red-500"></div>
        <div className="rounded-full w-20 h-20 m-4 hover:shadow-lg bg-blue-400"></div>
        <div className="rounded-full w-20 h-20 m-4 hover:shadow-lg bg-gray-700"></div>
        <div className="rounded-full w-20 h-20 m-4 hover:shadow-lg bg-green-700"></div>
        <div className="rounded-full w-20 h-20 m-4 hover:shadow-lg bg-teal-300"></div>
        <div className="rounded-full w-20 h-20 m-4 hover:shadow-lg bg-black"></div>
        <div className="rounded-full w-20 h-20 m-4 hover:shadow-lg bg-gray-300"></div>
      </div>
      <p className="text-center text-sm m-5">
        Sometimes, there’s more than one tool for the job. Why not try something
        new?
      </p>
      <a className="text-center text-md text-blue-500">
        Browse LoremHub Marketplace
      </a>
    </div>
  );
};

export default WelcomeInfoIntegrations;
