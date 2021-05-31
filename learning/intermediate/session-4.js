// Overview

// checking an object with inconsistent data
// mario
const person1 = {
  name: 'Ralph',
  toastMessage: 'cheers mate!',
  age: 22,
}

const person2 = {
  name: 'Mustaf',
  toastMessage: 'maisha marefu',
  age: 19,
}

const person3 = {
  name: 'Dan',
  age: 31,
}

const person4 = {
  name: 'Vlad',
  toastMessage: 'ваше здоровье',
  age: 72,
}

const person5 = {
  name: 'Hillary',
  toastMessage: '*burps*',
}

const person6 = {}

const person7 = {
  name: 'David',
  toastMessage: 'Salud amigo!',
  age: 21,
}

const person8 = null

// Q1 - fill in the function below to accept a person object as a parameter
// the function will check the age of the person and if the person is 21 years or older they can drink
// IF they CAN drink then you will console log out there {toastMessage} AND THEN return TRUE
// IF they can NOT drink, do nothing and return FALSE
// keep in mind that it's POSSIBLE for the object to be empty or undefined, and therefore the properties {age} and {toastMessage} may NOT be defined
function canPersonDrink(person) {
  // fill in the function here

  const checkAge = person.age
  const checkToastMsg = person.toastMessage
  const validateAge = () => {
    checkAge >= 21 && console.log(checkToastMsg)
    return true
  }

  const falseReturn = () => {
    return false
  }

  typeof person === 'object' && checkAge
  checkAge === true && checkToastMsg
  checkAge === true && checkToastMsg === true && validateAge
  validateAge === false && falseReturn
}

// examples on how the function should be called
canPersonDrink(person1)
canPersonDrink(person2)
canPersonDrink(person3)
canPersonDrink(person4)
canPersonDrink(person5)
canPersonDrink(person6)
canPersonDrink(person7)
