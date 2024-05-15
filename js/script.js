let firstNumber,
    secondNumber,
    operator,
    displayValue;

const numberBtns = document.querySelectorAll(".number");
numberBtns.forEach(btn => btn.addEventListener("click", updateDisplayValue));

function updateDisplayValue(event) {
    const numberClicked = event.target.textContent;
    if(!displayValue) displayValue = "";
    displayValue += numberClicked;
    updateDisplay(displayValue);
}


/*simple calculation:
    Input first number
    Click on operator
    Save first Number
    Input second number
    Save second Number
    Operate
*/

function updateDisplay(value) {
    const display = document.querySelector("#display");
    display.textContent = value;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case "add":
            return add(num1, num2);
        case "sub":
            return subtract(num1, num2);
        case "mul":
            return multiply(num1, num2);
        case "div":
            return divide(num1, num2);
    }
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}