const fs = require("fs");

function logSizes(path) {
    fs.readdir(path, { withFileTypes: true }, function (err, items) {
        if (err) {
            console.log(err, "ERROR");
        } else {
            items.forEach((item) => {
                if (item.isFile()) {
                    fs.stat(`${path}/${item.name}`, function (err, stats) {
                        if (err) {
                            console.log(err, "ERRORRR");
                        } else {
                            console.log(`${path}/${item.name}: ${stats.size}`);
                        }
                    });
                } else if (item.isDirectory()) {
                    logSizes(`${path}/${item.name}`);
                }
            });
        }
    });
}

logSizes(__dirname);

////////////////////             PART 2

function mapSizes(path) {
    const object = {};
    const items = fs.readdirSync(path, { withFileTypes: true });
    items.forEach((item) => {
        if (item.isFile()) {
            const stat = fs.statSync(`${path}/${item.name}`);
            object[item.name] = stat.size;
        } else if (item.isDirectory()) {
            object[item.name] = mapSizes(`${path}/${item.name}`);
        }
    });
    return object;
}

fs.writeFileSync(
    "files.json",
    JSON.stringify(mapSizes(`${__dirname}/files`), null, 4)
);
console.log(mapSizes(`${__dirname}/files`));
