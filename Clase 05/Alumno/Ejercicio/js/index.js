function getRandomId() {
  return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
}

function getCarName() {
  return
}

function Car(model, brand, year) {
  this.model = model;
  this.brand = brand;
  this.year = year;
  var id = getRandomId()
  this.getId = function () {
    return id
  }
}

Car.prototype.getCarName = function () {
  return this.model + ' ' + this.brand + ' ' + this.year
}

var cars = [
  {
    model: 'Suran',
    brand: 'volkswagen',
    year: 2015
  },
  {
    model: `Audi TT`,
    brand: 'Audi',
    year: 2017
  },
  {
    model: `Gran turismo`,
    brand: 'Maserati',
    year: 2018
  }
]

var car1 = new Car('Suran', 'volkswagen', 1993);
console.log(car1)
var car2 = new Car('Audi TT', 'Audi', 2017)
console.log(car2)
var car3 = new Car('Gran Turismo', 'Maserati', 2018)
console.log(car3)
console.log(car1.getId())

console.log(car3.getCarName())
