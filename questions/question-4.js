/**
 * Given an array of integers, return the integers occurring K times.
 * If multiple numbers match the K frequency, return an array of those numbers.
 *
 *   Given [1,1,3,4,6,6,6,6]
 *   if k = 1, then return [3, 4]
 *   if k = 2, then return [1]
 *   if k = 3, then return []
 *   if k = 4, then return [6]
 *
 * @param {array} numbers
 * @param {number} k
 * @return {array}
 */
const findFrequentNumbers = (numbers = [], k = 1) => {
  const countHash = numbers.reduce(
    (acc, num) => ({
      ...acc,
      ...(!!acc[num] ? { [num]: acc[num] + 1 } : { [num]: 1 }),
    }),
    {}
  );

  return Object.entries(countHash).reduce(
    (acc, [key, value]) => [
      ...acc,
      ...(value === k ? [parseInt(key, 10)] : []),
    ],
    []
  );
};

// MORE CONTEXT
// this is what the output should be on L-37-40
// the function was empty to start
// I had to define what that function would look like
// And understand it's complexity

console.log(findFrequentNumbers([1, 1, 3, 4, 6, 6, 6, 6], 1)); // [3, 4]
console.log(findFrequentNumbers([1, 1, 3, 4, 6, 6, 6, 6], 2)); // [1]
console.log(findFrequentNumbers([1, 1, 3, 4, 6, 6, 6, 6], 3)); // []
console.log(findFrequentNumbers([1, 1, 3, 6, 4, 6, 6, 6], 4)); // [6]
