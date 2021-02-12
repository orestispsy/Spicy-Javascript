const express = require("express");
const app = express();

const { getToken, getTweets, filterTweets } = require("./twitter");

app.use(express.static("./ticker"));


app.get("/data.json", (req, res) => {
    console.log("request for json has been made!");
   
    getToken((err, bearerToken) => {
        console.log("inside the callback of getToken in index.js");
        if (err) {
            console.log("ohooho sth went wrong in getToken:", err);
            res.sendStatus(500); // server error
        } else {
            console.log("we have a token yayyyy:", bearerToken);
            //2. make a request for tweets using the token
            getTweets(bearerToken, (err, tweets) => {
                //3. filter the tweets we got in step 2.
                const filteredTweets = filterTweets(tweets);
                //4. send back those filtered tweeets as json to the client side
                res.json(filteredTweets);
            });
        }
    });
});

let server = app.listen(8080, () =>
    console.log(`🟢 Listening ${server.address().port} ...`)
);
