function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log("Started downloading from", url);
    setTimeout(function processDownloading() {
      let data = "Dummy data";
      resolve(data);
      console.log("Download completed");
    }, 1000);
  });
}

console.log("Start");
let promiseObj = fetchData("skfbjkdjbfv");
promiseObj.then(function A(value) {
  console.log("value is", value);
});
console.log("end");

// OUTPUT
// Start
// Started downloading from skfbjkdjbfv
// end
// Download Complete
// value is Dummy data
