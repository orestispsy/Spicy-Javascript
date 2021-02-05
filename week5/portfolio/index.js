const http = require("http");

const fs = require("fs");

const chalk = require("chalk");

const path = require("path");

const contentType = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".gif": "image/gif",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
};

const server = http.createServer((req, res) => {
    req.on("error", (err) => console.log(err));
    res.on("error", (err) => console.log(err));
    console.log(
        chalk.yellow("REQUESTED URL -> "),
        req.url,
        chalk.green(Date())
    );

    if (req.method != "GET") {
        console.log(
            chalk.red("ANOTHER REQUEST THAN A 'GET' TYPE WAS MADE"),
            chalk.green(Date())
        );
        res.statusCode = 405;
        return res.end();
    }

    const requestedFilePath = path.normalize(__dirname + "/projects" + req.url);

    console.log(
        chalk.yellow("Requested File Path -> " + requestedFilePath),
        chalk.green(Date())
    );

    if (!requestedFilePath.startsWith(`${__dirname}/projects/`)) {
        res.statusCode = 403;
        console.log(
            chalk.red("🚨 Warning, INTRUDER Incoming Request 🚨"),
            chalk.green(Date())
        );
        return res.end();
    }

    fs.stat(requestedFilePath, (err, stats) => {
        if (err) {
            console.log(chalk.red("Non Existing User Request"));
            res.statusCode = 404;
            return res.end();
        }
        if (stats.isDirectory()) {
            console.log(chalk.green("User Requested A Directory"));
            if (req.url.endsWith("/")) {
                const readStreamHtml = fs.createReadStream(
                    requestedFilePath + "index.html"
                );
                res.setHeader("Content-Type", "text/html");
                readStreamHtml.pipe(res);
                readStreamHtml.on("error", (err) => {
                    console.log("Error in readStreamHtml  - Local Error", err);
                    res.statusCode = 500;
                    return res.end();
                });
            } else {
                res.statusCode = 302;
                res.setHeader("Location", req.url + "/");
                const readStreamHtml = fs.createReadStream(
                    requestedFilePath + "/index.html"
                );
                res.setHeader("Content-Type", "text/html");
                readStreamHtml.pipe(res);
                readStreamHtml.on("error", (err) => {
                    console.log("Error in readStreamHtml - Local Error", err);
                    res.statusCode = 500;
                    return res.end();
                });
            }
        } else {
            console.log(chalk.cyan("User File Request ->"), requestedFilePath);
            console.log(
                chalk.cyan("File extension ->"),
                path.extname(requestedFilePath)
            );
            res.setHeader(
                "Content-Type",
                `${contentType[path.extname(requestedFilePath)]}`
            );
            return res.end();
        }
    });
});

server.listen(8080, () => console.log("🟢 Listening..."));
