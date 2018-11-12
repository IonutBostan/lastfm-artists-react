import cn from "classnames";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getArtistInfo, getTopTracks } from "../actions/artist.actions";
import { getTopArtists } from "../actions/geo.actions";
import {
  getArtistInfoResource,
  getTopArtistsResource,
  getTopTracksResource
} from "../reducers";
import { AppHeader, ArtistDetails } from "../ui";
import { Menu, TopArtists } from "./shared";

const countries = [
  { name: "Spain", id: "spain" },
  { name: "France", id: "france" },
  { name: "Italy", id: "italy" },
  { name: "Germany", id: "germany" }
];

const Landing = ({
  topArtistsResource,
  topTracksResource,
  artistInfoResource,
  getArtistInfo,
  getTopTracks,
  getTopArtists,
  match: {
    params: { country }
  }
}) => {
  let [selectedArtist, setSelectedArtist] = useState(null);

  useEffect(
    () => {
      if (selectedArtist) {
        getArtistInfo(selectedArtist);
        getTopTracks(selectedArtist);
      }
    },
    [selectedArtist]
  );

  useEffect(
    () => {
      getTopArtists(country);
    },
    [country]
  );

  return (
    <div>
      <div
        className={cn("container landing-container", {
          blur: selectedArtist
        })}
      >
        <AppHeader>{country}</AppHeader>
        <Menu data={countries} active={country} />
        <TopArtists
          data={topArtistsResource.topArtists}
          onArtistClick={mbid => setSelectedArtist(mbid)}
        />
      </div>
      <div className="modal-container">
        <ArtistDetails
          active={Boolean(selectedArtist)}
          {...artistInfoResource.artistInfo}
          tracks={topTracksResource.topTracks}
          onClose={() => setSelectedArtist(undefined)}
        />
      </div>
    </div>
  );
};

export default connect(
  store => ({
    topArtistsResource: getTopArtistsResource(store),
    topTracksResource: getTopTracksResource(store),
    artistInfoResource: getArtistInfoResource(store)
  }),
  { getTopArtists, getTopTracks, getArtistInfo }
)(Landing);
