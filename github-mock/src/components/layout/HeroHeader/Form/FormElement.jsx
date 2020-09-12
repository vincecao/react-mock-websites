import React from "react";
import PropTypes from "prop-types";

const FormElement = ({ target, type, ErrorMsg }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={target}
      >
        {target}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={target}
        type={type}
        placeholder=""
      />
      {ErrorMsg && <p className="text-red-500 text-xs italic">{ErrorMsg}</p>}
    </div>
  );
};

FormElement.propTypes = {
  target: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  ErrorMsg: PropTypes.string,
};

FormElement.defaultProps = {
  ErrorMsg: "",
};

export default FormElement;
