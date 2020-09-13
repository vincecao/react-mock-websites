import React, { useState, useEffect } from "react";

const MyCard = ({ title, description, imgSrc }) => (
  <button className="flex flex-col p-5 shadow-lg rounded-lg border border-gary-600">
    <img src={imgSrc} className="object-contain rounded-lg mb-2" alt="sample" />
    <p className="text-left text-md font-semibold mb-2">{title}</p>
    <p className="text-left text-sm mb-2 text-gray-600">{description}</p>
    <div className="w-full pt-3 border-t border-gary-500 flex justify-between items-center">
      <p className="flex-1 text-left text-md text-blue-400">Read more</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5 ml-10 m-auto text-blue-400"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </button>
);

const MyGraph = ({ value, className, content, description }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      className="m-auto flex flex-col md:flex-row p-5 md:p-0"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="m-auto md:flex-1">
        <div
          className={`rounded-full text-white flex text-center shadow-lg transform duration-300 ${
            isHover ? "scale-125" : "scale-100"
          } ${className}`}
        >
          <div className="m-auto">
            <p className="text-3xl">{value}M*</p>
            <p className="text-xs">{content}</p>
          </div>
        </div>
      </div>

      <button
        className={`w-full md:flex-1 mt-10 flex justify-between items-center rounded-lg border transform duration-300 ${
          isHover ? "border-gray-500 shadow-lg" : "border-white"
        } p-6`}
      >
        <p className="text-left text-sm mb-2 text-gray-600">{description}</p>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 ml-10 m-auto text-gray-700"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

const WelcomeInfoCommunity = () => {
  return (
    <>
      <div className="w-full text-center p-3">
        <p className="font-mono">Community</p>
        <p className="text-4xl font-semibold">Build on LoremHub</p>
      </div>

      <div className="mx-3 md:mx-8 lg:mx-10 text-center p-3">
        <p className="text-xl text-gray-700 mb-5">
          LoremHub is home to the world’s largest community of developers and
          their projects...
        </p>
        <div className="grid lg:grid-flow-col gap-4">
          <div className="grid sm:grid-flow-col gap-4">
            <MyCard
              title="Dallas Hunter"
              description="Lorem ipsum dolor sit amet, pro ex quis brute augue. In omnis facilisi has, delenit recusabo quaerendum cu vis."
              imgSrc="assets/img/user-sample-1.jpg"
            />
            <MyCard
              title="Maurice Weaver"
              description="Lorem ipsum dolor sit amet, pro ex quis brute augue. In omnis facilisi has, delenit recusabo quaerendum cu vis."
              imgSrc="assets/img/user-sample-2.jpg"
            />
          </div>
          <div className="grid sm:grid-flow-col gap-4">
            <MyCard
              title="Gary Vasquez"
              description="Lorem ipsum dolor sit amet, pro ex quis brute augue. In omnis facilisi has, delenit recusabo quaerendum cu vis."
              imgSrc="assets/img/user-sample-4.jpg"
            />
            <MyCard
              title="Lori Owen"
              description="Lorem ipsum dolor sit amet, pro ex quis brute augue. In omnis facilisi has, delenit recusabo quaerendum cu vis."
              imgSrc="assets/img/user-sample-5.jpg"
            />
          </div>
        </div>
      </div>

      <div className="mx-3 m-auto md:mx-8 lg:mx-10 text-center p-3">
        <p className="text-xl text-gray-700 mb-5">
          ...whether you’re making your first commit or sending a Rover to Mars,
          there’s room for you here, too.
        </p>

        <MyGraph
          value={100}
          className="w-56 h-56 bg-red-500 md:ml-2 md:-mb-20"
          content="reponsitories worldwide"
          description="LoremHub’s users create and maintain influential technologies alongside the world’s largest open source community."
        />
        <MyGraph
          value={50}
          className="w-40 h-40 bg-blue-700 md:ml-32"
          content="developers worldwide"
          description="LoremHub’s users create and maintain influential technologies alongside the world’s largest open source community."
        />
        <MyGraph
          value={2.9}
          className="w-32 h-32 bg-purple-700 md:ml-10 md:-mt-20"
          content="businesses & organizations worldwide"
          description="LoremHub’s users create and maintain influential technologies alongside the world’s largest open source community."
        />
        <p className="text-xs text-left">* As of August 2019</p>
      </div>
    </>
  );
};

export default WelcomeInfoCommunity;
