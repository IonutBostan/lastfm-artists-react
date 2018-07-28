import { RSAA } from "redux-api-middleware";
import { c } from "../constants";
import { getResourceByCountry } from "./actionsUtils";

const getTopArtistsUrl = country =>
  getResourceByCountry(country, "geo.gettopartists");

export const getTopArtists = country => {
  return {
    [RSAA]: {
      types: [
        c.TOP_ARTISTS_REQUEST,
        c.TOP_ARTISTS_SUCCESS,
        c.TOP_ARTISTS_FAILURE
      ],
      endpoint: getTopArtistsUrl(country),
      method: "GET"
      // bailout: state => checkBailout(getProductsResource(state), 0)
    }
  };
};