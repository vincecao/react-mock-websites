import React from "react";

const HeaderLogo = ({ className = "" }) => {
  return (
    <div className="m-auto">
      <p
        style={{
          fontFamily: "'UnifrakturMaguntia', cursive"
        }}
        className={`font-bold font-serif ${className}`}
      >
        The Old York Times
      </p>
    </div>
  );
};

export default HeaderLogo;
