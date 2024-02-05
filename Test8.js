const input = document.querySelector("input");
const header = document.querySelector("h1");

input.addEventListener("input", function(e) {
    e.preventDefault();

    header.innerText = input.value


});