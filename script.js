// Dark/Light mode

const body = document.querySelector('body')
const toggleBtn = document.querySelector('#darkLightMode');
const lightBtn = toggleBtn.firstElementChild;
const darkBtn = toggleBtn.lastElementChild;

lightBtn.addEventListener('click', () => {
    body.classList.add("dark");
    lightBtn.classList.add("active");
    darkBtn.classList.remove("active");
})

darkBtn.addEventListener('click', () => {
    body.classList.remove('dark');
    darkBtn.classList.add('active');
    lightBtn.classList.remove('active');
})

// Display buttons
let firstNum;
let secondNum;
let operator;

const display = document.querySelector('#display');
const miniDisplay = document.querySelector('.miniDisplay');

const buttons = document.querySelectorAll('button');

function calculate() {
    switch(operator) {
        case '+': 
            return firstNum + secondNum;
        case '-': 
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
        case '%':
            return firstNum % secondNum;
    }
}

function handleOperators(btnText) {
    if(display.innerText == ''){
        return;
    }
    switch(btnText){
        case 'AC': 
            display.innerText = '';
            miniDisplay.innerText = '';
            break;
        case '+-':
            display.innerText *= -1;
            break; 
        case 'del':
            display.innerText = display.innerText.slice(0, display.innerText.length -1);
            break;
        case '.':
            if(!display.innerText.includes('.')){
                display.innerText += '.';
            }
            break;
        case '%':
            firstNum = parseInt(display.innerText);
            operator = '%';
            display.innerText += '%';
            miniDisplay.innerText = display.innerText;
            display.innerText = '';
            break;
        case '+':
            // Get the first number
            firstNum = parseInt(display.innerText);
            // Set the operator
            operator = '+';
            // Print '+' to the screen
            display.innerText += '+';
            // Move to mini display
            miniDisplay.innerText = display.innerText;
            // Clear the main display
            display.innerText = '';
            break;
        case '-':
            firstNum = parseInt(display.innerText);
            operator = '-';
            display.innerText += '-';
            miniDisplay.innerText = display.innerText;
            display.innerText = '';
            break;
        case 'x':
            firstNum = parseInt(display.innerText);
            operator = '*';
            display.innerText += 'x';
            miniDisplay.innerText = display.innerText;
            display.innerText = '';
            break;
        case '/':
            firstNum = parseInt(display.innerText);
            operator = '/';
            display.innerText += '/';
            miniDisplay.innerText = display.innerText;
            display.innerText = '';
            break;
        case '=':
            if(operator == undefined){
                return;
            }
            secondNum = parseInt(display.innerText);
            display.innerText += '=';
            miniDisplay.innerText += display.innerText;
            display.innerText = calculate();
            operator = undefined;
            firstNum = undefined;
            secondNum = undefined;
            break;
    }
}

function handleBtnClick(btnText) {
    if(isNaN(btnText)){
        handleOperators(btnText);
        return;
    }
    display.innerText += btnText;
}

buttons.forEach((btn) => btn.addEventListener('click', () => handleBtnClick(btn.innerText)))