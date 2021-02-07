const fs = require("fs");

module.exports.projectOverviewList = function () {
    const directories = fs.readdirSync(`projects/`, { withFileTypes: true });
    var linksHTML = "";
    directories.forEach((item) => {
        if (item.isDirectory()) {
            linksHTML += `<p><a href="/${item.name}/" target="_blank">${item.name}</a></p>  `;
        }
    });

    var generatedHTML = `<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="style.css" />
        <meta name="viewport" content="width=device-width" initial-scale="1" />
        <title>Portfolio</title>
    </head>

    <body>

<div>
<h2>Featuring Projects</h2>
${linksHTML}
</div>
<body>
</html>`;
    return generatedHTML;
};
