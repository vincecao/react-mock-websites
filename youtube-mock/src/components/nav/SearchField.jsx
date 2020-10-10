import React from "react";

const SearchField = ({ theme, isLightTheme }) => {
  return (
    <div className="flex flex-1 px-3 justify-center">
      <input
        className={`hidden sm:block border flex-1 h-8 px-3 ${
          !isLightTheme
            ? "bg-black text-black border-gray-700"
            : "border-gray-500"
        }`}
        placeholder="Search"
        style={{
          width: 60,
          maxWidth: 566
        }}
      />
      <button
        className={`hidden sm:block border-gray-500 w-16 ${
          !isLightTheme ? "" : "bg-gray-100 border border-l-0"
        } bg-${theme}Theme-100`}
      >
        <svg
          className="w-5 h-5 m-auto text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchField;
