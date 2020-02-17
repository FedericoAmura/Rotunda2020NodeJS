const expect = require('chai').expect;

const UrlParser = require('./UrlParser');

describe('UrlParser', () => {
  it('Should parse url according to its variables and query params', () => {
    const urlParser = new UrlParser('/:version/api/:collection/:id');
    const hash = urlParser.parse('/6/api/listings/3?sort=desc&limit=10');

    // {
    //   version: 6,
    //   collection: 'listings',
    //   id: 3,
    //   sort: 'desc',
    //   limit: 10
    // }
    expect(hash.version).to.equal(6);
    expect(hash.collection).to.equal('listings');
    expect(hash.id).to.equal(3);
    expect(hash.sort).to.equal('desc');
    expect(hash.limit).to.equal(10);
  });

  it('Should parse url according to its variables and not crash due to empty query params', () => {
    const urlParser = new UrlParser('/:version/api/:collection/:id');
    const hash = urlParser.parse('/6/api/listings/3');

    // {
    //   version: 6,
    //   collection: 'listings',
    //   id: 3,
    //   sort: 'desc',
    //   limit: 10
    // }
    expect(hash.version).to.equal(6);
    expect(hash.collection).to.equal('listings');
    expect(hash.id).to.equal(3);
  });
});
