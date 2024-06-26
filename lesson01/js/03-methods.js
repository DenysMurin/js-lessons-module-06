console.log("----------------methods-------------------");
// методы call, apply, bind
const showThis = function (param1, param2, arr) {
  console.log(param1, param2, arr);
  console.log("showThis->this", this);
  this.x = param1;
  this.y = param2;
  this.numbers = arr;
};
console.dir(showThis);
// showThis();

const objA = {
  a: 5,
  b: 10,
};

showThis.call(objA, 5, 1, [100, 200, 300]);
showThis.apply(objA, [5, 1, [100, 200, 300]]);

console.log("-----------------------------------");
const objB = {
  x: 788,
  y: 25,
};
const res = showThis.call(objB, 1, 1, [2]);
showThis.apply(objB, [1, 1, 2]);
console.log(res);

// !bind
const changeColor = function (color) {
  console.log("changeColor->this", this);
  this.color = color;
};

const hat = {
  color: "black",
};

const sweater = {
  color: "green",
};
const changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);

changeHatColor("yellow");
console.log(hat);

changeSweaterColor("red");
console.log(sweater);

// задача
const counter = {
  value: 0,
  increment(value) {
    console.log("increment->this", this);
    this.value += value;
  },
  decrement(value) {
    console.log("decrement->this", this);
    this.value -= value;
  },
};
const updateCounter = function (value, operation) {
  console.log("updateCounter ~ value:", value);
  operation(value);
};

const timer = {
  value: 4,
};

updateCounter(10, counter.increment.bind(counter));
updateCounter(5, counter.decrement.bind(counter));
console.log(counter);

updateCounter(6, counter.increment.bind(timer));
console.log(timer);
