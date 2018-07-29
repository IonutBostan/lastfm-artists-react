import PropTypes from "prop-types";
import React from "react";
import "./AppHeader.css";

const AppHeader = ({ children }) => <h1 className="app-header">{children}</h1>;

AppHeader.propTypes = {
  children: PropTypes.string.isRequired
};

export default AppHeader;
