
// Abstract and Strict Equality Operators
console.log(undefined == false);
console.log(1+2);
console.log("123" == 123)
console.log(NaN === NaN)
console.log("harsh" === "harsh")
console.log(0 === -0)
console.log(typeof null)
console.log(null === null)

let obj1 = {x:10};
let obj2 = obj1;
let obj3={x:10};

console.log(obj1 === obj2)
console.log(obj1 === obj3) //same values but object have different memory locations