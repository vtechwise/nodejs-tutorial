const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("wellcome to the homepage");
    return;
  }
  if (req.url == "/about") {
    res.end("here is our short history");
    return;
  }

  res.end("Page not found ");
});

server.listen(3000);
