function createPromise() {
  return new Promise((resolve, reject) => {
    let x = setTimeout(function giveOut() {
      console.log("Harsh");
      return 1;
    }, 3000);
    if (x % 2 == 0) {
      resolve("reject");
    } else {
      reject("rejected");
    }
  });
}

let y = createPromise();
console.log(y);
