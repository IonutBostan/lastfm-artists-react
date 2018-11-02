import React from "react";
import { ArtistBlock } from "../ui";

const TopArtists = ({ data = [], onArtistClick }) => (
  <div className="flex-wrap">
    {data.map(artist => (
      <ArtistBlock
        key={artist.mbid}
        {...artist}
        onClick={() => onArtistClick(artist.mbid)}
      />
    ))}
  </div>
);

export default React.memo(TopArtists);
