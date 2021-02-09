const express = require("express");
const app = express();
const hb = require("express-handlebars");

const projects = require("./data.json");


app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/projects"));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("home", {
        layout: 'main',
        projects
    });
});





const server = app.listen(8080, () =>
    console.log(`🟢 Listening ${server.address().port} ...`)
);