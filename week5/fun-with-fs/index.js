const fs = require("fs");

function logSizes(path) {
    fs.readdir(path, { withFileTypes: true }, function (err, items) {
        if (err) {
            console.log(err, "ERROR")
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
                    logSizes(`${path}/${item.name}`)
                }
            });
        } 
    });
}

logSizes(__dirname);