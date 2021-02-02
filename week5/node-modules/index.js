// Write a module that describes a url passed to it as a command line argument. It should log to the console the following parts of the url: the protocol, the host, the hostname, the port, the pathname, and the query string. Additionally, if there is query string in the url, it should log the value of each parameter.

// For example, if you run the module with the following command

// node index.js "http://127.0.0.1:8080/test?a=100&b=200"
// you would get the following as output

// The protocol is http:
// The host is 127.0.0.1:8080
// The hostname is 127.0.0.1
// The port is 8080
// The pathname is /test
// The query is a=100&b=200
// The value of the a parameter is 100
// The value of the b parameter is 200



const url = require("url");
console.log(process.argv);

const arg = url.parse("http://127.0.0.1:8080/test?a=100&b=200");

console.log(arg)

const querystring = require("querystring");
const argg= querystring.parse("test?a=100&b=200");

console.log(argg)

console.log(`The Protocol is ${arg.protocol}`)
console.log(`The Host is ${arg.host}`);
console.log(`The Hostname is ${arg.hostname}`);
console.log(`The Port is ${arg.port}`);
console.log(`The Query is ${arg.query}`);
console.log(`The Protocol is ${argg["test?a"]}`);
console.log(`The Protocol is ${argg["b"]}`);


// If you run the module by typing

// node index.js "https://spiced.academy/program/full-stack-web-development/"
// you would get the following as output

// The protocol is https:
// The host is spiced.academy
// The hostname is spiced.academy
// The port is null
// The pathname is /program/full-stack-web-development/
// The query is null


const arg2 = url.parse(
    "https://spiced.academy/program/full-stack-web-development/"
);

console.log (arg2);

console.log(`The Protocol is ${arg2.protocol}`);
console.log(`The Host is ${arg2.host}`);
console.log(`The Hostname is ${arg2.hostname}`);
console.log(`The Port is ${arg2.port}`);
console.log(`The Pathname is ${arg2.path}`);
console.log(`The Query is ${arg2.query}`);
