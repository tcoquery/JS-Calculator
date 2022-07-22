const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const equal = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");
const decimal = document.querySelector(".decimal");

let firstNumber = "";
let secondNumber = "";
let chosenOperator = "";
let result = "";
let displayContent = "";
let finalResult = "";

operators.forEach(operator =>{
    operator.addEventListener("click", function(){
        if (chosenOperator == ""  && firstNumber == "" ) {
            chosenOperator = operator.value;
            firstNumber = secondNumber;
            secondNumber = "" ;
            display.textContent += operator.value
        } else if (chosenOperator !== ""  && firstNumber !== "" ) {
            calculate();
            chosenOperator = operator.value
            firstNumber = result;
            secondNumber = "" ;
            display.textContent += operator.value
        } 
    })
})

numbers.forEach(number =>{
    number.addEventListener("click", function(){
        let numberValue = number.value
        if (chosenOperator !== ""  && secondNumber == "") {
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

function getFirstNumber(num) {
    display.textContent += num;
    secondNumber += num;
}

function operate(operator, num1, num2) {
    switch(operator) {
        case "+":
            result = (num1 + num2).toString();   
            break;
        case "-":
            result = (num1 - num2).toString();   
            break;  
        case "*":
            result = (num1 * num2).toString();      
            break;  
        case "/":
            if (num2 == 0) {
                alert("Let's not break your computer"); 
                clear();
            } else {
                result = (num1 / num2).toString();   
            }   
            break;
        default:
            return 
    } 
}

function calculate() {
    num1 = Number(firstNumber);
    num2 = Number(secondNumber);
    operate(chosenOperator, num1, num2);
    display.textContent = result;
}

equal.addEventListener("click", function(){
    calculate();
    finalResult = result;
});

decimal.addEventListener("click", function() {
    if (display.textContent.includes(".")) {
        return;
    } else {
        getFirstNumber(decimal.value);
    }
});

clearButton.addEventListener("click", function(){
    clear();
});

function clear() {
    firstNumber = "" ;
    secondNumber= "" ;
    chosenOperator = "" ;
    result = "" ;
    finalResult = "";
    display.textContent = "" ;
}






