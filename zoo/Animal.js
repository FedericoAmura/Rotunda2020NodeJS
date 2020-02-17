module.exports = class Animal {
  constructor(sound) {
    if (this.constructor === Animal) {
      // No generic animal should be instantiated, making this class abstract
      throw new Error("Abstract classes can't be instantiated.");
    }

    this.sound = sound;
  }

  speak(text) {
    // Every word the animal says, is followed by it's sound
    console.log(text.split(' ').map(w => (w+' '+this.sound)).join(' '));
  }
};
