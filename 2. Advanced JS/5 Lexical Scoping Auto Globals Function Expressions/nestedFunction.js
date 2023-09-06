function fun(){  // fun() -> global scope
    var x = 10; // x -> fun() scope
    function gun(){ // gun() -> fun() scope
        var y = 20; // y -> gun() scope
        console.log(x); // x value will be taken from fun() scope
        console.log(y);
    }
    gun();
    console.log(x);
    console.log(y);
}
fun();