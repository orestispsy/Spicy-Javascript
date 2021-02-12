const { twitterKey, twitterSecret } = require("./secrets");

const https = require("https");
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");
const { url } = require("inspector");

module.exports.getToken = function getToken(callbackToken) {
    console.log("running getToken");
    // this function get what's called the bearerToken from twitter
    // we will work this out in class
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
            // something went wrong with our request,
            // we are passing the status error code to our callbackToken function
            callbackToken(response.statusCode);
            return;
        }
        // if we reach this point of the code we have a valid response
        let body = "";
        response.on("data", (chunk) => {
            body += chunk;
        });

        response.on("end", () => {
            // console.log("body:", body);
            let parsedBody = JSON.parse(body);
            // console.log("parsedBody:", parsedBody.access_token);
            // all went good we are passing null, and the actual token to our callbackToken
            // function
            callbackToken(null, parsedBody.access_token);
        });
    }

    const req = https.request(options, reqCallback);
    req.end("grant_type=client_credentials");
};

module.exports.getTweets = function getTweets(bearerToken, callbackTweets) {
    console.log("running getTweets with the token:", bearerToken);
    const options = {
        host: "api.twitter.com",
        path:
            "/1.1/statuses/user_timeline.json?screen_name=1000_mods&tweet_mode=extended",
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
            // console.log("body:", body);
            let parsedBody = JSON.parse(body);

            // console.log("parsed TWEETS:", parsedBody);
            // all went good we are passing null, and the actual token to our callbackToken
            // function
            callbackTweets(null, parsedBody);
        });
    }
    const req = https.request(options, reqCallback);
    req.end();
};

module.exports.filterTweets = function filterTweets(tweets) {
    const filteredTweets = [];
    for (let i = 0; i < tweets.length; i++) {
        if (tweets[i].entities.urls.length == 1) {
            console.log(tweets[i].entities.urls[0]);
            let finalTweet = {
                text: tweets[i].full_text,
                link: tweets[i].entities.urls[0].url,
            };
            filteredTweets.push(finalTweet);
        }
    }
    return filteredTweets;
};
