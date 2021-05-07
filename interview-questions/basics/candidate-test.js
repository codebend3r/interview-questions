var foo = 1;

var bar = function () {
  var foo = 2;
};

bar();

// value of foo?

////////////////////////

// data types

var f = function () {
  return 23;
};

// what is typeof f?

///////////////////////

var y = 1,
  x = (y = typeof x);

// what is the value of x?

////////////////////////

var x = (function f(f) {
  return typeof f();
})(function () {
  return 1;
});

// what will x be?

////////////////////////

// loops
var fruits = [
  {
    name: "grapes",
    price: 0.49,
  },
  {
    name: "apples",
    price: 0.88,
  },
  {
    name: "grapefruit",
    price: 1.01,
  },
  {
    name: "peaches",
    price: 2.01,
  },
  {
    name: "banana",
    price: 4.66,
  },
];

// loop through and find all fruits lower than $1

////////////////////////

// check to see if fruits is an array
