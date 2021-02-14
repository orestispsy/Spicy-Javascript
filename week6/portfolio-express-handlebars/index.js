const express = require("express");
const app = express();
const hb = require("express-handlebars");

const projects = require("./data.json");

app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.locals.helpers = {
    highlighted(selectedProject, name) {
        if (selectedProject.directory == name) {
            return "Highlighted";
        } else {
            return "";
        }
    }
}

app.use(express.static(__dirname + "/projects"));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("home", {
        layout: "main",
        projects,
    });
});

app.get("/projects/:name", (req, res) => {
    const {name} = req.params;
    const selectedProject = projects.find((item) => item.directory == name);
    if (!selectedProject) {
        return res.sendStatus(404);
    } else {
        res.render("description", {
            layout: "main",
            projects,
            name,
            selectedProject,
        });
    }
});

const server = app.listen(8080, () =>
    console.log(`🟢 Listening Port ${server.address().port} ... ~ Portfolio-Express Handlebars ~`)
);
