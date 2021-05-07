// Overview
// The {zoo} object contains one property named {animals} which is another object
// This is called a nested object (an object within an object)

const defaultMakeNoise = () => "squeeeek";

const zoo = {
  animals: {
    lion: {
      makesNoise: () => {
        return "ROAR";
      },
    },
    giraffe: {
      makeNoise: null,
    },
    monkey: {
      makesNoise: () => {
        return "EEE EEE EEE";
      },
    },
    snake: {
      makesNoise: () => {
        return "SSSSSSSS";
      },
    },
  },
};

// Q1
// how do you call the {makeNoise} function in the {lion} object?

// Q2
// make a function that takes in an animal object (lion, giraffe, monkey, snake)
// and checks the {makeNoise} function

const doesAnimalMakeNoise = () => {};

doesAnimalMakeNoise(zoo.animals.lion); // should return TRUE
doesAnimalMakeNoise(zoo.animals.giraffe); // should return FALSE
doesAnimalMakeNoise(zoo.animals.monkey); // should return TRUE
doesAnimalMakeNoise(zoo.animals.snake); // should return TRUE

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
// Please type out the code below.
