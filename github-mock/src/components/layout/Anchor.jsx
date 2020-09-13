import React from "react";
import history from "../../history";
import { Link } from "react-router-dom";

const Anchor = ({ className, href, children }) => {
  return (
    // <button
    //   tabIndex="0"
    //   className={className}
    //   onClick={() => {
    //     history.push(href);
    //   }}
    // >
    //   {children}
    // </button>
    <Link className={className} to={href}>
      {children}
    </Link>
  );
};

export default Anchor;
