//Jan15
console.log((1).toString());
console.log(typeof (1).toString()); // string

// ==========

let x = 10;
console.log(typeof x); // number
console.log(typeof x.toString()); //string
console.log(x.toString()); // automatic boxing done by JS
console.log((15).toString()); // manually boxing done by us
console.log((1).toString()); // 1..toString (VS code is not allowing this, it is putting parenthesis automatically) double dot does not give any error, because JS got to know that maybe 1 is float as 1.0, but second dot represents that we are converting this in string.
