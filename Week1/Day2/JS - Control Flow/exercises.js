// Write a function named logType that expects a single argument and logs a different string depending on the type/value of the argument that is passed to it. The string it logs should be one of the following:

// "undefined!"
// "null!"
// "number!"
// "not a number!"
// "string!"
// "boolean!"
// "bigint!"
// "function!"
// "object!"
// "array!"
// "I have no idea!"
// Note that you have no way to test the final case. The only thing that could make "I have no idea!" appear is a symbol, and we have not yet discussed how to make one of those.

function logType(x) {
    if (Number.isNaN(x)) {
            console.log("not a number!");
    } else if 
        (x === null) {
            console.log("null!");
    } else if 
        (typeof x === 'undefined') {
            console.log("undefined!");
    } else if 
        (typeof x === 'number') {
            console.log("number!");
    } else if 
        (typeof x === 'string') {
            console.log("string!");
    } else if 
        (typeof x === 'boolean') {
            console.log("boolean!");
     }else if 
        (typeof x === 'bigint') {
            console.log("bigint!");
    } else if 
        (typeof x === 'function') {
            console.log("function!");
    } else if 
        (Array.isArray(x)) {
            console.log("array!");
    } else if 
        (typeof x === 'object') {
            console.log("object!");
    } else { 
        console.log("I have no idea!");
    }
}


var k;

logType(42);
logType("Hello");
logType(null);
logType(1n);
logType(NaN);
logType(true);
logType({});
logType([]);
logType(function(){});
logType(k);

// Copy the following object into your code:

// var a = {
//    Berlin: 'Germany',
//    Paris: 'France',
//    'New York': 'USA'
// };
// Then create a new empty object b and use a for..in loop to iterate over all of a's properties. Give b properties whose names are the values from a and whose values are the property names from a. The result should be an object that looks like this:

// {
//    Germany: 'Berlin',
//    France: 'Paris',
//    USA: 'New York' 
// }


var a = {
   Berlin: 'Germany',
   Paris: 'France',
   'New York': 'USA'
};

b = {};

for (var prop in a) {
    b[a[prop]] = prop;
}

console.log(b);

// Write a while or for loop that counts down from 10 to 1, logging each number to the console.

var i= 10;
while (i>=1) {
    console.log(i);
    i--
}

// for (var i=10; i>=1; i--) {
//     console.log(i);
// }