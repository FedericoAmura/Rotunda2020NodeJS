const expect = require('chai').expect;

const Animal = require('./Animal');

describe('Animal', () => {
  it('Should be an abstract class, throwing when creating new instance', () => {
    expect(Animal).to.throw(Error);
  });
});
