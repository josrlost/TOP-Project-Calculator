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



//Functions that update number variables with btn pressin:
function changeNum(evt) {
    switch (evt.target) {
        case btnZero:
            console.log(firstNumber = 0);
            break;
        case btnOne:
            console.log(firstNumber = 1);
            break;
        case btnTwo: 
            console.log(firstNumber = 2);
            break;
        case btnThree:
            console.log(firstNumber = 3);
            break;
        case btnFour:
            console.log(firstNumber = 4);
            break;
        case btnFive:
            console.log(firstNumber = 5);
            break;
        case btnSix:
            console.log(firstNumber = 6);
            break;
        case btnSeven:
            console.log(firstNumber = 7);
            break;
        case btnEight:
            console.log(firstNumber = 8);
            break;
        case btnNine:
            console.log(firstNumber = 9);
            break;
    };
}
numericBtns.forEach((button) => {
    button.addEventListener("click", changeNum)
})