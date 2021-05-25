// Overview

// Converting arrays to objects and objects to array
const animals = {
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
}

// Q1. convert the {animals} object to an array, it should look like this {convertedAnimalsArray} (look at that variable)
// HINT: https://reactgo.com/convert-object-to-array-javascript/
const convertObjectToArray = () => {}

console.log('convertedAnimalsArray:', convertedAnimalsArray)

// this is for reference only
// the object converted to array should look like this
const convertedAnimalsArray = [
  {
    name: 'lion',
    makesNoise: () => {
      return 'ROAR'
    },
  },
  {
    name: 'giraffe',
    makesNoise: null,
  },
  {
    name: 'snake',
    makesNoise: () => {
      return 'SSSSSSSS'
    },
  },
  {
    name: 'monkey',
    makesNoise: () => {
      return 'EEE EEE EEE'
    },
  },
]
