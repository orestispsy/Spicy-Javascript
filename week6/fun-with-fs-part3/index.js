let {stat, readdir} = require("fs").promises

function logSizes(path) {
    readdir(path, { withFileTypes: true }).then(items =>{
        let results=[];
        items.forEach((item) => {
                if (item.isFile()) {
                    results.push(stat(`${path}/${item.name}`)
                }})
    })
        // if (err) {
        //     console.log(err, "ERROR");
        // } else {
        //     items.forEach((item) => {
        //         if (item.isFile()) {
        //             stat(`${path}/${item.name}`, function (err, stats) {
        //                 if (err) {
        //                     console.log(err, "ERRORRR");
        //                 } else {
        //                     console.log(`${path}/${item.name}: ${stats.size}`);
        //                 }
        //             });
        //         } else if (item.isDirectory()) {
        //             logSizes(`${path}/${item.name}`);
        //         }
        //     });
        // }
    
}

logSizes(`${__dirname}/files`);

// ////////////////////             PART 2

// function mapSizes(path) {
//     const object = {};
//     const items = fs.readdirSync(path, { withFileTypes: true });
//     items.forEach((item) => {
//         if (item.isFile()) {
//             const stat = fs.statSync(`${path}/${item.name}`);
//             object[item.name] = stat.size;
//         } else if (item.isDirectory()) {
//             object[item.name] = mapSizes(`${path}/${item.name}`);
//         }
//     });
//     return object;
// }

// fs.writeFileSync(
//     "files.json",
//     JSON.stringify(mapSizes(`${__dirname}/files`), null, 4)
// );
// console.log(mapSizes(`${__dirname}/files`));
