const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const equal = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");
const decimal = document.querySelector(".decimal");
const backspace = document.querySelector(".backspace");

let firstNumber = "";
let displayedNumber = "";
let chosenOperator = "";
let result = "";
let displayContent = "";
let finalResult = "";

operators.forEach(operator =>{
    operator.addEventListener("click", function(){
        if (chosenOperator == ""  && firstNumber == "" ) {
            chosenOperator = operator.value;
            firstNumber = displayedNumber;
            displayedNumber = "" ;
            display.textContent += operator.value
        } else if (chosenOperator !== ""  && firstNumber !== "" ) {
            calculate();
            chosenOperator = operator.value
            firstNumber = result;
            displayedNumber = "" ;
            display.textContent += operator.value
        } 
    })
})

//firstNumber is used to store the first number of an operation while displayedNumber is the number displayed and the second number of an operation.
numbers.forEach(number =>{
    number.addEventListener("click", function(){
        if (chosenOperator !== ""  && displayedNumber == "") {
            display.textContent = "" ;
            getNumber(number.value);
        } else if (finalResult !== "") {
            clear();
            getNumber(number.value);
        } else {
            getNumber(number.value);
        }   
    })
})

function getNumber(num) {
    display.textContent += num;
    displayedNumber += num;
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
    operate(chosenOperator, Number(firstNumber), Number(displayedNumber));
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
        getNumber(decimal.value);
    }
});

clearButton.addEventListener("click", function(){
    clear();
});

backspace.addEventListener("click", () => {
    if(displayedNumber !== "") {
        displayedNumber = displayedNumber.slice(0, -1);
        display.textContent = displayedNumber;
    }
})

function clear() {
    firstNumber = "" ;
    displayedNumber= "" ;
    chosenOperator = "" ;
    result = "" ;
    finalResult = "";
    display.textContent = "" ;
}






