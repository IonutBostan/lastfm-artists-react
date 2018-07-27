import React from "react";
import "./ArtistBlock.css";

export const ArtistBlock = ({ children, name }) => (
  <div className="artist-block align-middle">
    <div className="artist-block-image">
      {children}
      <span className="artist-name">{name}</span>
    </div>
  </div>
);
