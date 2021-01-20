var cats = document.querySelectorAll("#cats img");
var currentCat = 0;

function moveCats () {
    cats[currentCat].classList.remove("onscreen");
    cats[currentCat].classList.add("exit");
    currentCat++;
    if (currentCat >=cats.length) {
        currentCat=0;
    }
    cats[currentCat].classList.add("onscreen");
    setTimeout(moveCats, 2000)
}

setTimeout(moveCats, 1000);

document.addEventListener("transitionend", function(event) {
    if (event.target.classList.contains("exit")) {
        console.log("yes");
        event.target.classList.remove("exit");
    }
});

