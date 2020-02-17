const Animal = require('./Animal');

module.exports = class Tiger extends Animal {
  constructor() {
    // Tiger sound is 'grrr'
    super('grrr');
  }
};
