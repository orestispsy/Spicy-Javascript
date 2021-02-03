const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const chalk = require("chalk");

const story = {
    q:
        chalk.bgRed
            .yellow(`Hello dear gamer, welcome to the beginning of an era. This is indeed how everything started !
You are entering a realm where images have no meaning. Here you will find only words !!!
Do you want to begin ?`) + chalk.bgWhite.black(`|yes / no|`),
    answers: {
        yes: {
            q:
                chalk.bgGreen.black(`Great, let's begin !
Who is the Greatest Pirate of ALL times ?`) +
                chalk.bgWhite.black(
                    `|Guybrush Threepwood / Ghost Pirate LeChuck|`
                ),
            answers: {
                "Guybrush Threepwood": {
                    q:
                        chalk.bgGreen
                            .red(`You're the second biggest Monkey Island fan I've ever seen!
Well Done! Let's go deeper now...
Do you LOVE the smell of treasure in the morning ?`) +
                        chalk.bgWhite.black(`YES/no`),
                    answers: {
                        YES: {
                            q:
                                chalk.bgRed
                                    .yellow(`You are in the middle of the forest and suddenly a bloodthirsty Pirate
crosses your way challenging you on a swordfight. He starts insulting you saying " You fight like a dairy farmer ",
how would you respong?`) +
                                chalk.bgWhite.black(
                                    `How appropriate you fight like a cow! / I'm shaking, I'm  shaking`
                                ),
                            answers: {
                                "How appropriate you fight like a cow!": {
                                    q:
                                        chalk.bgRed
                                            .yellow(`You seem to be a REAL pirate! Let's try another one...
What IS the Secret of Monkey Island`) +
                                        chalk.bgWhite.black(
                                            `Can't tell, it's a secret / Grog`
                                        ),
                                    answers: {
                                        "Can't tell, it's a secret": chalk.red
                                            .bold(`At least you’ve learnt something from all of this.
What’s that??
Never pay more than 20 bucks for a game.`),
                                        Grog: chalk.bgYellow.red.bold("Arrrrr!!!")
                                    },
                                },
                                "I'm shaking, I'm shaking": chalk.bgYellow.red.bold(
                                    "Go learn how to fight and then come back."
                                ),
                            },
                        },
                        no: chalk.red.bold("YIKES ! ! !"),
                    },
                },

                "Ghost Pirate LeChuck": chalk.bgYellow.black(
                    "I am a rubber, you are a glue"
                ),
            },
        },
        no: chalk.bgYellow.red.bold(
            "LOOK BEHIND YOU, A THREE-HEADED MONKEY !!!"
        ),
    },
};

function askQuestion(storyObj) {
    rl.question(storyObj.q, (answer) => {
if (typeof storyObj.answers[answer] === "object") {
            askQuestion(storyObj.answers[answer]);
        } else if (typeof storyObj.answers[answer] === "string") {
            console.log(storyObj.answers[answer]);
            rl.close();}
            else {
                askQuestion(storyObj);
            }

    });
}

askQuestion(story);