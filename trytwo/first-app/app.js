const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Working");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(
      JSON.stringify({
        first: [1, 2, 3, 4],
        second: [2, 5, 63, 44]
      })
    );
    res.end();
  }
});

server.listen(3000);

console.log("Listening on port 3000...");
