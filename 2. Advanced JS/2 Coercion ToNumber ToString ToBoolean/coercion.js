// Abstract and Strict Equality Operators
console.log(undefined == false); // false
console.log(1 + 2); // 3
console.log("123" == 123); // true
console.log(NaN === NaN); // false
console.log("harsh" === "harsh"); // true
console.log(0 === -0); // true
console.log(typeof null); // object
console.log(null === null); // true
console.log("undefined === null : " + (undefined === null)); // false

let obj1 = { x: 10 };
let obj2 = obj1;
let obj3 = { x: 10 };

console.log(obj1 === obj2); // true
console.log(obj1 === obj3); //same values but object have different memory locations // false
