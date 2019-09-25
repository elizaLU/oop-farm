class Animal {
  constructor(age) {
    this.age = age;
  }
}

class Pig extends Animal {
  constructor(age) {
    super(age);
    this.price = 4;
  }
  getWeightInKg() {
    ////shorter: return Math.min(700, this.age * 1.5)
    if (this.age * 2.3 > 700) {
      return (this.age = 700);
    } else {
      return this.age * 2.3;
    }
  }
  getValueInEuros() {
    return this.price * this.getWeightInKg();
  }
}

class Cow extends Animal {
  constructor(age) {
    super(age);
    this.price = 5;
  }
  getWeightInKg() {
    //shorter: return Math.min(1200, this.age * 1.5)
    if (this.age * 2.3 > 1200) {
      return (this.age = 1200);
    } else {
      return this.age * 1.5;
    }
  }

  getValueInEuros() {
    return this.price * this.getWeightInKg();
  }
}

class Horse extends Animal {
  constructor(age) {
    super(age);
    this.price = 10;
  }
  getWeightInKg() {
    ////shorter: return Math.min(1000, this.age * 1.5)
    if (this.age * 2.3 > 1000) {
      return (this.age = 1000);
    } else {
      return this.age * 1.7;
    }
  }

  getValueInEuros() {
    return this.price * this.getWeightInKg();
  }
}

module.exports = { Pig, Cow, Horse };
