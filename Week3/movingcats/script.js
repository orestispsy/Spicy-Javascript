
var cats = document.querySelectorAll("#cats img");
var dots = document.querySelectorAll(".dot")
var currentCat = 0;
var transition;
var timer;


for (var i = 0; i < dots.length; i++) {
    (function (i) {
        dots[i].addEventListener("click", function (event) {
               console.log(i);
        });
    })(i);
}


function moveCats() {
    dots[currentCat].classList.remove("on");
    cats[currentCat].classList.remove("onscreen");
    cats[currentCat].classList.add("exit");
    currentCat++;
    if (currentCat >= cats.length) {
        currentCat = 0;
    }
    cats[currentCat].classList.add("onscreen");
    dots[currentCat].classList.add("on");
    setTimeout(moveCats, 2000);
}

setTimeout(moveCats, 1000);

document.addEventListener("transitionend", function (event) {
    if (event.target.classList.contains("exit")) {
        console.log("yes");
        event.target.classList.remove("exit");
    }
});