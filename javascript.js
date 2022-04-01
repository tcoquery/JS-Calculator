const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const display = document.querySelector(".display")

let firstNumber = "";
let operator = "";

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

function getOperator(operatorValue) {
    operator = operatorValue;
    console.log(operator);
}

function updateDisplay(number) {
    display.textContent += number;
    firstNumber = display.textContent;
}


numbers.forEach(number =>{
    number.addEventListener("click", function(){
        let numberValue = number.value;
        updateDisplay(numberValue);
    })
})

operators.forEach(operator =>{
    operator.addEventListener("click", function(){
        let operatorValue = operator.value;
        getOperator(operatorValue);
    })
})



