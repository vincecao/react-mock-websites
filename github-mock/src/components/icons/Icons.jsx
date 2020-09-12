import React from "react";
import PropTypes from "prop-types";

export const MenuCloseIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    ></path>
  </svg>
);

MenuCloseIcon.propTypes = {
  className: PropTypes.string,
};
MenuCloseIcon.defaultProps = {
  className: "",
};

export const MenuExpandIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    ></path>
  </svg>
);

MenuExpandIcon.propTypes = {
  className: PropTypes.string,
};
MenuExpandIcon.defaultProps = {
  className: "",
};

export default { MenuCloseIcon, MenuExpandIcon };
