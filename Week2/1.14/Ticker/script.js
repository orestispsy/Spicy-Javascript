var headlines = document.getElementById("headlines");
var left = headlines.offsetLeft;
var links = document.getElementsByTagName("a");

function moveHeadlines() {
    left--;
    if (left < -links[0].offsetWidth) {
        left = left + links[0].offsetWidth;
        headlines.appendChild(links[0]);
    }
    headlines.style.left = left + "px";
    requestAnimationFrame(moveHeadlines);
}

moveHeadlines();
