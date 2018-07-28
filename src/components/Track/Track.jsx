import React from "react";
import "./Track.css";

export const Track = ({ track, popularity }) => (
  <div className="track">
    <div className="popularity" style={{ width: 343 * popularity }}>
      <span>
        {track["@attr"].rank} {track.name}
      </span>
    </div>
  </div>
);
