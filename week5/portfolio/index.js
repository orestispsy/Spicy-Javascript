const http = require("http");

const url = require("url");

const fs = require("fs");

const chalk = require("chalk");

const path = require("path");

const anotherModule = require("./anotherModule.js");

const contentType = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".json": "application/json",
    ".gif": "image/gif",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".mp3": "audio/mpeg",
};

const server = http.createServer((req, res) => {
    req.on("error", (err) => console.log(err));
    res.on("error", (err) => console.log(err));
    console.log(
        chalk.magenta("REQUESTED URL -> "),
        req.url,
        chalk.green(Date())
    );
    if (req.method != "GET") {
        console.log(
            chalk.red("ANOTHER REQUEST THAN A 'GET' TYPE WAS MADE"),
            chalk.green(Date()),
            req.headers["user-agent"]
        );
        res.statusCode = 405;
        return res.end();
    }

    const requestedFilePath = path.normalize(__dirname + "/projects" + req.url);

    console.log(chalk.yellow("Requested File Path -> " + requestedFilePath));

    if (!requestedFilePath.startsWith(`${__dirname}/projects/`)) {
        res.statusCode = 403;
        console.log(
            chalk.red("🚨 Warning, INTRUDER Incoming Request 🚨"),
            chalk.green(Date()),
            req.headers["user-agent"]
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
            console.log(chalk.cyan("User Folder Request"));
            if (req.url == "/") {
                res.statusCode = 200;
                res.setHeader("content-type", "text/html");
                res.write(anotherModule.projectOverviewList());
                res.end();
            } else if (req.url.endsWith("/")) {
                res.statusCode = 302;
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
                res.end();
            }
        } else {
            console.log(chalk.cyan("User File Request ->"), requestedFilePath);
            console.log(
                chalk.cyan("File extension ->"),
                path.extname(requestedFilePath)
            );
            res.statusCode = 200;
            const readStreamHtml = fs.createReadStream(requestedFilePath);
            res.setHeader(
                "Content-Type",
                `${contentType[path.extname(requestedFilePath)]}`
            );
            readStreamHtml.pipe(res);
            readStreamHtml.on("error", (err) => {
                console.log("Error in readStreamHtml - Local Error", err);
                res.statusCode = 500;
                return res.end();
            });
        }
    });
});

server.listen(8080, () =>
    console.log(
        `🟢 Listening Port ${chalk.green(
            url.parse(`localhost:8080/`).hostname
        )} ...`
    )
);
