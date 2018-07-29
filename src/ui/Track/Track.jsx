import React from "react";
import "./Track.css";

export const Track = ({ rank, name, popularity }) => (
  <div className="track">
    <div className="popularity" style={{ width: 343 * popularity }}>
      <span>
        {rank} {name}
      </span>
    </div>
  </div>
);
