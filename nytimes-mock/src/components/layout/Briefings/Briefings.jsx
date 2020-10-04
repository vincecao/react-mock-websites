import React from "react";

const Briefings = ({ briefingInfo = {}, showBorder = false }) => {
  const { img, title, content } = briefingInfo;
  return (
    <div className={`flex ${showBorder ? "border-l" : ""} px-2`}>
      <img
        src={img}
        className="w-20 h-20 object-cover p-2"
        alt="breifingInfo"
      />
      <div>
        <p className="font-semibold text-sm mt-2 ml-2 capitalize">{title}</p>
        <p className="text-sm mb-2 ml-2">{content}</p>
      </div>
    </div>
  );
};

export default Briefings;
