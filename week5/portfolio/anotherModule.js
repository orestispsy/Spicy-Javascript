const fs = require("fs");

module.exports.projectOverviewList = function () {
    const directories = fs.readdirSync(`projects/`, { withFileTypes: true });
    var linksHTML = "";
    for (var i = 0; i < directories.length; i++) {
        linksHTML += `<li style="margin:10px"><a style="color:yellow;text-decoration:none;" href="/${directories[i].name}/" target="_blank">${directories[i].name}</a></li>  `;
    }
    var body = `<!doctype html>
<html>
<body style="color:white;background-color:black;font-family:fantasy;font-size:30px;">
<title>Portfolio</title>
<p>Featuring Projects:</p>
<ul>
${linksHTML}
</ul>
<body>
</html>`;
    return body;
};
