// import zoo from './session-1.js'
// Overview
// Converting arrays to objects and objects to array
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

const animals = {
  lion: {
    makesNoise: () => {
      return 'ROAR'
    },
    weight: 500,
  },
  giraffe: {
    makeNoise: null,
    weight: 300,
  },
  monkey: {
    makesNoise: () => {
      return 'EEE EEE EEE'
    },
    weight: 200,
  },
  snake: {
    makesNoise: () => {
      return 'SSSSSSSS'
    },
    weight: 3,
  },
}

// Q1. convert the {animals} object to an array, it should look like this
// HINT: https://reactgo.com/convert-object-to-array-javascript/

const convertObjectToArray = (obj) => {
  const [key, value] = Object.entries(obj)
  Object.entries(obj).map((key, value) => {})
}

console.log(convertObjectToArray(animals))
// Object.entries returns an array of tuples (an array of EXACTLY two things, length of 2)
// we can then loop through each item in the array
const convertedAnimalsArray = Object.entries(animals).map((animal) => {
  // OPTION 1
  // const key = animal[0] // animal at position 0 (first in the array)
  // const value = animal[1] // animal at position 1 (second in the array)

  // OPTION 2
  // destruct both items in the array to two constants from the animal tuple: key, value
  const [key, value] = animal

  // BOTH ARE DESTRUCTING
  // const {} = something
  // const [] = something

  // key - lion - 0
  // key - giraffe - 1
  // key - monkey - 2
  // key - snake - 3

  // object signature is like this:
  // animalObject = {
  //   makeNoise,
  //   weight
  // }

  // OPTION 1
  // const mapObject = {}
  // mapObject.name = key
  // Object.keys(animalObject).forEach((innerKey) => {
  //   mapObject[innerKey] = animalObject[innerKey]
  // })
  // return mapObject

  // OPTION 2
  return {
    name: key,
    ...value, // spread value object to fill in the rest
  }
})

console.log('convertedAnimalsArray:', convertedAnimalsArray)

// const convertedAnimalsArray = [
//   {
//     name: 'lion',
//     makesNoise: () => {
//       return 'ROAR'
//     },
//   },
//   {
//     name: 'giraffe',
//     makesNoise: null,
//   },
//   {
//     name: 'snake',
//     makesNoise: () => {
//       return 'SSSSSSSS'
//     },
//   },
//   {
//     name: 'monkey',
//     makesNoise: () => {
//       return 'EEE EEE EEE'
//     },
//   },
// ]
