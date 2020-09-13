import React from "react";

const MyCard = ({ title, category, imgSrc }) => (
  <button className="flex flex-col p-5 shadow-lg rounded-lg border border-gary-600">
    <img src={imgSrc} className="object-contain rounded-lg mb-2" alt="sample" />
    <p className="text-md font-semibold mb-2">{title}</p>
    <p className="text-sm mb-2 text-gray-600">{category}</p>
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

const WelcomeInfoFour = () => {
  return (
    <div className="md:mx-5 lg:mx-10 text-center p-3">
      <p className="text-xl text-gray-700 mb-5">
        See how the world's leading companies use LoremHub Enterprise.
      </p>
      <div className="grid lg:grid-flow-col gap-4 mx-10">
        <div className="grid sm:grid-flow-col gap-4">
          <MyCard
            title="MGM Resorts International"
            category="Hospitality"
            imgSrc="assets/img/sample1.jpg"
          />
          <MyCard
            title="Nationwide"
            category="Insurance"
            imgSrc="assets/img/sample2.jpg"
          />
        </div>
        <div className="grid sm:grid-flow-col gap-4">
          <MyCard
            title="SAP"
            category="Business Software"
            imgSrc="assets/img/sample3.jpg"
          />
          <MyCard
            title="Spotify"
            category="Technology / Streaming"
            imgSrc="assets/img/sample4.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeInfoFour;
