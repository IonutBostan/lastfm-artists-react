import PropTypes from "prop-types";
import React from "react";
import "./Link.css";

const Link = ({ children, ...props }) => (
  <a {...props} className="header-link">
    {children}
  </a>
);

Link.propTypes = {
  children: PropTypes.string.isRequired
};

export default Link;
