var x = (function f(f) {
  return typeof f();
})(function () {
  return 1;
});

// Q1. what is the value of x?
console.log("value of x is:", x);
