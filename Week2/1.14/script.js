// Write a function that expects a string representing a selector to be passed as a parameter.
//  The function should find all the elements in the document that match the selector and change
//   their style so that the text they contain is italic, underlined, and bold.

function styleChange(string) {
    var changeIt = document.querySelectorAll(string);
        for (var x = 0; x < changeIt.length; x++) {
            changeIt[x].style.fontStyle = "italic";
            changeIt[x].style.textDecoration = "underline";
            changeIt[x].style.fontWeight = "Bold";
        }
}

console.log(styleChange(".scottish-text"));

// Write a function that expects a string representing a class name to be passed as a parameter.
//  The function should return an array containing all the elements in the document that have the class
//   that was passed in.

function showElements(string) {
    var all = document.getElementsByClassName(string);
}

console.log(showElements("scottish-text"));

// Write a function that inserts an element into the body of the currently loaded page.
//  That element should have fixed position, z-index of 2147483647, left of 20px, top of 100px,
//   font-size of 200px, and contain the text 'AWESOME'.

function elementInsert(string) {
    var newElement = document.createElement(string);
    var newTextNode = document.createTextNode("AWESOME");
    newElement.style.position = "fixed";
    newElement.style.zIndex = "86753478";
    newElement.style.left = "20px";
    newElement.style.top = "100px";
    newElement.style.fontSize = "200px";
    newElement.appendChild(newTextNode);
    document.body.append(newElement);
}

console.log(elementInsert("div"));
