import PropTypes from "prop-types";
import React from "react";
import "./ArtistBlock.css";

const ArtistBlock = ({ image, name, onClick }) => (
  <div className="artist-block align-middle" onClick={onClick}>
    <div className="artist-block-image">
      <img alt={name} src={image} />
      <span className="artist-name">{name}</span>
    </div>
  </div>
);

ArtistBlock.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default ArtistBlock;
