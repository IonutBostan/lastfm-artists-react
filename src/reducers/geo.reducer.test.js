import { c } from "../constants";
import { topArtistsResource } from "./geo.reducer";

describe("topArtistsResource", () => {
  it("should return the initial state when called with REQUEST action type", () => {
    const action = {
      type: c.TOP_ARTISTS_REQUEST,
      payload: { data: { name: "David Bowie" } }
    };
    expect(topArtistsResource({}, action)).toEqual(
      expect.objectContaining({
        topArtists: {}
      })
    );
    expect(
      topArtistsResource({ topArtists: { name: "David" } }, action)
    ).toEqual(
      expect.objectContaining({
        topArtists: { name: "David" }
      })
    );
  });

  it("should return the received object when called with SUCCESS action type", () => {
    const action = {
      type: c.TOP_ARTISTS_SUCCESS,
      payload: { data: { name: "David Bowie" } }
    };
    expect(
      topArtistsResource({ topArtists: { name: "David" } }, action)
    ).toEqual(
      expect.objectContaining({
        topArtists: { name: "David Bowie" }
      })
    );
  });

  it("should return the initial state when called with FAILURE action type", () => {
    const action = {
      type: c.TOP_ARTISTS_FAILURE,
      payload: { data: { name: "David Bowie" } }
    };
    expect(
      topArtistsResource({ topArtists: { name: "David" } }, action)
    ).toEqual(
      expect.objectContaining({
        topArtists: { name: "David" }
      })
    );
  });
});
