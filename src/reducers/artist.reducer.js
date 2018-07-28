import { combineReducers } from "redux";
import { c } from "../constants";
import {
  createReducer,
  errorReducer,
  expirationReducer,
  isFetchingReducer
} from "./reducerUtils";

const resource = "ARTIST_INFO";

const formatArtistsInfoObject = artist => {
  if (!artist) return {};

  return {
    name: artist.name,
    bio: artist.bio && artist.bio.summary
  };
};

export const artistInfoResource = combineReducers({
  artistInfo: createReducer(
    {},
    {
      [c.ARTIST_INFO_REQUEST]: (state, action) => null,
      [c.ARTIST_INFO_SUCCESS]: (state, action) =>
        formatArtistsInfoObject(action.payload.artist)
    }
  ),

  isFetching: isFetchingReducer(c, resource),
  error: errorReducer(c, resource),
  expiration: expirationReducer(c, resource)
});

export const topTracksResource = combineReducers({
  topTracks: createReducer([], {
    [c.TOP_TRACKS_REQUEST]: (state, action) => [],
    [c.TOP_TRACKS_SUCCESS]: (state, action) => action.payload.toptracks.track
  }),

  isFetching: isFetchingReducer(c, resource),
  error: errorReducer(c, resource),
  expiration: expirationReducer(c, resource)
});

//metodos
export const getArtistInfoResource = state => state.artist.artistInfoResource;
export const getTopTracksResource = state => state.artist.topTracksResource;
