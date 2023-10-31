var teacher = "Harsh";
function fun() {
  var teacher = "Deep";
  content = "JS"; // content will get autoglobal, in the execution phase not in parsing phase
  console.log(teacher);
}
function gun() {
  var student = "Singh";
  console.log(student);
}
// console.log(content);
// if we console log the content here, content is not coming defined due to not formally declared in fun() function. that's why it was left by scope manager while giving scopes to variables and function during parsing phase.
fun();
gun();
console.log(teacher);
console.log(content);
//here it will work fine, because fun() function get invoked before printing the value of content variable; after calling fun(), content will get autoglobalized during the execution phase of fun() function.

console.log(course);
course = "DSA"; // this will give error due to no formally decalaration is done. So those variables which are not formally declared don't get scope during parsing process, but get autoglobalized during execution phase.
