function getSign(number) {
  // Check if the value is a number
  if (typeof number !== "number") {
    return NaN;
  }
  // If the number is equal to zero, return zero
  if (number === 0) {
    return 0;
  }
  // Otherwise, return the sign of the number
  return number > 0 ? 1 : -1;
}

// console.log(getSign("harsh"));
// console.log(getSign(-9));


// isNaN

let x = NaN;
if(typeof x == "number" && x !== x){ // it is same as x === x
    console.log(true);
}else{
    console.log(false);
}

// negative zero
console.log("==========");
console.log(0 === -0);

// custom func to check whether a number is -0 or 0

const number = 0;

if (number === -0 && typeof number === "number") {
  // The number is -0
  console.log("-0");
}else{
    console.log("0");
}
