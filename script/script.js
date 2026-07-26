// Basic math operations functions:
function adding(num1, num2) {
    num1 + num2;
}

function substracting(num1, num2) {
    num1 - num2;
}

function multiplying(num1, num2) {
    num1 * num2;
}

function dividing(num1, num2) {
    num1 / num2;
}


//Variables for each part of the basic math operation
let firstNumber = 0;
let operator;
let nextNumber = 0;


//New function 'operate':
function operate(operator, num1, num2) {
    adding(num1, num2);
}


//Variables for basic DOM nodes
const calculator = document.querySelector("#calculator");
const calcDisplay = document.querySelector("#calcDisplay");
const plusBtn = document.querySelector("#plusSign");
const minusBtn = document.querySelector("#minusSign");
const multiplicationBtn = document.querySelector("#multiplicationSign");
const divisionBtn = document.querySelector("#divisionSign");
const operatorBtns = document.querySelectorAll(".operator")
console.log(operatorBtns);
const equalBtn = document.querySelector("#equalSign");
const clearBtn = document.querySelector("#clearBtn");
const btnZero = document.querySelector("#btnZero");
const btnOne = document.querySelector("#btnOne");
const btnTwo = document.querySelector("#btnTwo");
const btnThree = document.querySelector("#btnThree");
const btnFour = document.querySelector("#btnFour");
const btnFive = document.querySelector("#btnFive");
const btnSix = document.querySelector("#btnSix");
const btnSeven = document.querySelector("#btnSeven");
const btnEight = document.querySelector("#btnEight");
const btnNine = document.querySelector("#btnNine");
const numericBtns = document.querySelectorAll(".numericBtn");
const arrOfNumBtns1 = Array.from(numericBtns);



//Functions that update number variables with btn pressin:
function changeNum1(evt) {
    switch (evt.target) {
        case btnZero:
            firstNumber = 0;
            calcDisplay.textContent = firstNumber;
            console.log(firstNumber)
            break;
        case btnOne:
            firstNumber = 1;
            calcDisplay.textContent = firstNumber;
            console.log(firstNumber)
            break;
        case btnTwo: 
            firstNumber = 2;
            calcDisplay.textContent = firstNumber;
            console.log(firstNumber)
            break;
        case btnThree:
            firstNumber = 3;
            calcDisplay.textContent = firstNumber;
            console.log(firstNumber)
            break;
        case btnFour:
            firstNumber = 4;
            calcDisplay.textContent = firstNumber;
            console.log(firstNumber)
            break;
        case btnFive:
            firstNumber = 5;
            calcDisplay.textContent = firstNumber;
            console.log(firstNumber)
            break;
        case btnSix:
            firstNumber = 6;
            calcDisplay.textContent = firstNumber;
            console.log(firstNumber)
            break;
        case btnSeven:
            firstNumber = 7;
            calcDisplay.textContent = firstNumber;
            console.log(firstNumber)
            break;
        case btnEight:
            firstNumber = 8;
            calcDisplay.textContent = firstNumber;
            console.log(firstNumber)
            break;
        case btnNine:
            firstNumber = 9;
            calcDisplay.textContent = firstNumber;
            console.log(firstNumber)
            break;
    }; 
}

function changeNum2(evt) {
    switch (evt.target) {
        case btnZero:
            nextNumber = 0;
            calcDisplay.textContent = nextNumber;
            console.log(nextNumber);
            break;
        case btnOne:
            nextNumber = 1;
            calcDisplay.textContent = nextNumber;
            console.log(nextNumber);
            break;
        case btnTwo: 
            nextNumber = 2;
            calcDisplay.textContent = nextNumber;
            console.log(nextNumber);
            break;
        case btnThree:
            nextNumber = 3;
            calcDisplay.textContent = nextNumber;
            console.log(nextNumber);
            break;
        case btnFour:
            nextNumber = 4;
            calcDisplay.textContent = nextNumber;
            console.log(nextNumber);
            break;
        case btnFive:
            nextNumber = 5;
            calcDisplay.textContent = nextNumber;
            console.log(nextNumber);
            break;
        case btnSix:
            nextNumber = 6;
            calcDisplay.textContent = nextNumber;
            console.log(nextNumber);
            break;
        case btnSeven:
            nextNumber = 7;
            calcDisplay.textContent = nextNumber;
            console.log(nextNumber);
            break;
        case btnEight:
            nextNumber = 8;
            calcDisplay.textContent = nextNumber;
            console.log(nextNumber);
            break;
        case btnNine:
            nextNumber = 9;
            calcDisplay.textContent = nextNumber;
            console.log(nextNumber);
            break;
    }; 
}

numericBtns.forEach((button) => {
    button.addEventListener("click", changeNum1);
    button.addEventListener("click", changeNum2);
});

function inputtingOperator(evt) {
     switch (evt.target) {
        case plusBtn:
            operator = '+';
            calcDisplay.textContent = operator;
            break;
        case minusBtn:
            operator = '-';
            calcDisplay.textContent = operator;
            break;
        case multiplicationBtn: 
            operator = 'x';
            calcDisplay.textContent = operator;
            break;
        case divisionBtn:
            operator = '/';
            calcDisplay.textContent = operator;
            break;
    }; 
}

operatorBtns.forEach((button) => {
    button.addEventListener("click", inputtingOperator);
});
