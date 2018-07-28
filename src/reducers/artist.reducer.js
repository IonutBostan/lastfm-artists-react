import { combineReducers } from "redux";
import { c } from "../constants";
import {
  createReducer,
  errorReducer,
  expirationReducer,
  isFetchingReducer
} from "./reducerUtils";

const resource = "ARTIST_INFO";

export const artistInfoResource = combineReducers({
  artistInfo: createReducer(
    {},
    {
      [c.ARTIST_INFO_SUCCESS]: (state, action) => action.payload.data
    }
  ),

  isFetching: isFetchingReducer(c, resource),
  error: errorReducer(c, resource),
  expiration: expirationReducer(c, resource)
});

export const topTracksResource = combineReducers({
  topTracks: createReducer(
    {},
    {
      [c.TOP_TRACKS_SUCCESS]: (state, action) => action.payload.data
    }
  ),

  isFetching: isFetchingReducer(c, resource),
  error: errorReducer(c, resource),
  expiration: expirationReducer(c, resource)
});

//metodos
export const getArtistInfoResource = state => state.artist.artistInfoResource;
export const getTopTracksResource = state => state.artist.topTracksResource;
