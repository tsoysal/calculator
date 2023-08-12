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

const display = document.querySelector('#display');
const miniDisplay = document.querySelector('.miniDisplay');

const buttons = document.querySelectorAll('button');

function handleBtnClick(btn) {
    display.innerText += btn.innerText;
}

buttons.forEach((btn) => btn.addEventListener('click', () => handleBtnClick(btn)))