const { Wheat, Sugarcane } = require("./crops");

class Farm {
  constructor(name) {
    this.name = name;
    this.crops = [];
    this.animals = [];
  }
  addCrop(crop) {
    this.crops.push(crop);
  }

  veganFarm() {
    if (this.animals.length === 0) {
      return `This farm is vegan.`;
    }
  }

  addAnimal(animal) {
    this.animals.push(animal);
  }
  //calculate the income of the farm? We can use the getYieldInEuros function on all the Crop instances that are in the this.crops. First we can transform all the crops into a value using the map function.
  //map will return array, we have to reduce it to one single value

  calculateIncomeCrops() {
    return this.crops
      .map(crop => crop.getYieldInEuros())
      .reduce((acc, currVal) => acc + currVal, 0);
  }

  highestIncomeCrop() {
    const highestIncomeCrop = this.crops.reduce((acc, currVal) => {
      //console.log("this is acc, ", acc);
      return acc.getYieldInEuros() > currVal.getYieldInEuros() ? acc : currVal;
    });
    return highestIncomeCrop;
  }

  calculateIncomeAnimals() {
    return this.animals
      .map(animal => animal.getValueInEuros())
      .reduce((acc, currVal) => acc + currVal, 0);
  }

  calculateIncome() {
    return this.calculateIncomeCrops() + this.calculateIncomeAnimals();
  }
  printReport() {
    if (this.animals.length === 0) {
      console.log("This farm is vegan!");
    }
    return `Farm: ${this.name}; 
    No. of animals: ${this.animals.length};    
    No. of crops: ${this.crops.length};
    Income from crops: ${this.calculateIncomeCrops()}.
    The farm grows the following crops: ${this.crops}.
    Crop that returns highest income is ${this.highestIncomeCrop()};
    Income from livestock: ${this.calculateIncomeAnimals()}. 
    Total income: ${Math.floor(this.calculateIncome())} EUR.`;
  }
}

const farmJ = new Farm("Jeroen");
farmJ.addCrop(new Wheat(100));
farmJ.addCrop(new Wheat(400));
farmJ.addCrop(new Wheat(800));
farmJ.addCrop(new Sugarcane(100));

console.log(farmJ.highestIncomeCrop());

console.log(farmJ.printReport());

module.exports.Farm = Farm;
