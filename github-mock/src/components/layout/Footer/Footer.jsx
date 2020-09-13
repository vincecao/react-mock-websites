import React from "react";
import { myFooterItems } from "../../../data/data";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col mt-10 sm:flex-row">
        <p className="flex-1 text-3xl font-bold p-5">LoremHub</p>
        <div className="grid md:grid-flow-col gap-4 text-gray-600 p-5">
          <div className="grid grid-flow-col">
            {myFooterItems.slice(0, 2).map((col) => (
              <div key={`${col[0]}-cate`} className="mx-2">
                {col.map((row) => (
                  <button key={row} className="block m-1">
                    {row}
                  </button>
                ))}
              </div>
            ))}
          </div>
          <div className="grid grid-flow-col">
            {myFooterItems.slice(2, 4).map((col) => (
              <div key={`${col[0]}-cate`} className="mx-2">
                {col.map((row) => (
                  <button key={row} className="block m-1">
                    {row}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex text-xs">
        <a className="text-gray-600 p-2">© 2020 LoremHub, Inc.</a>
        <a className="text-gray-600 p-2">Terms Privacy</a>
        <a className="text-gray-600 p-2">Site Map</a>
        <a className="text-gray-600 p-2">What is Git?</a>
      </div>
    </>
  );
};

export default Footer;
