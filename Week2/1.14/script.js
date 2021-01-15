function styleChange(string) {
    var changeIt = document.querySelectorAll(string);
    for (var x = 0; x < changeIt.length; x++) {
    changeIt[x].style.fontStyle = 'italic';
    changeIt[x].style.textDecoration = 'underline';
    changeIt[x].style.fontWeight = "Bold";
}
}

console.log(styleChange('.scottish-text'));