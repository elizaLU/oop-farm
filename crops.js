class Crop {
  constructor(acres) {
    this.acres = acres;
  }
  getCosts() {
    return this.acres * this.costs;
  }
  toString() {
    return this.constructor.name + " " + JSON.stringify(this);
  } //constructor.name will evaluate to Class Name
}

class Wheat extends Crop {
  constructor(acres) {
    super(acres);
    //this.acres = acres in already copied through the constuctor
    this.price = 1.5;
    this.costs = 340;
  }

  getYieldInKg() {
    return Math.pow(this.acres * 1.5, 1.3);
  }

  getYieldInEuros() {
    return this.getYieldInKg() * this.price;
  }
}

class Sugarcane extends Crop {
  constructor(acres) {
    super(acres);
    //this.acres = acres in already copied through the constuctor
    this.price = 2;
    this.costs = 166;
  }
  getYieldInKg() {
    return Math.pow(this.acres * 2.6, 1.1);
  }
  getYieldInEuros() {
    return this.getYieldInKg() * this.price;
  }
}

module.exports = { Crop, Wheat, Sugarcane };
