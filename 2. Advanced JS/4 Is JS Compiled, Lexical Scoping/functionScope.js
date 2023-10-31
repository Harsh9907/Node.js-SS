if (true /*false*/) {
  var x = 10;
}
console.log(x);
function fun() {
  console.log("Inside function");
  console.log(y);
  var y = 10;
}

fun();
// console.log(y);

// // var creates global scope and function scope
// // let creates block scope, and it is accesible only in below written code.

{
  var harsh = 10;
}
harsh = 2;
console.log(harsh);
