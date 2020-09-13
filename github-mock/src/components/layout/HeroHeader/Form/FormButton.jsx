import React from "react";
import PropTypes from "prop-types";

const FormButton = ({ text }) => {
  return (
    <div className="flex items-center justify-between">
      <button
        className="w-full my-5 bg-green-500 hover:bg-green-700 text-white font-bold py-5 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        {text}
      </button>
    </div>
  );
};

FormButton.propTypes = {
  text: PropTypes.string.isRequired
};

export default FormButton;
