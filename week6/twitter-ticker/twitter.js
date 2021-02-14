const { twitterKey, twitterSecret } = require("./secrets");

const https = require("https");

module.exports.getToken = function getToken(callbackToken) {
    let credentials = `${twitterKey}:${twitterSecret}`;
    let encodedCredentials = Buffer.from(credentials).toString("base64");

    const options = {
        host: "api.twitter.com",
        path: "/oauth2/token",
        method: "POST",
        headers: {
            Authorization: `Basic ${encodedCredentials}`,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
    };
    function reqCallback(response) {
        if (response.statusCode != 200) {
            callbackToken(response.statusCode);
            return;
        }
        let body = "";
        response.on("data", (chunk) => {
            body += chunk;
        });

        response.on("end", () => {

            let parsedBody = JSON.parse(body);
            callbackToken(null, parsedBody.access_token);
        });
    }

    const req = https.request(options, reqCallback);
    req.end("grant_type=client_credentials");
};

module.exports.getTweets = function getTweets(bearerToken, tweetSelect, callbackTweets) {
    console.log("getTweets with token:", bearerToken);
    const options = {
        host: "api.twitter.com",
        path:
            "/1.1/statuses/user_timeline.json?screen_name=" +tweetSelect +"&tweet_mode=extended",
        method: "GET",
        headers: {
            Authorization: `Bearer ${bearerToken}`,
        },
    };
    function reqCallback(response) {
        if (response.statusCode != 200) {
            callbackTweets(response.statusCode);
            return;
        }
        let body = "";
        response.on("data", (chunk) => {
            body += chunk;
        });

        response.on("end", () => {
            let parsedBody = JSON.parse(body);
            callbackTweets(null, parsedBody);
        });
    }
    const req = https.request(options, reqCallback);
    req.end();
};

module.exports.filterTweets = function filterTweets(tweets) {
    const filteredTweets = [];

    for (let i = 0; i < tweets.length; i++) {
        if (typeof tweets[i].entities.urls[0] == "object") {
            console.log(tweets[i].entities.urls[0], tweets[i].full_text);
            let linkOfTweet = tweets[i].entities.urls[0].url;
            let fullText = tweets[i].full_text;
            let tweetTitle = fullText.replace(linkOfTweet, "");
            let image = `<img src="./tweet.jpg">`;
            let provider = `<span style="color:lime"> ${tweets[i].user.name}</span>
            <span style="color:red"> ➤ </span>`;
            let finalTweet = {
                text: `${image} ${provider} ${tweetTitle}`,
                link: tweets[i].entities.urls[0].url,
            };
            filteredTweets.push(finalTweet);
        }
    }
    return filteredTweets;
};
