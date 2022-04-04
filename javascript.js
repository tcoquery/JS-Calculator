const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const equal = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");
const decimal = document.querySelector(".decimal");

let firstNumber = "";
let secondNumber = "";
let operatortest = "";
let result = "";
let displayContent = "";
let finalResult = "";

function operate(operator, num1, num2) {
    if (operator == "+") {
        return num1 + num2;        
    } else if (operator == "-") {
        return num1 - num2;        
    } else if (operator == "*") {
        return num1 * num2;        
    } else if (operator == "/") {
        if (num2 == 0) {
            return alert("nice try"); 
        } else {
        return num1 / num2;
        }
    }
}

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

decimal.addEventListener("click", function() {
    if (display.textContent.includes(".")) {
        return;
    } else {
        getFirstNumber(decimal.value);
    }
    
});