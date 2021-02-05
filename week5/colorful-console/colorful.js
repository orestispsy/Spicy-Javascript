const http = require("http");
const querystring = require("querystring");

const chalk = require("chalk");
const { red } = require("chalk");

const server = http.createServer((req, res) => {
    req.on("error", (err) => console.log(err));
    res.on("error", (err) => console.log(err));

    if (req.method == "GET") {
        res.write(`<!doctype html>
<html>
<title>Colors</title>
<form method="POST">
  <input type="text" name="text">
  <select name="color">
    <option value="red">red</option>
    <option value="blue">blue</option>
    <option value="green">green</option>
    <option value="yellow">yellow</option>
    <option value="gray">gray</option>
    <option value="magenta">magenta</option>
    <option value="cyan">cyan</option>
  </select>
  <button type="submit">Go</button>
</form>
</html>`);
        res.end();
    } else if (req.method == "POST") {
        var body = ``;
        req.on("data", (chunk) => {
            body += chunk;
        }).on("end", () => {
            const { text, color } = querystring.parse(body);
            console.log(chalk[color](text));
            res.end(`
                <!doctype html>
                <html>
                <title>
                   ${text}
                </title>
                <a href="/" style="color:${color}">
                    ${text}
                </a>
                </html>`);
        });
    } else {
        res.statusCode = 405;
        res.end();
    }
});

server.listen(8080, () => console.log("🟢 Listening..."));
