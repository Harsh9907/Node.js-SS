// console.log("Hello world");
// setTimeout(function exec() {
//   console.log("Timer done");
// }, 0);
// console.log("End");

// console.log("////////////////////");

// console.log("Hello world");

// for (let i = 0; i < 3; i++) {
//   setTimeout(function exec() {
//     console.log("Timer done", i);
//   }, i * 1000);
// }
// for (let i = 0; i < 100000; i++) {
//   //
// }
// console.log("End");

// async code is a code which can be executed in future
// Any async code can't hamper the flow of sync code of JS

// How console.log() works?
//  Ans -> Console.log is provided by the javascript runtime, it is not native to the javascript,console.log() is not a core feature of JS, so it's highly depend on the runtime how it is being handled by it.

// When we do console.log() in the node cmd prompt, it will call process.stdout internally.
//  In the node docs (nodejs.org/api/process.html#processstdout), it is written that "Writes may be synchronous depending on what the stream is connected to and whether the system is Windows or POSIX"

// console.log() works synchronously or asynchronously depends on the runtime or data stream coming from files, windows or posix (Portable operating system interfaces).

// Whenever we get asked this question,

/*
console.log("Hello world");
setTimeout(function exec() {
  console.log("Timer done");
}, 0);
console.log("End");
*/
//  we have to tell them that we are assuming that console.log() works asynchronously.
//  Synchronous writes block the event loop until the write has completed.
// in the linux world, tty refers to an interface that enables access to the terminal.
// https://johnsmilga.com/

// console.log("////////////////////");

console.log("Hello world");
setTimeout(function exec() {
  console.log("Timer done");
  setTimeout(function exec() {
    console.log("woah, another one");
  }, 1000);
}, 5000);

for (let i = 0; i < 100000; i++) {
  //
}
console.log("End");
