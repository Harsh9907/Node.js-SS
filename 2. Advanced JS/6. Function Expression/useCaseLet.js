function fun() {
    for(var i = 0; i < 10; i++) { // what will be the output of this loop, if we use let instead of var in for loop
        console.log(i);
    }
    console.log(i);
}

function swap(x, y) {
    if(x > y) {
        // var temp = x; // here we cant use var in this scenario, because var temp has access throughout the if block ans function process block, because of this, user can use temp variable outside the if block which misused or mishandled by mistake. so here we can use "let", if temop is not going to use in outer scope.  
        let temp = x;
        x = y;
        y = temp;
    }
    return y - x;
}

fun();