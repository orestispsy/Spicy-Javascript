var headlines = document.getElementById("headlines");

var left = headlines.offsetLeft;

console.log(left);

// Still working on it...

function moveHeadlines() {
    left--;
      if (left = -headlines.firstChild.offsetWidth) {
    console.log(left);
    requestAnimationFrame(moveHeadlines);
    }

}

moveHeadlines();