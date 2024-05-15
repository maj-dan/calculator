let firstNumber,
    secondNumber,
    operator,
    displayValue;

const numberBtns = document.querySelectorAll(".number");
numberBtns.forEach(btn => btn.addEventListener("click", updateDisplayValue));

const operatorBtns = document.querySelectorAll(".operator");
operatorBtns.forEach(btn => btn.addEventListener("click", updateOperator));

const equalBtn = document.querySelector("#eql");
equalBtn.addEventListener("click", showResult);


function updateDisplayValue(event) {
    const numberClicked = event.target.textContent;
    if(!displayValue) displayValue = "";
    displayValue += numberClicked;
    updateDisplay(displayValue);
}

function updateOperator(event) {
    if (!!operator && secondNumber === null) {
        showResult();
    } else {
        firstNumber = parseFloat(displayValue);
    }
    operator = event.target.id;
    displayValue = null;
    secondNumber = null;
}

function showResult() {
    secondNumber = !secondNumber ? parseFloat(displayValue) : secondNumber;
    firstNumber = operate(operator, firstNumber, secondNumber);
    displayValue = firstNumber;
    updateDisplay(firstNumber);
}


/*

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