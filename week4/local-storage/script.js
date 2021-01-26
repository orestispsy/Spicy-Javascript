var input = $("textarea");

try {
    localStorage.setItem("message", JSON.stringify(input.val()));
} catch (error) {
    console.log(error);
}
