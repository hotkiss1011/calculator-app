let plus = document.querySelector('.add');
let minus = document.querySelector('.subtract');
let divide = document.querySelector('.divide');
let times = document.querySelector('.multiply');
let numberBtns = document.querySelectorAll('.number');
let prevOperation = document.querySelector('.prev-operation');
let currentOperation = document.querySelector('.current-operation');
let clearBtn = document.querySelector('.clear');
let deleteBtn = document.querySelector('.delete');

let parameter = "";
let num1 = [];
let num2 = [];

clearBtn.addEventListener('click', function() {
    currentOperation.textContent = "";
    currentOperation.textContent = "";
    num1 = [];
    num2 = [];
})

deleteBtn.addEventListener('click', function() {
    num1.pop();
    currentOperation.textContent = num1.join("");
})

currentOperation.textContent = num1.join("");
numberBtns.forEach(n => n.addEventListener('click', function () {
    if (parameter === "") {
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
    parameter = "+";
    return parameter;
}
    // Subtract
function Subtract() {
    parameter = "-";
    return parameter;
}
    // Divide
function Divide() {
    parameter = "/";
    return parameter;
}
    // Multiply
function Multiply() {
    parameter = "*";
    return parameter;
}

plus.addEventListener('click', Add);
minus.addEventListener('click', Subtract);
divide.addEventListener('click', Divide);
times.addEventListener('click', Multiply);
// Create "operate" function w/ 3 parameters: 2 numbers and 1 operator
function operate(num1, num2, parameter) {
    num1 = num1.join("");
    num2 = num2.join("");
    return num1 + parameter + num2;
}

// Create function that makes buttons display a value in the display area