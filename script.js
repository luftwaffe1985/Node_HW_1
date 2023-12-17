const http = require("http");

const server = http.createServer((required, result) => {
  console.log("Request has been received");

  const url1 = "/home";
  const url2 = "/about";

  if (required.url === url1) {
    result.writeHead(100, { "Content-Type": "text/html; charset=UTF-8" });

    result.end(`<h1>Root page</h1>
        <p>Number of views: ${homeViews()}</p>
        <a href=${url2}>Reference to About page</a>`);
  } else if (required.url === url2) {
    result.writeHead(300, { "Content-Type": "text/html; charset=UTF-8" });

    result.end(`<h1>About page</h1>
        <p>Number of views: ${aboutViews()}</p>
        <a href=${url1}>Reference to Main page</a>`);
  } else {
    result.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
    result.end("<h1>The page is not found!</h1>");
  }
});

const port = 4000;

server.listen(port, () => {
  console.log(`Server operates at port ${port}`);
});

function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let homeViews = makeCounter();
let aboutViews = makeCounter();
