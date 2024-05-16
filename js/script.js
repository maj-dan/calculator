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

const clearBtn = document.querySelector("#clr");
clearBtn.addEventListener("click", clearCalculator);

function updateDisplayValue(event) {
    const numberClicked = event.target.textContent;
    if(!displayValue) displayValue = "";
    displayValue += numberClicked;
    updateDisplay(displayValue);
}

function updateOperator(event) {
    //clicked in other operator after inputing a second number, calculate
    if (!!operator && secondNumber === null && !!displayValue) {
        showResult();
    //clicked in other operator ane didn't inputed an second number, change operator
    } else if (!!operator && secondNumber === null && !displayValue) {
        return operator = event.target.id;
    //Store number if it's the first time, skip when clicked at = before
    } else if (!!displayValue && !firstNumber) {
        firstNumber = parseFloat(displayValue);
    }
    operator = !!firstNumber ? event.target.id : null;
    displayValue = null;
    secondNumber = null;
}

function showResult() {
    if (!firstNumber && !!displayValue) return;
    secondNumber = !secondNumber ? parseFloat(displayValue) : secondNumber;
    firstNumber = operate(operator, firstNumber, secondNumber);
    displayValue = null;
    updateDisplay(firstNumber);
}

function clearCalculator() {
    firstNumber = null;
    secondNumber = null;
    operator = null;
    displayValue = null;
    updateDisplay("");
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