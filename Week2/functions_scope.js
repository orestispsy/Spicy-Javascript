// Write a function that takes any number of numbers as arguments and returns the sum of those numbers.

// sum(5, 10); //15

// sum(5, 10, 15); //30;

// sum(5, 10, 15, 100, 200); //330


function sum () {
    var j=0;
    var i=0;
    while (i < arguments.length) {
        j=j+arguments[i];
        i++
    }
        return j;
        }

s=sum(8,10,12);

console.log(s);

// Write a function that takes another function as an argument. It should wait 1.5 seconds and then run the function that was passed in.

function waitnRun(x) {
     setTimeout(function() {
  console.log(x);
}, 1500)}


waitnRun(sum(3,3,3));

// Write a function that expects a number as an argument. If the value that is passed in is less than 0, equal to 0, or not a number, the function should return the string 'ERROR'. If the number that is passed in is greater than or equal to 1000000 it should simply return the number. Otherwise it should multiply the number by 10 however many times it takes to get a number that is greater than or equal to 1000000 and return that.

function whatever(x) {
    if (x<=0 || isNaN(x)) {
        return 'ERROR';   
    } else if ( x >=1000000 ) {
          return x;
    } else {
        do {
            x=x*10
        } while (x<=1000000);
    }
    return x;
}

console.log(whatever(0));
console.log(whatever(1000057));
console.log(whatever('heyho'));
console.log(whatever(33));