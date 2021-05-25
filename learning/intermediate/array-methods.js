// REDUCE METHOD
// - The reduce method executes a summary function
// (ie. a function that sums up all the values in the array and returns the result)
// - This summary function is provided by you
// - It is executed on every item in the array
// - There is a single output value.

// REDUCE METHOD EXAMPLE
const myArray = [1, 2, 3, 4]
summary = (accumulator, currentValue) =>
  // As seen below the summary function can be a simple function or and if statement
  currentValue > 2 && accumulator + currentValue

// ARROW FUNCTION REDUCE
const reducerPractice = myArray.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})
// ACCUMULATOR//
// keeps a running tab of the callBack function results previously returned in the last
// invocation of the callback.
// It could also contain the initial value if you provide one

// CURRENTVALUE//
// the current element being processed in the array

sum = myArray.reduce(summary)
console.log(sum)
// console.log(reducerPractice)
