///////////////////////////
// Currying is the process of turning a function that expects multiple parameters into one that, when supplied fewer parameters, returns a new function that awaits the remaining ones.
///////////////////////////

(function () {
  // Q: write a function that you can write like this: foo(a)(b);
  // and returns the sum of a & b, ie: foo(10)(5) = 15

  var foo = function (a) {
    return function (b) {
      return a + b;
    };
  };
})();

///////////////////////////
// what are closures | currying
///////////////////////////

(function () {
  function foo(x) {
    var baz = 3;
    return function (y) {
      console.log(x + y + ++baz);
    };
  }

  var moo = foo(2); // moo is now a closure.
  moo(1); // 7
  moo(1); // 8!
})();

///////////////////////////
// #1
///////////////////////////

(function () {
  var f = function () {
    return 23;
  };
  console.log(typeof f);

  // is "function" because f is assigned to a function declaration, NOT the execution
})();

///////////////////////////
// #2
///////////////////////////

(function () {
  var y = 1,
    x = (y = typeof x);

  console.log(x);
  // undefined because assignment is right to left
  // so first y is equal to x which is not defined yet and therefore x is assigned to itself as undefined
})();

///////////////////////////
// #3
///////////////////////////

(function f(f) {
  return typeof f();
})(function () {
  return 1;
});

// returns number because out function computes to 1 and inner function returns typeof 1 as number

///////////////////////////
// #4
///////////////////////////

(function () {
  var foo = {
    bar: function () {
      return this.baz;
    },
    baz: 1,
  };
  (function () {
    return typeof arguments[0]();
  })(foo.bar);

  // returns undefined because arguments[0] = foo.bar which data type is function but you can't execute a string as function
})();

///////////////////////////
// #5
///////////////////////////

(function () {
  var foo = {
    bar: function () {
      return this.baz;
    },
    baz: 1,
  };
  var f;
  typeof (f = foo.bar)();

  // undefined because f assignment can not be executed
})();

///////////////////////////
// #6
///////////////////////////

(function () {
  var f = (function f() {
    return "1";
  },
  function g() {
    return 2;
  })();

  typeof f;
})();

///////////////////////////
// #7
///////////////////////////

(function () {
  (function (foo) {
    return typeof foo.bar;
  })({ foo: { bar: 1 } });
})();

///////////////////////////
// #8
///////////////////////////

(function () {
  // anonymous function scope
  var foo = 1;

  function bar() {
    // bar function scope
    var foo = 2;
  }

  bar();
  console.log(foo); // outputs 1
  if (true) {
    var foo = 3; // redeclares foo
  }
  console.log(foo); // outputs 3
})();
