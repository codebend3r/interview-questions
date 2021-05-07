// Overview
// {typeof} - the typeof keyword will let you find out the data type of a variable
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

// Examples

const aString = "Friday";
const aBoolean = true;
const aNumber = 33;
const anObject = {};
const anArray = [];
const aFunction = () => {};
const aSymbol = Symbol("foo");

const isNull = null;

console.log(typeof aString); // string
console.log(typeof aBoolean); // boolean
console.log(typeof aNumber); // number
console.log(typeof anObject); // object
console.log(typeof anArray); // object
console.log(typeof aFunction); // function
console.log(typeof aSymbol); // symbol

console.log(typeof isUndefined); // undefined
console.log(typeof isNull); // object

// Notice that {anObject} {anArray} and {isNull} are ALL typeof {object}

// Q1
// Create a function that can take in any variable of any data type and it will return ture ONLY IF the data type is a string

const isString = (unknownVariable) => {};

isString(72);
isString("I'm in trouble");
isString([]);
isString(false);
isString("812");

// Q2
// Create a function that takes in a function as a param and will EXECUTE IT if it's a valid function
// TIP: the function needs to check the typeof someFunc value

const isFunctionAndCall = (someFunc) => {};
