// var fun = '123';
// function fun(){
//     return "fun2";
// }
// console.log(fun);
// console.log(fun());

// when we do console.log(fun), then the output came 123, but when we do console.log(fun()), it will throw error that fun is not a function, why?

// Answer -> because during the parsing phase only formal declaration will get into scope resolution. The variable fun whose value is 123 that gets the global scope and again then during the function fun declaration, during this the parser will check from the global scope that the fun is already present or not, the global scope will tell that that fun is present so here the parsing stops. 

// So during the execution phase the console.log(fun) will print the value 123, if we are calling only the fun variable and it will throw the error when we do the console.log(fun()), then we will get the error that fun is not a function because it is a variable which is being present in global scope.


var fun;
function fun(){
    return 'fun2';
}
console.log(fun);
console.log(fun());