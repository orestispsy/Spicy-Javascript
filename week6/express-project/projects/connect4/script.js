var currentPlayer = "player1";
var slots = $(".slot");
var myAudio = new Audio("assets/victory.mp3");
var audio = document.querySelector("audio");

$(".console").click(function () {
    location.reload();
});

$(".audiodiv").click(function () {
    $(".audio").animate({ height: "100%" });
    myAudio.pause();
    audio.play();
});

$(".end").click(function () {
    $(".end").animate({ height: "0" });
});

$("#info").click(function (e) {
    $("#info").css("visibility", "hidden");
});

function switchPlayer() {
    console.log("switch the player!");
    if (currentPlayer === "player1") {
        currentPlayer = "player2";
    } else {
        currentPlayer = "player1";
    }
}

$(".column").on("click", function (e) {
    var col = $(e.currentTarget);
    var slotsInCol = col.children();
    for (var i = slotsInCol.length - 1; i >= 0; i--) {
        if (
            !slotsInCol.eq(i).hasClass("player1") &&
            !slotsInCol.eq(i).hasClass("player2")
        ) {
            slotsInCol.eq(i).addClass(currentPlayer);
            break;
        }
    }
    if (i === -1) {
        return;
    }
    var slotsInRow = $(".row" + i);
    if (checkForVictory(slotsInCol)) {
        myAudio.play();
        audio.pause();
        setTimeout(function () {
            $("#info").css("visibility", "visible");
        }, 1500);
        $(".end").animate({ height: "800px" });
        $(".end").css("visibility", "visible");
        $(".hole").css("border-color", "red");
    } else if (checkForVictory(slotsInRow)) {
        myAudio.play();
        audio.pause();
        setTimeout(function () {
            $("#info").css("visibility", "visible");
        }, 1500);
        $(".end").animate({ height: "800px" });
        $(".end").css("visibility", "visible");
        $(".hole").css("border-color", "red");
    } else if (checkForDiagonal5(slots)) {
        myAudio.play();
        audio.pause();
        setTimeout(function () {
            $("#info").css("visibility", "visible");
        }, 1500);
        $(".end").animate({ height: "800px" });
        $(".end").css("visibility", "visible");
        $(".hole").css("border-color", "red");
    } else if (checkForDiagonal7(slots)) {
        myAudio.play();
        audio.pause();
        setTimeout(function () {
            $("#info").css("visibility", "visible");
        }, 1500);
        $(".end").animate({ height: "800px" });
        $(".end").css("visibility", "visible");
        $(".hole").css("border-color", "red");
    }
    switchPlayer();
});

function checkForVictory(slots) {
    var count = 0;
    for (var i = 0; i < slots.length; i++) {
        if (slots.eq(i).hasClass(currentPlayer)) {
            count++;
            if (count === 4) {
                if (slots.eq(i - 6).hasClass(currentPlayer)) {
                    slots.eq(i - 6).addClass("winner");
                    slots.eq(i - 7).addClass("winner");
                    slots.eq(i - 8).addClass("winner");
                    slots.eq(i - 9).addClass("winner");
                    return true;
                } else {
                    slots.eq(i - 3).addClass("winner");
                    slots.eq(i - 7).addClass("winner");
                    slots.eq(i - 8).addClass("winner");
                    slots.eq(i - 9).addClass("winner");
                    return true;
                }
            }
        } else {
            count = 0;
        }
    }
}


function checkForDiagonal5(slots) {
    for (var x = 2; x <= slots.length - 3; x++) {
            if (
                slots.eq(x).hasClass(currentPlayer) &&
                slots.eq(x + 5).hasClass(currentPlayer) &&
                slots.eq(x + 10).hasClass(currentPlayer) &&
                slots.eq(x + 15).hasClass(currentPlayer) 
               

            ) {
                slots.eq(x).addClass("winner");
                slots.eq(x + 5).addClass("winner");
                slots.eq(x + 10).addClass("winner");
                slots.eq(x + 15).addClass("winner");
                return true;
            }
        
        
    }
}

function checkForDiagonal7(slots) {
    for (var y = slots.length; y >=21; y--) {
       if (
            slots.eq(y).hasClass(currentPlayer) &&
            slots.eq(y - 7).hasClass(currentPlayer) &&
            slots.eq(y - 14).hasClass(currentPlayer) &&
            slots.eq(y - 21).hasClass(currentPlayer)
        ) {
            slots.eq(y).addClass("winner");
            slots.eq(y - 7).addClass("winner");
            slots.eq(y - 14).addClass("winner");
            slots.eq(y - 21).addClass("winner");
            return true;
        }
    }
}

// !!!!!!!!!!!!TICKER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!~~~~~~~~~~~~~~

(function () {
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
})();
