const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const equal = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");

let firstNumber = "";
let secondNumber = "";
let operatortest = "";
let result = "";
let displayContent = "";
let finalResult = "";

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        return alert("nice try"); 
    } else {
    return a / b;
    }
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

/* function getOperator(operatorValue) {
    operatortest = operatorValue;
    if (number !== "") {
        firstNumber = number;
        number = "";
        display.textContent = "";
    } else {return}
} */

operators.forEach(operator =>{
    operator.addEventListener("click", function(){
        if (operatortest == ""  && firstNumber == "" ) {
            operatortest = operator.value;
            firstNumber = secondNumber;
            secondNumber = "" ;
        } else if (operatortest !== ""  && firstNumber !== "" ) {
            calculate();
            operatortest = operator.value
            firstNumber = result;
            secondNumber = "" ;
        } 
    })
})


function getFirstNumber(a) {
    display.textContent += a;
    secondNumber += a;
}

function clear() {
    firstNumber = "" ;
    secondNumber= "" ;
    operatortest = "" ;
    result = "" ;
    finalResult = "";
    display.textContent = "" ;
}

numbers.forEach(number =>{
    number.addEventListener("click", function(){
        let numberValue = number.value
        if (operatortest !== ""  && secondNumber == "") {
            display.textContent = "" ;
            getFirstNumber(numberValue);
        } else if (finalResult !== "") {
            clear();
            getFirstNumber(numberValue);
        } else {
            getFirstNumber(numberValue);
        }   
    })
})


function calculate() {
    num1 = Number(firstNumber);
    num2 = Number(secondNumber);
    result = operate(operatortest, num1, num2);
    display.textContent = result;
}

equal.addEventListener("click", function(){
    calculate();
    finalResult = result;
});



clearButton.addEventListener("click", function(){
    clear();
});

