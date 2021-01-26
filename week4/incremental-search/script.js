(function (countries) {
    var resultsContainer = $(".results");
    var searchField = $("input");

    searchField.on("input", function () {
        var userInput = searchField.val().toLowerCase();

        var matchResults = [];
        for (var i = 0; i < countries.length; i++) {
            if (countries[i].toLowerCase().indexOf(userInput) === 0) {
                matchResults.push(countries[i]);
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
    });

    resultsContainer.on("mouseover", "p", function () {
        if ($(this).html() != "Type a proper Country Name Dude!") {
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
        var p = $("p");

        if (e.keyCode == 38) {
            console.log("Up");
        } else if (e.keyCode == 40) {
            console.log("Down");
        } else if (e.keyCode == 13) {
            console.log("Enter");
        }
    });

    searchField.on("focus", function () {
        resultsContainer.css({ visibility: "visible" });
    });

    searchField.on("blur", function () {
        resultsContainer.css({ visibility: "hidden" });
    });

})([
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte D'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic People's Republic of Korea",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People’s Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of Korea",
    "Republic of Moldova",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United Republic of Tanzania",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
]);
