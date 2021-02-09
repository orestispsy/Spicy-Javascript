const express = require("express");
const app = express ();

const cookieParser = require("cookie-parser");

const basicAuth = require("basic-auth");

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

const auth = function (req, res, next) {
    const creds = basicAuth(req);
    if (!creds || creds.name != "1234" || creds.pass != "1234") {
        res.setHeader(
            "WWW-Authenticate",
            'Basic realm="Enter your credentials to see this stuff."'
        );
        res.sendStatus(401);
    } else {
        next();
    }
};

app.get("/cookie", (req, res) => {
    
    res.send(`<h2>You've got to Agree accepting Cookies to enter this Page.</h2>
    <form method='POST'>
    <input type="checkbox" name="agree">
    <button> agree </submit></form>`);
});

app.post("/cookie", (req, res) => {
    if (req.body.agree) {
        res.cookie("authenticated", "true")
        res.redirect(req.cookies.prevUrl)
        console.log("req.body: ", req.body);
    } else {
        res.send(`<h1>Access to this Page is not allowed without Cookie Agreement.</h1>
    `);
    }
});

app.use((req, res, next) => {
    res.cookie("prevUrl", req.url);
    if (req.cookies.authenticated) {
        next();
    } else {
        res.redirect("/cookie");
    }
});

app.get("/spotiFIRE", auth, (req, res) => {
    res.sendFile(__dirname + "/projects" + req.url);
});

app.use(express.static(__dirname + "/projects"));





const server = app.listen(8080, () =>
    console.log(`🟢 Listening ${server.address().port} ...`)
);