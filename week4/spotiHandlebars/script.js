(function () {
    ////////////// DO NOT TOUCH ///////////////
    Handlebars.templates = Handlebars.templates || {};

    var templates = document.querySelectorAll(
        'script[type="text/x-handlebars-template"]'
    );

    Array.prototype.slice.call(templates).forEach(function (script) {
        Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
    });
    ////////////// DO NOT TOUCH ///////////////

    var nextUrl;
    var resultsHTML;
    var userInput;
    var artistOrAlbum;
    var content ={};

    $(".submit-button").on("click", function () {
        userInput = $("input").val();
        artistOrAlbum = $("select").val();
        requestAjax("https://spicedify.herokuapp.com/spotify");
    });

    $("#next20").on("click", function () {
        requestAjax(nextUrl, true);
    });

    function generateHTML(apiItems) {
        
        for (var i = 0; i < apiItems.length; i++) {
            var defaultImage = "fire&water.jpg";
            if (apiItems[i].images.length > 0) {
                defaultImage = apiItems[i].images[0].url;
            }
            
          content = {
              found: [{ name: apiItems[i].name, image: defaultImage }],
          };   
             $(".results-container").html(
                 Handlebars.templates.spotify(content)
             ); 
        }
    } 

    function requestAjax(urlRequest, more20) {
        $.ajax({
            method: "GET",
            url: urlRequest,
            data: {
                query: userInput,
                type: artistOrAlbum,
            },
            success: function (apiResponse) {
                apiResponse = apiResponse.artists || apiResponse.albums;
                console.log("apiResponse: ", apiResponse);
                
                if (apiResponse.items.length == 0) {
                    $(".searchINFO").css("visibility", "visible");
                    $(".searchINFO").html(
                        "<div>" + "Sorry no results" + "</div>"
                    );
                } else {
                    $(".searchINFO").css("visibility", "visible");
                    $(".searchINFO").html(
                        "<div>" +
                            "WE've got " +
                            apiResponse.total +
                            " results for you !" +
                            "</div>"
                    );
                }

                if (more20) {
                    $(".results-container").append(
                        generateHTML(apiResponse.items)
                    );
                } else {
                    $(".results-container").html(
                        generateHTML(apiResponse.items)
                    );
                }

                nextUrl =
                    apiResponse.next &&
                    apiResponse.next.replace(
                        "api.spotify.com/v1/search",
                        "spicedify.herokuapp.com/spotify"
                    );

                if (location.search.indexOf("?scroll=infinite") > -1) {
                    if (apiResponse.next === null) {
                        return;
                    }
                    function check4Infinity() {
                        // console.log($(window).scrollTop());
                        // console.log($(window).height());
                        // console.log($(document).height());
                        if (
                            $(window).scrollTop() + $(window).height() >=
                            $(document).height() - 300
                        ) {
                            requestAjax(nextUrl, true);
                        } else {
                            setTimeout(check4Infinity, 1000);
                        }
                    }
                    check4Infinity();
                } else {
                    if (apiResponse.next !== null) {
                        $("#next20").css("visibility", "visible");
                    } else {
                        $("#next20").css("visibility", "hidden");
                    }
                }
            }
        });
    }
})();
