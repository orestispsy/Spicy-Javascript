// Make a page that has on it an element that is 100px by 100px in size,
//  has absolute positioning, and has a solid background color. Add an event
//   handler that makes this box center itself directly under the user's
//    mouse pointer as it is moved across the screen.


console.log('DOM Events - ex 1');

var box = document.getElementById('box');

var mouseMove = function (event) {
    var x = event.clientX;
    var y = event.clientY;

    var width = box.offsetWidth;
    var height = box.offsetHeight;

    box.style.top = y - height / 2 + "px";
    box.style.left = x - width / 2 + "px";
};

document.addEventListener("mousemove", mouseMove);


// Make a page that has on it an element that is 100px by 100px
//  in size and has a solid black border. When the user mouses down on this box,
//   its background should change to a randomly selected color. When the user mouses up on it,
//    its background should change to another randomly selected color.

var color = document.getElementById("box");

var generateRandomColor = function () {
    var colors = ["lime", "red", "yellow", "magenta", "black", "white", "tomato"];
    var randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
};

var mouseHandler = function () {
    color.style.backgroundColor = generateRandomColor();
};

color.addEventListener("mousedown", mouseHandler);
color.addEventListener("mouseup", mouseHandler);
