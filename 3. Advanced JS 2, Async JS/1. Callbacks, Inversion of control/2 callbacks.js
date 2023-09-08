/**
 * fun -> HOF ? -> it takes fn (which is a function) as argument
 * 
 * x -> number
 * fn -> function
 */

function fun(x, fn) {
    for(var i = 0; i < x; i++) {
        console.log(i);
    }
    console.log(i);
    fn();
}

fun(10, function exec() { // callback(exec)
    console.log("I am executed also");
});

// callback functions are those which are going to be consumed in HOF functions as an arguments.
// or those functions which are passed as an argument to the HOF functions are known as callback functions.

setTimeout(function exec(){ //exec is a callback function
    console.log("Hi, I am exec, a Callback function");
},4000);
// in setTimeout function, we are not calling or invoking exec, even then it gets called or executed, answer of this is , somehow where setTimeout function is implemented, it's been handled.
// unlike in fun func(line 8), we are invoking "fn" (callback function) in 13 line, because we made this function. 