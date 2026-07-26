// Basic math operations functions:
function adding(num1, num2) {
    return (num1 + num2);
}

function substracting(num1, num2) {
    return num1 - num2;
}

function multiplying(num1, num2) {
    return num1 * num2;
}

function dividing(num1, num2) {
    if(num2 === 0) {return calcDisplay.textContent = 'DIVIDE BY 0 ERROR'};
    return Math.floor(Math.round(num1 / num2));
}


//Variables for each part of the basic math operation
let firstNumber = '';
let operator;
let nextNumber = '';
let storedValue = 0
let result = 0;


//New function 'operate':
function operate(evt, operator, num1, num2) {
    plusBtn.disabled = false;
    minusBtn.disabled = false;
    multiplicationBtn.disabled = false;
    divisionBtn.disabled = false;
    if(operator === undefined) {
        firstNumber = '';
        calcDisplay.textContent = "PRESSED '=' TOO SOON";
        plusBtn.disabled = true;
        minusBtn.disabled = true;
        multiplicationBtn.disabled = true;
        divisionBtn.disabled = true;
        btnZero.disabled = true;
        btnOne.disabled = true;
        btnTwo.disabled = true;
        btnThree.disabled = true;
        btnFour.disabled = true;
        btnFive.disabled = true;
        btnSix.disabled = true;
        btnSeven.disabled = true;
        btnEight.disabled = true;
        btnNine.disabled = true;
        flaotingPoint.disabled = true;
    };
    if(result === 0) {
    num1 = +storedValue;
    num2 = +nextNumber;
    switch(operator) {
        case '+':
        result = adding(num1, num2);
        calcDisplay.textContent = +result;
        storedValue = '';
        nextNumber = '';
        firstNumber = '';
        break;
        case '-':
        result = substracting(num1, num2);
        calcDisplay.textContent = +result;
        storedValue = '';
        nextNumber = '';
        firstNumber = '';
        break;
        case 'x':
        result = multiplying(num1, num2);
        calcDisplay.textContent = +result;
        storedValue = '';
        nextNumber = '';
        firstNumber = '';
        break;
        case '/':
        result = dividing(num1, num2);
        calcDisplay.textContent = +result;
        storedValue = '';
        nextNumber = '';
        firstNumber = '';
        break;
    };
} else if(result > 0) {
    num1 = +result;
    num2 = +nextNumber;
    switch(operator) {
        case '+':
        result = adding(num1, num2);
        calcDisplay.textContent = +result;
        storedValue = '';
        nextNumber = '';
        firstNumber = '';
        break;
        case '-':
        result = substracting(num1, num2);
        calcDisplay.textContent = +result;
        storedValue = '';
        nextNumber = '';
        firstNumber = '';
        break;
        case 'x':
        result = multiplying(num1, num2);
        calcDisplay.textContent = +result;
        storedValue = '';
        nextNumber = '';
        firstNumber = '';
        break;
        case '/':
        result = dividing(num1, num2);
        calcDisplay.textContent = +result;
        storedValue = '';
        nextNumber = '';
        firstNumber = '';
        break;
    };
}
}


//Variables for basic DOM nodes
const calculator = document.querySelector("#calculator");
const calcDisplay = document.querySelector("#calcDisplay");
const plusBtn = document.querySelector("#plusSign");
const minusBtn = document.querySelector("#minusSign");
const multiplicationBtn = document.querySelector("#multiplicationSign");
const divisionBtn = document.querySelector("#divisionSign");
const operatorBtns = document.querySelectorAll(".operator")
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
const flaotingPoint = document.querySelector("#floatingPoint");
const numericBtns = document.querySelectorAll(".numericBtn");
const allBtns = document.querySelectorAll("button");



//Functions that update number variables with btn pressin:
function changeNum1(evt) {
    switch (evt.target) {
        case btnZero:
            firstNumber += '0';
            calcDisplay.textContent += '0';
            break;
        case btnOne:
            firstNumber += '1';  
            calcDisplay.textContent += '1';
            break;
        case btnTwo: 
            firstNumber += '2';
            calcDisplay.textContent += '2';
            break;
        case btnThree:
            firstNumber += '3';
            calcDisplay.textContent += '3';
            break;
        case btnFour:
            firstNumber += '4';
            calcDisplay.textContent += '4';
            break;
        case btnFive:
            firstNumber += '5';
            calcDisplay.textContent += '5';
            break;
        case btnSix:
            firstNumber += '6';
            calcDisplay.textContent += '6';
            break;
        case btnSeven:
            firstNumber += '7';
            calcDisplay.textContent += '7';
            break;
        case btnEight:
            firstNumber += '8';
            calcDisplay.textContent += '8';
            break;
        case btnNine:
            firstNumber += '9';
            calcDisplay.textContent += '9';
            break;
        case flaotingPoint:
            firstNumber += '.';
            calcDisplay.textContent += '.';
            flaotingPoint.disabled = true;
    }; 
}

