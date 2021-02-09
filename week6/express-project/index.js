const express = require("express");
const app = express ();

const cookieParser = require("cookie-parser");

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.get("/cookie", (req, res) => {
    
    res.send(`<h2>You've got to Agree acceping cookies to enter the Page.</h2>
    <form method='POST'>
    <input type="checkbox" name="agree">
    <button> submit </submit></form>`);
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

app.use(express.static(__dirname + "/projects"));

const server = app.listen(8080, () =>
    console.log(`🟢 Listening ${server.address().port} ...`)
);