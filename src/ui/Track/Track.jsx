import PropTypes from "prop-types";
import React from "react";
import "./Track.css";

const Track = ({ name, rank, popularity }) => (
  <div className="track">
    <div className="popularity" style={{ width: 343 * popularity }}>
      <span>
        {rank} {name}
      </span>
    </div>
  </div>
);

Track.propTypes = {
  name: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
  popularity: PropTypes.number.isRequired
};

export default Track;
