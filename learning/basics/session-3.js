// Overview
// {typeof} - the typeof keyword will let you find out the data type of a variable
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

// Examples

const aString = 'Friday'
const aBoolean = true
const aNumber = 33
const anObject = {}
const anArray = []
const aFunction = () => {}
const aSymbol = Symbol('foo')

const isNull = null

console.log(typeof aString) // string
console.log(typeof aBoolean) // boolean
console.log(typeof aNumber) // number
console.log(typeof anObject) // object
console.log(typeof anArray) // object
console.log(typeof aFunction) // function
console.log(typeof aSymbol) // symbol

console.log(typeof isUndefined) // undefined
console.log(typeof isNull) // object

// Notice that {anObject} {anArray} and {isNull} are ALL typeof {object}

// Q1
// Create a function that can take in any variable of any data type and it will RETURN true ONLY IF the data type is a STRING
const isString = (unknownVariable) => {}

isString(72) // false
isString("I'm in trouble") // true
isString([]) // false
isString(false) // false
isString('812') // true

// Q2
// Create a function that takes in one parameter of any data type and it will RETURN true ONLY IF the data type is a BOOLEAN
const isBoolean = (a) => {}

isBoolean(932)
isBoolean(-10)
isBoolean(0)
isBoolean(true)
isBoolean(false)
isBoolean(9 === 9)

// Q3
// Create a function that accepts a function as a param and will EXECUTE it IF it's a valid function
// TIP: the function needs to check the typeof someFunc value

const isFunctionAndCall = (someFunc) => {
  // ANSWER HERE
}

const doMath = function () {
  return 1 + 2
}

const doStuff = (greetings) => {
  return 'hello ' + greetings
}

const addTwoNumbers = (a, b) => {
  return a + b
}

function makeStuffHappen() {
  console.log('boom')
}

isFunctionAndCall(doMath)
isFunctionAndCall(null)
isFunctionAndCall('mario')
isFunctionAndCall(doStuff.bind(null, 'Chester'))
isFunctionAndCall(addTwoNumbers.bind(null, 44, 56))
isFunctionAndCall(() => {})
isFunctionAndCall(makeStuffHappen)
isFunctionAndCall(33)
