const Animal = require('./Animal');

module.exports = class Lion extends Animal {
  constructor() {
    // Lions sound is 'roar'
    super('roar');
  }
};
