function blocking_for_loop() {
  for (let i = 0; i < 10000000000; i++) {
    // something
  }
}
console.log("Start of the file");
setTimeout(function timer1() {
  console.log("Timer 1 done");
}, 5000);
blocking_for_loop();
let x = Promise.resolve("Sanket's promise1");
x.then(function processPromise(value) {
  console.log("Whose promise ? ", value);
  blocking_for_loop();
});
let y = Promise.resolve("Sanket's promise2");
y.then(function processPromise(value) {
  console.log("Whose promise ? ", value);
  setTimeout(function () {
    console.log("ok done");
  }, 0);
});
let z = Promise.resolve("Sanket's promise3");
z.then(function processPromise(value) {
  console.log("Whose promise ? ", value);
});
setTimeout(function timer2() {
  console.log("Timer 2 done");
}, 0);
console.log("End of the file");

// OUTPUT

// Start of the file
// for loop
// end of the file
// Whose promise ? Sanket Promise 1
// for loop
// Whose promise ? Sanket Promise 2
// Whose promise ? Sanket Promise 3
// Timer 1 done
// ok done
// Timer 2 done
