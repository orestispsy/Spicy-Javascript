var button = $(".button")
var textArea= $("textarea")


$(".button").click(function () {
    try {
        JSON.parse(textArea.val());
        alert("JSON CODE IS OK!");
} catch (e) {
    alert("JSON CODE IS WRONG");
}

});
