var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");

var generateRandomColor = function () {
    var colors = ["lime", "red", "yellow", "magenta", "black", "white", "tomato"];
    var randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
};

var mouseHandler = function () {
    box1.style.backgroundColor = generateRandomColor();
};

var mouseHandler2 = function (stop) {   
    box2.style.backgroundColor = generateRandomColor();
    stop.stopPropagation();
};


box1.addEventListener("mousedown", mouseHandler);
box1.addEventListener("mouseup", mouseHandler);
box2.addEventListener("mousedown", mouseHandler2);
box2.addEventListener("mouseup", mouseHandler2);




