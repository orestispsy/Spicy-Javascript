(function () {
    $.ajax({
        url: "/data.json",
        method: "GET",
        success: function (jsonCode) {
            var myHtml = "";
            for (var i = 0; i < jsonCode.length; i++) {
                var codelink = jsonCode[i].link;
                var text = jsonCode[i].text;
                myHtml += "<a href=" + codelink + ">" + text + "</a>";
            }

            var headlines = $("#headlines");
            headlines.html(myHtml);

            var left = headlines.offset().left;
            var links = $("a");
            var requestid;

            for (var j = 0; j < links.length; j++) {
                links.eq(j).on("mouseenter", function (event) {
                    event.target.style.color = "yellow";
                    cancelAnimationFrame(requestid);
                });

                links.eq(j).on("mouseleave", function (event) {
                    event.target.style.color = "white";
                    event.target.style.textDecoration = "none";
                    requestAnimationFrame(moveHeadlines);
                });
            }
            function moveHeadlines() {
                left--;
                links = headlines.find("a");
                if (left < -links.eq(0).outerWidth()) {
                    -links.eq(0).appendTo(headlines);
                    left += links.eq(0).outerWidth();
                }
                headlines.css({
                    left: left + "px",
                });
                requestid = requestAnimationFrame(moveHeadlines);
            }
            moveHeadlines();
        },
        error: function (err) {
            console.log("error in ajax:", err);
        },
    });
})();
