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
    if (!displayValue || parseFloat(displayValue) === 0 && 
        !(`${displayValue}`.includes("."))){ 
        displayValue = "";
    }
    if (`${displayValue}`.includes(".") && numberClicked === ".") return;
    if (numberClicked === "." && displayValue === "") displayValue = "0";
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
    //prevent storing operator without any number inputed, breaking the calculation
    operator = !!firstNumber ? event.target.id : null;
    displayValue = null;
    secondNumber = null;
}

function showResult() {
    //Don't proceed if = has been pressed before numbers were inputed
    if (!firstNumber || (!!firstNumber && !!operator && !secondNumber &&
    !displayValue)) return;
    secondNumber = !secondNumber ? parseFloat(displayValue) : secondNumber;
    //Show an "error message" if division by 0
    if (operator === "div" && secondNumber === 0) {
        updateDisplay("COME ON!");
        firstNumber = null;
        secondNumber = null;
        operator = null;
        displayValue = null;
        return;
    }
    firstNumber = parseFloat(operate(operator, firstNumber, secondNumber).toFixed(14));
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

function updateDisplay(value) {
    //so number will never overflow the display
    const integerFloatArray = `${value}`.split(".");
    let displayText;
    //change to make the display show more or less numbers
    const DISPLAY_LENGTH = 9;
    if (integerFloatArray[0].length > DISPLAY_LENGTH){
        displayText = "9".repeat(DISPLAY_LENGTH);
    } else if (integerFloatArray.length > 1){
        displayText = `${integerFloatArray[0]}.${integerFloatArray[1].slice(0,
                        (DISPLAY_LENGTH - (integerFloatArray[0].length + 1)))}`;
    } else {
        displayText = integerFloatArray[0];
    }
    const display = document.querySelector("#display");
    display.textContent = displayText;
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