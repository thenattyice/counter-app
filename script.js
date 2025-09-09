console.log("Button script loaded")

// Init all of the buttons
const decrementButton = document.getElementById("decrementButton");
const resetButton = document.getElementById("resetButton");
const incrementButton = document.getElementById("incrementButton");

// Init the Number item
const number = document.getElementById("number");

let counterNumber = 0;

number.innerHTML = counterNumber;

// Listener to -1
decrementButton.addEventListener("click", () => {
    counterNumber--;
    number.innerHTML = counterNumber;
});

// Listener to reset to 0
resetButton.addEventListener("click", () => {
    counterNumber = 0;
    number.innerHTML = counterNumber;
});

// Listener to +1
incrementButton.addEventListener("click", () => {
    counterNumber++;
    number.innerHTML = counterNumber;
});