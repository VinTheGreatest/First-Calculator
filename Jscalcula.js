let displayValue = "0";
let currentOperation = null;
let preValue = 0;
let shouldResetDisplay = false;

const updateDisplay = () => {
    const display = document.getElementById("result");
    display.textContent = displayValue;
}

const appendToDisplay = (digit) => {
    if (displayValue    === "0" || shouldResetDisplay) {
        displayValue = digit;
        shouldResetDisplay = false;
    } else {
        displayValue += digit;
    }
    updateDisplay();
}
const clearDisplay = () => {
    displayValue = "0";
    currentOperation = null;
    preValue = 0;
    shouldResetDisplay = false;
    updateDisplay();
}

const handleOperation = (operator) => {
    if (currentOperation !== null) {
        calculate();
    }
    currentOperation = operator;
    preValue = parseFloat(displayValue);
    shouldResetDisplay = true;
}

const calculate = () => {
    if (currentOperation === null) return;

    const currentValue = parseFloat(displayValue);
    let result = 0;

    switch (currentOperation) {
        case "+":
            result = preValue + currentValue;
            break;
        case "-":
            result = preValue - currentValue;
            break;
        case "*":
            result = preValue * currentValue;
            break;
        case "/":
            result = preValue / currentValue;
            if(currentValue === 0) {
                result = preValue / currentValue;
            }else {
                result = "Error";
            }
            break;
    }

    displayValue = result.toString();
    currentOperation = null;
    preValue = 0;
    shouldResetDisplay = true;
    updateDisplay();
}

const handleEquals = () => {
    if (currentOperation !== null) {
        calculate();}
    }