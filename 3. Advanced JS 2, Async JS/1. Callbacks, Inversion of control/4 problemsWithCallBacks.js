/*
 1. Inversion of control (Promises can resolve this issue, will discuss it later) // swiggy- razorpay problem example. 

 * IoC is all about inverting the control. To explain this in layman's terms, suppose you drive a car to your work place. This means you control the car. The IoC principle suggests to invert the control, meaning that instead of driving the car yourself, you hire a cab, where another person will drive the car. Thus, this is called inversion of the control - from you to the cab driver. You don't have to drive a car yourself and you can let the driver do the driving so that you can focus on your main work.
 
2. Callback hell -> readability problem, pyramid like structure, can be read from http://callbackhell.com/
*/

//inversion of control is bigger problem than callback hell.

// let arr = [1,10,1000,9,2,3,11];

// arr.sort(function cmp(a, b) {
//     return a - b;
// })

// console.log(arr);


function doTask(fn, x){
    // whole implementation is done by team A

    // fn(x+x); // calling my callback with square of x
    fn(x+x);
} // team A

// here team b tries to use it
doTask(function exec(num) { // due to callbacks, I am passing control of how exec should be called to doTask
    // this is inversion of control 
    console.log("Woah num is", num);
}, 9);