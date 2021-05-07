(function () {
  var foo = 1;

  var bar = function () {
    var foo = 2;
  };

  bar();

  // Q1. what is the value of foo?
})();

(function () {
  let boo = 1;

  const zoom = function () {
    boo = 2;
  };

  zoom();

  // Q1. what is the value of boo?
})();
