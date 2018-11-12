import cn from "classnames";
import Parser from "html-react-parser";
import PropTypes from "prop-types";
import React from "react";
import "./ArtistDetails.css";
import CloseButtonSVG from "./CloseButtonSVG";
import TopTracks from "./TopTracks";

/**
 * ArtistDetails component the name, bio and the tracks of an artist
 */
const ArtistDetails = ({ name, bio, tracks, onClose, active }) => (
  <div className={cn("modal-overlay", { active, "not-active": !active })}>
    <div className="artist-details">
      <div className="close" onClick={onClose}>
        <CloseButtonSVG />
      </div>
      <div className="name">{name}</div>
      <div className="continer">
        <div className="row">
          <div className="col col-12 col-md-7 col-lg-7 col-xl-7">
            <TopTracks data={tracks} />
          </div>
          <div className="col col-12 col-md-5 col-lg-5 col-xl-5">
            <div className="bio">{Parser(bio || " ")}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ArtistDetails.propTypes = {
  /** The artist's name */
  name: PropTypes.string,
  /** The artist's bio summary */
  bio: PropTypes.string,
  /** The artist's top 10 tracks  */
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      /** Track name */
      name: PropTypes.string.isRequired,
      /** Track rank */
      rank: PropTypes.number.isRequired,
      /** Track popularity from 0 to 1 calculated as currentSongListeners/firstSongListeners*/
      popularity: PropTypes.number.isRequired
    })
  ),
  /** onClick callback function */
  onClose: PropTypes.func.isRequired,
  /** Component status, used for animation */
  active: PropTypes.bool
};

export default ArtistDetails;
