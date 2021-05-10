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

// console.log(typeof aString) // string
// console.log(typeof aBoolean) // boolean
// console.log(typeof aNumber) // number
// console.log(typeof anObject) // object
// console.log(typeof anArray) // object
// console.log(typeof aFunction) // function
// console.log(typeof aSymbol) // symbol

// console.log(typeof isUndefined) // undefined
// console.log(typeof isNull) // object

// Notice that {anObject} {anArray} and {isNull} are ALL typeof {object}

// Q1
// Create a function that can take in any variable of any data type and it will RETURN true ONLY IF the data type is a STRING

const isString = (unknownVariable) => {
  return typeof unknownVariable === 'string'
}

isString(72) // false
isString("I'm in trouble") // true
isString([]) // false
isString(false) // false
isString('812') // true

// Create a function that takes in one parameter of any data type and it will RETURN true ONLY IF the data type is a BOOLEAN

const isBoolean = (a) => {
  return typeof a === 'boolean'
}

// isBoolean(932)
// isBoolean(-10)
// isBoolean(0)
// isBoolean(true)
// isBoolean(false)
// isBoolean(9 === 9)

// Q2
// Create a function that takes in a function as a param and will EXECUTE it IF it's a valid function
// TIP: the function needs to check the typeof someFunc value

const isFunctionAndCall = (someFunc) => {
  // typeof someFunc === 'function' && someFunc()

  if (typeof someFunc === 'function') {
    console.log('execute function')
    return someFunc()
  } else {
    console.log('not a function, do nothing')
  }
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

// typeof isFunctionAndCall(doMath)
// typeof isFunctionAndCall(null)
// typeof isFunctionAndCall('mario')
// typeof isFunctionAndCall(doStuff.bind(null, 'Chester'))
// typeof isFunctionAndCall(addTwoNumbers.bind(null, 44, 56))
// typeof isFunctionAndCall(() => {})
// typeof isFunctionAndCall(makeStuffHappen)
// typeof isFunctionAndCall(33)

const isDefined = (someVar) => {
  return typeof someVar !== 'undefined' && someVar !== null
}

// isDefined(45)
// isDefined(0)
// isDefined(true)
// isDefined(false)
// isDefined(null)
// isDefined(undefined)
// isDefined([])
// isDefined({})
// isDefined('')
// isDefined('some story')

//WHAT I LEARNED FROM THIS EXERCISE

// 1. !== means is not
// 2. to call a function you place () after the name of the function eg. isFunctionAndCall() to call the following function
// const isFunctionAndCall = (someFunc) => {
//   // typeof someFunc === 'function' && someFunc()

//   if (typeof someFunc === 'function') {
//     console.log('execute function')
//     return someFunc()
//   } else {
//     console.log('not a function, do nothing')
//   }
// }
// 3. return key word tells javascript that you'd like to know the value that was created when the function was executed.
// 4. typeof always returns the type of the function as a string
// 5. a parameter must be passed into a function to allow the function to assess itself eg.
// adderFunc = (a) => {
// allows someFunc to look for parameter a and evaluate it. Example below
// }

// MARIO'S EXAMPLES
const adderFunc = (someNum) => {
  typeof someNum === 'number'
    ? console.log('this is a number')
    : console.log('this is not a number')
}

// UNCOMMENT BELOW TO CALL THE ADDER FUNCTION
// adderFunc('hello there')

const adderFuncPlus = (someOtherNum) => {
  if (typeof someOtherNum === 'number') {
    console.log(someOtherNum + 20)
  } else {
    console.log('cannot do the math')
  }
}

typeof adderFuncPlus('toodles')
typeof adderFuncPlus(10 + 30)
typeof adderFuncPlus(20)

// const greatman = "I am a great man"
// const greaterman = "I am greater man"

// marioFunc(10)
// marioFunc(10)
// marioFunc(null)
// marioFunc(greatman + greaterman)
// marioFunc([])
