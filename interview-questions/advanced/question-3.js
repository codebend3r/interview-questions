// QUESTION
// How can you change the value of `this` within the area function?
// Extra content, say you wanted to change the value of PI to be more accurate
// so you would pass in more decimals points

var mathLib = {
  pi: 3.14,
  area: function (r) {
    return this.pi * r * r;
  },
  circumference: function (r) {
    return 2 * this.pi * r;
  },
};

// ANSWER
// use the bind, apply, or call methods to change the scope of the `area` function

const a = {
  pi: 3.141592653589793,
};

const areaA = mathLib.area.apply(a, 100);
const areaB = math.area(100);
