var overlay = document.getElementsByClassName("overlay");
var sidenav = document.getElementsByClassName("side-nav");
var burger = document.getElementById("hamburger")
var x = document.getElementById("x")



burger.addEventListener('click', function () {
sidenav[0].classList.add("showsidenav");
overlay[0].classList.add("showoverlay");
});

x.addEventListener("click", function () {
    sidenav[0].classList.remove("showsidenav");
    overlay[0].classList.remove("showoverlay");   
});

overlay[0].addEventListener("click", function () {
    sidenav[0].classList.remove("showsidenav");
    overlay[0].classList.remove("showoverlay");
});

function hideIt(){
    $("#info").css("visibility", "visible");
}

setTimeout(hideIt, 1000);

$(".xinfo").click(function() {
     $("#info").css("visibility", "hidden");
})


//i have just a light opacity no matter its value when clicking X.
