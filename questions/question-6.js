// Question: Write a function, such that it can determine whether an array of integers passed
// to it is contiguous or not.
// e.g.
// [3, 1, 2, 4] is contiguous because all the numbers lie next to each other the a number line
// [-2, -1, 1, 2] is not contiguous because 0 is missing.

// test cases, with the expected outcome in the comment.
const tc1 = [5, 2, 3, 6, 4, 4, 6, 6]; // true
const tc2 = [10, 14, 10, 12, 12, 13, 15]; // false
const tc3 = [0, -1, -3, -2, 1, 2]; // true
const tc4 = [-1, -3, -2, 1, 2]; // false
const tc5 = [99, 99, 99]; // true

function isContiguous(candidate) {
  console.log("..............");
  const isCont = candidate
    .sort()
    .reduce((acc, currentValue, index, sourceArray) => {
      // console.log('index:', index)
      // console.log('-----')

      // console.log('acc:', acc)

      if (index !== 0 && !acc.isContig) {
        console.log("BREAK OUT RETURNING FALSE");
        return {
          isContig: false,
          prevValue: currentValue,
        };
      }

      const a = index === 0;

      // console.log('a:', a)

      const b = !!acc.prevValue
        ? acc.prevValue + 1 === currentValue || acc.prevValue === currentValue
        : true;

      // console.log('b:', b)

      const isWhatever = a || b;

      // console.log('isWhatever:', isWhatever)

      return {
        isContig: isWhatever,
        prevValue: currentValue,
      };
    }, {});

  // console.log('isCont:', isCont)

  return isCont.isContig;
}
//
[tc1, tc2, tc3, tc4, tc5].forEach((tc, i) =>
  console.log(`tc${i + 1} is contiguous: ${isContiguous(tc)}`)
);

//sort
//loop through
//use reduce to check previous file
