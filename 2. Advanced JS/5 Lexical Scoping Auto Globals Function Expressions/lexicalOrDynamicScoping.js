//  JS follows lexical scoping.
// link -> https://www.techtarget.com/whatis/definition/lexical-scoping-static-scoping
var teacher = "Harsh";
function ask(question){
    console.log(teacher, question);
}
function fun(){
    var teacher = "Deep";
    ask("why");
}
fun();

// before running this program, Ansmer me that, what will be the output of this program?