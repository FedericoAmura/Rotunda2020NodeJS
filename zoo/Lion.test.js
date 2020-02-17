const expect = require('chai').expect;
require('mocha-sinon');

const Lion = require('./Lion');

describe('Lion', () => {
  const lion = new Lion();

  beforeEach(function() {
    this.sinon.stub(console, 'log');
  });

  it('Should not be an abstract class', () => {
    expect(() => {new Lion();}).to.not.throw();
  });

  it('Should speak like a lion', () => {
    lion.speak("I'm a lion");
    expect(console.log.calledOnce).to.be.true;
    expect(console.log.calledWith("I'm roar a roar lion roar")).to.be.true;
  });
});
