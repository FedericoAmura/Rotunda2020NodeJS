const expect = require('chai').expect;
require('mocha-sinon');

const Tiger = require('./Tiger');

describe('Tiger', () => {
  let tiger = new Tiger();

  beforeEach(function() {
    this.sinon.stub(console, 'log');
  });

  it('Should not be an abstract class', () => {
    expect(() => {tiger = new Tiger();}).to.not.throw();
  });

  it('Should speak like a tiger', () => {
    tiger.speak("Lions suck");
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.calledWith("Lions grrr suck grrr")).to.be.true;
  });
});
