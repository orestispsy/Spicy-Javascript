// Write a function called each that accepts either an object or an array as its first parameter and a callback as its second parameter.

// If the first parameter is an object, it should loop over the object's properties and call the callback for each one. The property value should be the first parameter passed to the callback and the property name should be the second.

// If the first parameter is an array, it should loop over the array's elements and call the callback for each one. The array element should be the first parameter passed to the callback and the index should be the second.

function each(objOrArr, callback) {
 if (Array.isArray(objOrArr)) {
    var i=0;
    while (i<objOrArr.length) {
        callback(objOrArr[i], i);
        i++
    }
    return;
 } else if (typeof objOrArr === 'object'); {
    for (var key in objOrArr) {
       callback(objOrArr[key], key); 
}

}

}


each({
       a: 1,
       b: 2
   }, function(val, name) {
       console.log('The value of ' + name + ' is ' + val)});

each(['a', 'b'], function(val, idx) {
       console.log('The value of item ' + idx + ' is ' + val);
});


// Write a function that takes an array as a parameter and returns a new array containing all of the items that are in the array that was passed in but in reverse order. Unlike the reverse method that all arrays have, this function should leave the original array unchanged.

var a=[1, -2, 3, -7];

function arrayReversed(array) {
   var newArray = array.slice(0,array.length);
   console.log ('reversed Array :', newArray.reverse());
}

console.log('original Array :', a)
arrayReversed(a);

// Write a function called getLessThanZero that expects an array of numbers to be passed to it and returns a new array containing only those numbers from the array that was passed in that are less than zero.

function getLessThanZero(array) {
    var newArray=[];
    for (var i=0; i<array.length; i++) {
        if (array[i]<0) {
            newArray.push(array[i]);
                  }      
    }
    console.log(newArray)
}

getLessThanZero(a);

