import React from "react";
import "./ArtistBlock.css";

export const ArtistBlock = ({ image, name, onClick }) => (
  <div className="artist-block align-middle" onClick={onClick}>
    <div className="artist-block-image">
      <img alt={name} src={image} />
      <span className="artist-name">{name}</span>
    </div>
  </div>
);
