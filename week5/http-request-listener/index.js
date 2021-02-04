const http = require("http");

const server = http.createServer((req, res) => {
    req.on("error", (err) => console.log(err));
    res.on("error", (err) => console.log(err));
    console.log(req.headers, req.method, req.url);

    if (req.method == "GET") {
        res.setHeader("content-type", "text/html");
        res.statusCode = 200;
        res.end(`<!doctype html>
<html>
<title>Hello World!</title>
<p>Hello World!</p>
</html>`);
    } else if (req.method == "HEAD") {
        res.setHeader("content-type", "text/html");
        res.statusCode = 200;
        res.end();
    } else if (req.method == "POST") {
        var body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        res.statusCode = 302;
        res.setHeader("Location", "/");
        req.on("end", () => {
            console.log(body);
        });
        res.end();
    } else {
        res.statusCode = 405;
        res.end();
    }
});

server.listen(8080, () => console.log("🟢 Listening..."));
