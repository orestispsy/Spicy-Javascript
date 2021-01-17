var headlines = document.getElementById("headlines");
var left = headlines.offsetLeft;
var links = document.getElementsByTagName("a");
var requestid;

function moveHeadlines() {
    left--;
    if (left < -links[0].offsetWidth) {
        left = left + links[0].offsetWidth;
        headlines.appendChild(links[0]);
    }
    headlines.style.left = left + "px";
    requestid = requestAnimationFrame(moveHeadlines);
}

function stopHeadlines() {
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("mouseenter", function (event) {
            event.target.style.color = "yellow";
            event.target.style.textDecoration= "underline lime";
            cancelAnimationFrame(requestid);
        });

        links[i].addEventListener("mouseleave", function (event) {
            moveHeadlines();
            event.target.style.color = "white";
            event.target.style.textDecoration = "none";
        });
    }
}

moveHeadlines();
stopHeadlines();