// "use strict";

// function fun(){
//     var studentName = "Harsh";
//     content = "JS"; // no auto globalization of this variable content due to strict mode usage.
//     console.log(studentName);
// }
// fun();
// console.log(content);

// console.log("hi");
// console.lo("hello");
// console.log("hello");

// console is an object, inside console object log is a function
// when parsing is done, console is already present in global scope, and no other formal declaration are present so everything went fine.
// in execution, "lo" is not a function which is present in console. so it throws error. 

// strict mode for function in block scope or global scope 

{
    function fun(){
        return "123";
    }
}
console.log(fun()); // Here when we are using the strict mode, the function fun will not get the global scope because it is written in the block scope, but when we are not using the strict mode, here the function fun will get the global scope it will not follow the block scope due to sloppy(non-strict) mode