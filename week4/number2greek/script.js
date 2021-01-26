var greekWay = [
    "Ένα",
    "Δύο",
    "Τρία",
    "Τέσσερα",
    "Πέντε",
    "Έξι",
    "Εφτά",
    "Οχτώ",
    "Εννέα",
    "Δέκα",
];

function askForNumber() {
    var num = prompt("Please enter a number between 1 and 10");
    if (num >= 1 && num <= 10 && num == parseInt(num)) {
        return num;
    }
    throw new Error("Bad number");
}

function translateNumberToGreek() {
    try {
        var num = askForNumber();
        alert(greekWay[num - 1]);
        translateNumberToGreek();
    } catch {
        alert("It's all greek to you, heh ?!");
        translateNumberToGreek();
    }
}

translateNumberToGreek();
