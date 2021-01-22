var move = false;

$(".slider").mousedown(function (e) {
    console.log("clicked");
    e.stopPropagation();
    e.preventDefault();
    var x = e.pageX - this.offsetLeft;
    move = true;

    $(".container").mousemove(function (e) {
        if (move) {
            console.log(e.pageX);
            var x = e.pageX - this.offsetLeft;
            $(".top").outerWidth(x + "px");
            $(".slider").css("left", x);
        }
    });

    $(".container").mouseleave(function (e) {
        $("slider").css("left", 500 + "px");
        console.log("elaaa");
    });
});

$(".container").mouseup(function () {
    move = false;
    console.log("up");
});

$(".container").mouseleave(function (e) {
    console.log("hey");
});
