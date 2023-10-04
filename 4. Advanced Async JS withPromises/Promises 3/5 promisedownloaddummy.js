function download(url) {
  console.log("started downloading content form ", url);
  return new Promise(function exec(res, rej) {
    setTimeout(function p() {
      console.log("Compelted downloading data in 5s");
      const content = "ABCDEF";
      //   res(content);
      rej(content);
    }, 5000);
  });
}
//  Here, in the promise based syntax only we can use the resolve and the rejection part only one time. We don't get any problem of the inversion of control here because in the promises, we can't call the callback function(which is present in the onFulfillment and onRejection arrays) one or two times. We can take full control of the execution of the callback functions through promises.then(resolve(cb), reject(cb)) in last, we can handle the callback execution case through the resolve function and the rejection handlers.

x = download("www.xyz.com");
x.then(
  function fulfillHandler1(value) {
    console.log("Content downloaded is1 ", value);
    return "New promise string";
  },
  function rejectHandler1(value) {
    console.log("rejected with", value);
  }
).then(function newFullFillHandler(value) {
  console.log("value from chained then promsie", value);
});

// here, fulfill handler1 and rejectHandler1 are the callbacks that we are going to call (in 4 callbackDownloadDummy.js file, processDownload is a callback whose working or control we are giving to the download HOF function), we are not giving their control to the download function which is returning a promise. It is our responsibility, how we are going to handle them. "download" Hof function does not have any control over fullHandler1 and rejectHandler1.
