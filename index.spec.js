const { Farm } = require("./index");
const { Wheat, Sugarcane } = require("./crops");
const { Cow, Horse, Pig } = require("./animals");

test("A new Farm can be created", () => {
  const farm = new Farm();
  expect(farm).toBeTruthy();
});

test("A Farm can have a name", () => {
  const farm = new Farm("TEST_NAME");
  expect(farm.name).toBe("TEST_NAME");
});

//TEST addCrops
test("We can add a crop to our farm", () => {
  const farm = new Farm("TEST_NAME");
  farm.addCrop(new Wheat(100));
});

//TEST calculate income FARM
test("The income of an empty farm is 0", () => {
  const farm = new Farm("TEST_NAME");
  expect(farm.calculateIncome()).toBe(0);
});

test("The income of a 100 Wheat + 100 Sugarcane farm is X", () => {
  const farm = new Farm("TEST_NAME");
  farm.addCrop(new Wheat(100));
  farm.addCrop(new Sugarcane(100));
  expect(farm.calculateIncome()).toBeCloseTo(1918.37, 1);
});

//FULL FARM
test("Animals can be added to the farm", () => {
  const farm = new Farm();
  farm.addAnimal(new Cow(100));
});

test("Animals will be taken into account for calculateIncome", () => {
  const farm = new Farm();
  farm.addAnimal(new Cow(100));
  expect(farm.calculateIncome()).not.toBe(0);
});

//MY TEST
// that adds wheat, sugarcane, some cows, some horses and a pig to the
//farm and calculates its total value. Make sure the test passes and
//make sure the calculations are correct.

test("The income of a 100 Wheat + 100 Sugarcane + 10 Cows + 10 Pigs + 10 Horses farm is X", () => {
  const farm = new Farm("TEST_NAME");
  farm.addCrop(new Wheat(100));
  farm.addCrop(new Sugarcane(100));
  farm.addAnimal(new Pig(10));
  farm.addAnimal(new Cow(10));
  farm.addAnimal(new Horse(10));
  expect(farm.calculateIncome()).toBeCloseTo(2255.37, 1);
});

test("Report gets printed", () => {
  const farm = new Farm("Gdybam");
  farm.addAnimal(new Cow(10));
  farm.addCrop(new Sugarcane(100));
  farm.addCrop(new Wheat(100));
  expect(farm.printReport().indexOf("Farm") >= 0);
});
