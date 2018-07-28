import { c } from "../constants";
import { artistInfoResource } from "./artist.reducer";

describe("artistInfoResource", () => {
  it("should return the initial state when called with REQUEST action type", () => {
    const action = {
      type: c.ARTIST_INFO_REQUEST,
      payload: { data: { name: "David Bowie" } }
    };
    expect(artistInfoResource({}, action)).toEqual(
      expect.objectContaining({
        artistInfo: {}
      })
    );
    expect(
      artistInfoResource({ artistInfo: { name: "David" } }, action)
    ).toEqual(
      expect.objectContaining({
        artistInfo: { name: "David" }
      })
    );
  });

  it("should return the received object when called with SUCCESS action type", () => {
    const action = {
      type: c.ARTIST_INFO_SUCCESS,
      payload: { data: { name: "David Bowie" } }
    };
    expect(
      artistInfoResource({ artistInfo: { name: "David" } }, action)
    ).toEqual(
      expect.objectContaining({
        artistInfo: { name: "David Bowie" }
      })
    );
  });

  it("should return the initial state when called with FAILURE action type", () => {
    const action = {
      type: c.ARTIST_INFO_FAILURE,
      payload: { data: { name: "David Bowie" } }
    };
    expect(
      artistInfoResource({ artistInfo: { name: "David" } }, action)
    ).toEqual(
      expect.objectContaining({
        artistInfo: { name: "David" }
      })
    );
  });
});
