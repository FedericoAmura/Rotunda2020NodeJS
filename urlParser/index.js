const UrlParser = require('./UrlParser');

const urlParser = new UrlParser('/:version/api/:collection/:id');
const hash = urlParser.parse('/6/api/listings/3?sort=desc&limit=10');

console.log(JSON.stringify(hash));
