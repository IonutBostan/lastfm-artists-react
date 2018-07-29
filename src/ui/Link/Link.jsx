import cn from "classnames";
import React from "react";
import "./Link.css";

export const Link = ({ children, className, ...props }) => (
  <a {...props} className={cn(className, "header-link")}>
    {children}
  </a>
);
