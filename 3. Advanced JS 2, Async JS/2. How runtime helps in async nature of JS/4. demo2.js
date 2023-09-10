function timeConsumingByLoop() {
    console.log("loop starts");
    for(let i = 0; i < 1000000000; i++) {
        // some task
    }
    console.log("loop ends");
} 
function timeConsumingByRuntimeFeature0() {
    console.log("Starting timer 0");
    setTimeout(function exec() {
        console.log("Completed the timer0");
        for(let i = 0; i < 1000000000; i++) {
            // some task
        }
    }, 1); // 5 sec timer
}
console.log("Hi");
timeConsumingByLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByLoop();
console.log("Bye");


// event queue
// event loop-> it keeps on checking whether the call stack is empty or not and no global code is left.