// Write a function that takes an array as an argument and returns a new array containing all of the items that are in the array that was passed in but in reverse order. This function should

// leave the original array unchanged

// contain no loops of any kind. That includes for, for...in, for...of, while, and do...while

// not call slice or any other method on the original array

// not call push or concat on any array in any way

const array=["a","b","c"]

const reverseIt = (x) =>[...x].reverse();


console.log(array);
console.log(reverseIt(array));

// Write a function that takes two arrays as arguments and returns a new array containing all of the items in the two arrays passed to it. This function should

// leave the original arrays unchanged

// contain no loops of any kind. That includes for, for...in, for...of, while, or do...while

// not call slice or any other method on the two arrays passed to it

// not call push or concat on any array in any way



const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"]

const addIt = (x, y) => [...x,...y]

console.log(addIt(array1, array2));

// Rewrite the following function to use destructuring assignment for the three variables it creates:

//  function logInfo(city) {
//      const name = city.name;
//      const country = city.country;
//      const numPeople = city.population;

//      console.log(
//          `${name} is in ${country} and has ${numPeople} in it.`
//      );
//  }

function logInfo(city) {
    const {name, country, population: numPeople} = city

    console.log(`${name} is in ${country} and has ${numPeople} residents in it.`);
}

logInfo({name: "Lamia", country: "Grrreece", population: "80K"})



// Pretend that it is 2002 and rewrite the following hipster Javascript so it will work in Internet Explorer 5 and Netscape 4.

//  let getNameAndCountry = ({name, country}) => [name, country];

//  let getRelocatedCity = (city1, city2={country: 'Germany'}) => {
//      let [, country] = getNameAndCountry(city2);
//      return {
//          ...city1,
//          country
//      };
//  };

function getNameAndCountry(object) {
    return [object.name, object.country]
}

function getRelocatedCity(city1, city2) {
    var newCity2;
    if (city2 == undefined) {
        newCity2 = getNameAndCountry({ country: "Germany" });
    } else {
        newCity2 = getNameAndCountry(city2)
    }

    return {name:city1.name, country:newCity2[1]};
}

console.log(getRelocatedCity({name: "Berlin", country: "Germany"}, {name: "Athens", country: "Greece"}));

console.log(getRelocatedCity({name: "Berlin", country: "Germany"}))