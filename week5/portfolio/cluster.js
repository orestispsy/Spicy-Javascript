const os = require("os");

const cluster = require("cluster");

console.log(os.cpus())

cluster.setupMaster({
    exec: "index.js"
})

for (let i=0; i<os.cpus().length; i++) {
    cluster.fork()
}

cluster.on("exit", function (worker) {
    console.log("Core" + worker.process.pid + "Died !");
    cluster.fork();
});