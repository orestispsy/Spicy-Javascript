function each(objOrArr, callback) {
if (typeof objOrArr === 'object'); {
    for (var key in objOrArr) {
        callback(objOrArr[key], key);
}
} if (Array.isArray(objOrArr)) {
    var i=0;
    while (i<objOrArr.length) {
        callback(objOrArr[i], i);
        i++
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