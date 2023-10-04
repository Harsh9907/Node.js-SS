function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log("Started downloading from", url);
    // let data = "Dummy data";
    // resolve(data);
    setTimeout(function processDownloading() {
      let data = "Dummy data";
      resolve(data);
      console.log("Download completed");
    }, 1000);
  });
}

console.log("Start");
let promiseObj = fetchData("skfbjkdjbfv");
promiseObj.then(function A(value) {
  console.log("value is", value);
});
console.log("end");

// OUTPUT
// Start
// Started downloading from skfbjkdjbfv
// end
// Download Complete
// value is Dummy data

// case 2

// If we interchange the linenumber 7 and 8 with each otherthen what will be the output?

// Ans - the output will be the same, because the processDownloading is in the callback queue, and the resolve(data) will get in the microtask queue, but the event loop will check that processDownloading is still in the callback queue, firstly it will get executed, then after processDownloading, resolve (A) handler will get executed, that's why the output is same.

// ============================= IMPORTANT==================================== //

// Q). When the promise got fulfilled or rejected, then only promise.then will be executed or work?
// Ans). In above example, promiseObj has already worked(line 13), the sole purpose of .then(resolve and reject function argument) is to only register the fulfillment and rejection handlers in the onFulfillment and onRejection Array.

// When the promise got fulfilled or rejected, then only handlers will be executed.

// Priority of the task in the stacks
// Call Stack(Global code) > microtask queue > callback/macrotask queue
