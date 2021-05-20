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

// Q1. convert the zoo object to an array, it should look like this
// HINT: https://reactgo.com/convert-object-to-array-javascript/

const convertObjectToArray = (obj) => {
  const [key, value] = Object.entries(obj)
  Object.entries(obj).map((key, value) => {})
}

console.log(convertObjectToArray(animals))

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
