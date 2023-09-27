function createPromise() {
  return new Promise((resolve, reject) => {
    let x = setTimeout(function giveOut() {
      return 1;
    }, 30000);
    if (x % 2 == 0) {
      resolve("successfull");
    } else {
      reject("rejected");
    }
  });
}

let y = createPromise();
console.log(y);
