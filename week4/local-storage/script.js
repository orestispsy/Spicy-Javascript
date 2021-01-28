var input = $("textarea");

input.on("input", function() {

try { 
    localStorage.setItem("message", input.val()); 
    
} catch (error) {
    console.log(error);
}
});

function previous() {
    try {
        input.val(localStorage.getItem("message"));
    } catch (error) {
        console.log(error);
    }
}

previous();