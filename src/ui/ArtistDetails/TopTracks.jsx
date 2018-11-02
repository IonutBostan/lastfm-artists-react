import React from "react";
import { Track } from "../";

const TopTracks = ({ data = [] }) => (
  <div>
    {data.map((track, index) => (
      <Track key={index} {...track} />
    ))}
  </div>
);

export default React.memo(TopTracks);
