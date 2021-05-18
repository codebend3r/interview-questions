// Overview
// The {zoo} object contains one property named {animals} which is another object
// This is called a nested object (an object within an object)

const defaultMakeNoise = () => 'squeeeek'

const zoo = {
  animals: {
    lion: {
      makesNoise: () => {
        return 'ROAR'
      },
    },
    giraffe: {
      makeNoise: null,
    },
    monkey: {
      makesNoise: () => {
        return 'EEE EEE EEE'
      },
    },
    snake: {
      makesNoise: () => {
        return 'SSSSSSSS'
      },
    },
  },
}

// Q1
// how do you call the {makeNoise} function in the {lion} object?
console.log(zoo.animals.lion.makesNoise())

// Q2
// make a function that takes in an animal object (lion, giraffe, monkey, snake)
// and checks to see if the {makeNoise} function exists and IS a function
// ELSE call the default noise function {defaultMakeNoise}

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
// Please type out the code below.

const doesAnimalMakeNoise = ({ makesNoise }) => {
  typeof makesNoise !== 'function'
    ? console.log(makeNoise)
    : console.log(makesNoise())
}

const { lion, giraffe, monkey, snake } = zoo.animals

doesAnimalMakeNoise(lion) // should return 'ROAR'
doesAnimalMakeNoise(giraffe) // should return 'squeeeek'
doesAnimalMakeNoise(monkey) // should return 'EEE EEE EEE'
doesAnimalMakeNoise(snake) // should return 'SSSSSSSS'
