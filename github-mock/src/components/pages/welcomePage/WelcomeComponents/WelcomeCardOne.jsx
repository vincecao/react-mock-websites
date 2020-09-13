import React from "react";
import WelcomeInfoOne from "./WelcomeInfoOne";

const WelcomeCardOne = () => {
  return (
    <div className="rounded-lg shadow-lg bg-white grid lg:grid-flow-col lg:grid-cols-2 gap-4 p-8 border mx-3 sm:mx-8 my-10">
      <div className="text-center lg:text-left lg:w-64">
        <h1 className="font-semibold">Get started with LoremHub Enterprise</h1>
        <p className="text-gray-700 my-3">
          Take collaboration to the next level with security and administrative
          features built for teams.
        </p>
      </div>
      <div className="grid sm:grid-flow-col sm:grid-cols-2 gap-4">
        <div>
          <div className="flex flex-col items-center">
            <svg
              className="w-12 h-12 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <h3 className="font-semibold my-2">Enterprise</h3>
            <p className="text-center h-16 text-sm text-gray-700">
              Deploy to your environment or the cloud.
            </p>
            <button className="p-4 text-sm bg-blue-500 hover:bg-blue-700 rounded-lg text-white">
              Start a free trial
            </button>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center">
            <svg
              className="w-12 h-12 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
              />
            </svg>
            <h3 className="font-semibold my-2">Talk to us</h3>
            <p className="text-center h-16 text-sm text-gray-700">Need help?</p>
            <button className="p-4 text-sm border-blue-500 hover:border-blue-700 border rounded-lg text-blue-500">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCardOne;
