import getUrlParams from "utils/getUrlParams";

export default function updateLocationQuery(key, value) {
  const newLocation = window.location.origin + window.location.pathname;
  const result = getUrlParams(window.location.search);

  result[key] = value;

  const newQueryStr = '?' + Object.keys(result)
    .map(currKey => `${currKey}=${result[currKey]}`)
    .join('&');

  window.history.replaceState(null, '', newLocation + newQueryStr);
}
