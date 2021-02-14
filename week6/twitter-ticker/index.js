const express = require("express");
const app = express();

const { getToken, getTweets, filterTweets } = require("./twitter");

const { promisify } = require("util");

const getTokenPromisified = promisify(getToken);
const getTweetsPromisified = promisify(getTweets);

app.use(express.static("./ticker"));


app.get("/data.json", (req, res) => {
    getTokenPromisified()
        .then((bearerToken) => {
            return (
                Promise.all([
                    getTweetsPromisified(bearerToken, "1000_mods"),
                    getTweetsPromisified(bearerToken, "nightstalker_gr"),
                    getTweetsPromisified(bearerToken, "ozricsofficial"),
                ])
                    .then((tweets) => {
                        const modsTweets = tweets[0];
                        const stalkerTweets = tweets[1];
                        const ozricTweets = tweets[2];
                        // const mergedTweets = modsTweets.concat(stalkerTweets, ozricTweets);
                        // merge with spread operator ES6 (...) =>
                        const mergedTweets = [
                            ...modsTweets,
                            ...stalkerTweets,
                            ...ozricTweets,
                        ];
                        // b - a: reverse chronological order
                        // a - b: chronological order
                        const sortedTweets = mergedTweets.sort((a, b) => {
                            return (
                                new Date(b.created_at) - new Date(a.created_at)
                            );
                        });
                        const filteredTweets = filterTweets(sortedTweets);
                        res.json(filteredTweets);
                    })
                    .catch((err) => {
                        console.log("Error in Promise.all: ", err.message);
                        res.sendStatus(500);
                    })
            );
        })
        .catch((err) => {
            console.log("Error in getToken: ", err.message);
            res.sendStatus(500);
        });
});

let server = app.listen(8080, () =>
    console.log(`🟢 Listening Port ${server.address().port} ... ~ Twitter-Ticker-Api`)
);
