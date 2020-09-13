import React from "react";

const MyButton = ({ text, content, href }) => (
  <button className="flex p-6 text-left rounded-md border border-white hover:border-gray-500 hover:shadow-lg">
    <div>
      <p className="text-xl">{text}</p>
      <p className="text-sm">{content}</p>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-10 h-10 ml-10 m-auto"
    >
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </button>
);

const WelcomeInfoThree = () => {
  return (
    <div className="text-center p-3 grid lg:grid-flow-col lg:grid-cols-2 mx-10">
      <div className="m-auto mb-5">
        <img src="assets/img/sample.jpg" alt="sample" className="rounded-lg" />
      </div>
      <div>
        <MyButton
          text="Write better code"
          content="Collaboration makes perfect. The conversations and code reviews that happen in pull requests help your team share the weight of your work and improve the software you build."
        />
        <MyButton
          text="Manage your chaos"
          content="Take a deep breath. On LoremHub, project management happens in issues and project boards, right alongside your code. All you have to do is mention a teammate to get them involved."
        />
        <MyButton
          text="Find the right tools"
          content="Browse and buy apps from LoremHub Marketplace with your LoremHub account. Find the tools you like or discover new favorites—then start using them in minutes."
        />
      </div>
    </div>
  );
};

export default WelcomeInfoThree;
