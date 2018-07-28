import { combineReducers } from "redux";
import { c } from "../constants";
import {
  createReducer,
  errorReducer,
  expirationReducer,
  isFetchingReducer
} from "./reducerUtils";

const resource = "ARTIST_INFO";

export const topArtistsResource = combineReducers({
  topArtists: createReducer(
    {},
    {
      [c.TOP_ARTISTS_SUCCESS]: (state, action) => action.payload.data
    }
  ),

  isFetching: isFetchingReducer(c, resource),
  error: errorReducer(c, resource),
  expiration: expirationReducer(c, resource)
});

//metodos
export const getTopArtistsResource = state => state.user.topArtistsResource;
