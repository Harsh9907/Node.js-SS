console.log("hello");
function fun(){
    console..log(1);
}
console....log("world");
console.log("bye");
//  upper code : it is not getting executed at all. JS showing compiled language nature
// =========================

console.log("hello");
function fun(){
    console.log(1);
}
console.lo("world");// there is no "lo" function in console
console.log("bye");
// This code's first line got executed but the third line throws error. Here, JS showing Interprerated language behaviour 