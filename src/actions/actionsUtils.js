export const getApiKey = () => process.env.LASTFM_KEY;
export const getApiUrl = () => process.env.LASTFM_URL;

export const getResourceByMbid = (mbid, method) =>
  getApiUrl() +
  "/2.0/?method=" +
  method +
  "&format=json&mbid=?" +
  mbid +
  "&api_key=" +
  getApiKey();

export const getResourceByCountry = (country, method) =>
  getApiUrl() +
  "/2.0/?method=" +
  method +
  "&format=json&country=" +
  country +
  "&api_key=" +
  getApiKey();
