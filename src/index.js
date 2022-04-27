let plus = document.querySelector('.add');
let minus = document.querySelector('.subtract');
let divide = document.querySelector('.divide');
let times = document.querySelector('.multiply');
let equals = document.querySelector('.equals');
let numberBtns = document.querySelectorAll('.number');
let prevOperation = document.querySelector('.prev-operation');
let currentOperation = document.querySelector('.current-operation');
let clearBtn = document.querySelector('.clear');
let deleteBtn = document.querySelector('.delete');

let operator = "";
let num1 = [];
let num2 = [];

clearBtn.addEventListener('click', function() {
    currentOperation.textContent = "";
    prevOperation.textContent = "";
    num1 = [];
    num2 = [];
    return num1, num2
})

deleteBtn.addEventListener('click', function() {
    num1.pop();
    currentOperation.textContent = num1.join("");
    return num1;
})

currentOperation.textContent = num1.join("");
numberBtns.forEach(n => n.addEventListener('click', function () {
    if (operator === "") {
        num1.push(n.textContent);
        currentOperation.textContent = num1.join("");
    } else {
        num2.push(n.textContent);
        currentOperation.textContent = num2.join("");
    }
}))

// Create 4 operator functions:
    // Add
function Add() {
    operator = "+";
    prevOperation.textContent = `${num1.join("")} ${operator}`;
    return operator;
}
    // Subtract
function Subtract() {
    operator = "-";
    prevOperation.textContent = `${num1.join("")} ${operator}`;
    return operator;
}
    // Divide
function Divide() {
    operator = "/";
    prevOperation.textContent = `${num1.join("")} ${operator}`;
    return operator;
}
    // Multiply
function Multiply() {
    operator = "*";
    prevOperation.textContent = `${num1.join("")} X `;
    return operator;
}

plus.addEventListener('click', Add);
minus.addEventListener('click', Subtract);
divide.addEventListener('click', Divide);
times.addEventListener('click', Multiply);

// Create "operate" function w/ 3 operators: 2 numbers and 1 operator
function operate(num1, num2, operator) {
    if (operator === "/") {
        prevOperation.textContent = Number(num1.join("")) / Number(num2.join(""));
    }
    return num1 + operator + num2;
}

// Create function that makes buttons display a value in the display area