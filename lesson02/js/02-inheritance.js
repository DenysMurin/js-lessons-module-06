console.log("--------------наследование-----------222222");
/**
 * наследование
 * extends
 * конструктор дочерних классов
 * методы дочерних классов
 */

class Car {
  constructor(maken, modelle) {
    this.maken = maken;
    this.modelle = modelle;
  }
}
class Truck {
  constructor(maken, modelle) {
    this.maken = maken;
    this.modelle = modelle;
  }
}

const car1 = new Car("toyota", "camry");
console.log("car1:", car1);

const truck1 = new Truck("ford", "f150");
console.log("truck1:", truck1);
// все что выше -повторяет друг друга, можно создать общий класс
// упростим

class Vehicle {
  #numberOfSeats = 2;
  constructor(make, model, numberOfSeats) {
    this.make = make;
    this.model = model;
    this.#numberOfSeats = numberOfSeats;
  }
  get model() {
    return this._model;
  }
  set model(newNodel) {
    this._model = newNodel;
  }
  drive() {
    console.log(`you went on ${this.make} ${this.model}`);
  }
}

class Bus extends Vehicle {
  #maxSpeed = 150;
  constructor(make, model, speed, numberOfSeats) {
    super(make, model, numberOfSeats);
    if (speed <= this.#maxSpeed) {
      speed = this.#maxSpeed;
    }
  }
}

class HotWeels extends Car {
  constructor(make, model, speed, numberOfSeats, power) {
    super(make, model, speed, numberOfSeats);
    this.power = power;
  }
}

class Auto extends Vehicle {
  #maxSpeed = 150;
  constructor(make, model, speed, numberOfSeats) {
    super(make, model, numberOfSeats);
    if (speed <= this.#maxSpeed) {
      speed = this.#maxSpeed;
    }
  }
}

// добавил еще скорость
const bus1 = new Bus("LAZ", "laz1589", 120, 4);
console.log("bus1:", bus1);
console.log(bus1.model);

const auto1 = new Auto("Merc", "600", 300, 6);
console.log("auto1:", auto1);

const hotWeel1 = new HotWeels("toyota", "supra", 40, 2, "1000 kwt");
console.log("HotWeel1:", hotWeel1);

auto1.drive();
bus1.drive();
