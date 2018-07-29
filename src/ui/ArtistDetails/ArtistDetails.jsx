import cn from "classnames";
import Parser from "html-react-parser";
import React from "react";
import { Track } from "../";
import "./ArtistDetails.css";

export const ArtistDetails = ({ name, bio, tracks, onClose, active }) => (
  <div className={cn("modal-overlay", { active, "not-active": !active })}>
    <div className="artist-details">
      <div className="close" onClick={() => onClose()}>
        <CloseButtonSVG />
      </div>
      <div className="name">{name}</div>
      <div className="continer">
        <div className="row">
          <div className="col col-7">
            <TopTracks data={tracks} />
          </div>
          <div className="col col-5">
            <div className="bio">{Parser(bio || " ")}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

class TopTracks extends React.Component {
  render() {
    const { data } = this.props;
    if (!data || data.constructor !== Array) return null;
    if (data.length <= 0) return null;

    const tracks = data.map((track, index) => <Track key={index} {...track} />);

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
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="square"
    >
      <g
        id="Artboard-Copy"
        transform="translate(-900.000000, -202.000000)"
        stroke="#4A4A4A"
        strokeWidth="3"
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
