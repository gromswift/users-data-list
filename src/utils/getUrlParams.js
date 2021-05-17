export default function(queryStr) {
  const result = {};

  if (queryStr) {
    queryStr
      .substr(1)
      .split("&")
      .forEach(part => {
        const item = part.split("=");

        result[item[0]] = decodeURIComponent(item[1]);
      });
  }

  return result;
}