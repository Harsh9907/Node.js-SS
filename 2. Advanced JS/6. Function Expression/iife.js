(function x() {
  console.log("Javascript");
})();

(function x(name) {
  console.log("hi " + name);
})("harsh");

// So immediately invoke function expressions are those functional expressions in which we wrote a function expression and immediately invoke them.

//Use Case of iife

function x() {
  console.log("Wow");
}
//
(function x(y) {
  console.log("hi", y);
})("Harshdeep");
//
x();
// So here we have the two function name X in which the one function is declared a long time before. Second X we have taken is made by the new developer, so if he didn't get checked that the function is already present or not or he want to use that name again he can use it through the iife function.

function f() {
  return 1;
}

function g() {
  return 2;
}
var i = 10;

// if(i%2 == 0) {
//     var res = f();
// } else {
//     var res = g();
// }

//instead of using upper code to evaluate the value , we can do that with iife function.

var res = (function evaluate(i) {
  if (i % 2 == 0) return f();
  else return g();
})(i);
console.log(res);
