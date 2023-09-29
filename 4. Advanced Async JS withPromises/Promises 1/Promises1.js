// open in google chrome console.......
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createPromiseWithLoop() {
  return new Promise(function executor(resolve, reject) {
    // for (let i = 0; i < 10000000000; i++) {}
    let num = getRandomInt(10);
    if (num % 2 == 0) {
      resolve(num);
    } else {
      reject(num);
    }
  });
}
let x = createPromiseWithLoop();
console.log(x);

function createPromiseWithTimeout() {
  return new Promise(function executor(resolve, reject) {
    // for (let i = 0; i < 10000000000; i++) {}
    setTimeout(function () {
      //   let num = getRandomInt(10);
      let num = 10;
      if (num % 2 == 0) {
        resolve(num); //  resolve(num, 10, 20); we can pass more arguments in the resolve function,but only first arguments is gonna passed through.
      } else {
        reject(num);
      }
    }, 10000);
  });
}
// let y = createPromiseWithTimeout();
// console.log(y);
// So when we use a function create promise with the timer when we just run the code when then we are getting the promise in the pending state(placeholder) but after the 10 seconds that the promise will get into the fulfilled state if the number variable is even So during in between the 10 seconds, the JS will go through the code whatever it after it is written after that promise function code

// Not using resolve and the reject function instead of using resolve and reject function we are just simply return the values

////////////////////////////////////////////////////////////////////////////////////////////////////////
function createPromiseWithTimeout1() {
  return new Promise(function executor(resolve, reject) {
    // for (let i = 0; i < 10000000000; i++) {}
    setTimeout(function () {
      //   let num = getRandomInt(10);
      let num = 10;
      if (num % 2 == 0) {
        //   resolve(num);
        console.log("fulfilling...");
        return num;
      } else {
        //   reject(num);
        console.log("rejecting...");
        return num;
      }
    }, 1000);
  });
}
// let z = createPromiseWithTimeout1();
// console.log(z);

// So in this case the promise will always be in the pending state because we didn't use the resolve and reject function, when we are using the resolve and the reject function is then only we can change the state of the promises

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function createPromiseWithTimeout2() {
  return new Promise(function executor(resolve, reject) {
    // for (let i = 0; i < 10000000000; i++) {}
    setTimeout(function () {
      //   let num = getRandomInt(10);
      let num = 10;
      if (num % 2 == 0) {
        console.log("fulfilling...");
        resolve(num);
        console.log("Complete resolving...");
        resolve(10);
        console.log("resolving again");
        return num;
      } else {
        console.log("rejecting...");
        resolve(num);
        console.log("Completed rejecting...");
        resolve(11);
        console.log("rejecting again");
        return num;
      }
    }, 10000);
  });
}
// let a = createPromiseWithTimeout2();
// console.log(a);

// In this code sample, only resolve function is going to be used for changing the state of the promises, all other resolve function are reduntant, they have no effect at all and are of no use.