function changeNum2(evt) {
    switch (evt.target) {
        case btnZero:
            nextNumber += '0';
            break;
        case btnOne:
            nextNumber += '1';
            break;
        case btnTwo: 
            nextNumber += '2';
            break;
        case btnThree:
            nextNumber += '3';
            break;
        case btnFour:
            nextNumber += '4';
            break;
        case btnFive:
            nextNumber += '5';
            break;
        case btnSix:
            nextNumber += '6';
            break;
        case btnSeven:
            nextNumber += '7';
            break;
        case btnEight:
            nextNumber += '8';
            break;
        case btnNine:
            nextNumber += '9';
            break;
        case flaotingPoint:
            nextNumber += '.';
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
            calcDisplay.textContent += operator;
            storedValue = +firstNumber;
            nextNumber = 0;
            plusBtn.disabled = true;
            break;
        case minusBtn:
            operator = '-';
            calcDisplay.textContent += operator;
            storedValue = +firstNumber;
            nextNumber = 0;
            minusBtn.disabled = true;
            break;
        case multiplicationBtn: 
            operator = 'x';
            calcDisplay.textContent += operator;
            storedValue = +firstNumber;
            nextNumber = 0;
            multiplicationBtn.disabled = true;
            break;
        case divisionBtn:
            operator = '/';
            calcDisplay.textContent += operator;
            storedValue = +firstNumber;
            nextNumber = 0;
            divisionBtn.disabled = true;
            break;
     }
}

operatorBtns.forEach((button) => {
    button.addEventListener("click", inputtingOperator);
});

clearBtn.addEventListener('click', () => {
    calcDisplay.textContent = '';
    firstNumber = '';
    nextNumber = '';
    storedValue = ''; 
    result = 0;
    plusBtn.disabled = false;
    minusBtn.disabled = false;
    multiplicationBtn.disabled = false;
    divisionBtn.disabled = false;
    btnZero.disabled = false;
    btnOne.disabled = false;
    btnTwo.disabled = false;
    btnThree.disabled = false;
    btnFour.disabled = false;
    btnFive.disabled = false;
    btnSix.disabled = false;
    btnSeven.disabled = false;
    btnEight.disabled = false;
    btnNine.disabled = false;
    flaotingPoint.disabled = false;
});

equalBtn.addEventListener('click', evt => operate(evt, operator, storedValue, nextNumber))

allBtns.forEach((button) => {
    button.addEventListener('mousedown', pressingBtnEffect)
    button.addEventListener('mouseup', releasingBtnEffect)
});

function pressingBtnEffect(evt) {
    switch (evt.target) {
        case plusBtn:
            plusBtn.style.backgroundColor = "#dddddd"
            break;
        case minusBtn:
            minusBtn.style.backgroundColor = "#dddddd"
            break;
        case multiplicationBtn: 
            multiplicationBtn.style.backgroundColor = "#dddddd"
            break;
        case divisionBtn:
            divisionBtn.style.backgroundColor = "#dddddd"
            break;
     case btnZero:
            btnZero.style.backgroundColor = "#dddddd"        
            break;
        case btnOne:
            btnOne.style.backgroundColor = "#dddddd"
            break;
        case btnTwo: 
            btnTwo.style.backgroundColor = "#dddddd"
            break;
        case btnThree:
            btnThree.style.backgroundColor = "#dddddd"
            break;
        case btnFour:
            btnFour.style.backgroundColor = "#dddddd"
            break;
        case btnFive:
            btnFive.style.backgroundColor = "#dddddd"
            break;
        case btnSix:
            btnSix.style.backgroundColor = "#dddddd"
            break;
        case btnSeven:
            btnSeven.style.backgroundColor = "#dddddd"
            break;
        case btnEight:
            btnEight.style.backgroundColor = "#dddddd"
            break;
        case btnNine:
            btnNine.style.backgroundColor = "#dddddd"
            break;
        case clearBtn:
            clearBtn.style.backgroundColor = "#dddddd"
            break;
        case equalBtn:
            equalBtn.style.backgroundColor = "#dddddd"
            break;
    }
}

function releasingBtnEffect(evt) {
    switch (evt.target) {
        case plusBtn:
            plusBtn.style.backgroundColor = "#EFEFEF"
            break;
        case minusBtn:
            minusBtn.style.backgroundColor = "#EFEFEF"
            break;
        case multiplicationBtn: 
            multiplicationBtn.style.backgroundColor = "#EFEFEF"
            break;
        case divisionBtn:
            divisionBtn.style.backgroundColor = "#EFEFEF"
            break;
     case btnZero:
            btnZero.style.backgroundColor = "#EFEFEF"        
            break;
        case btnOne:
            btnOne.style.backgroundColor = "#EFEFEF"
            break;
        case btnTwo: 
            btnTwo.style.backgroundColor = "#EFEFEF"
            break;
        case btnThree:
            btnThree.style.backgroundColor = "#EFEFEF"
            break;
        case btnFour:
            btnFour.style.backgroundColor = "#EFEFEF"
            break;
        case btnFive:
            btnFive.style.backgroundColor = "#EFEFEF"
            break;
        case btnSix:
            btnSix.style.backgroundColor = "#EFEFEF"
            break;
        case btnSeven:
            btnSeven.style.backgroundColor = "#EFEFEF"
            break;
        case btnEight:
            btnEight.style.backgroundColor = "#EFEFEF"
            break;
        case btnNine:
            btnNine.style.backgroundColor = "#EFEFEF"
            break;
        case clearBtn:
            clearBtn.style.backgroundColor = "#EFEFEF"
            break;
        case equalBtn:
            equalBtn.style.backgroundColor = "#EFEFEF"
            break;
    }
}