let newheading = document.getElementById("heading");

newheading.textContent = "DOM Manipulation in JavaScript";
newheading.style.color = "Red";
newheading.style.fontSize = "50px";

let paragraph = document.getElementById("paragraph");

paragraph.innerHTML = "<strong>This paragraph has been modified</strong>";
paragraph.style.color = "green";
paragraph.style.fontSize = "50px";
let button = document.getElementById("my button");
button.addEventListener