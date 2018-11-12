import React from "react";
import { Track } from "../";

const TopTracks = ({ data = [] }) => (
  <>
    {data.map((track, index) => (
      <Track key={index} {...track} />
    ))}
  </>
);

export default React.memo(TopTracks);
