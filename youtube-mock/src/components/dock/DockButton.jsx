import React from "react";
import PropTypes from "prop-types";

const DockButton = ({ item, theme, className, onClick }) => {
  return (
    <button
      className={`hover:bg-${theme}Theme-300 text-sidePanel-sm ${className}`}
      onClick={onClick}
    >
      {item.Icon}
      <p>{item.name}</p>
    </button>
  );
};

DockButton.propTypes = {};

export default DockButton;
