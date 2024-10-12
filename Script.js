// Clear the screen
function clearScreen() {
    document.getElementById("result").value = "";
}

// Delete the last character
function deleteLast() {
    let display = document.getElementById("result").value;
    document.getElementById("result").value = display.slice(0, -1);
}

// Append characters to the input field
function appendCharacter(character) {
    document.getElementById("result").value += character;
}

// Calculate the result
function calculate() {
    let expression = document.getElementById("result").value;
    try {
        document.getElementById("result").value = eval(expression);
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}
