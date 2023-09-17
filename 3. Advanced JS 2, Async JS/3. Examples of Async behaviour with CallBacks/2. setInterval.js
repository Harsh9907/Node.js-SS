// let x = setInterval(function () {
//   console.log("Harsh");
// }, 1000);

// let y = setInterval(function () {
//   console.log("deep");
// }, 500);

// console.log(typeof x, typeof y);

// clearInterval(x);
// clearInterval(y);

// In the browser runtime, x and y types are number and in the node.js runtime, types of x and y are object.

let x = setInterval(function () {
  console.log("Harsh");
}, 500);

setTimeout(() => {
  clearInterval(x);
}, 5000);

let count = 0;
let y = setInterval(function exec() {
  count++;
  console.log(count);
  if (count > 15) {
    clearInterval(y);
  }
}, 2000);

// Application :-> Javscript Visualizer 9000 (jsv9000.app)
