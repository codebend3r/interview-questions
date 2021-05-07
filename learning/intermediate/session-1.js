// Overview
// The {zoo} array is a an array of objects
// Each object in the array has two properties: {name} and {makeNoise}
// The following questions involve LOOPING through the array {zoo} using one of the many array methods/functions
// forEach, map, reduce, filter, some, every

const zoo = [
  {
    name: "lion",
    makesNoise: () => {
      return "ROAR";
    },
  },
  {
    name: "giraffe",
    makesNoise: null,
  },
  {
    name: "snake",
    makesNoise: () => {
      return "SSSSSSSS";
    },
  },
  {
    name: "monkey",
    makesNoise: () => {
      return "EEE EEE EEE";
    },
  },
];

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

// HINT: use the `forEach` method to start
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// Since there are two questions here, I am expecting two answers.

// Q1
// loop through the {zoo} array and console log out the value of the {name} property

// Q2
// loop through the {zoo} array and console log the value of the {makeNoise} function IF IT EXISTS
