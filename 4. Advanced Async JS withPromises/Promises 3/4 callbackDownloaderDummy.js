function download(url, cb) {
  console.log("Started downloading from url", url);
  setTimeout(function exec() {
    console.log("Completed downloading after 5s");
    const content = "ABCDEF";
    cb(content);
    // cb(content);
    // Here, this download function can call the callback questions one time, two times or cant call the callback function at all, which is Inversion of Control. In 5 promiseDownloadDummy.js file, we can solve this question.
  }, 5000);
}

download("www.xyz.com", function processDownload(data) {
  console.log("downloaded data is", data);
});

// OUTPUT

// Started downloading from url www.xyz.com
// Completed downloading after 5s
// downloaded data is ABCDEF
