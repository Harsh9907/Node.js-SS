function createPromise() {
  return new Promise((resolve, reject) => {
    let x = setTimeout(function giveOut() {
      console.log("Harsh");
      return 10;
    }, 10000);
    if (x % 2 == 0) {
      resolve("resolved");
    } else {
      reject("rejected");
    }
  });
}

let y = createPromise();
console.log(y);
