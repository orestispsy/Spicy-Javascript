var move = false;

$(".slider").mousedown(function (e) {
    console.log("clicked");
    e.preventDefault();
    move = true;

    $(".container").mousemove(function (e) {
        if (move) {
            console.log(e.clientX);
            var x = e.clientX - $(".slider").outerWidth();
            $(".top").outerWidth(x + "px");
            $(".slider").css("left", x);
        }
    });
});

$(".container").mouseup(function () {
  $(".slider").off("mousmove")
  move = false;
});

