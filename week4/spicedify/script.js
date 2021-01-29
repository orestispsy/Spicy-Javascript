(function () {
    $(".submit-button").on("click", function () {
        var userInput = $("input").val();
        var artistOrAlbum = $("select").val();
        console.log("user data:", userInput, " - ", artistOrAlbum);

        var nextUrl;
        var resultsHTML;
        var resultsNewHTML;

        $.ajax({
            method: "GET",
            url: "https://spicedify.herokuapp.com/spotify",
            data: {
                query: userInput,
                type: artistOrAlbum,
            },
            success: function (response) {
                response = response.artists || response.albums;
                console.log("response: ", response);

                resultsNewHtml = "";
                for (var i = 0; i < response.items.length; i++) {
                    var defaultImage = "fire&water.jpg";
                    if (response.items[i].images.length > 0) {
                        defaultImage = response.items[i].images[0].url;
                    }

                    if (response.items.length == 0) {
                        console.log("eeeee");
                        resultsHtml +=
                            "<div class='results-container'> Oh No !</div>";
                    } else {
                        resultsHTML +=
                            "<div>" +
                            "<a href=" +
                            
                            response.items[i].external_urls.spotify +">" +
                                response.items[i].name + "</a>" +
                                "</div>" +
                                "<a href=" +
                                response.items[i].external_urls.spotify +
                                ">" +
                                '<img src="' +
                                defaultImage +
                                '" />' +
                                "</a>";
                    }
                }

                $(".results-container").html(resultsHTML);

                nextUrl =
                    response.next &&
                    response.next.replace(
                        "api.spotify.com/v1/search",
                        "spicedify.herokuapp.com/spotify"
                    );

                if (response.total > "20") {
                    $("#next20").css("visibility", "visible");
                }
            },
        });
        $("#next20").on("click", function () {
            $.ajax({
                method: "GET",
                url: nextUrl,
                data: {
                    query: userInput,
                    type: artistOrAlbum,
                },
                success: function (next20res) {
                    next20res = next20res.artists || next20res.albums;
                    console.log("next20res: ", next20res);

                    for (var i = 0; i < next20res.items.length; i++) {
                        var defaultImage = "fire&water.jpg";
                        if (next20res.items[i].images.length > 0) {
                            defaultImage = next20res.items[i].images[0].url;
                        }

                        resultsNewHTML +=
                            "<div>" +
                            next20res.items[i].name +
                            "</div>" +
                            "<a href=" +
                            next20res.href +
                            ">" +
                            '<img src="' +
                            defaultImage +
                            '" />' +
                            "</a>";

                        $(".results-container").html(
                            resultsHTML + resultsNewHTML
                        );

                        nextUrl =
                            next20res.next &&
                            next20res.next.replace(
                                "api.spotify.com/v1/search",
                                "spicedify.herokuapp.com/spotify"
                            );

                        if (next20res.next == null) {
                            $("#next20").css("visibility", "hidden");
                        }
                    }
                },
            });
        });
    });
})();
