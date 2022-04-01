function add(a, b) {
    let c = a + b;
    return c;
}

function subtract(a, b) {
    let c = a - b;
    return c;
}

function multiply(a, b) {
    let c = a * b;
    return c;
}

function divide(a, b) {
    let c = a / b;
    return c;
}

function operate(operator, num1, num2) {
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract(num1, num2);
    } else if (operator == "*") {
        return multiply(num1, num2);
    } else if (operator == "/") {
        return divide(num1, num2);
    }
}

console.log(operate("/", 4, 5));