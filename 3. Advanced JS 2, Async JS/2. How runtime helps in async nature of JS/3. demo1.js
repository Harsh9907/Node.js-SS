function timeConsumingByLoop() {
  console.log("loop starts");
  for (let i = 0; i < 1000000000; i++) {
    // some task   JS shows blocking nature beacuse for loop is native to JS. This code is blocking in nature.
  }
  console.log("loop ends");
}
function timeConsumingByRuntimeFeature0() {
  console.log("Starting timer 0");
  setTimeout(function exec() {
    // js shows non blocking nature in functions provided by runtime.
    console.log("Completed the timer0");
  }, 5000); // 5 sec timer ,  if we put timer of 1 sec instead of 5 sec, then also, we get the output "Completed the timer 0" after printing "bye".
}
console.log("Hi");
timeConsumingByLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByLoop();
console.log("Bye");

// event loop-> it keeps on checking whether the call stack is empty or not and no global code is left.

// event queue-> setTimeOut exec(function) present inside, will run in runtime, it is not native to JS, that's why it is going to run after all the function present in the call stack and global code.

// After this, when call stack is empty, the event loop pushes the exec function from event queue to call stack, then the exec function will print "Completed the Timer0"
