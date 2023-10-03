console.log("Start of the file");

setTimeout(function timer1() {
  console.log("Timer 1 done");
}, 0);

for (let i = 0; i < 10000; i++) {
  // something
}

let x = Promise.resolve("Harsh's promise"); // JS Promise gives us a shorthand syntax using which we can write an already resolved promise (Promise.resolve). This line promise.resolve("Harsh promise") can alse be wriiten as below:

//    x = Promise.resolve("Sanket's promise")    OR        x = function harshPromise() {
//                                                             return new Promise((resolve, reject) => {
//                                                             resolve("Harsh promise");
//                                                             });
//                                                         }
x.then(function processPromise(value) {
  console.log("Whose promise ? ", value);
});

setTimeout(function timer2() {
  console.log("Timer 2 done");
}, 0);

console.log("End of the file");

// OUTPUT

// Start of the file
// for loop
// End of the file
// Whose promise ? Harsh's Promise
// Timer 1 done
// Timer 2 done
