function timeConsumingByLoop() {
  console.log("loop starts");
  for (let i = 0; i < 1000000000; i++) {
    // some task
  }
  console.log("loop ends");
}
function timeConsumingByRuntimeFeature0() {
  console.log("Starting timer 0");
  setTimeout(function exec() {
    console.log("Completed the timer0");
    for (let i = 0; i < 1000000000; i++) {
      // some task
    }
  }, 100); // 5 sec timer
  console.log("Closing Timer 0");
}
function timeConsumingByRuntimeFeature1() {
  console.log("Starting timer 1");
  setTimeout(function exec() {
    console.log("Completed the timer1");
    // while(true) {}
  }, 100); // 0 s timer
  console.log("Closing Timer 1");
}
function timeConsumingByRuntimeFeature2() {
  console.log("Starting timer 2");
  setTimeout(function exec() {
    console.log("Completed the timer2");
  }, 100); // 200 ms timer
  console.log("Closing Timer 2");
}
console.log("Hi");
timeConsumingByLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByLoop();
console.log("Bye");
