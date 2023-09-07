function fun(fn) {
    console.log("Welcome to fun");
    fn();
}

fun(function askHowMuchFun() {
    console.log("Wow so much fun");
    console.trace();
});

//In line 6 the fun function is get invoked in through which the function askHowMuchFun is being passed as an argument so that through this argument the function fun declaration in the first line got excetued and then it prints the "welcome to fun" and then the fn parameter in function got invoked(line 3) which is actually askHowMuchFun(=fn) function is and then that function then print "Wow so much fun".



// function factorial(n) {
//     return n <= 1 ? 1 : factorial(n - 1) * n;
// }
  
// let arr = [1, 2, 3, 4, 5].map(factorial);

// console.log(arr);
//or

// [1, 2, 3, 4, 5].map(function (n) {
//     return n <= 1 ? 1 : /* what goes here? */ (n - 1) * n;
// }); // here we are using anomynous function expression so while doing recursion, how can we call function again.
// https://developer.mozilla.org/en-US/docs/web/JavaScript/Reference/Functions/arguments/callee
// for recursive cases named function expression are also helpful