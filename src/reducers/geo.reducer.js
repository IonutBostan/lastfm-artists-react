import { combineReducers } from "redux";
import { c } from "../constants";
import { createReducer, errorReducer, isFetchingReducer } from "./reducerUtils";

const resource = "ARTIST_INFO";

const getImage = (images, size) =>
  images.filter(image => image.size === size).shift()["#text"];

const formatTopArtistsAray = topArtists => {
  if (!topArtists || topArtists.artist.constructor !== Array) return [];

  return topArtists.artist.map(artist => ({
    name: artist.name,
    mbid: artist.mbid,
    image: getImage(artist.image, "extralarge")
  }));
};

export const topArtistsResource = combineReducers({
  topArtists: createReducer([], {
    [c.TOP_ARTISTS_SUCCESS]: (state, action) =>
      formatTopArtistsAray(action.payload.topartists)
  }),

  isFetching: isFetchingReducer(c, resource),
  error: errorReducer(c, resource)
});

//metodos
export const getTopArtistsResource = state => state.geo.topArtistsResource;
