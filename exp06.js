let newheading = document.getElementById("heading");
let paragraph = document.getElementById("paragraph");
let input = document.getElementById("userInput");

let fontSize = 16;
document.getElementById("changeTextBtn").addEventListener("click", function() {
    if (input.value !== "") {
        heading.innerHTML = input.value;
    }
});
document.getElementById("changeBackground").onclick = function() {
    document.body.style.backgroundColor = "red";
};
document.getElementById("changefontSizebtn").addEventListener = ("click", function() {
    fontSize += 2;
    document.body.style.fontSize = fontSize + "px";
});
document.getElementById("togglbtn").addEventListener("click", function() {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {

    }

});