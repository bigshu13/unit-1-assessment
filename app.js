let countSpan = document.getElementById("count");
let minusButton = document.getElementById("minus");
let plusButton = document.getElementById("plus");

plusButton.addEventListener("click")
minusButton.addEventListener("click")

let count = 0;

function incrementCount() {
    count++;
}

function decrementCount() {
    count--;
}
