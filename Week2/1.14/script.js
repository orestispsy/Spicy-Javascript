// Write a function that expects a string representing a selector to be passed as a parameter.
//  The function should find all the elements in the document that match the selector and change
//   their style so that the text they contain is italic, underlined, and bold.

function styleChange(string) {
    var changeIt = document.querySelectorAll(string);
    for (var x = 0; x < changeIt.length; x++) {
    changeIt[x].style.fontStyle = 'italic';
    changeIt[x].style.textDecoration = 'underline';
    changeIt[x].style.fontWeight = "Bold";
}
}

console.log(styleChange('.scottish-text'));

// Write a function that expects a string representing a class name to be passed as a parameter.
//  The function should return an array containing all the elements in the document that have the class
//   that was passed in.

function showElements(string) {
    var all = document.getElementsByClassName(string);
}

console.log(showElements('scottish-text'));