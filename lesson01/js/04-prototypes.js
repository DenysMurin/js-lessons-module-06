console.log("--------------prptotypes-----------------");
const animal = {
  canBark: true, //может гавкать
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "mango";
dog.age = 8;
dog.passport = true;

console.log(animal);
console.log(dog);
console.log(dog.name);
console.log(dog.legs);
// проверка собственности параметров
console.log(dog.hasOwnProperty("name")); //true
console.log(dog.hasOwnProperty("legs")); //false

for (const key in dog) {
  if (dog.hasOwnProperty(key)) {
    console.log("собственное:", key);
  }
  //   console.log("общее:", key);
}
// вывод параметров собственных
const dogParams = Object.keys(dog);
console.log("dogParams:", dogParams);
// вывод значения собственных параметров
const dogConfig = Object.values(dog);
console.log("dogConfig:", dogConfig);

// проверка, является ли побъект прототипом для объекта
const isPrototypeOf = animal.isPrototypeOf(dog);
console.log("isPrototypeOf:", isPrototypeOf);
// и наоборот
const isPrototypeOf1 = dog.isPrototypeOf(animal);
console.log("isPrototypeOf1:", isPrototypeOf1);

// !проверка наличия или отсутствия свойств
const objC = { c: "objC prop" };

const objB = Object.create(objC);
objB.b = "objB prop";

const objA = Object.create(objB);
objA.a = "objA prop";

console.log(objA);
console.log(objB);
console.log(objC);

console.log(objA.hasOwnProperty("a"));
console.log(objA.a);

console.log(objA.hasOwnProperty("b"));
console.log(objA.b);

console.log(objA.hasOwnProperty("c"));
console.log(objA.c);

console.log(objA.hasOwnProperty("x"));
console.log(objA.x);
