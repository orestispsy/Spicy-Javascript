(function () {
    var resultsContainer = $(".results");
    var searchField = $("input");

    searchField.on("input", function () {
        $.ajax({
            url: "https://spicedworld.herokuapp.com",
            data: { q: searchField.val(), },
            success: function (data) {
                var userInput = searchField.val().toLowerCase();

                var matchResults = [];
                  console.log(data.length);
              
                for (var i = 0; i < data.length; i++) {
                    if (data[i].toLowerCase().indexOf(userInput) === 0) {
                        matchResults.push(data[i]);
                      
                    }
                    if (matchResults.length >= 4) {
                        break;
                    }
                    
                }
                var htmlForCountries = "";
                for (var j = 0; j < matchResults.length; j++) {
                    htmlForCountries +=
                        "<p class='country'>" + matchResults[j] + "</p>";
                }

                console.log("htmlForCountries: ", htmlForCountries);

                if (userInput == "") {
                    resultsContainer.html("<p class='country'>" + "" + "</p>");
                } else if (htmlForCountries == "") {
                    resultsContainer.html(
                        "<p class='country'>Type a PROPER Country Name Dude!</p>"
                    );
                } else {
                    resultsContainer.html(htmlForCountries);
                }
            },
        });
    });

    resultsContainer.on("mouseover", "p", function () {
        if ($(this).html() != "Type a PROPER Country Name Dude!") {
            $("p").removeClass("highlight");
            $(this).addClass("highlight");
        }
    });

    resultsContainer.on("mousedown", "p", function () {
        if ($(this).html() != "Type a PROPER Country Name Dude!") {
            searchField.val($(this).html());
            resultsContainer.html("");
        }
    });

    $("html").on("keydown", function (e) {
        if (e.keyCode == 38) {
            if ($(".highlight").length == 0) {
                $(".results").last().addClass("highlight");
            } else {$(".highlight").next().addClass("highlight");
                    $(".highlight").prev().removeClass("highlight");
                }
            console.log("Up");
        } else if (e.keyCode == 40) {if ($(".highlight").length == 0) {
            $(".results").first().addClass("highlight");
        } else {
            $(".highlight").next().addClass("highlight");
            $(".highlight").prev().removeClass("highlight");
        }
            console.log("Down");
        } else if (e.keyCode == 13) {
            searchField.val($(".highlight").text());
            console.log("Enter");
        }
    });

    searchField.on("focus", function () {
        resultsContainer.css({ visibility: "visible" });
    });

    searchField.on("blur", function () {
        resultsContainer.css({ visibility: "hidden" });
    });
})();
