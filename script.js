let currentInput = "";

function updateDisplay() {
    document.getElementById("display").value = currentInput;
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function appendOperator(operator) {
    currentInput += operator;
    updateDisplay();
}

function clearDisplay() {
    currentInput = "";
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        currentInput = "Error";
        updateDisplay();
    }
}
