import Parser from "html-react-parser";
import React from "react";
import { Track } from "../Track/Track";
import "./ArtistDetails.css";

export const ArtistDetails = ({ name, bio, tracks: { toptracks } }) => (
  <div className="artist-details">
    <div className="close">
      <CloseButtonSVG />
    </div>
    <div className="name">{name}</div>
    <div className="continer">
      <div className="row">
        <div className="col col-7">
          <TopTracks tracks={toptracks} />
        </div>
        <div className="col col-5">
          <div className="bio">{Parser(bio.summary)}</div>
        </div>
      </div>
    </div>
  </div>
);

class TopTracks extends React.Component {
  render() {
    const { track } = this.props.tracks;
    if (!track) return null;
    const maxPlaycount = track[0].listeners;

    const tracks = track.map(track => (
      <Track
        key={track.mbid}
        track={track}
        popularity={track.listeners / maxPlaycount}
      />
    ));

    return <div>{tracks}</div>;
  }
}

const CloseButtonSVG = () => (
  <svg
    width="37px"
    height="37px"
    viewBox="0 0 37 37"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      id="Page-1"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
      stroke-linecap="square"
    >
      <g
        id="Artboard-Copy"
        transform="translate(-900.000000, -202.000000)"
        stroke="#4A4A4A"
        stroke-width="3"
      >
        <g id="Group-2" transform="translate(902.000000, 204.000000)">
          <path d="M0.5,0.5 L32.6403174,32.6403174" id="Line" />
          <path
            d="M0.5,0.5 L32.6403174,32.6403174"
            id="Line"
            transform="translate(16.500000, 16.500000) scale(-1, 1) translate(-16.500000, -16.500000) "
          />
        </g>
      </g>
    </g>
  </svg>
);
