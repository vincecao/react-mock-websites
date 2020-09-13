import React from "react";
import PropTypes from "prop-types";

const FormInfoText = ({ children }) => {
  return (
    <p className="text-xs">
      <>{children}</>
    </p>
  );
};

FormInfoText.propTypes = {
  children: PropTypes.element.isRequired
};

export default FormInfoText;
