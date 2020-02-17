module.exports = class UrlParser {
  constructor(format) {
    this.urlParts = format.split('/').slice(1);
  }

  parse(instance) {
    const hash = {};

    // Separate between url path and its query parameters
    const [url, query = ''] = instance.split('?'); // query defaults to '' when there are none of them

    // We insert into hash the url variables
    // /this/part/of/the/url?...
    const urlPath = url.split('/').slice(1);
    this.urlParts.forEach((urlPart, i) => {
      if (urlPart[0] !== ':') return;
      const k = urlPart.slice(1);
      const v = urlPath[i];

      hash[k] = Number(v) || v; // Converting to number if necessary
    });

    // We insert into hash the query parameters
    // ?this=part&of=the&url=now
    const queryParams = query.split('&');
    queryParams.forEach(queryParam => {
      const [k, v] = queryParam.split('=');
      hash[k] = Number(v) || v; // Converting to number if necessary
    });

    return hash;
  }
};
